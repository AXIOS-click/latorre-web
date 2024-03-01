"use client";

import { ERoutes, IRoute } from "@/shared/constants/routes";
import { useRouteHelper } from "@/shared/hooks/useRouteHelper";
import { useTimer } from "@/shared/hooks/useTimer";
import Link from "next/link";
import { DropdownDesktop, DropdownResponsive } from "./Dropdown";

export const Navbar = () => {
    const { getRoutesExcluding, getCurrentRoute } = useRouteHelper();
    const navbarRoutes = getRoutesExcluding([ERoutes.HOME]);
    const { isInactive } = useTimer(8000);

    const rutasConSubrutas = navbarRoutes.filter(ruta => ruta.subRoutes !== undefined && ruta.subRoutes.length > 0);


    const renderNavbarItem = (mapRoute: IRoute, index: number) => {
        const isHomeAndProyectos = getCurrentRoute()?.name === "Home" && mapRoute.name === "Proyectos";
        const liClassName = isHomeAndProyectos && isInactive ? "retroiluminado" : "";

        return (
            <li key={index}>
                {isHomeAndProyectos ? (
                    <DropdownDesktop retroiluminado={liClassName} subrutas={rutasConSubrutas}/>
                ) : (
                    <Link href={mapRoute.path} className="text-2xl hover:text-3xl transition-all">
                        {mapRoute.name}
                    </Link>
                )}
            </li>
        );
    };

    return (
        <nav
            className={`fixed top-0 w-full text-white mt-2 ${getCurrentRoute()?.name === "Home" ? "animate-navbar" : ""}`}
        >
            {/* Navegacion responsive */}
            <div className="md:hidden">
                <DropdownResponsive routes={navbarRoutes} />
            </div>

            {/* Navegacion Desktop */}
            <div className="max-w-screen-xl mx-auto py-6 hidden md:block">
                <div className="flex justify-between">
                    <div className="flex scale-up-tr">
                        <ul className="flex gap-4 items-center">
                            {navbarRoutes
                                .slice(0, 2)
                                .reverse()
                                .map((route, index) => renderNavbarItem(route, index))}
                        </ul>
                    </div>
                    <div className="flex scale-up-tr">
                        <ul className="flex gap-4 items-center">
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
