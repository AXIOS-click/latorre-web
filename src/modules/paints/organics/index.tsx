"use client";
import { useQueryHook } from "@/shared/hooks/useQueryHook";
import { MainScrollableContainer } from "@/shared/layout/MainScrollableContainer";
import { IStrapiScultureAndPaints } from "@/shared/services/strapi/Escultura/domain/Escultura";
import { getPinturas } from "@/shared/services/strapi/Pintura/aplication/pinturaService";

export const PaintOrganicsModule = () => {
    const { data } = useQueryHook<string[], IStrapiScultureAndPaints[]>({
        queryKey: ["getAllPinturasOrganicas"],
        queryFn: () => getPinturas("Organico"),
    });

    return (
        <MainScrollableContainer>
            <section className="flex flex-col gap-4 relative">
                <h1 className="text-2xl font-bold">Pinturas Organicas</h1>
            </section>
        </MainScrollableContainer>
    );
};
