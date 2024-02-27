"use client";
import { ERoutes, IRoute } from "@/shared/constants/routes";
import { useRouteHelper } from "@/shared/hooks/useRouteHelper";
import { useTimer } from "@/shared/hooks/useTimer";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
    // Estado del menú desplegable
    const [burgerMenu, setBurgerMenu] = useState(false);

    // Obtener rutas de navegación y funciones de temporizador
    const { getRoutesExcluding, getCurrentRoute } = useRouteHelper();
    const navbarRoutes = getRoutesExcluding([ERoutes.HOME]);
    const { isInactive } = useTimer(8000);

    // Función para renderizar cada elemento de la barra de navegación
    const renderNavbarItem = (mapRoute: IRoute, index: number) => {
        const isHomeAndProyectos = getCurrentRoute()?.name === "Home" && mapRoute.name === "Proyectos";
        const liClassName = isHomeAndProyectos && isInactive ? "retroiluminado" : "";
        const [openDropdown, setOpenDropdown] = useState(false);

        const toggleDropdown = () => setOpenDropdown(!openDropdown);

        return (
            <li key={index}>
                {isHomeAndProyectos ? (
                    <div onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                        <button
                            data-fc-type="dropdown"
                            type="button"
                            data-fc-offset={0}
                            data-fc-trigger="hover"
                            className={`text-2xl hover:text-3xl transition-all ${liClassName}`}
                        >
                            Proyectos
                        </button>
                        <div className={` ${openDropdown ? "block" : "hidden"} z-50 p-2 absolute`}>
                            <Link
                                className="flex items-center py-2 px-3 rounded-md hover:bg-latorre-red"
                                href="/esculturas"
                            >
                                Esculturas
                            </Link>
                            <Link
                                className="flex items-center py-2 px-3 rounded-md hover:bg-latorre-red"
                                href="/pinturas"
                            >
                                Pinturas
                            </Link>
                        </div>
                    </div>
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
            className={`fixed top-0 w-full text-white mt-6 ${getCurrentRoute()?.name === "Home" ? "animate-navbar" : ""}`}
        >
            <div className="max-w-screen-xl mx-auto py-6">
                <div className="flex justify-between">
                    <div className={`flex ${burgerMenu ? "scale-up-tr" : "hidden"} md:flex`}>
                        <ul className="flex flex-col md:flex-row gap-4 items-center">
                            {navbarRoutes
                                .slice(0, 2)
                                .reverse()
                                .map((route, index) => renderNavbarItem(route, index))}
                        </ul>
                    </div>
                    <div className={`flex ${burgerMenu ? "scale-up-tr" : "hidden"} md:flex`}>
                        <ul className="flex flex-col md:flex-row gap-4 items-center">
                            {navbarRoutes.slice(-2).map((route, index) => renderNavbarItem(route, index))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};
