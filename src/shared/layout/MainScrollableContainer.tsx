"use client";
import { FC, useEffect } from "react";
import { useNavbarStore } from "../components/Navbar/store";

interface IMainScrollableContainer {
    children: React.ReactNode;
}

export const MainScrollableContainer: FC<IMainScrollableContainer> = ({ children }) => {
    const { setNavbarScrolled } = useNavbarStore();

    // Funcion para agregarle blur a la navbar
    const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
        if (event.currentTarget.scrollTop > 0) {
            setNavbarScrolled(true);
        } else {
            setNavbarScrolled(false);
        }
    };

    useEffect(() => {
        setNavbarScrolled(false);
    }, [setNavbarScrolled]);

    return (
        <main className="h-screen max-h-screen overflow-hidden">
            <div className="mx-auto h-full">
                <section className="block h-full">
                    <div
                        className="block h-full w-full overflow-y-auto z-40 relative text-white pt-28 md:pt-36 px-3 md:px-12 lg:px-24 xl:px-32 2xl:px-44"
                        onScroll={handleScroll}
                    >
                        {children}
                    </div>
                </section>
            </div>
        </main>
    );
};
