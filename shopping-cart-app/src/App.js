import React from "react";
import "./styles.css";
import { Route, Routes } from "react-router-dom";

import Products from "./components/Products";
import Cart from "./components/Cart";

import { data } from "./data";

export default function App() {
  return (
    <div className="App">
      <h1>
        Alışveriş Sepeti Yapımı
        <img
          src="https://avatars3.githubusercontent.com/u/60869810?v=4"
          alt="React Dersleri"
        />{" "}
        React Dersleri
      </h1>
        <Routes>
          <Route exact path="/" element={<Products/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
    </div>
    
  );
}
