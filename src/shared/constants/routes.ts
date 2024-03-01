export enum ERoutes {
    HOME = "/",
    PROYECTOS = "/proyectos",
    BIOGRAFIA = "/biografia",
    REDES = "/redes",
    CONTACTO = "/contacto",
    /* Proyect - Esculturas - subRoutes */
    ESCULTURAS = "/proyectos/esculturas",
    ESCULTURAS_ORGANICAS = "/proyectos/esculturas/organicas",
    ESCULTURAS_FIGURATIVAS = "/proyectos/esculturas/figurativas",

    /* Proyect - Pinturas - subRoutes */
    PINTURAS = "/proyectos/pinturas",
    PINTURAS_ORGANICAS = "/proyectos/pinturas/organicas",
    PINTURAS_FIGURATIVAS = "/proyectos/pinturas/figurativas",
}

export type TActualRoutes =
    | "Home"
    | "Proyectos"
    | "Bio"
    | "Redes"
    | "Contacto"
    | "Esculturas"
    | "Pinturas"
    | "Esculturas Organicas"
    | "Esculturas Figurativas"
    | "Pinturas Organicas"
    | "Pinturas Figurativas";

export interface IRoute {
    name: TActualRoutes;
    path: string;
    subRoutes?: IRoute[];
}

export const ROUTES: IRoute[] = [
    { name: "Home", path: ERoutes.HOME },
    { name: "Proyectos", path: ERoutes.PROYECTOS },
    { name: "Bio", path: ERoutes.BIOGRAFIA },
    {
        name: "Esculturas",
        path: ERoutes.ESCULTURAS,
        subRoutes: [
            { name: "Esculturas Organicas", path: ERoutes.ESCULTURAS_ORGANICAS },
            { name: "Esculturas Figurativas", path: ERoutes.ESCULTURAS_FIGURATIVAS },
        ],
    },
    {
        name: "Pinturas",
        path: ERoutes.PINTURAS,
        subRoutes: [
            { name: "Pinturas Organicas", path: ERoutes.PINTURAS_ORGANICAS },
            { name: "Pinturas Figurativas", path: ERoutes.PINTURAS_FIGURATIVAS },
        ],
    },
    { name: "Redes", path: ERoutes.REDES },
    { name: "Contacto", path: ERoutes.CONTACTO },
];
