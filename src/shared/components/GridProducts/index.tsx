import { IStrapiScultureAndPaints } from "@/shared/services/strapi/Escultura/domain/Escultura";

export const GridProducts = ({ arrayProductos }: { arrayProductos: IStrapiScultureAndPaints[] }) => (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
        {arrayProductos.map(({ attributes }, index) => {
            const { ImagenPrincipal } = attributes;
            return (
                <div key={`${index + 1}`} className="w-full h-full inline-block overflow-hidden">
                    <img
                        src={ImagenPrincipal?.data?.attributes.url}
                        className="w-full h-full hover:scale-110 transition-transform duration-500"
                    />
                </div>
            );
        })}
    </div>
);
