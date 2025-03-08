import React from 'react';
import { useCart } from '../context/CartContext'; 
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="border rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
      {/* Clickable Product Image */}
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image?.url || 'https://via.placeholder.com/200'}
          alt={product.image?.alt || product.title}
          className="w-full h-64 object-cover"
        />
      </Link>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{product.title}</h3>
        <p className="text-sm text-gray-500">{product.description.slice(0, 80)}...</p>

        {/* Price & Discount */}
        {product.discountedPrice < product.price ? (
          <p className="text-lg font-bold text-blue-500">
            Now: ${product.discountedPrice.toFixed(2)}
            <span className="line-through text-gray-500 ml-2">${product.price.toFixed(2)}</span>
          </p>
        ) : (
          <p className="mt-2 text-lg font-bold text-blue-500">${product.price}</p>
        )}

        {/* ⭐ Reviews Section */}
        {product.reviews && product.reviews.length > 0 && (
          <div className="mt-2 flex items-center">
            {Array.from({ length: 5 }).map((_, index) => (
              <span
                key={index}
                className={`text-yellow-400 text-lg ${index < Math.round(product.reviews.reduce((acc, rev) => acc + rev.rating, 0) / product.reviews.length) ? 'text-yellow-400' : 'text-gray-300'}`}
              >
                ★
              </span>
            ))}
            <span className="ml-2 text-gray-600 text-sm">
              ({product.reviews.length} reviews)
            </span>
          </div>
        )}

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="w-full py-2 mt-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
