import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8 dark:bg-gray-900">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex gap-4">
          <Link to="/" className="hover:underline">
            Home
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
        </div>
        <p className="text-sm">© 2025 QuickKart. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
