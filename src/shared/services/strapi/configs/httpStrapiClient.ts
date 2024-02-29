
import { localProvider } from "@/shared/utils/localProvider";
import axios from "axios";

const { STRAPI_BACKEND_URL } = localProvider();

const httpStrapiClient = axios.create({
    baseURL: STRAPI_BACKEND_URL,
});

httpStrapiClient.interceptors.request.use(
    config => {
        const token = process.env.API_STRAPI_TOKEN;
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export { httpStrapiClient };
