export enum ERoutes {
    HOME = "/",
    PROYECTOS = "/proyectos",
    BIOGRAFIA = "/bio",
    REDES = "/redes",
    CONTACTO = "/contacto",
    /* Proyecto - Esculturas - subRutas */
    ESCULTURAS = "/proyectos/esculturas",
    ESCULTURAS_FRESCHI = "/proyectos/esculturas/freschi",
    ESCULTURAS_APPASITI = "/proyectos/esculturas/appassiti",
    ESCULTURAS_FRESCHI_PRODUCTO = "/proyectos/esculturas/freschi/:producto",
    ESCULTURAS_APPASITI_PRODUCTO = "/proyectos/esculturas/appassiti/:producto",
    /* Proyecto - Pinturas - subRutas */
    PINTURAS = "/proyectos/pinturas",
    PINTURAS_ORGANICAS = "/proyectos/pinturas/organicas",
    PINTURAS_FIGURATIVAS = "/proyectos/pinturas/figurativas",
}

export type TActualRoutes =
    | "Home"
    | "Proyects"
    | "Bio"
    | "Redes"
    | "Contacto"
    | "Esculturas"
    | "Freschi"
    | "Appassiti"
    | "Freschi Producto"
    | "Appassiti Producto"
    | "Pinturas"
    | "Organicas"
    | "Figurativas";

export interface IRoute {
    name: TActualRoutes;
    path: string;
    subRoutes?: IRoute[];
}

export const ROUTES: IRoute[] = [
    { name: "Home", path: ERoutes.HOME },
    { name: "Proyects", path: ERoutes.PROYECTOS },
    { name: "Bio", path: ERoutes.BIOGRAFIA },
    {
        name: "Esculturas",
        path: ERoutes.ESCULTURAS,
        subRoutes: [
            {
                name: "Freschi",
                path: ERoutes.ESCULTURAS_FRESCHI,
                subRoutes: [{ name: "Freschi Producto", path: ERoutes.ESCULTURAS_FRESCHI_PRODUCTO }],
            },
            {
                name: "Appassiti",
                path: ERoutes.ESCULTURAS_APPASITI,
                subRoutes: [{ name: "Appassiti Producto", path: ERoutes.ESCULTURAS_APPASITI_PRODUCTO }],
            },
        ] as IRoute[],
    },
    {
        name: "Pinturas",
        path: ERoutes.PINTURAS,
        subRoutes: [
            { name: "Organicas", path: ERoutes.PINTURAS_ORGANICAS },
            { name: "Figurativas", path: ERoutes.PINTURAS_FIGURATIVAS },
        ],
    },
    { name: "Contacto", path: ERoutes.CONTACTO },
    { name: "Redes", path: ERoutes.REDES },
];
