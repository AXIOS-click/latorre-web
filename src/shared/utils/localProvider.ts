export const localProvider = () => {
    return {
        STRAPI_BACKEND_URL: process.env.NEXT_PUBLIC_STRAPI_BACKEND_URL,
    };
};