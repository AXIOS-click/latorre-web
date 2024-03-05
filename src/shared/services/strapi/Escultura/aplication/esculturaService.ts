import { BASE_API_PREFIX } from "@/shared/constants/api";
import { httpStrapiClient } from "../../configs/httpStrapiClient";

const BASE_ESCULTURA_URL = "/esculturas";
const QUERY_CON_IMAGENES = "?populate[Imagenes][fields][0]=url&populate[ImagenPrincipal][fields][0]=url";
const QUERY_ESCULTURAS_ORGANICAS = "&filters[categoria][$eq]=organica";
const QUERY_ESCULTURAS_FIGURATIVAS = "&filters[categoria][$eq]=figurativa";

export const getAllEsculturas = async () => {
    const { data: dataReceived } = await httpStrapiClient.get(`${BASE_API_PREFIX}${BASE_ESCULTURA_URL}`);
    return dataReceived;
};

export const getEsculturasOrganicas = async () => {
    const { data: dataReceived } = await httpStrapiClient.get(
        `${BASE_API_PREFIX}${BASE_ESCULTURA_URL}${QUERY_CON_IMAGENES}${QUERY_ESCULTURAS_ORGANICAS}`
    );
    return dataReceived;
};

export const getEsculturasFigurativas = async () => {
    const { data: dataReceived } = await httpStrapiClient.get(
        `${BASE_API_PREFIX}${BASE_ESCULTURA_URL}${QUERY_CON_IMAGENES}${QUERY_ESCULTURAS_FIGURATIVAS}`
    );
    return dataReceived;
};
