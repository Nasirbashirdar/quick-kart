import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { getProductById } = useProducts();
  const { addToCart } = useContext(CartContext);
  const product = getProductById(id);

  if (!product) {
    return <div>Product not found!</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="p-4 dark:bg-gray-900 dark:text-white">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover rounded-lg"
      />
      <p className="text-gray-600 dark:text-gray-400 mt-2">${product.price}</p>
      <p className="mt-4">{product.description}</p>
      <button
        onClick={handleAddToCart}
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
