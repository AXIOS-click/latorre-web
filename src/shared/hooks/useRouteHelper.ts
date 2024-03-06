import { usePathname } from "next/navigation";
import { ERoutes, IRoute, ROUTES } from "../constants/routes";

export const useRouteHelper = () => {
    const pathname = usePathname();

    const getCurrentRoute = () => {
        return ROUTES.find(route => route.path === pathname);
    };

    const isOnRoute = (routePath: string) => {
        return pathname === routePath;
    };

    const getRoutesExcluding = (routesToExclude: ERoutes[]) => {
        return ROUTES.filter(route => !routesToExclude.includes(route.path as ERoutes));
    };

    const routesWithSubRoutes = (navbarRoutes: IRoute[]) => navbarRoutes.filter(ruta => ruta.subRoutes !== undefined && ruta.subRoutes.length > 0);

    return { getCurrentRoute, isOnRoute, getRoutesExcluding, routesWithSubRoutes };
};