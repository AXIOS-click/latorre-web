"use client";

import { ERoutes, IRoute } from "@/shared/constants/routes";
import { useRouteHelper } from "@/shared/hooks/useRouteHelper";
import { useTimer } from "@/shared/hooks/useTimer";
import Link from "next/link";
import { DropdownDesktop, DropdownResponsive } from "./Dropdown";
import { useNavbarStore } from "./store";
export const Navbar = () => {
    const TIMER_INACTIVE = 8000;

    const { getRoutesExcluding, getCurrentRoute, routesWithSubRoutes } = useRouteHelper();
    const navbarRoutes = getRoutesExcluding([ERoutes.HOME]);
    const { isInactive } = useTimer(TIMER_INACTIVE);
    const rutasConSubrutas = routesWithSubRoutes(navbarRoutes);
    const { navbarScrolled } = useNavbarStore();

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
            className={`fixed top-0 w-full text-white  ${getCurrentRoute()?.name === "Home" ? "animate-navbar" : ""} z-50 ${navbarScrolled ? "bg-latorre-bg" : "mt-2"} transform duration-700`}
        >
            {/* Navegacion responsive */}
            <div className="md:hidden">
                <DropdownResponsive routes={navbarRoutes} />
            </div>
            {/* Navegacion Desktop */}

            <div className={`md:px-20 xl:max-w-screen-xl mx-auto hidden md:block ${navbarScrolled ? "" : "pt-9"}`}>
                <div className={`flex justify-between  uppercase ${navbarScrolled ? "py-4" : "pt-9"}`}>
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
