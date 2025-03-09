import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Store, Menu } from "lucide-react"; // Import Menu icon
import { useCart } from "../context/CartContext";

const Header = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu

  return (
    <header className="w-full bg-gradient-to-r from-blue-200 to-gray-200 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo & Shop Icon */}
        <Link to="/" className="flex items-center text-2xl font-bold text-blue-700">
          <Store className="w-8 h-8 text-blue-700 mr-2" /> MyShop
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button 
          className="block md:hidden text-gray-800 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu className="w-8 h-8" />
        </button>

        {/* Navigation (Desktop & Mobile) */}
        <nav
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent md:flex space-x-4 
            ${menuOpen ? "flex flex-col items-center py-4 shadow-lg" : "hidden md:flex"}`}
        >
          <Link to="/" className="px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white rounded-lg transition">
            Home
          </Link>
          <Link to="/products" className="px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white rounded-lg transition">
            Products
          </Link>
          <Link to="/contact" className="px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white rounded-lg transition">
            Contact Us
          </Link>
        </nav>

        {/* Cart Icon */}
        <Link to="/cart" className="relative">
          <ShoppingCart className="w-8 h-8 text-gray-800 hover:text-blue-600 transition" />
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
