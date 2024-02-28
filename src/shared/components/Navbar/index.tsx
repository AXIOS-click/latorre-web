"use client";
import { ERoutes, IRoute } from "@/shared/constants/routes";
import { useRouteHelper } from "@/shared/hooks/useRouteHelper";
import { useTimer } from "@/shared/hooks/useTimer";
import { Button, DropdownMenu } from "@radix-ui/themes";
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
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                            <span className="text-2xl hover:text-3xl transition-all">Proyectos</span>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content>
                            <DropdownMenu.Item>
                                <Link href={"/esculturas"}>Esculturas</Link>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item>
                                <Link href={"/pinturas"}>Pinturas</Link>
                            </DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>
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
