"use client";
import { useRouteHelper } from "@/shared/hooks/useRouteHelper";
import Link from "next/link";

export const PaintsModule = () => {
    const { getOneRoute } = useRouteHelper();

    const route = getOneRoute("Pinturas");
    const subRoutes = route?.subRoutes;

    return (
        <div className="w-full h-screen max-h-screen bg-latorre-bg">
            <section className="w-full h-full text-white flex justify-center items-center flex-col py-11 px-4 gap-4 md:py-32 absolute z-10">
                <h1 className="text-center text-3xl font-bold">Pinturas</h1>
                <div className="w-full h-full flex flex-col gap-4 sm:flex-row justify-center items-center">
                    {subRoutes?.map((subRoute, index) => (
                        <PinturasLink key={index} href={subRoute.path}>
                            {subRoute.name}
                        </PinturasLink>
                    ))}
                </div>
            </section>
        </div>
    );
};

const PinturasLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
        href={href}
        className="bg-blue-500 h-full w-full sm:max-w-96 rounded-lg sm:max-h-96 text-white flex justify-center items-center"
    >
        {children}
    </Link>
);

// FALTA HACER LA FUNCION DE ARRIBA REUTILIZABLE
