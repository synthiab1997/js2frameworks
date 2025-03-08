import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from "../context/CartContext"; 

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showMessage, setShowMessage] = useState(false); 

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
        if (!response.ok) throw new Error("Failed to fetch product details");
        
        const data = await response.json();
        console.log("Fetched Product:", data); // 🔍 Check API response
        setProduct(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchProduct();
  }, [id]);
  

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      setShowMessage(true);

      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    }
  };

  if (loading) return <div className="text-center text-blue-500">Loading...</div>;
  if (error) return <div className="text-center text-red-500">Error: {error}</div>;
  if (!product) return <div className="text-center">Product not found</div>;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row">
        {/* Product Image */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src={product.image.url} 
            alt={product.image.alt || product.title}
            className="w-full h-96 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 md:ml-6">
          <h1 className="text-3xl font-bold text-blue-600">{product.title}</h1>
          <p className="text-gray-700 mt-4">{product.description}</p>

          {/* Price & Discount */}
          {product.discountedPrice < product.price ? (
            <p className="text-xl font-bold text-blue-500 mt-4">
              Now: ${product.discountedPrice.toFixed(2)}
              <span className="line-through text-gray-500 ml-2">${product.price.toFixed(2)}</span>
            </p>
          ) : (
            <p className="text-xl font-bold text-blue-500 mt-4">${product.price.toFixed(2)}</p>
          )}

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full py-3 bg-blue-600 text-white rounded-lg mt-4 hover:bg-blue-700 transition-all"
          >
            Add to Cart
          </button>

          {/* Back to Products Button */}
          <button
            onClick={() => navigate('/')}
            className="w-full py-3 bg-gray-400 text-white rounded-lg mt-4 hover:bg-gray-500 transition-all"
          >
            Back to Products
          </button>

          {/* Item Added Message */}
          {showMessage && (
            <p className="text-center text-green-500 mt-2">
              ✅ Item added to cart!
            </p>
          )}
        </div>
      </div>

      {/* Reviews Section */}
      {product.reviews && product.reviews.length > 0 && (
        <div className="mt-6 p-6 bg-gray-100 rounded-lg shadow">
          <h3 className="text-2xl font-semibold text-blue-600">Reviews</h3>
          <ul className="mt-4">
            {product.reviews.map((review) => (
              <li key={review.id} className="border-b py-4">
                <p className="font-semibold">{review.username}</p>
                <p className="text-gray-700">{review.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductPage;