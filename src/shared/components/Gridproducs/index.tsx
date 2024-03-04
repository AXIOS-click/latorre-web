export const GridProducs = ({ productos }: { productos: { [key: string]: any }[] }) => {
    // Aca recibiriamos por props la data de los productos

    console.log(productos);
    return (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" >
           {productos.map((producto, index) => (
                <div key={producto.id} className="w-full bg-red-500 h-96 rounded-lg">
                    <img src={`http://localhost:1337${producto.attributes.ImagenPrincipal.data.attributes.url}`}  className="w-full h-full object-cover"/>
                </div>
            ))}
        </div>
    );
};
