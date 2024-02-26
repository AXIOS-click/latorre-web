import { GridProducs } from "@/shared/components/Gridproducs";
import { Navbar } from "@/shared/components/Navbar";

export const ScultureModule = () => {
    return (
        <main className="w-full bg-black min-h-screen">
            <Navbar />
            <section className="px-20 pt-20 text-white">
                <h1 className="text-center text-5xl font-bold">Esculturas</h1>
                <GridProducs/>
            </section>
        </main>
    );
};
