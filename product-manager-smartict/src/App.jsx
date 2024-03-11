import "./App.css";
import NavigationBar from "./components/NavigationBar";
import ProductList from "./components/ProductList";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
    <div>
      <NavigationBar/>
    </div>
    <div>
      <ProductList/>
    </div>
    </>
    
  );
}

export default App;
