import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const handleQuantityChange = (id, event) => {
    const newQuantity = parseInt(event.target.value);
    if (newQuantity > 0) {
      updateQuantity(id, newQuantity);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>
          Your cart is empty.{" "}
          <Link to="/" className="text-blue-500">
            Browse Products
          </Link>
        </p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b pb-4">
              <img src={item.image} alt={item.title} className="w-20 h-20 object-cover" />
              <div>
                <h3 className="font-bold">{item.title}</h3>
                <p>${item.price}</p>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, e)}
                  className="border p-2 w-16 text-center"
                />
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white p-2 rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <h3 className="text-xl font-bold">
              Total: $
              {cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
            </h3>
          </div>
          <div className="mt-4 flex justify-between">
            <button onClick={clearCart} className="bg-gray-500 text-white p-2 rounded">
              Clear Cart
            </button>
            <Link to="/checkout" className="bg-green-500 text-white p-2 rounded">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
