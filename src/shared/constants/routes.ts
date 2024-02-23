export enum ERoutes {
    HOME = "/",
    PROYECTOS = "/proyectos",
    BIOGRAFIA = "/biografia",
    REDES = "/redes",
    CONTACTO = "/contacto",
}

export interface IRoute {
    name: string;
    path: string;
}

export const ROUTES: IRoute[] = [
    { name: "Home", path: ERoutes.HOME },
    { name: "Proyectos", path: ERoutes.PROYECTOS },
    { name: "Biografia", path: ERoutes.BIOGRAFIA },
    { name: "Redes", path: ERoutes.REDES },
    { name: "Contacto", path: ERoutes.CONTACTO },
];
