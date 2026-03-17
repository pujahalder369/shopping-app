import { useCart } from "../../context/cart";


const CartDetails = () => {
  const { cart, increase, decrease } = useCart();


  if (cart.length === 0) {
    return (
      <div className="h-screen flex items-center justify-center text-xl">
        Cart is empty 🛒
      </div>
    )
  };

  const prevPrice = cart.reduce((pre, item) => {
    return pre + item.price * 50 * item.quantity;
  }, 0);

  const totalAmount = cart.reduce((pre, item) => {
    return pre + item.price * 30 * item.quantity;
  }, 0);

  const handlePlaceOrder = () => {
    console.log("Ordered Products:", cart);
  };

  return (
    <div className='max-w-4xl mx-auto my-10 p-0 sm:p-10'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl font-bold mb-6 text-center text-[#3227D1]'>Your Cart</h1>
      </div>

      <div className="flex flex-col gap-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="border-b-2 rounded-lg p-2 sm:p-4 flex flex-col sm:flex-row gap-6"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-32 w-32 object-contain"
            />

            <div className="flex-1">
              <h3 className="font-semibold text-gray-600">{item.title}</h3>

              <p className="text-gray-600 mt-2 text-lg">
                <strike><strong>Price:</strong> ₹{Math.round(item.price * 50)}</strike>
                <span className='text-green-700 font-bold'>( 20% Off )</span>
              </p>

              <p className="mt-1 text-xl">
                <strong>Price:</strong> ₹{Math.round(item.price * 30)}
              </p>

              <div className="w-full flex justify-end items-center my-3">
                <button
                  onClick={() => decrease(item.id)}
                  className="bg-[#9a53d0] text-white h-7 w-7 md:h-10 md:w-10 text-xl sm:text-2xl rounded hover:bg-[#793DA6] transition"
                >
                  -
                </button>

                <span className="px-4 text-xl">
                  {item.quantity}
                </span>

                <button
                  onClick={() => increase(item.id)}
                  className="bg-[#9a53d0] text-white h-7 w-7 md:h-10 md:w-10 text-xl sm:text-2xl rounded hover:bg-[#793DA6] transition"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='w-full flex justify-between items-center my-2'>
        <button
          onClick={handlePlaceOrder}
          className="mt-4 bg-[#9a53d0] text-white px-3 sm:px-5 py-2 rounded hover:bg-[#793DA6] transition">
          Place Order
        </button>
        <div>
          <p className='text-right'><strike>Total amount: ₹{Math.round(prevPrice)}</strike></p>
          <p className='text-green-700 text-right'><strong>Discount - 20%</strong></p>
          <p className='border-t border-black my-2'><strong>Total amount: </strong>₹{Math.round(totalAmount)}</p>
        </div>
      </div>
    </div>
  )
}

export default CartDetails;
