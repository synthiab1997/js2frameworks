import React from 'react';
import { Link } from 'react-router-dom';

const CartIcon = ({ itemCount = 0 }) => {
  return (
    <Link to="/cart" className="relative">
        <span className='material-icons'>shopping_cart</span>
      <svg
        className="w-6 h-6 text-white hover:text-gray-400"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3h2l.4 2M7 3h10l2 10H9M5 10h11M3 3l3 10M5 21a2 2 0 100 4 2 2 0 000-4zm11 0a2 2 0 100 4 2 2 0 000-4z"
        />
      </svg>
      {itemCount > 0 && (
        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
          {itemCount}
        </span>
      )}
    </Link>
  );
};

export default CartIcon;
