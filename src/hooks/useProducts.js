// import { useState, useEffect } from "react";

// // Mock product data (replace with an API call if needed)
// const products = [
//   {
//     id: 1,
//     name: "Wireless Headphones",
//     price: 99.99,
//     image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg",
//     description: "High-quality wireless headphones with noise cancellation.",
//     rating: 4.5,
//     category: "Electronics",
//   },
//   {
//     id: 2,
//     name: "Leather Jacket",
//     price: 199.99,
//     image: "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg",
//     description: "Stylish leather jacket for men and women.",
//     rating: 4.2,
//     category: "Fashion",
//   },
//   {
//     id: 3,
//     name: "Smart Watch",
//     price: 149.99,
//     image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg",
//     description: "Smart watch with fitness tracking and notifications.",
//     rating: 4.7,
//     category: "Electronics",
//   },
//   {
//     id: 4,
//     name: "Running Shoes",
//     price: 89.99,
//     image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
//     description: "Comfortable running shoes for all terrains.",
//     rating: 4.6,
//     category: "Sports",
//   },
// ];
// const useProducts = () => {
//   const [allProducts, setAllProducts] = useState([]);

//   useEffect(() => {
//     setAllProducts(products);
//   }, []);

//   const getProductById = (id) => {
//     return allProducts.find((product) => product.id === parseInt(id));
//   };

//   const searchProducts = (query) => {
//     return allProducts.filter((product) =>
//       product.name.toLowerCase().includes(query.toLowerCase())
//     );
//   };

//   return { allProducts, getProductById, searchProducts };
// };

// export default useProducts;

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
