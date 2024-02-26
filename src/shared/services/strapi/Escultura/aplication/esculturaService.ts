import { BASE_API_PREFIX } from "@/shared/constants/api";
import { httpStrapiClient } from "../../configs/httpStrapiClient";

const BASE_ESCULTURA_URL = "/esculturas";

export const getAllEsculturas = async () => {
    const { data: dataReceived } = await httpStrapiClient.get(`${BASE_API_PREFIX}${BASE_ESCULTURA_URL}`);
    return dataReceived;
};
