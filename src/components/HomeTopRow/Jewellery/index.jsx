const jewellery = [
    {
        id: 1,
        name: "Neklesh",
        image: "/images/jewellery/neklesh.jpg",
    },
    {
        id: 2,
        name: "Rings",
        image: "/images/jewellery/ring.jpg",
    },
    {
        id: 3,
        name: "Earrings",
        image: "/images/jewellery/earrings.jpg",
    },
    {
        id: 4,
        name: "Bracelet",
        image: "/images/jewellery/bracelet.jpg",
    }
];

const Jewellery = () => {
    return (
        <main className='bg-[#F2FEFE] min-h-screen py-16 px-6'>
            <div className="mb-8">
                <img
                    src="/images/jewellery/top.jpg"
                    alt="Jewellery Banner"
                    className="w-full h-[350px] object-cover rounded-lg"
                />
            </div>

            <h1 className="text-3xl font-bold mb-6 text-gray-800">
                Jewellery
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {jewellery.map((jewel) => (
                    <div
                        key={jewel.id}
                        className="bg-white rounded-3xl shadow hover:shadow-lg transition p-4 text-center"
                    >
                        <img
                            src={jewel.image}
                            alt={jewel.name}
                            className="h-48 w-full object-contain mb-4"
                        />
                        <h2 className="text-lg font-semibold">{jewel.name}</h2>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Jewellery;