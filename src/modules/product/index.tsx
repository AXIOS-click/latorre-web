"use client";
import { useQueryHook } from "@/shared/hooks/useQueryHook";
import { getEsculturaByID } from "@/shared/services/strapi/Escultura/aplication/esculturaService";
import { IStrapiScultureAndPaints } from "@/shared/services/strapi/Escultura/domain/Escultura";
import { useParams } from "next/navigation";

export const ProductModule = () => {
    const { productID } = useParams<{ productID: string }>();
    const { data } = useQueryHook<string[], IStrapiScultureAndPaints>({
        queryKey: ["getEsculturaByID", productID],
        queryFn: () => getEsculturaByID(productID),
    });

    const response = data?.data || [];


    return <div>producto</div>;
};
