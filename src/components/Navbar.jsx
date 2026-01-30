import { useState } from "react";
import { useSelector } from "react-redux";
import { FaSearch, FaShoppingCart, FaMapMarkerAlt } from "react-icons/fa";

const Navbar = () => {
  const user = useSelector((state) => state.user);

  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const firstLetter = user?.userData?.fullName?.charAt(0).toUpperCase();

  return (
    <nav className="w-full bg-[#fff9f6] shadow-sm rounded-md px-4 md:px-15 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-5">

        {/* LEFT : LOGO */}
        <h1 className="text-2xl font-bold text-orange-500">Vingo</h1>

        {/* CENTER : LOCATION + SEARCH (DESKTOP) */}
        <div className="hidden md:flex flex-1 items-center bg-white shadow-sm rounded-full px-4 py-2 gap-3">
          <FaMapMarkerAlt className="text-orange-500" />
          <span className="text-sm text-gray-600">Bareilly</span>

          <span className="h-5 w-px bg-gray-300"></span>

          <FaSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="search delicious food..."
            className="flex-1 outline-none text-sm"
          />
        </div>

        {/* RIGHT : CART + ORDERS + USER */}
        <div className="flex items-center gap-4 relative">

          {/* Mobile search icon */}
          <button
            className="md:hidden"
            onClick={() => setShowMobileSearch(!showMobileSearch)}
          >
            <FaSearch />
          </button>

          {/* Cart */}
          <div className="relative cursor-pointer">
            <FaShoppingCart />
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              0
            </span>
          </div>

          {/* My Orders (Desktop only) */}
          <button className="hidden md:block cursor-pointer text-sm text-orange-500 font-medium">
            My Orders
          </button>

          {/* User Avatar */}
          <div className="relative cursor-pointer">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="w-9 cursor-pointer h-9 rounded-full bg-orange-500 text-white flex items-center justify-center font-semibold"
            >
              {firstLetter}
            </button>

            {/* USER POPUP */}
            {showUserMenu && (
              <div className="absolute right-0 top-12 bg-white shadow-lg rounded-md w-40 p-2">
                <p className="text-sm font-semibold px-2 py-1">
                  {user?.userData?.fullName}
                </p>
                <hr />
                <button className="w-full md:hidden cursor-pointer text-left px-2 py-1 text-sm hover:bg-gray-100">
                  My Orders
                </button>
                <button className="w-full cursor-pointer text-left px-2 py-1 text-sm text-red-500 hover:bg-gray-100">
                  Log Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE SEARCH BAR */}
      {showMobileSearch && (
        <div className="md:hidden mt-3 bg-white shadow-sm rounded-full px-4 py-2 flex items-center gap-2">
          <FaSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="search delicious food..."
            className="flex-1 outline-none text-sm"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;