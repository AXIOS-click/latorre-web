import { IEscultura } from "@/shared/services/strapi/Escultura/domain/Escultura";

export const GridProducts = ({ arrayProductos }: { arrayProductos: Array<IEscultura> }) => {
    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {arrayProductos.map((producto, index) => (
                <div key={index} className="w-full h-96 inline-block overflow-hidden">
                    <img
                        src={producto.ImagenPrincipal}
                        className="w-full h-full hover:scale-110 transition-transform duration-500"
                    />
                </div>
            ))}
        </div>
    );
};
