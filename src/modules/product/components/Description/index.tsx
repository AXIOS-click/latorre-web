import { ISculturesOrPaints } from "@/shared/services/strapi/Escultura/domain/Escultura";

export const DescriptionProduct = ({ description }: { description: ISculturesOrPaints }) => {
    return (
        <section className="w-full h-full flex flex-col sm:justify-center">
            <h3 className="text-3xl font-semibold hidden sm:block">{description.Titulo}</h3>
            <p className="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus debitis officiis repudiandae
                voluptas molestiae nemo eos commodi soluta quo, quod, dolores ut eum, doloremque vero pariatur culpa
                beatae? Eveniet, similique.
            </p>
            <div>
                <h5 className="text-2xl">Detalles</h5>
                <ul>
                    <li>Serie: {description.Serie}</li>
                    <li>Material: {description.Materiales}</li>
                    <li>Medidas: {description.Medidas}</li>
                    <li>Fecha: {new Date(description.Anio).getFullYear()}</li>
                </ul>
            </div>
        </section>
    );
};
