import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../../context/cart";
import { useWishlist } from "../../context/wishList";


const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [quantity, setQuantity] = useState(1);
  const { isWishlisted, addToWishlist } = useWishlist();

  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-xl">
        Loading products....
      </div>
    );
  }

  // const increase = () => {
  //   setQuantity((pre) => pre + 1);
  // }

  // const decrease = () => {
  //   setQuantity((pre) => pre > 1 ? pre - 1 : pre);
  // }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Check this product",
        text: "Look at this awesome product!",
        url: window.location.href,
      })
        .catch((error) => console.log("Share failed:", error));
    } else {
      alert("Sharing not supported on this browser");
    }
  };
  
  const wishlisted = isWishlisted(product.id);

  return (
    <div className="p-0 sm:p-10 flex justify-center items-center my-10">
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-10">
        <img
          src={product.image}
          alt={product.title}
          className="h-80 w-full object-contain"
        />

        <div>
          <h1 className="text-2xl font-semibold mb-4 flex justify-between">
            {product.title}
            <span className="text-2xl cursor-pointer">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  addToWishlist(product);
                }}
              >
                <i
                  className={`mx-2 ${wishlisted
                    ? "fa-solid fa-heart text-red-600"
                    : "fa-regular fa-heart"
                    }`}>
                </i>
              </button>

              <i
                className="fa-regular fa-share-from-square mx-2"
                onClick={handleShare}></i>
            </span>
          </h1>

          <p className="text-gray-600 mb-4">
            {product.description}
          </p>

          <p className="text-gray-500 font-medium text-xl">
            <strike>₹{Math.round(product.price * 50)} </strike>
            <span className='text-green-700 font-bold'>( 20% Off )</span>
          </p>

          <p className="text-2xl font-bold mb-4">
            ₹{Math.round(product.price * 30)}
          </p>

          <p className="mb-2">
            <strong>Category:</strong> {product.category}
          </p>

          <p className="mb-6">
            <strong>Rating:</strong> ⭐ {product.rating.rate}
          </p>

          {/* <div className="w-full flex items-center text-center my-3">
            <button
            onClick={decrease}
              className="bg-[#9a53d0] text-white h-7 w-7 md:h-10 md:w-10 text-xl sm:text-2xl rounded hover:bg-[#793DA6] transition"
            >
              -
            </button>

            <span className="px-4 text-xl">
              {quantity}
            </span>

            <button
            onClick={increase}
              className="bg-[#9a53d0] text-white h-7 w-7 md:h-10 md:w-10 text-xl sm:text-2xl rounded hover:bg-[#793DA6] transition"
            >
              +
            </button>
          </div> */}

          <Link to={`/cart?productId-${product.id}`}>
            <button
              onClick={() => addToCart(product)}
              className="bg-[#9a53d0] text-white px-7 py-2 rounded hover:bg-[#793DA6] transition">
              Buy Now
            </button>
          </Link>
          <button
            onClick={() => addToCart(product)}
            className="border border-black px-6 py-2 mx-4 my-2 rounded hover:shadow-lg hover:bg-gray-200 hover:border-gray-300 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
