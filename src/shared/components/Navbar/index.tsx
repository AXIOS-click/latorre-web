"use client";

import { ERoutes, IRoute } from "@/shared/constants/routes";
import { useRouteHelper } from "@/shared/hooks/useRouteHelper";
import { useTimer } from "@/shared/hooks/useTimer";
import Link from "next/link";
import { DropdownDesktop, DropdownResponsive } from "./Dropdown";
import { useEffect, useState } from "react";

export const Navbar = () => {
    const { getRoutesExcluding, getCurrentRoute } = useRouteHelper();
    const navbarRoutes = getRoutesExcluding([ERoutes.HOME]);
    const { isInactive } = useTimer(8000);
    const rutasConSubrutas = navbarRoutes.filter(ruta => ruta.subRoutes !== undefined && ruta.subRoutes.length > 0);

    const [header, setHeader] = useState(false);

    const scrollHeader = () => {
        const mainSection = document.querySelector(".header_blur");
        if (mainSection && mainSection.scrollTop >= 20) {
            setHeader(true);
        } else {
            setHeader(false);
        }
    };

    useEffect(() => {
        const mainSection = document.querySelector(".header_blur");
        if (mainSection) {
            mainSection.addEventListener("scroll", scrollHeader);
            return () => mainSection.removeEventListener("scroll", scrollHeader);
        }
    }, []);

    const renderNavbarItem = (mapRoute: IRoute, index: number) => {
        const isProyects = mapRoute.name === "Proyects";
        const isHome = getCurrentRoute()?.name === "Home";
        const liClassName = isHome && isInactive ? "retroiluminado" : "";

        return (
            <li key={index}>
                {isProyects ? (
                    <DropdownDesktop estilo={liClassName} subrutas={rutasConSubrutas} />
                ) : (
                    <Link href={mapRoute.path} className="text-2xl hover:text-3xl transition-all font-medium">
                        {mapRoute.name}
                    </Link>
                )}
            </li>
        );
    };

    return (
        <nav
            className={`fixed top-0 w-full text-white  ${getCurrentRoute()?.name === "Home" ? "animate-navbar" : ""} z-50 ${header ? "bg-latorre-bg" : ""}`}
        >
            {/* Navegacion responsive */}
            <div className="md:hidden">
                <DropdownResponsive routes={navbarRoutes} />
            </div>

            {/* Navegacion Desktop */}
            <div className="xl:max-w-screen-xl md:px-20 mx-auto hidden md:block">
                <div className="flex justify-between py-3 uppercase">
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
