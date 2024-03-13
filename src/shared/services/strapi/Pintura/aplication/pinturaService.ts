import { BASE_API_PREFIX } from "@/shared/constants/api";
import { httpStrapiClient } from "../../configs/httpStrapiClient";

const BASE_PINTURA_URL = "/pinturas";
const QUERY_CON_IMAGENES = "?populate[Imagenes][fields][0]=url&populate[ImagenPrincipal][fields][0]=url";
const QUERY_PINTURAS_ORGANICAS = "&filters[categoria][$eq]=organico";
const QUERY_PINTURAS_FIGURATIVAS = "&filters[categoria][$eq]=figurativo";

const BASE_CONSTRUCED_PINTURAS_URL = `${BASE_API_PREFIX}${BASE_PINTURA_URL}`;

export const getAllPinturas = async () => {
    const { data: dataReceived } = await httpStrapiClient.get(BASE_CONSTRUCED_PINTURAS_URL);
    return dataReceived;
};

export const getPinturas = async (type: "Organico" | "Figurativo") => {
    const query = {
        Organico: QUERY_PINTURAS_ORGANICAS,
        Figurativo: QUERY_PINTURAS_FIGURATIVAS,
    };
    const { data: dataReceived } = await httpStrapiClient.get(
        `${BASE_API_PREFIX}${BASE_PINTURA_URL}${QUERY_CON_IMAGENES}${query[type]}`
    );
    return dataReceived;
};

export const getPinturaByID = async (id: string) => {
    const { data: dataReceived } = await httpStrapiClient.get(
        `${BASE_CONSTRUCED_PINTURAS_URL}/${id}${QUERY_CON_IMAGENES}`
    );
    return dataReceived;
};
