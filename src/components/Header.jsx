import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaHome } from "react-icons/fa";
import SearchBar from "./SearchBar";
import ThemeToggle from "./ThemeToggle";
import { CartContext } from "../context/CartContext";

const Header = ({ onSearch, darkMode, toggleTheme }) => {
  const { cart, notification } = useContext(CartContext);

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-lg dark:bg-gray-800">
      <div className="logo text-2xl font-bold">
        <Link to="/">QuickKart</Link>
      </div>
      <div className="flex items-center gap-4">
        <nav className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2 hover:underline">
            <FaHome /> Home
          </Link>
          <Link to="/categories" className="hover:underline">
            Categories
          </Link>
          <Link to="/offers" className="hover:underline">
            Offers
          </Link>
          <Link to="/help" className="hover:underline">
            Help
          </Link>
        </nav>
        <SearchBar onSearch={onSearch} />
        <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
        <Link to="/cart" className="flex items-center gap-2 hover:underline">
          <FaShoppingCart /> Cart ({cart.length})
        </Link>
      </div>
      {notification && (
        <div className="fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg">
          {notification}
        </div>
      )}
    </header>
  );
};

export default Header;
