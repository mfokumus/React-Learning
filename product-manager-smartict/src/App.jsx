import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import AddProductForm from "./components/AddProductForm";
import { Data } from "../src/data/Data";
import { createContext, useState } from "react";
import ProductList from "./components/ProductList";

export const BooksContext = createContext();

function App() {
  const [state, setState] = useState({
    bookList: Data,
    cart: [],
  });

  return (
    <BooksContext.Provider value={{ state: state }}>
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/" exact element={<ProductList />} />
          <Route path="/add-product" element={<AddProductForm />} />
        </Routes>
      </div>
    </BooksContext.Provider>
  );
}

export default App;
