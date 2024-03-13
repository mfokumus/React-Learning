import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import AddProductForm from "./components/AddProductForm";
import { Data } from "./data/Data";
import { createContext, useContext, useEffect, useState } from "react";
import ProductList from "./components/ProductList";

export const ProductsContext = createContext();
export const useProducts = () => useContext(ProductsContext);

function App() {
  // const [state, setState] = useState(Data);

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

  // useEffect(() => {
  //   const savedProducts = JSON.parse(localStorage.getItem("savedProducts"));
  //   if (savedProducts) {
  //     setState(savedProducts);
  //   }
  // }, [state]);

  return (
    <ProductsContext.Provider value={{ products, setProducts, addProduct }}>
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/" exact element={<ProductList />} />
          <Route path="/add-product" element={<AddProductForm />} />
        </Routes>
      </div>
    </ProductsContext.Provider>
  );
}

export default App;
