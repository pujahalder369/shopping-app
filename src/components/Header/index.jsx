import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../../context/cart";
import { useAuth } from "../../context/auth";

const Header = () => {
  const { cartCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const { logout } = useAuth();

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) return;

    navigate(`/?search=${search}`);
    setSearch("");
  }

  return (
    <>
      <header className="fixed top-0 left-0 w-full h-20 py-2 bg-[#F2FEFE] shadow-md z-50">
        <div className="flex items-center justify-between h-16 px-3 sm:px-6 lg:px-8">
          <Link to={'/'}>
            <img
              src="/images/logo-img.png"
              alt="logo"
              className="h-20"
            />
          </Link>

          <form onSubmit={handleSearch} className="w-[65%] lg:w-[50%] flex !placeholder:text-black">
            <button
              type="submit"
              className="bg-white rounded-tl-lg rounded-bl-lg px-4 py-2 text-xl cursor-pointer"
            >
              <i className="fa-solid fa-magnifying-glass text-[#050505]"></i>
            </button>
            <input
              type="text"
              placeholder="Search for Products, Brands and More..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full py-2 rounded-tr-lg rounded-br-lg focus:outline-none bg-white"
            />
          </form>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to={'/login'}>
              <div
                className="relative"
                onMouseEnter={() => setShowLoginPopup(true)}
                onMouseLeave={() => setShowLoginPopup(false)}
              >
                <div className="flex items-center cursor-pointer gap-2">
                  <span className="text-center text-lg pt-1">
                    <i className="fa-regular fa-user"></i>
                  </span>
                  <p className="text-lg font-bold">Login</p>
                </div>

                {/* POPUP */}
                {showLoginPopup && (
                  <div className="absolute w-52 bg-white shadow-lg rounded-md border z-50">
                    <button
                      onClick={() => {
                        logout();
                        navigate("/login", { replace: true });
                      }}
                      className="block w-full text-left px-4 py-4 hover:bg-gray-100 text-blue-600 font-bold text-xl"
                    >
                      Logout ?
                    </button>

                    <hr />

                    <Link
                      to="/"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-center text-lg pt-1">
                          <i className="fa-regular fa-user"></i>
                        </span>
                        <p>My profile</p>
                      </div>
                    </Link>
                    <Link
                      to="/cart"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-center text-lg">
                          <i class="fa-solid fa-gift"></i>
                        </span>
                        <p>Orders</p>
                      </div>
                    </Link>
                    <Link
                      to="/wishlist"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-center text-lg">
                          <i class="fa-regular fa-heart"></i>
                        </span>
                        <p>Wishlist</p>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </Link>

            <Link to="/cart">
              <div className="relative">
                <button className="px-6 py-2 text-xl rounded font-semibold">
                  🛒Cart
                </button>
                {cartCount > 0 && (
                  <span className="absolute top-0 right-2 bg-red-600 text-white text-xs h-5 w-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
            </Link>

            <Link to="/wishlist">
              <span className="text-2xl cursor-pointer">❤️</span>
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden text-xl"
            onClick={() => setMenuOpen(true)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div >
      </header >

      <div
        className={`lg:hidden fixed inset-0 bg-black/40 z-40 transition-opacity ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* SLIDE MENU */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-[200px] bg-white z-50 transform transition-transform duration-300
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)}>
            <i className="fa-solid fa-xmark text-xl"></i>
          </button>
        </div>

        <div className="flex flex-col gap-4 px-6">
          <Link to="/wishlist"
            onClick={() => setMenuOpen(false)}>
            <span className="text-2xl text-right block">❤️</span>
          </Link>

          <Link to={'/login'}>
            <div
              className="relative"
              onMouseEnter={() => setShowLoginPopup(true)}
              onMouseLeave={() => setShowLoginPopup(false)}
            >
              <div className="flex items-center cursor-pointer gap-2">
                <span className="text-center text-lg pt-1">
                  <i className="fa-regular fa-user"></i>
                </span>
                <p className="text-lg font-bold">Login</p>
              </div>

              {/* POPUP */}
              {showLoginPopup && (
                <div className="absolute w-52 bg-white shadow-lg rounded-md border z-50">
                  <button
                    onClick={() => {
                      logout();
                      navigate("/login", { replace: true });
                    }}
                    className="block w-full text-left px-4 py-4 hover:bg-gray-100 text-blue-600 font-bold text-xl"
                  >
                    Logout ?
                  </button>

                  <hr />

                  <Link
                    to="/"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-center text-lg pt-1">
                        <i className="fa-regular fa-user"></i>
                      </span>
                      <p>My profile</p>
                    </div>
                  </Link>
                  <Link
                    to="/cart"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-center text-lg">
                        <i class="fa-solid fa-gift"></i>
                      </span>
                      <p>Orders</p>
                    </div>
                  </Link>
                  <Link
                    to="/wishlist"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-center text-lg">
                        <i class="fa-regular fa-heart"></i>
                      </span>
                      <p>Wishlist</p>
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </Link>

          <Link to="/cart" onClick={() => setMenuOpen(false)}>
            <div className="bg-[#9a53d0] text-white px-4 py-2 rounded text-center relative">
              Cart
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                  {cartCount}
                </span>
              )}
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
