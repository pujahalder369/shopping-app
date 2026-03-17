
const mobiles = [
  {
    id: 1,
    name: "iPhone 14",
    image: "/images/Mobiles/iPhone.jpg",
  },
  {
    id: 2,
    name: "Samsung Galaxy S23",
    image: "/images/Mobiles/SamsungGalaxy.jpg",
  },
  {
    id: 3,
    name: "OnePlus 11",
    image: "/images/Mobiles/OnePlus.jpg",
  },
  {
    id: 4,
    name: "Redmi Note 13 Pro",
    image: "/images/Mobiles/RedmiNote.jpg",
  }
];

const MobileTab = () => {
  return (
    <main className="bg-[#F2FEFE] min-h-screen py-16 px-6">
      {/* Banner */}
      <div className="mb-8">
        <img
          src="/images/Mobiles/top.jpg"
          alt="Mobile Banner"
          className="w-full h-[350px] object-cover rounded-lg"
        />
      </div>

      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Mobiles & Smartphones
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {mobiles.map((mobile) => (
          <div
            key={mobile.id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition p-4"
          >
            <img
              src={mobile.image}
              alt={mobile.name}
              className="h-48 w-full object-contain mb-4"
            />
            <h2 className="text-lg font-semibold text-center">{mobile.name}</h2>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MobileTab;
