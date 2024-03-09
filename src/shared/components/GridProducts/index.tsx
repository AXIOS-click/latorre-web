"use client";
import { IStrapiScultureAndPaints } from "@/shared/services/strapi/Escultura/domain/Escultura";
import Link from "next/link";
import { useState } from "react";

export const GridProducts = ({ arrayProductos }: { arrayProductos: IStrapiScultureAndPaints[] }) => {
    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {arrayProductos.map(({ attributes }, index) => {
                const { ImagenPrincipal } = attributes;
                return (
                    <Link href={attributes.slug} key={index}>
                        <ImageWhitTitle
                            imagen={ImagenPrincipal?.data?.attributes.url}
                            titulo={attributes.Titulo}
                        />
                    </Link>
                );
            })}
        </div>
    );
};

const ImageWhitTitle = ({ imagen, titulo }: { imagen: string; titulo: string }) => {
    const [viewTitle, setViewTitle] = useState(false);
    return (
        <div
            className="w-full h-full relative"
            onMouseEnter={() => setViewTitle(true)}
            onMouseLeave={() => setViewTitle(false)}
        >
            <div className="w-full h-96 inline-block overflow-hidden">
                <img
                    src={imagen}
                    className="w-full h-full transition-transform duration-500 hover:scale-110"
                    alt="imagen de escultura"
                />
            </div>
            <div
                className={`absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-4 opacity-0 transition-opacity duration-300 ${viewTitle ? "opacity-100" : "opacity-0"}`}
            >
                {titulo}
            </div>
        </div>
    );
};
