import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Store } from "lucide-react";
import { useCart } from "../context/CartContext";

const Header = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="w-full bg-gradient-to-r from-blue-200 to-gray-200 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center text-2xl font-bold text-blue-700">
          <Store className="w-8 h-8 text-blue-700 mr-2" /> MyShop
        </Link>

        {/* Centered Navigation */}
        <nav className="flex space-x-4">
          <Link to="/">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg transition duration-300 hover:bg-blue-700 shadow-md">
              Home
            </button>
          </Link>
          <Link to="/products">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg transition duration-300 hover:bg-blue-700 shadow-md">
              Products
            </button>
          </Link>
          <Link to="/contact">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg transition duration-300 hover:bg-blue-700 shadow-md">
              Contact Us
            </button>
          </Link>
        </nav>

        {/* Cart Icon with Badge */}
        <Link to="/cart" className="relative">
          <ShoppingCart className="w-8 h-8 text-gray-800 hover:text-blue-600 transition duration-300" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header;
