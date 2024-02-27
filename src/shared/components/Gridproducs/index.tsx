export const GridProducs = () => {
    // Aca recibiriamos por props la data de los productos
    return (
        <div className="grid grid-cols-3 gap-4 mt-8">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => (
                <div className="w-full bg-red-500 rounded-lg h-96">{item}</div>
            ))}
        </div>
    );
};
