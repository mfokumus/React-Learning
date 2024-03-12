import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import HomePage from "./pages/HomePage";
import AddProductForm from "./components/AddProductForm";

function App() {
  return (
    <div>
      <NavigationBar />
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/add-product" element={<AddProductForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
