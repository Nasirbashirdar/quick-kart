import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="border p-4 rounded-lg shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow duration-300">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <h3 className="text-xl font-semibold mt-2 dark:text-white">
          {product.name}
        </h3>
        <p className="text-gray-700 dark:text-gray-300">₹{product.price}</p>
      </Link>
      <button
        onClick={() => addToCart(product)}
        className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
