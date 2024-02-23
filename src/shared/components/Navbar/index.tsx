"use client";
import { BurgerMenu } from "@/assets/images/imageProvider";
import { ERoutes, IRoute } from "@/shared/constants/routes";
import { useRouteHelper } from "@/shared/shared/useRouteHelper";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export const Navbar = () => {
    const [isInactive, setIsInactive] = useState(false);
    const [burgerMenu, setBurgerMenu] = useState(false);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const { getRoutesExcluding, getCurrentRoute } = useRouteHelper();

    const navbarRoutes = getRoutesExcluding([ERoutes.HOME]);

    const resetTimer = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(() => {
            setIsInactive(true);
        }, 8000);
    };

    useEffect(() => {
        resetTimer();

        const handleDocumentClick = () => {
            resetTimer();
        };

        document.addEventListener("click", handleDocumentClick);

        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
            document.removeEventListener("click", handleDocumentClick);
        };
    }, []);

    const validateHomeAndInactivity = (mapRoute: IRoute, index: number) => {
        const isHomeAndProyectos = getCurrentRoute()?.name === "Home" && mapRoute.name === "Proyectos";
        const liClassName = isHomeAndProyectos && isInactive ? "retroiluminado" : "";

        return (
            <li key={index} className={liClassName}>
                <Link href={mapRoute.path} className="text-lg hover:text-xl transition-all">
                    {mapRoute.name}
                </Link>
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
