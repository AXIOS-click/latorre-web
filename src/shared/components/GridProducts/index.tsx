"use client";
import { IStrapiScultureAndPaints } from "@/shared/services/strapi/Escultura/domain/Escultura";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const GridProducts = ({ arrayProductos }: { arrayProductos: IStrapiScultureAndPaints[] }) => {
    const actualRoute = usePathname();
    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {arrayProductos.map((producto, index) => {
                const { id } = producto;
                const { attributes } = producto;
                const { ImagenPrincipal } = producto.attributes;
                return (
                    <Link href={actualRoute + "/" + id} key={index}>
                        <ImageWithTitle imagen={ImagenPrincipal?.data?.attributes.url} titulo={attributes.Titulo} />
                    </Link>
                );
            })}
        </div>
    );
};

const ImageWithTitle = ({ imagen, titulo }: { imagen: string; titulo: string }) => {
    const [viewTitle, setViewTitle] = useState(false);
    return (
        <div
            onMouseEnter={() => setViewTitle(true)}
            onMouseLeave={() => setViewTitle(false)}
            className="relative overflow-hidden"
        >
            <div
                style={{ backgroundImage: `url(${imagen})` }}
                className="h-[600px] w-full bg-cover bg-no-repeat bg-center hover:scale-110 transition-all duration-300 rounded-md"
            />
            <div
                className={`absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-4 opacity-0 transition-opacity duration-300 ${viewTitle ? "opacity-100" : "opacity-0"}`}
            >
                {titulo}
            </div>
        </div>
    );
};
