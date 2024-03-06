"use client";
import { GridProducts } from "@/shared/components/GridProducts";
import { useQueryHook } from "@/shared/hooks/useQueryHook";
import { MainScrollableContainer } from "@/shared/layout/MainScrollableContainer";
import { getEsculturas } from "@/shared/services/strapi/Escultura/aplication/esculturaService";
import { IStrapiScultureAndPaints } from "@/shared/services/strapi/Escultura/domain/Escultura";

export const ScultureFigurativesModule = () => {
    const { data } = useQueryHook<string[], IStrapiScultureAndPaints[]>({
        queryKey: ["getAllEsculturasFigurativas"],
        queryFn: () => getEsculturas("Figurativas"),
    });

    const response = data?.data || [];

    return (
        <main className="w-full h-full min-h-screen">
            <MainScrollableContainer>
                <section className="py-32 text-white px-3 flex flex-col gap-4 relative">
                    <h1 className="text-2xl font-bold">Esculturas Orgánicas</h1>
                    {response.length > 0 ? (
                        <GridProducts arrayProductos={response} />
                    ) : (
                        <p>Cargando...</p>
                    )}
                </section>
            </MainScrollableContainer>
        </main>
    );
};
