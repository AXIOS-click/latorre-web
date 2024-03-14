"use client";
import { GridProducts } from "@/shared/components/GridProducts";
import { LoadingSpinner } from "@/shared/components/Loading";
import { useQueryHook } from "@/shared/hooks/useQueryHook";
import { MainScrollableContainer } from "@/shared/layout/MainScrollableContainer";
import { getEsculturas } from "@/shared/services/strapi/Escultura/aplication/esculturaService";
import { IStrapiScultureAndPaints } from "@/shared/services/strapi/Escultura/domain/Escultura";

export const ScultureAppassitiModule = () => {
    const { data } = useQueryHook<string[], IStrapiScultureAndPaints[]>({
        queryKey: ["getAllEsculturasAppassiti"],
        queryFn: () => getEsculturas("Appasiti"),
    });

    const response = data?.data || [];

    return (
        <MainScrollableContainer>
            {response.length > 0 ? (
                <section className="flex flex-col gap-4 relative">
                    <h1 className="text-2xl font-bold">Esculturas Appassiti</h1>
                    <GridProducts arrayProductos={response} />
                </section>
            ) : (
                <LoadingSpinner />
            )}
        </MainScrollableContainer>
    );
};
