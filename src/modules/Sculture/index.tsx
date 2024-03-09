"use client";
import React from "react";
import Link from "next/link";
import { useRouteHelper } from "@/shared/hooks/useRouteHelper";

export const ScultureModule = () => {
    const { getOneRoute } = useRouteHelper();

    const route = getOneRoute("Esculturas");
    const subRoutes = route?.subRoutes;

    return (
        <div className="w-full h-screen max-h-screen bg-latorre-bg">
            <section className="w-full h-full text-white flex justify-center items-center flex-col py-11 px-4 gap-4 md:py-32 absolute z-10">
                <h1 className="text-center text-3xl font-bold">Esculturas</h1>
                <div className="w-full h-full flex flex-col gap-4 sm:flex-row justify-center items-center">
                    {subRoutes?.map((subRoute, index) => (
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
