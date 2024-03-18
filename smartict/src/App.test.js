import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

test("renders navbar correctly", () => {
  render(<App />);

  // Navbar başlığını kontrol et
  const navbarTitle = screen.getByRole("heading", {
    name: /SmartICT Frontend Challenge/i,
  });
  expect(navbarTitle).toBeInTheDocument();

  // Menü düğmelerini kontrol et
  const homeButton = screen.getByRole("button", { name: /Anasayfa/i });
  expect(homeButton).toBeInTheDocument();

  const addProductButton = screen.getByRole("button", { name: /Ürün Ekle/i });
  expect(addProductButton).toBeInTheDocument();
});

test("renders product list initially", () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const productListElement = screen.getByText(/ProductList/i);
  expect(productListElement).toBeInTheDocument();
});

test("navigates to add-product route", () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const addProductLink = screen.getByText(/AddProductForm/i);
  expect(addProductLink).toBeInTheDocument();

  // "Add Product" bağlantısına tıklayarak add-product route'una geçiş yapılmasını sağlıyoruz
  userEvent.click(addProductLink);

  const addProductFormElement = screen.getByText(/Ürün Ekle/i);
  expect(addProductFormElement).toBeInTheDocument();
});
