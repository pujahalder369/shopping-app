const toys = [
    {
        id: 1,
        name: "Teddy",
        image: "/images/toys/teddy.jpg",
    },
    {
        id: 2,
        name: "Toy Car's",
        image: "/images/toys/car.jpg",
    },
    {
        id: 3,
        name: "Study Toy's",
        image: "/images/toys/study.jpg",
    },
    {
        id: 4,
        name: "Barbie Doll",
        image: "/images/toys/doll.jpg",
    }
];

const Toys = () => {
    return (
        <main className='bg-[#F2FEFE] min-h-screen py-16 px-6'>
            <div className="mb-8">
                <img
                    src="/images/toys/top.jpg"
                    alt="appliances Banner"
                    className="w-full h-[350px] object-cover rounded-lg"
                />
            </div>

            <h1 className="text-3xl font-bold mb-6 text-gray-800">
                Study Toys & Teddys
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {toys.map((toy) => (
                    <div
                        key={toy.id}
                        className="bg-white rounded-3xl shadow hover:shadow-lg transition p-4 text-center"
                    >
                        <img
                            src={toy.image}
                            alt={toy.name}
                            className="h-48 w-full object-contain mb-4"
                        />
                        <h2 className="text-lg font-semibold">{toy.name}</h2>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Toys;