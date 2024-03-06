"use client";

import { ERoutes, IRoute } from "@/shared/constants/routes";
import { useRouteHelper } from "@/shared/hooks/useRouteHelper";
import { useTimer } from "@/shared/hooks/useTimer";
import Link from "next/link";
import { DropdownDesktop, DropdownResponsive } from "./Dropdown";
import { useEffect, useState } from "react";

export const Navbar = () => {
    const TIMER_INACTIVE = 8000;

    const { getRoutesExcluding, getCurrentRoute, routesWithSubRoutes } = useRouteHelper();
    const navbarRoutes = getRoutesExcluding([ERoutes.HOME]);
    const { isInactive } = useTimer(TIMER_INACTIVE);
    const rutasConSubrutas = routesWithSubRoutes(navbarRoutes);

    const [header, setHeader] = useState(false);

    useEffect(() => {
        const mainSection = document.querySelector(".header_blur");

        if (mainSection) {
            mainSection.addEventListener("scroll", scrollHeader);
            return () => mainSection.removeEventListener("scroll", scrollHeader);
        }
    }, []);

    const scrollHeader = () => {
        const mainSection = document.querySelector(".header_blur");

        if (mainSection && mainSection.scrollTop >= 20) {
            setHeader(true);
        } else {
            setHeader(false);
        }
    };

    const renderNavbarItem = (mapRoute: IRoute, index: number) => {
        const isProyects = mapRoute.name === "Proyects";
        const isHome = getCurrentRoute()?.name === "Home";
        const liClassName = isHome && isInactive ? "retroiluminado" : "";

        return (
            <li key={index}>
                {isProyects ? (
                    <DropdownDesktop estilo={liClassName} subrutas={rutasConSubrutas} />
                ) : (
                    <Link href={mapRoute.path} className="text-3xl hover:text-4xl transition-all font-medium">
                        {mapRoute.name}
                    </Link>
                )}
            </li>
        );
    };

    return (
        <nav
            className={`fixed top-0 w-full text-white mt-2 ${getCurrentRoute()?.name === "Home" ? "animate-navbar" : ""} z-50 ${header ? "bg-latorre-bg" : ""}`}
        >
            {/* Navegacion responsive */}
            <div className="md:hidden">
                <DropdownResponsive routes={navbarRoutes} />
            </div>
            {/* Navegacion Desktop */}

            <div className="md:px-20 xl:max-w-screen-xl mx-auto hidden pt-9 md:block">
                <div className="flex justify-between pt-9 uppercase">
                    <div className="flex scale-up-tr">
                        <ul className="flex gap-10 items-center">
                            {navbarRoutes
                                .slice(0, 2)
                                .reverse()
                                .map((route, index) => renderNavbarItem(route, index))}
                        </ul>
                    </div>
                    <div className="flex scale-up-tr">
                        <ul className="flex gap-10 items-center">
                            {navbarRoutes
                                .slice(-2)
                                .reverse()
                                .map((route, index) => renderNavbarItem(route, index))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};
