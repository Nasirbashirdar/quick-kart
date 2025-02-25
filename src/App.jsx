import React, { useContext } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import "./index.css";

function App() {
  const { notification } = useContext(CartContext);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Notification Banner */}
      {notification && (
        <div className="bg-green-500 text-white text-center p-2 animate-fade-in">
          {notification}
        </div>
      )}

      <Header />
      <main className="flex-grow p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
