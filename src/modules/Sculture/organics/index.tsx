"use client";
import { GridProducts } from "@/shared/components/GridProducts";
import { useQueryHook } from "@/shared/hooks/useQueryHook";
import { MainScrollableContainer } from "@/shared/layout/MainScrollableContainer";
import { getEsculturasOrganicas } from "@/shared/services/strapi/Escultura/aplication/esculturaService";
import { transformarRespuesta } from "@/shared/services/strapi/Escultura/domain/Escultura";

export const ScultureOrganicsModule = () => {
    const { data } = useQueryHook({
        queryKey: ["getAllEsculturasOrganicas"],
        queryFn: () => getEsculturasOrganicas(),
    });

    const response = data?.data || [];

    const esculturas = Array.isArray(response) ? transformarRespuesta(response) : [];

    return (
        <main className="w-full h-full min-h-screen">
            <MainScrollableContainer>
                <section className="py-32 text-white flex flex-col gap-4 relative px-3 sm:px-4 md:px-12 lg:px-24 xl:px-32 2xl:px-44">
                    <h1 className="text-2xl font-bold">Esculturas Orgánicas</h1>
                    {esculturas.length > 0 ? <GridProducts arrayProductos={esculturas} /> : <p>Cargando...</p>}
                </section>
            </MainScrollableContainer>
        </main>
    );
};
