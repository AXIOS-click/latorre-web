import { FC } from "react";

interface IMainScrollableContainer {
    children: React.ReactNode;
}

export const MainScrollableContainer: FC<IMainScrollableContainer> = ({ children }) => {
    return (
        <main className="h-screen max-h-screen overflow-hidden ">
            <div className="mx-auto h-full">
                <section className="block h-full">
                    <div className="block h-full overflow-y-auto z-40 relative header_blur">{children}</div>
                </section>
            </div>
        </main>
    );
};
