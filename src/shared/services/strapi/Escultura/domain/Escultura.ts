export interface IEscultura {
    Titulo: string;
    Serie: string;
    Materiales: string;
    Medidas: string;
    Anio: string; // Cambiado a string
    ExplicacionSimple: string | null;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    slug: string;
    ImagenPrincipal: string;
    Imagenes: string[];
}

interface ApiResponse {
    attributes: {
        Titulo: string;
        Serie: string;
        Materiales: string;
        Medidas: string;
        Anio: string;
        ExplicacionSimple: string | null;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        slug: string;
        ImagenPrincipal: {
            data: {
                attributes: {
                    url: string;
                };
            };
        };
        Imagenes: {
            data: {
                attributes: {
                    url: string;
                };
            }[];
        };
    };
}

export function transformarRespuesta(respuesta: ApiResponse[]): IEscultura[] {
    return respuesta.map(item => ({
        Titulo: item.attributes.Titulo,
        Serie: item.attributes.Serie,
        Materiales: item.attributes.Materiales,
        Medidas: item.attributes.Medidas,
        Anio: item.attributes.Anio,
        ExplicacionSimple: item.attributes.ExplicacionSimple,
        createdAt: new Date(item.attributes.createdAt),
        updatedAt: new Date(item.attributes.updatedAt),
        publishedAt: new Date(item.attributes.publishedAt),
        slug: item.attributes.slug,
        ImagenPrincipal:
            process.env.NEXT_PUBLIC_STRAPI_BACKEND_URL + item.attributes.ImagenPrincipal.data.attributes.url,
        Imagenes: item.attributes.Imagenes.data.map(
            imagen => process.env.NEXT_PUBLIC_STRAPI_BACKEND_URL + imagen.attributes.url
        ),
    }));
}