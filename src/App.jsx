import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import CartProvider from './context/CartContext';  
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import CheckoutSuccessPage from './pages/CheckoutSuccessPage'; 
import ContactPage from './pages/ContactPage';
import ProductPage from './pages/ProductPage';
import './index.css'; 

function App() {
  return ( 
    <CartProvider> 
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<HomePage />} />  
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout-success" element={<CheckoutSuccessPage />} /> {/* ✅ Ensure this exists */}
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
}

export default App;
