// components/NavBar.js
import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="container mx-auto">
        <h1 className="text-white text-xl">SmartICT Frontend Challenge</h1>
      </div>
      <Link to="/add-product" className="text-white">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded">
          Ürün Ekle
        </button>
      </Link>
    </nav>
  );
};

export default NavigationBar;
