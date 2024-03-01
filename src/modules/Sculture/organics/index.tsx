"use client";
import { GridProducs } from "@/shared/components/Gridproducs";
import { Navbar } from "@/shared/components/Navbar";
import { useQueryHook } from "@/shared/hooks/useQueryHook";
import { getEsculturasOrganicas } from "@/shared/services/strapi/Escultura/aplication/esculturaService";

export const ScultureOrganicsModule = () => {
    const { data } = useQueryHook({
        queryKey: ["getAllEsculturasOrganicas"],
        queryFn: () => getEsculturasOrganicas(),
    });

    const esculturas = data?.data;

    return (
        <main className="w-full h-full min-h-screen bg-latorre-bg">
            <Navbar />
            <section className="py-32 text-white px-3 flex flex-col gap-4 sm:px-10 lg:px-28 relative">
                <h1 className="text-2xl font-bold">Esculturas Organicas</h1>
                {esculturas ? <GridProducs productos={esculturas} /> : <p>Cargando...</p>}
            </section>
        </main>
    );
};
