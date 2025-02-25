import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="bg-blue-600 dark:bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg">
      <div className="logo text-2xl font-bold">
        <Link to="/">Flipkart Clone</Link>
      </div>
      <nav className="flex gap-4 items-center">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/cart" className="flex items-center gap-2 hover:underline">
          <FaShoppingCart /> Cart
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Header;
