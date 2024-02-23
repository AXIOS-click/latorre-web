import { usePathname } from "next/navigation";
import { ERoutes, ROUTES } from "../constants/routes";

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

    return { getCurrentRoute, isOnRoute, getRoutesExcluding };
};