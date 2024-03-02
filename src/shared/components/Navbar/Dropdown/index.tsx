import { DropdownMenu } from "@radix-ui/themes";
import Link from "next/link";

export const Dropdown = () => {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger>
                <span className="text-3xl hover:text-3xl transition-all font-medium">Proyects</span>
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
