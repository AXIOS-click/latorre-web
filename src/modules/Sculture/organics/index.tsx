import { GridProducs } from "@/shared/components/Gridproducs";
import { Navbar } from "@/shared/components/Navbar";

export const ScultureOrganicsModule = () => {
    return (
        <main className="w-full h-full min-h-screen bg-latorre-bg">
            <Navbar />
            <section className="pt-32 text-white px-20 flex flex-col gap-10">
                <h1 className="text-5xl font-bold">Esculturas Organicas</h1>
               <GridProducs/>
            </section>
        </main>
    );
};
