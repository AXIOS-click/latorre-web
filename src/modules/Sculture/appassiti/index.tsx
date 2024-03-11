"use client";
import { GridProducts } from "@/shared/components/GridProducts";
import { useQueryHook } from "@/shared/hooks/useQueryHook";
import { MainScrollableContainer } from "@/shared/layout/MainScrollableContainer";
import { getEsculturas } from "@/shared/services/strapi/Escultura/aplication/esculturaService";
import { IStrapiScultureAndPaints } from "@/shared/services/strapi/Escultura/domain/Escultura";

export const ScultureAppassitiModule = () => {
    const { data } = useQueryHook<string[], IStrapiScultureAndPaints[]>({
        queryKey: ["getAllEsculturasFigurativas"],
        queryFn: () => getEsculturas("Appasiti"),
    });


    const response = data?.data || [];

    return (
        <MainScrollableContainer>
            <section className="py-32 text-white flex flex-col gap-4 relative px-3 sm:px-4 md:px-12 lg:px-24 xl:px-32 2xl:px-44">
                <h1 className="text-2xl font-bold">Esculturas Appassiti</h1>
                {response.length > 0 ? <GridProducts arrayProductos={response} /> : <p>Cargando...</p>}
            </section>
        </MainScrollableContainer>
    );
};
