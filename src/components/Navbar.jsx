import { useState } from "react";
import { useSelector } from "react-redux";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const user = useSelector((state) => state.user);

  const [showSearch, setShowSearch] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const firstLetter = user?.userData.fullName?.charAt(0).toUpperCase();

  return (
    <nav className="w-full bg-[#fff7f2] shadow-sm px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">

        {/* Left */}
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold text-orange-500">Vingo</h1>

          {/* Location - Desktop only */}
          <div className="hidden md:flex items-center gap-1 text-gray-700">
            <span>📍</span>
            <span className="text-sm">Bareilly</span>
          </div>
        </div>

        {/* Search - Desktop */}
        <div className="hidden md:flex flex-1">
          <input
            type="text"
            placeholder="search delicious food..."
            className="w-full px-4 py-2 rounded-full border focus:outline-none"
          />
        </div>

        {/* Right */}
        <div className="flex items-center gap-4 relative">

          {/* Mobile search icon */}
          <button
            className="md:hidden"
            onClick={() => setShowSearch(!showSearch)}
          >
            <FaSearch/>
          </button>

          {/* Cart */}
          <div className="relative cursor-pointer">
            <FaShoppingCart/>
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              0
            </span>
          </div>

          {/* User Avatar */}
          <div className="relative cursor-pointer">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="w-9 cursor-pointer h-9 rounded-full bg-orange-500 text-white flex items-center justify-center font-semibold"
            >
              {firstLetter}
            </button>

            {/* User Dropdown */}
            {showUserMenu && (
              <div className="absolute right-0 top-12 bg-white shadow-lg rounded-md w-40 p-2">
                <p className="text-sm cursor-pointer font-semibold px-2 py-1">
                  {user?.userData?.fullName}
                </p>
                <hr />
                <button className="md:hidden cursor-pointer w-full text-left px-2 py-1 text-sm hover:bg-gray-100">
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

      {/* Mobile Search Bar */}
      {showSearch && (
        <div className="md:hidden mt-3">
          <input
            type="text"
            placeholder="search delicious food..."
            className="w-full px-4 py-2 rounded-full border focus:outline-none"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
