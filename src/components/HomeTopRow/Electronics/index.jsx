const electronics = [
    {
        id: 1,
        name: "Laptops",
        image: "/images/electronics/laptop.jpg",
    },
    {
        id: 2,
        name: "Headphones & Airpods",
        image: "/images/electronics/headphone.jpg",
    },
    {
        id: 3,
        name: "Vaicol Outdoor Drones",
        image: "/images/electronics/drone.jpg",
    },
    {
        id: 4,
        name: "Speakers",
        image: "/images/electronics/soundBox.jpg",
    }
];

const Electronics = () => {
    return (
        <main className='bg-[#F2FEFE] min-h-screen py-16 px-6'>
            <div className="mb-8">
                <img
                    src="/images/electronics/top.jpg"
                    alt="electronics Banner"
                    className="w-full h-[350px] object-cover rounded-lg"
                />
            </div>

            <h1 className="text-3xl font-bold mb-6 text-gray-800">
                Electronics
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {electronics.map((electro) => (
                    <div
                        key={electro.id}
                        className="bg-white rounded-3xl shadow hover:shadow-lg transition p-4 text-center"
                    >
                        <img
                            src={electro.image}
                            alt={electro.name}
                            className="h-48 w-full object-contain mb-4"
                        />
                        <h2 className="text-lg font-semibold">{electro.name}</h2>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Electronics;