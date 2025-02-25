import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, totalPrice, removeFromCart, increaseQuantity } =
    useContext(CartContext);

  return (
    <div className="p-4 bg-white dark:bg-gray-900">
      <h2 className="text-2xl font-bold dark:text-white">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="dark:text-gray-300">Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              className="border p-4 my-2 bg-gray-100 dark:bg-gray-800"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-medium dark:text-white">{item.name}</h3>
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
            </div>
          ))}
          <div className="border-t pt-4 mt-4">
            <div className="flex justify-between">
              <p className="font-medium dark:text-white">Total</p>
              <p className="font-bold dark:text-white">₹{totalPrice}</p>
            </div>
          </div>
          <Link
            to="/checkout"
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 block text-center"
          >
            Proceed to Checkout
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
