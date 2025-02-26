import { useState, useEffect } from "react";

const useProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setAllProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const getProductById = (id) => {
    return allProducts.find((product) => product.id === parseInt(id));
  };

  const searchProducts = (query) => {
    return allProducts.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
  };

  return { allProducts, getProductById, searchProducts, loading, error };
};

export default useProducts;
