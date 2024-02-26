"use client";
import { ERoutes, IRoute } from "@/shared/constants/routes";
import { useRouteHelper } from "@/shared/hooks/useRouteHelper";
import { useTimer } from "@/shared/hooks/useTimer";
import Link from "next/link";
import { useState } from "react";
import { DropdownProyect } from "./DropdownProyect";

export const Navbar = () => {
    const [burgerMenu, setBurgerMenu] = useState(false);

    const { getRoutesExcluding, getCurrentRoute } = useRouteHelper();

    const navbarRoutes = getRoutesExcluding([ERoutes.HOME]);

    const { isInactive } = useTimer(8000);

    const validateHomeAndInactivity = (mapRoute: IRoute, index: number) => {
        const isHomeAndProyectos = getCurrentRoute()?.name === "Home" && mapRoute.name === "Proyectos";
        const liClassName = isHomeAndProyectos && isInactive ? "retroiluminado" : "";

        return (
            <li key={index}>
                {isHomeAndProyectos ? (
                    <DropdownProyect classNameProp={liClassName} />
                ) : (
                    <Link href={mapRoute.path} className="text-lg hover:text-xl transition-all">
                        {mapRoute.name}
                    </Link>
                )}
            </li>
        );
    };

    return (
        <nav className="fixed top-0 w-full text-white animate-navbar">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto py-6">
                <div className="flex justify-between w-full">
                    <div className={`${burgerMenu ? "scale-up-tr" : "hidden"} md:flex`}>
                        <ul className="flex flex-col md:flex-row gap-4 items-center">
                            {navbarRoutes.slice(0, 2).map((route, index) => validateHomeAndInactivity(route, index))}
                        </ul>
                    </div>
                    <div className={`${burgerMenu ? "scale-up-tr" : "hidden"} md:flex`}>
                        <ul className="flex flex-col md:flex-row gap-4 items-center">
                            {navbarRoutes.slice(-2).map((route, index) => validateHomeAndInactivity(route, index))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};
