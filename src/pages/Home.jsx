import React from "react";
import ProductCard from "../components/ProductCard";

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

const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
