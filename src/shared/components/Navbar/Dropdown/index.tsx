
import { DropdownMenu } from "@radix-ui/themes";
import { BurgerMenu } from "@/assets/images/imageProvider";
import Link from "next/link";
import { IRoute } from "@/shared/constants/routes";

export const DropdownResponsive = ({ routes }: { routes: IRoute[] }) => {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger className="right-6 top-2 w-10 absolute">
                <img src={BurgerMenu.src} alt="Burger menu"/>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
                {routes.slice(1).map((route, index) => (
                    <DropdownMenu.Item key={index}>
                        <Link href={route.path}>{route.name}</Link>
                    </DropdownMenu.Item>
                ))}
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    );
};

export const DropdownDesktop = ({ estilo, subrutas }: { estilo: string; subrutas: Array<IRoute> }) => {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger>
                <span className={`${estilo} text-3xl hover:text-4xl transition-all font-medium`}>Proyects</span>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
                {subrutas.map((ruta, index) => (
                    <DropdownMenu.Item key={index}>
                        <Link href={ruta.path}>{ruta.name}</Link>
                    </DropdownMenu.Item>
                ))}
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    );
};