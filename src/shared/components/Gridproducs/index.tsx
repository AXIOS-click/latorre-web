export const GridProducs = ({ productos }: { productos: { [key: string]: any }[] }) => {
    // Aca recibiriamos por props la data de los productos

    console.log(productos);
    return (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {productos.map((producto, index) => (
                <div key={producto.id} className="w-full bg-red-500 h-96 rounded-lg">
                    <span>{producto.attributes.Titulo}</span>
                </div>
            ))}
        </div>
    );
};
