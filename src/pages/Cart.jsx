import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, clearCart, totalPrice } =
    useContext(CartContext);

  return (
    <div className="p-4 dark:bg-gray-900 dark:text-white">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="border p-4 rounded-lg shadow-lg flex justify-between items-center dark:bg-gray-800"
              >
                <div>
                  <h2 className="text-xl font-bold">{item.name}</h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    ${item.price}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Quantity: {item.quantity}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="bg-blue-600 text-white px-2 py-1 rounded-lg hover:bg-blue-700"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-600 text-white px-2 py-1 rounded-lg hover:bg-red-700"
                  >
                    -
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <p className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</p>
            <button
              onClick={clearCart}
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
            >
              Clear Cart
            </button>
            <Link
              to="/checkout"
              className="mt-4 ml-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
