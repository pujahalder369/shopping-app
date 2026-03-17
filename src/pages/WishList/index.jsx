import { Link } from 'react-router-dom';
import { useWishlist } from '../../context/wishList';

const WishList = () => {
    const { wishlist, removeWishlist } = useWishlist();

    if (wishlist.length === 0) {
        return <div className="text-center mt-20 text-xl">Wishlist is empty ❤️</div>;
    }

    const word = (text, limit) => {
        const words = text.split(" ")
        return words.length > limit
            ? words.slice(0, limit).join(" ") + "..."
            : text;
    }

    return (
        <>
            <div className="mt-24 px-6">
                <h2 className="text-3xl font-bold mb-6 px-8">My Wishlist</h2>

                <div className="flex flex-wrap justify-center gap-6">
                    {wishlist.map((item) => (
                        <div
                            key={item.id}
                            className="w-[320px] bg-[#F2FEFE] p-4 rounded shadow hover:shadow-lg transition"
                        >
                            <div className='w-full text-right'>
                                <button
                                    className='hover:bg-gray-200 hover:shadow-md px-3 py-1 text-xl rounded-md transition'
                                    onClick={() => removeWishlist(item.id)}
                                >
                                    <i class="fa-solid fa-xmark"></i>
                                </button>
                            </div>
                            <img
                                src={item.image}
                                className="h-36 w-full object-contain mb-2"
                            />
                            <h3 className="font-semibold text-md text-gray-500">
                                {word(item.title, 4)}
                            </h3>

                            <p className="font-medium text-xl">
                                ₹{Math.round(item.price * 30)}
                                <span className="text-gray-500 text-lg ml-2">
                                    <strike> ₹{Math.round(item.price * 50)} </strike>
                                    <span className='text-green-700 font-bold ml-2'>( 20% Off )</span>
                                </span>
                            </p>
                            <p className="bg-green-600 w-14 h-7 rounded text-center my-2 text-white">
                                {item.rating.rate}⭐
                            </p>


                            <Link
                                key={item.id}
                                to={`/product/${item.id}`}
                            >
                                <div className="mt-4 w-full text-center bg-[#9a53d0] text-white py-2 rounded hover:bg-[#793DA6] transition">
                                    Veiw
                                </div>
                            </Link>

                        </div>
                    ))}
                </div >
            </div >
        </>
    )
}

export default WishList;