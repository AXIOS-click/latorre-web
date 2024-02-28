export enum ERoutes {
    HOME = "/",
    PROYECTOS = "/proyectos",
    BIOGRAFIA = "/biografia",
    REDES = "/redes",
    CONTACTO = "/contacto",
    ESCULTURAS = "/esculturas",
    PINTURA = "/pinturas",
}

export type TActualRoutes = "Home" | "Proyectos" | "Bio" | "Redes" | "Contacto" | "Esculturas" | "Pinturas";

export interface IRoute<T = unknown, K = TActualRoutes> {
    name: K;
    path: string;
    subroutes?: T[] | T;
}

export const ROUTES: IRoute<IRoute>[] = [
    { name: "Home", path: ERoutes.HOME },
    { name: "Proyectos", path: ERoutes.PROYECTOS },
    { name: "Bio", path: ERoutes.BIOGRAFIA },
    { name: "Esculturas", path: ERoutes.ESCULTURAS },
    { name: "Pinturas", path: ERoutes.PINTURA },
    { name: "Redes", path: ERoutes.REDES },
    { name: "Contacto", path: ERoutes.CONTACTO },
];
