const bags = [
    {
        id: 1,
        name: "Backpack for Men's",
        image: "/images/bags/backpack.jpg",
    },
    {
        id: 2,
        name: "Backpack for Women's",
        image: "/images/bags/backpack2.jpg",
    },
    {
        id: 3,
        name: "Laptop Bag",
        image: "/images/bags/laptopbag.jpg",
    },
    {
        id: 4,
        name: "Messenger Bag",
        image: "/images/bags/sidebag.jpg",
    }
];

const Bags = () => {
    return (
        <main className='bg-[#F2FEFE] min-h-screen py-16 px-6'>
            <div className="mb-8">
                <img
                    src="/images/bags/top.jpg"
                    alt="appliances Banner"
                    className="w-full h-[350px] object-cover rounded-lg"
                />
            </div>

            <h1 className="text-3xl font-bold mb-6 text-gray-800">
                Bags
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {bags.map((bag) => (
                    <div
                        key={bag.id}
                        className="bg-white rounded-3xl shadow hover:shadow-lg transition p-4 text-center"
                    >
                        <img
                            src={bag.image}
                            alt={bag.name}
                            className="h-48 w-full object-contain mb-4"
                        />
                        <h2 className="text-lg font-semibold">{bag.name}</h2>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Bags;