import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../../context/wishList';
import Banner from '../../components/heroSection';
import TopSlide from '../../components/TopSlidePart';

const Home = () => {
    const [products, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const { isWishlisted, addToWishlist } = useWishlist();

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching products:", err);
            })
    }, []);

    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center text-xl">
                Loading products....
            </div>
        );
    }

    const word = (text, limit) => {
        const words = text.split(" ");
        return words.length > limit
            ? words.slice(0, limit).join(" ") + "..."
            : text;
    }

    return (
        <>
            <main className="h-[calc(100vh - 90px + 46px)] py-10 px-6 overflow-y-auto bg-[#F2FEFE]">

                <div>
                    <TopSlide />
                </div>

                <div className='w-full mb-8'>
                    <Banner />
                </div>

                <h2 className="text-3xl font-bold my-10">
                    Top Deals
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => {
                        const wishlisted = isWishlisted(product.id);
                        return (
                            <Link
                                key={product.id}
                                to={`/product/${product.id}`}>
                                <div
                                    key={product.id}
                                    className="group bg-white rounded-lg px-10 sm:px-4 py-4 shadow hover:shadow-lg cursor-pointer transition w-full"
                                >
                                    <div className='w-full text-right'>
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                addToWishlist(product);
                                            }}
                                        >
                                            <i
                                                className={`mx-2 text-xl ${wishlisted
                                                    ? "fa-solid fa-heart text-red-600"
                                                    : "fa-regular fa-heart"
                                                    }`}>
                                            </i>
                                        </button>
                                    </div>
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="h-40 w-full object-contain mb-3"
                                    />

                                    <h3 className="font-semibold whitespace-nowrap text-md text-gray-500 group-hover:text-blue-600 transition">
                                        {word(product.title, 4)}
                                    </h3>

                                    <p className="font-medium text-2xl my-3">
                                        ₹{Math.round(product.price * 30)}
                                        <span className="text-gray-500 text-lg ml-2">
                                            <strike> ₹{Math.round(product.price * 50)} </strike>
                                            <span className='text-green-700 font-bold ml-2'>( 20% Off )</span>
                                        </span>
                                    </p>
                                    <p className="bg-green-600 w-12 h-6 rounded text-center my-2 text-white">
                                        {product.rating.rate} <i className="fa-solid fa-star text-white text-sm"></i>
                                    </p>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </main>
        </>
    )
}

export default Home;