import { BASE_API_PREFIX } from "@/shared/constants/api";
import { httpStrapiClient } from "../../configs/httpStrapiClient";

const BASE_ESCULTURA_URL = "/esculturas";
const QUERY_CON_IMAGENES = "?populate[Imagenes][fields][0]=url&populate[ImagenPrincipal][fields][0]=url";
const QUERY_ESCULTURAS_ORGANICAS = "&filters[categoria][$eq]=organica";
const QUERY_ESCULTURAS_FIGURATIVAS = "&filters[categoria][$eq]=figurativa";

const BASE_CONSTRUCED_ESCULTURAS_URL = `${BASE_API_PREFIX}${BASE_ESCULTURA_URL}`;

export const getAllEsculturas = async () => {
    const { data: dataReceived } = await httpStrapiClient.get(BASE_CONSTRUCED_ESCULTURAS_URL);
    return dataReceived;
};

export const getEsculturas = async (type: "Organicas" | "Figurativas") => {
    const query = {
        Organicas: QUERY_ESCULTURAS_ORGANICAS,
        Figurativas: QUERY_ESCULTURAS_FIGURATIVAS,
    };
    const { data: dataReceived } = await httpStrapiClient.get(
        `${BASE_API_PREFIX}${BASE_ESCULTURA_URL}${QUERY_CON_IMAGENES}${query[type]}`
    );
    return dataReceived;
};