"use client";

import { ERoutes, IRoute } from "@/shared/constants/routes";
import { useRouteHelper } from "@/shared/hooks/useRouteHelper";
import { DropdownMenu } from "@radix-ui/themes";
import Link from "next/link";
import { useState } from "react";
import { Dropdown } from "./Dropdown";
import { BurgerMenu } from "@/assets/images/imageProvider";

export const Navbar = () => {
    const { getRoutesExcluding, getCurrentRoute } = useRouteHelper();
    const navbarRoutes = getRoutesExcluding([ERoutes.HOME]);

    const [burgerOpen, setBurgerOpen] = useState(false);

    const renderNavbarItem = (mapRoute: IRoute, index: number) => {
        const isHomeAndProyectos = getCurrentRoute()?.name === "Home" && mapRoute.name === "Proyects";


        return (
            <li key={index}>
                {isHomeAndProyectos ? (
                    <Dropdown />
                ) : (
                    <Link href={mapRoute.path} className="text-3xl hover:text-3xl transition-all font-medium">
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
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger className="absolute right-6 top-2">
                        <img src={BurgerMenu.src} className="w-10" onClick={() => setBurgerOpen(!burgerOpen)} />
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content className="w-full">
                        {navbarRoutes.slice(1).map((route, index) => (
                            <DropdownMenu.Item key={`${index + 1}`}>
                                <Link href={route.path}>{route.name}</Link>
                            </DropdownMenu.Item>
                        ))}
                    </DropdownMenu.Content>
                </DropdownMenu.Root>
            </div>

            {/* Navegacion Desktop */}
            <div className="max-w-screen-xl mx-auto py-6 hidden md:block">
                <div className="flex justify-between pt-11 uppercase">
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
