"use client";
import { BurgerMenu } from "@/assets/images/imageProvider";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export const Navbar = () => {
    const [isInactive, setIsInactive] = useState(false);
    const [burgerMenu, setBurgerMenu] = useState(false);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const resetTimer = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(() => {
            setIsInactive(true);
        }, 5000);
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

    return (
        <nav className="border-gray-200 bg-latorre-red fixed top-0 w-full text-white animate-navbar">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a>Logo</a>
                <button
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden"
                    onClick={() => setBurgerMenu(!burgerMenu)}
                >
                    <Image src={BurgerMenu} alt="Menu hamburguesa responsive" height={40} width={40} color="white"/>
                </button>
                <div className={`${burgerMenu ? "scale-up-tr" : "hidden"} w-full md:block md:w-auto`}>
                    <ul className="flex flex-col w-full text-center gap-4 md:flex-row">
                        <li className={`${isInactive ? "retroiluminado" : ""}`}>
                            <Link href={"/proyectos"}>Proyectos</Link>
                        </li>
                        <li>
                            <Link href={"/biografia"}>Biografia</Link>
                        </li>
                        <li>
                            <Link href={"/redes"}>Redes</Link>
                        </li>
                        <li>
                            <Link href={"/contacto"}>Contacto</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
