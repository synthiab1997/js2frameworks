import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true); // For handling loading state
  const [error, setError] = useState(null); // For handling errors

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true); // Set loading to true
        const response = await fetch('https://v2.api.noroff.dev/online-shop');
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        setProducts(data.data); // Make sure to use `data.data`
      } catch (err) {
        setError(err.message); // Set error message if any
      } finally {
        setIsLoading(false); // Stop loading
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Loading spinner component
  const Loading = () => (
    <div className="flex justify-center items-center py-10">
      <div className="animate-spin border-t-4 border-blue-500 border-solid rounded-full w-16 h-16"></div>
    </div>
  );

  // Error message component
  const ErrorMessage = () => (
    <div className="text-red-500 text-center py-10">
      <p>Something went wrong: {error}</p>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Welcome to My Shop!</h2>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search for products..."
        className="border p-2 mb-4 w-full md:w-1/2 mx-auto rounded-md shadow-md"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Loading and Error Handling */}
      {isLoading && <Loading />}
      {error && <ErrorMessage />}

      {/* Display filtered products */}
      {!isLoading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
