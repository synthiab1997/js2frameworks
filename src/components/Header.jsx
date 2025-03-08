import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Store } from "lucide-react"; // Import cart & shop icon
import { useCart } from "../context/CartContext";

const Header = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="w-full bg-gradient-to-r from-blue-200 to-gray-200 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo & Shop Icon */}
        <Link to="/" className="flex items-center text-2xl font-bold text-blue-700">
          <Store className="w-8 h-8 text-blue-700 mr-2" /> MyShop
        </Link>

        {/* Navigation */}
        <nav className="flex space-x-6">
          <Link to="/" className="text-gray-800 hover:text-blue-600 transition">
            Home
          </Link>
          <Link to="/" className="text-gray-800 hover:text-blue-600 transition">
          Product
          </Link>
          <Link to="/" className="text-gray-800 hover:text-blue-600 transition">
          Contact Us
          </Link>
          
          {/* Cart Icon with Badge */}
          <Link to="/cart" className="relative">
            <ShoppingCart className="w-6 h-6 text-gray-800 hover:text-blue-600 transition" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

