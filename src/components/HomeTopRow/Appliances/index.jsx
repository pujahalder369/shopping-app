const appliances = [
    {
        id: 1,
        name: "Kitchen Things",
        image: "/images/appliances/kitchen.jpg",
    },
    {
        id: 2,
        name: "Fridge",
        image: "/images/appliances/fridge.jpg",
    },
    {
        id: 3,
        name: "TVs",
        image: "/images/appliances/TV.jpg",
    },
    {
        id: 4,
        name: "Fans",
        image: "/images/appliances/fan.jpg",
    }
];

const Appliances = () => {
    return (
        <main className='bg-[#F2FEFE] min-h-screen py-16 px-6'>
            <div className="mb-8">
                <img
                    src="/images/appliances/top.jpg"
                    alt="appliances Banner"
                    className="w-full h-[350px] object-cover rounded-lg"
                />
            </div>

            <h1 className="text-3xl font-bold mb-6 text-gray-800">
                Appliances
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {appliances.map((appliance) => (
                    <div
                        key={appliance.id}
                        className="bg-white rounded-3xl shadow hover:shadow-lg transition p-4 text-center"
                    >
                        <img
                            src={appliance.image}
                            alt={appliance.name}
                            className="h-48 w-full object-contain mb-4"
                        />
                        <h2 className="text-lg font-semibold">{appliance.name}</h2>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Appliances;