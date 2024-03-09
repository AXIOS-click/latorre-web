import { BASE_API_PREFIX } from "@/shared/constants/api";
import { httpStrapiClient } from "../../configs/httpStrapiClient";

const BASE_ESCULTURA_URL = "/esculturas";
const QUERY_CON_IMAGENES = "?populate[Imagenes][fields][0]=url&populate[ImagenPrincipal][fields][0]=url";
const QUERY_ESCULTURAS_FRESCHI = "&filters[categoria][$eq]=freschi";
const QUERY_ESCULTURAS_APPASSITI = "&filters[categoria][$eq]=appassiti";

const BASE_CONSTRUCED_ESCULTURAS_URL = `${BASE_API_PREFIX}${BASE_ESCULTURA_URL}`;

export const getAllEsculturas = async () => {
    const { data: dataReceived } = await httpStrapiClient.get(BASE_CONSTRUCED_ESCULTURAS_URL);
    return dataReceived;
};

export const getEsculturas = async (type: "Freschi" | "Appasiti") => {
    const query = {
        Freschi: QUERY_ESCULTURAS_FRESCHI,
        Appasiti: QUERY_ESCULTURAS_APPASSITI,
    };
    const { data: dataReceived } = await httpStrapiClient.get(
        `${BASE_API_PREFIX}${BASE_ESCULTURA_URL}${QUERY_CON_IMAGENES}${query[type]}`
    );
    return dataReceived;
};