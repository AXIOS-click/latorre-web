export enum ERoutes {
    HOME = "/",
    PROYECTOS = "/proyectos",
    BIOGRAFIA = "/biografia",
    REDES = "/redes",
    CONTACTO = "/contacto",
}

export type TActualRoutes = "Home" | "Proyectos" | "Bio" | "Redes" | "Contacto";

export interface IRoute {
    name: TActualRoutes;
    path: string;
}

export const ROUTES: IRoute[] = [
    { name: "Home", path: ERoutes.HOME },
    { name: "Proyectos", path: ERoutes.PROYECTOS },
    { name: "Bio", path: ERoutes.BIOGRAFIA },
    { name: "Redes", path: ERoutes.REDES },
    { name: "Contacto", path: ERoutes.CONTACTO },
];
