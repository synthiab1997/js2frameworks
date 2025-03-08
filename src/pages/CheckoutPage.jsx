import React from 'react';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
  const cartItems = []; // Replace with actual cart items from state
  const total = 0; // Calculate the total price of items

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item.id} className="border p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-bold">{item.title}</h3>
                  <p>${item.discountedPrice}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <h3 className="text-lg font-bold">Total: ${total}</h3>
            <Link to="/checkout-success" className="mt-4 inline-block bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors duration-300">
              Confirm Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
