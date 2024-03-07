import { IStrapiScultureAndPaints } from "@/shared/services/strapi/Escultura/domain/Escultura";
import { imgProvider } from "@/shared/utils/imgProvider";

export const GridProducts = ({ arrayProductos }: { arrayProductos: IStrapiScultureAndPaints[] }) => (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
        {arrayProductos.map(({ attributes }, index) => {
            const { ImagenPrincipal } = attributes;
            const { URL_IMAGES } = imgProvider();
            return (
                <div key={`${index + 1}`} className="w-full h-full inline-block overflow-hidden">
                    <img
                        src={URL_IMAGES + ImagenPrincipal?.data?.attributes.url}
                        className="w-full h-full hover:scale-110 transition-transform duration-500"
                        alt="imagen de escultura"
                    />
                </div>
            );
        })}
    </div>
);
