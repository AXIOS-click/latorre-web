import { GridProducs } from "@/shared/components/Gridproducs";
import { Navbar } from "@/shared/components/Navbar";

export const ScultureOrganicsModule = () => {
    return (
        <main className="w-full h-full min-h-screen bg-latorre-bg">
            <Navbar />
            <section className="py-32 text-white px-3 flex flex-col gap-4 sm:px-10 lg:px-28">
                <h1 className="text-2xl font-bold">Esculturas Organicas</h1>
               <GridProducs/>
            </section>
        </main>
    );
};
