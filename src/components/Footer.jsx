import React from 'react';

const Footer = () => {
  console.log("Footer is rendering");
  
  return (
    <footer className="mt-8 p-4 bg-gray-800 text-white text-center">
      <p>&copy; {new Date().getFullYear()} MyShop Store. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
