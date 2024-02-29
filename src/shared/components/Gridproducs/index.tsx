export const GridProducs = () => {
    // Aca recibiriamos por props la data de los productos
    return (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, i) => (
                <div className="w-full bg-red-500 rounded-lg h-96" key={`${i + 1}`}>
                    {item}
                </div>
            ))}
        </div>
    );
};
