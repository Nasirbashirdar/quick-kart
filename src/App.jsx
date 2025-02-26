import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Categories from "./pages/Categories";
import Offers from "./pages/Offers";
import Help from "./pages/Help";
import Footer from "./components/Footer";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode); // Toggle the darkMode state
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Header
        onSearch={handleSearch}
        darkMode={darkMode}
        toggleTheme={toggleTheme}
      />
      <Routes>
        <Route path="/" element={<Home searchQuery={searchQuery} />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/help" element={<Help />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
