export enum ERoutes {
    HOME = "/",
    PROYECTOS = "/proyectos",
    BIOGRAFIA = "/bio",
    REDES = "/redes",
    CONTACTO = "/contacto",
    /* Proyect - Esculturas - subRoutes */
    ESCULTURAS = "/proyectos/esculturas",
    ESCULTURAS_FRESCHI = "/proyectos/esculturas/freschi",
    ESCULTURAS_APPASITI = "/proyectos/esculturas/appassiti",

    /* Proyect - Pinturas - subRoutes */
    PINTURAS = "/proyectos/pinturas",
    PINTURAS_ORGANICAS = "/proyectos/pinturas/organicas",
    PINTURAS_FIGURATIVAS = "/proyectos/pinturas/figurativas",
}

export type TActualRoutes =
    | "Home"
    | "Proyects"
    | "Bio"
    | "Social"
    | "Contact"
    | "Esculturas"
    | "Pinturas"
    | "Freschi"
    | "Appassiti"
    | "Pinturas Organicas"
    | "Pinturas Figurativas";

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
            { name: "Freschi", path: ERoutes.ESCULTURAS_FRESCHI },
            { name: "Appassiti", path: ERoutes.ESCULTURAS_APPASITI },
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
    { name: "Contact", path: ERoutes.CONTACTO },
    { name: "Social", path: ERoutes.REDES }
];
