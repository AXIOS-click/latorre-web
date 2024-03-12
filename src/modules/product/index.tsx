"use client";
import { useQueryHook } from "@/shared/hooks/useQueryHook";
import { MainScrollableContainer } from "@/shared/layout/MainScrollableContainer";
import { getEsculturaByID } from "@/shared/services/strapi/Escultura/aplication/esculturaService";
import { IStrapiScultureAndPaints } from "@/shared/services/strapi/Escultura/domain/Escultura";
import { useParams } from "next/navigation";
import { ImagesGaleryComponent } from "./components/ImgGalery";
import { DescriptionProduct } from "./components/Description";
import { LoadingSpinner } from "@/shared/components/Loading";

export const ProductModule = () => {
    const { productID } = useParams<{ productID: string }>();
    const { data } = useQueryHook<string[], IStrapiScultureAndPaints>({
        queryKey: ["getEsculturaByID", productID],
        queryFn: () => getEsculturaByID(productID),
    });

    const { attributes } = data?.data || {};
    const arrImg = attributes?.Imagenes.data || [];

    return (
        <MainScrollableContainer>
            {attributes ? (
                <section className="h-fit flex flex-col gap-4 text-white sm:flex-row ">
                    <h3 className="text-center text-2xl sm:hidden">{attributes.Titulo}</h3>
                    <ImagesGaleryComponent images={arrImg} />
                    <DescriptionProduct description={attributes} />
                </section>
            ) : (
                <LoadingSpinner />
            )}
        </MainScrollableContainer>
    );
};
