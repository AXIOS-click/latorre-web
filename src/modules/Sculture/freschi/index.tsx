"use client";
import { GridProducts } from "@/shared/components/GridProducts";
import { useQueryHook } from "@/shared/hooks/useQueryHook";
import { MainScrollableContainer } from "@/shared/layout/MainScrollableContainer";
import { getEsculturas } from "@/shared/services/strapi/Escultura/aplication/esculturaService";
import { IStrapiScultureAndPaints } from "@/shared/services/strapi/Escultura/domain/Escultura";

export const ScultureFreschiModule = () => {
    const { data } = useQueryHook<string[], IStrapiScultureAndPaints[]>({
        queryKey: ["getAllEsculturasOrganicas"],
        queryFn: () => getEsculturas("Freschi"),
    });

    const response = data?.data || [];

    return (
        <MainScrollableContainer>
            <section className="flex flex-col gap-4 relative">
                <h1 className="text-2xl font-bold">Esculturas Freschi</h1>
                {response.length > 0 ? <GridProducts arrayProductos={response} /> : <p>Cargando...</p>}
            </section>
        </MainScrollableContainer>
    );
};
