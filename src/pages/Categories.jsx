import React, { useContext } from "react";
import ProductCard from "../components/ProductCard";
import useProducts from "../hooks/useProducts";
import { SearchContext } from "../context/SearchContext";

const Categories = () => {
  const { allProducts, searchProducts } = useProducts();
  const { searchQuery } = useContext(SearchContext); // Use global searchQuery
  const filteredProducts = searchQuery
    ? searchProducts(searchQuery)
    : allProducts;

  return (
    <div className="p-4 dark:bg-gray-900 dark:text-white">
      <h1 className="text-2xl font-bold mb-4">Categories</h1>
      {filteredProducts.length === 0 ? (
        <p className="text-red-500">No products found for "{searchQuery}".</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Categories;
