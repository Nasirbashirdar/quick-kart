import React from "react";
import { useParams } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 1000,
    image:
      "https://images.pexels.com/photos/459762/pexels-photo-459762.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "This is a high-quality product with amazing features.",
    rating: 4.5,
    category: "Electronics",
  },
  {
    id: 2,
    name: "Product 2",
    price: 2000,
    image:
      "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "A stylish and durable product for everyday use.",
    rating: 4.0,
    category: "Fashion",
  },
];

const ProductDetails = () => {
  const { id } = useParams();

  // Find the product with the matching ID
  const product = products.find((p) => p.id === parseInt(id));

  // If the product is not found, show a message
  if (!product) {
    return <div className="p-4 dark:text-white">Product not found!</div>;
  }

  return (
    <div className="p-4 bg-white dark:bg-gray-900">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover"
      />
      <h2 className="text-2xl font-bold mt-4 dark:text-white">
        {product.name}
      </h2>
      <p className="text-gray-700 dark:text-gray-300">₹{product.price}</p>
      <p className="text-gray-600 dark:text-gray-400">
        Rating: {product.rating} ⭐
      </p>
      <p className="text-gray-600 dark:text-gray-400">
        Category: {product.category}
      </p>
      <p className="text-gray-600 dark:text-gray-400 mt-2">
        {product.description}
      </p>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
