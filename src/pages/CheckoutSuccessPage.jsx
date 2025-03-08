import React from 'react';
import { Link } from 'react-router-dom';


const CheckoutSuccessPage = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Thank You for Your Order!</h2>
      <p>Your order has been successfully processed.</p>
      <Link to="/" className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300">
        Back to Store
      </Link>
    </div>
  );
};

export default CheckoutSuccessPage;
