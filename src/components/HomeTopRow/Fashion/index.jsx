const clothes = [
    {
        id: 1,
        name: "Men",
        image: "/images/fashion/men.jpg",
    },
    {
        id: 2,
        name: "Women",
        image: "/images/fashion/women.jpg",
    },
    {
        id: 3,
        name: "Kids",
        image: "/images/fashion/kids.jpg",
    },
    {
        id: 4,
        name: "Wedding",
        image: "/images/fashion/wadding.jpg",
    }
];

const FashionPage = () => {
    return (
        <main className='bg-[#F2FEFE] min-h-screen py-16 px-6'>
            <div className="mb-8">
                <img
                    src="/images/fashion/top.jpg"
                    alt="fashion Banner"
                    className="w-full h-[350px] object-cover rounded-lg"
                />
            </div>

            <h1 className="text-3xl font-bold mb-6 text-gray-800">
                Fashion Clothes
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {clothes.map((clothe) => (
                    <div
                        key={clothe.id}
                        className="bg-white rounded-3xl shadow hover:shadow-lg transition p-4 text-center"
                    >
                        <img
                            src={clothe.image}
                            alt={clothe.name}
                            className="h-48 w-full object-contain mb-4"
                        />
                        <h2 className="text-lg font-semibold">{clothe.name}</h2>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default FashionPage;