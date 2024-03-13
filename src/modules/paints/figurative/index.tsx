"use client";
import { useQueryHook } from "@/shared/hooks/useQueryHook";
import { MainScrollableContainer } from "@/shared/layout/MainScrollableContainer";
import { IStrapiScultureAndPaints } from "@/shared/services/strapi/Escultura/domain/Escultura";
import { getPinturas } from "@/shared/services/strapi/Pintura/aplication/pinturaService";

export const PaintFigurativeModule = () => {
    const { data } = useQueryHook<string[], IStrapiScultureAndPaints[]>({
        queryKey: ["getAllPinturasFigurativas"],
        queryFn: () => getPinturas("Figurativo"),
    });

    return (
        <MainScrollableContainer>
            <section className="flex flex-col gap-4 relative">
                <h1 className="text-2xl font-bold">Pinturas Figurativas</h1>
            </section>
        </MainScrollableContainer>
    );
};
