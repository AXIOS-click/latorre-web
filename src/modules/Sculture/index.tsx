"use client";

import { Navbar } from "@/shared/components/Navbar";
import Link from "next/link";
import { ROUTES } from "@/shared/constants/routes";
import { useQueryHook } from "@/shared/hooks/useQueryHook";
import { getAllEsculturas } from "@/shared/services/strapi/Escultura/aplication/esculturaService";
import { IEscultura } from "@/shared/services/strapi/Escultura/domain/Escultura";

interface Escultura {
    id: number;
    attributes: IEscultura;
}

export const ScultureModule = () => {
    const { data } = useQueryHook({
        queryKey: ["getAllEsculturas"],
        queryFn: getAllEsculturas,
    });
    const response: Escultura[] | undefined = data?.data as Escultura[] | undefined;

    function filterEsculturasByCategoria(categoria: string) {
        return response?.filter((escultura: any) => escultura.attributes.Categoria === categoria);
    }

    const esculturasOrganicas = filterEsculturasByCategoria("Organica");
    const esculturasFigurativas = filterEsculturasByCategoria("Figurativa");


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
            <section className="w-full h-full text-white flex justify-center items-center flex-col py-11 px-4 gap-4 md:py-32 absolute">
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
