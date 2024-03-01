import { DropdownMenu } from "@radix-ui/themes";
import { BurgerMenu } from "@/assets/images/imageProvider";
import Link from "next/link";
import { IRoute } from "@/shared/constants/routes";

export const DropdownResponsive = ({ routes }: { routes: IRoute[] }) => {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger className="right-6 top-2 w-10 absolute">
                <img src={BurgerMenu.src} />
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

export const DropdownDesktop = ({ retroiluminado, subrutas }: { retroiluminado: string; subrutas: Array<IRoute> }) => {
    console.log(subrutas);

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger>
                <span className={`${retroiluminado} text-2xl hover:text-3xl transition-all`}>Proyectos</span>
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
