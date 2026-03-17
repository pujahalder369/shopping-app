const furnitures = [
    {
        id: 1,
        name: "Bad",
        image: "/images/furniture/bad.jpg",
    },
    {
        id: 2,
        name: "Sofa",
        image: "/images/furniture/sofa.jpg",
    },
    {
        id: 3,
        name: "Cabinet",
        image: "/images/furniture/cabinet.jpg",
    },
    {
        id: 4,
        name: "Dining Table",
        image: "/images/furniture/table.jpg",
    }
];

const Furniture = () => {
    return (
        <main className='bg-[#F2FEFE] min-h-screen py-16 px-6'>
            <div className="mb-8">
                <img
                    src="/images/furniture/top.jpg"
                    alt="Furniture Banner"
                    className="w-full h-[350px] object-cover rounded-lg"
                />
            </div>

            <h1 className="text-3xl font-bold mb-6 text-gray-800">
                Furniture
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {furnitures.map((furniture) => (
                    <div
                        key={furniture.id}
                        className="bg-white rounded-3xl shadow hover:shadow-lg transition p-4 text-center"
                    >
                        <img
                            src={furniture.image}
                            alt={furniture.name}
                            className="h-48 w-full object-contain mb-4"
                        />
                        <h2 className="text-lg font-semibold">{furniture.name}</h2>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Furniture;