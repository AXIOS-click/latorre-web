import { DropdownMenu } from "@radix-ui/themes";
import Link from "next/link";

export const Dropdown = () => {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger>
                <span className="text-2xl hover:text-3xl transition-all">Proyectos</span>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
                <DropdownMenu.Item>
                    <Link href={"/esculturas"}>Esculturas</Link>
                </DropdownMenu.Item>
                <DropdownMenu.Item>
                    <Link href={"/pinturas"}>Pinturas</Link>
                </DropdownMenu.Item>
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    );
};
