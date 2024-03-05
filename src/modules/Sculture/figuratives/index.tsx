"use client";
import { GridProducts } from "@/shared/components/GridProducts";
import { useQueryHook } from "@/shared/hooks/useQueryHook";
import { MainScrollableContainer } from "@/shared/layout/MainScrollableContainer";
import { getEsculturasFigurativas } from "@/shared/services/strapi/Escultura/aplication/esculturaService";
import { transformarRespuesta } from "@/shared/services/strapi/Escultura/domain/Escultura";

export const ScultureFigurativesModule = () => {
    const { data } = useQueryHook({
        queryKey: ["getAllEsculturasFigurativas"],
        queryFn: () => getEsculturasFigurativas(),
    });

    const response = data?.data || [];

    const esculturas = transformarRespuesta(response);

    return (
        <main className="w-full h-full min-h-screen">
            <MainScrollableContainer>
                <section className="py-32 text-white px-3 flex flex-col gap-4 relative">
                    <h1 className="text-2xl font-bold">Esculturas Orgánicas</h1>
                    {esculturas !== undefined && esculturas !== null && esculturas.length > 0 ? (
                        <GridProducts arrayProductos={esculturas} />
                    ) : (
                        <p>Cargando...</p>
                    )}
                </section>
            </MainScrollableContainer>
        </main>
    );
};
