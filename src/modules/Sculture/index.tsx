import React from "react";
import { Navbar } from "@/shared/components/Navbar";
import Link from "next/link";
import { ROUTES } from "@/shared/constants/routes";

export const ScultureModule = () => {
    const subRoutesEsculturas = ROUTES.filter(
        route => route.name === "Esculturas" && route.subRoutes !== undefined
    ).flatMap(route =>
        route.subRoutes !== undefined
            ? route.subRoutes.map(subRoute => ({
                  name: subRoute.name,
                  path: subRoute.path,
              }))
            : []
    );

    return (
        <div className="w-full h-screen max-h-screen bg-latorre-bg">
            <Navbar />
            <section className="w-full h-full text-white flex justify-center items-center flex-col py-11 px-4 gap-4 md:py-32 absolute z-10">
                <h1 className="text-center text-3xl font-bold">Esculturas</h1>
                <div className="w-full h-full flex flex-col gap-4 sm:flex-row justify-center items-center">
                    {subRoutesEsculturas.map((subRoute, index) => (
                        <EsculturaLink key={index} href={subRoute.path}>
                            {subRoute.name}
                        </EsculturaLink>
                    ))}
                </div>
            </section>
        </div>
    );
};

const EsculturaLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
        href={href}
        className="bg-blue-500 h-full w-full sm:max-w-96 rounded-lg sm:max-h-96 text-white flex justify-center items-center"
    >
        {children}
    </Link>
);
