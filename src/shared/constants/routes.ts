export enum ERoutes {
    HOME = "/",
    PROYECTOS = "/proyectos",
    BIOGRAFIA = "/bio",
    REDES = "/redes",
    CONTACTO = "/contacto",
    ESCULTURAS = "/esculturas",
    PINTURA = "/pinturas",
    /* Proyect - Esculturas - subRoutes */
    ESCULTURAS_MENU = "/proyectos/esculturas",
    ESCULTURAS_ORGANICAS = "/proyectos/esculturas/organicas",
    ESCULTURAS_FIGURATIVAS = "/proyectos/esculturas/figurativas",

    /* Proyect - Pinturas - subRoutes */
    PINTURAS_MENU = "/proyectos/pinturas",
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
    | "EsculturasMenu"
    | "EsculturasOrganicas"
    | "EsculturasFigurativas"
    | "PinturasMenu"
    | "PinturasOrganicas"
    | "PinturasFigurativas";

export interface IRoute {
    name: TActualRoutes;
    path: string;
    subRoutes?: IRoute[];
}

export const ROUTES: IRoute[] = [
    { name: "Home", path: ERoutes.HOME },
    { name: "Proyects", path: ERoutes.PROYECTOS },
    { name: "Bio", path: ERoutes.BIOGRAFIA },
    { name: "Esculturas", path: ERoutes.ESCULTURAS,
        subRoutes: [
            { name: "EsculturasMenu", path: ERoutes.ESCULTURAS_MENU },
            { name: "EsculturasOrganicas", path: ERoutes.ESCULTURAS_ORGANICAS },
            { name: "EsculturasFigurativas", path: ERoutes.ESCULTURAS_FIGURATIVAS },
        ],
    },
    { name: "Pinturas", path: ERoutes.PINTURA,
        subRoutes: [
            { name: "PinturasMenu", path: ERoutes.PINTURAS_MENU },
            { name: "PinturasOrganicas", path: ERoutes.PINTURAS_ORGANICAS },
            { name: "PinturasFigurativas", path: ERoutes.PINTURAS_FIGURATIVAS },
        ],
    },
    { name: "Contact", path: ERoutes.CONTACTO },
    { name: "Social", path: ERoutes.REDES }
];
