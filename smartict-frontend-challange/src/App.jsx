import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddProductForm from "./components/AddProductForm";
import { Data } from "./data/Data";
import { createContext, useContext, useEffect, useState } from "react";
import ProductList from "./components/ProductList";

//Context yapısı kullanıldı
export const ProductsContext = createContext();
export const useProducts = () => useContext(ProductsContext);

function App() {
  const [products, setProducts] = useState(() => {
    // Retrieve products from local storage or set to default list
    const localData = localStorage.getItem("products");
    return localData ? JSON.parse(localData) : [...Data];
  });

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
    console.log("local", localStorage.getItem(products));
  }, [products]);

  const addProduct = (item) => {
    setProducts([...products, item]);
  };

  const removeProduct = (id) => {
    // Belirtilen ID'ye sahip ürünü filtreleme
    const updatedProducts = products.filter((product) => product.id !== id);

    // Yeni ürün dizisini ayarladık
    setProducts(updatedProducts);
  };
  return (
    <ProductsContext.Provider
      value={{ products, setProducts, addProduct, removeProduct }}
    >
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<ProductList />} />
          <Route path="/add-product" element={<AddProductForm />} />
        </Routes>
      </div>
    </ProductsContext.Provider>
  );
}

export default App;
