import { FC } from "react";
import { useStore } from "../components/Navbar/store";

interface IMainScrollableContainer {
    children: React.ReactNode;
}

export const MainScrollableContainer: FC<IMainScrollableContainer> = ({ children }) => {
    const { setNavbarScrolled } = useStore();

    // Funcion para agregarle blur a la navbar
    const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
        if (event.currentTarget.scrollTop > 0) {
            setNavbarScrolled(true);
        } else {
            setNavbarScrolled(false);
        }
    };

    return (
        <main className="h-screen max-h-screen overflow-hidden">
            <div className="mx-auto h-full">
                <section className="block h-full">
                    <div className="block h-full overflow-y-auto z-40 relative" onScroll={handleScroll}>
                        {children}
                    </div>
                </section>
            </div>
        </main>
    );
};
