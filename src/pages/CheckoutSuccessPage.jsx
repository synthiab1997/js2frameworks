import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";  
import { useCart } from "../context/CartContext";
import Confetti from "react-confetti";

const CheckoutSuccessPage = () => {
  const { clearCart } = useCart();
  const navigate = useNavigate();
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    clearCart(); 

    // ⏳ Hide confetti after 4 seconds
    const timer = setTimeout(() => setShowConfetti(false), 4000);
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [clearCart]);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center p-6"
      style={{
        backgroundImage: "url('https://cdn.pixabay.com/photo/2025/01/18/15/49/balloons-9342582_1280.png')",
      }}
    >
      {showConfetti && <Confetti />} {/* ✅ Confetti Animation */}

      <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md">
        <h2 className="text-2xl font-bold text-green-600">🎉 Thank You for Your Purchase!</h2>
        <p className="mt-2 text-lg">Your order has been placed successfully.</p>

        <button
        onClick={() => (window.location.href = "/")}
        className="mt-4 px-6 py-2 bg-[#B7B1F2] text-white rounded-lg shadow-md hover:bg-[#A59EDD] transition-all duration-300"
        >
        Back to Store
        </button>

      </div>
    </div>
  );
};

export default CheckoutSuccessPage;
