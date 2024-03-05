"use client";
import { GridProducs } from "@/shared/components/Gridproducs";
import { useQueryHook } from "@/shared/hooks/useQueryHook";
import { MainScrollableContainer } from "@/shared/layout/MainScrollableContainer";
import { getEsculturasOrganicas } from "@/shared/services/strapi/Escultura/aplication/esculturaService";

export const ScultureOrganicsModule = () => {
    const { data } = useQueryHook({
        queryKey: ["getAllEsculturasOrganicas"],
        queryFn: () => getEsculturasOrganicas(),
    });

    const esculturas = data?.data;

    return (
        <main className="w-full h-full min-h-screen bg-latorre-bg">
            <MainScrollableContainer>
                <section className="py-32 text-white px-3 flex flex-col gap-4 relative">
                    <h1 className="text-2xl font-bold">Esculturas Organicas</h1>
                    {esculturas ? <GridProducs productos={esculturas} /> : <p>Cargando...</p>}
                </section>
            </MainScrollableContainer>
        </main>
    );
};
