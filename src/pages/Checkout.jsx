import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, totalPrice, removeFromCart, increaseQuantity } =
    useContext(CartContext);
  const navigate = useNavigate();

  console.log("Cart Items:", cart); // Debugging: Check if cart has items

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
    navigate("/"); // Redirect to the home page
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-900">
      <h2 className="text-2xl font-bold dark:text-white mb-6">Checkout</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Shipping Details Form */}
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold dark:text-white mb-4">
            Shipping Details
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium dark:text-gray-300">
                Full Name
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-white"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium dark:text-gray-300">
                Address
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-white"
                placeholder="123 Main St"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium dark:text-gray-300">
                City
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-white"
                placeholder="New York"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium dark:text-gray-300">
                Zip Code
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-white"
                placeholder="10001"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Place Order
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold dark:text-white mb-4">
            Order Summary
          </h3>
          <div className="space-y-4">
            {cart.map((item) => {
              console.log("Rendering Item:", item); // Debugging: Check if items are being rendered
              return (
                <div
                  key={item.id}
                  className="flex justify-between items-center"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                    <div>
                      <h4 className="font-medium dark:text-white">
                        {item.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        ₹{item.price} x {item.quantity}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition-colors duration-300"
                    >
                      -
                    </button>
                    <span className="text-gray-700 dark:text-gray-300 mx-2">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 transition-colors duration-300"
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="border-t pt-4 mt-4">
            <div className="flex justify-between">
              <p className="font-medium dark:text-white">Total</p>
              <p className="font-bold dark:text-white">₹{totalPrice}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
