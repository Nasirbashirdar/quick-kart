import React, { useContext } from "react";
import ProductCard from "../components/ProductCard";
import useProducts from "../hooks/useProducts";
import { SearchContext } from "../context/SearchContext";

const Home = () => {
  const { allProducts, searchProducts, loading, error } = useProducts();
  const { searchQuery, isSearching } = useContext(SearchContext);
  const filteredProducts = searchQuery
    ? searchProducts(searchQuery)
    : allProducts;

  if (loading) {
    return (
      <div className="p-4 dark:bg-gray-900 dark:text-white">
        <h1 className="text-2xl font-bold mb-4">Welcome to QuickKart</h1>
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 dark:bg-gray-900 dark:text-white">
        <h1 className="text-2xl font-bold mb-4">Welcome to QuickKart</h1>
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="p-4 dark:bg-gray-900 dark:text-white">
      <h1 className="text-2xl font-bold mb-4">Welcome to QuickKart</h1>
      {isSearching && filteredProducts.length === 0 ? (
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

export default Home;
