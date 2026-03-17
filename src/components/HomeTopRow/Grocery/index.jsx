const grocery = [
    {
        id: 1,
        name: "Vegetables",
        image: "/images/grocery/vege.jpg",
    },
    {
        id: 2,
        name: "Health Drinks",
        image: "/images/grocery/drinks.jpg",
    },
    {
        id: 3,
        name: "Packet Grocery",
        image: "/images/grocery/pack.jpg",
    },
    {
        id: 4,
        name: "Fruits",
        image: "/images/grocery/fruit.jpg",
    }
];

const Grocery = () => {
    return (
        <main className='bg-[#F2FEFE] min-h-screen py-16 px-6'>
            <div className="mb-8">
                <img
                    src="/images/grocery/top.jpg"
                    alt="item Banner"
                    className="w-full h-[350px] object-cover rounded-lg"
                />
            </div>

            <h1 className="text-3xl font-bold mb-6 text-gray-800">
                Grocery Items
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {grocery.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-3xl shadow hover:shadow-lg transition p-4 text-center"
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="h-48 w-full object-contain mb-4"
                        />
                        <h2 className="text-lg font-semibold">{item.name}</h2>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Grocery;