// src/__tests__/AddProductForm.test.jsx

import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddProductForm from "../components/AddProductForm";
import { ProductsProvider } from "../App";

// Mocking useNavigate hook
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("AddProductForm Component", () => {
  test("renders AddProductForm correctly", () => {
    render(
      <ProductsProvider>
        <Router>
          <AddProductForm />
          <ToastContainer />
        </Router>
      </ProductsProvider>
    );

    // Asserting if form fields and buttons are rendered
    expect(screen.getByText("Ürün Ekle")).toBeInTheDocument();
    expect(screen.getByLabelText("Ürün İsmi")).toBeInTheDocument();
    expect(screen.getByLabelText("Yazar")).toBeInTheDocument();
    expect(screen.getByLabelText("Fiyat (TL)")).toBeInTheDocument();
    expect(screen.getByText("Ürün Ekle")).toBeInTheDocument();
    expect(screen.getByText("İptal")).toBeInTheDocument();
    expect(screen.getByText("Ana Sayfaya Dön")).toBeInTheDocument();
  });

  test("displays error message when form is submitted with empty fields", async () => {
    render(
      <ProductsProvider>
        <Router>
          <AddProductForm />
          <ToastContainer />
        </Router>
      </ProductsProvider>
    );

    const addButton = screen.getByText("Ürün Ekle");
    fireEvent.click(addButton);

    // Asserting if error message is displayed
    await waitFor(() =>
      expect(
        screen.getByText("Lütfen tüm alanları doldurun.")
      ).toBeInTheDocument()
    );
  });

  test("displays error messages when form fields are touched and left empty", async () => {
    render(
      <ProductsProvider>
        <Router>
          <AddProductForm />
          <ToastContainer />
        </Router>
      </ProductsProvider>
    );

    const productNameInput = screen.getByLabelText("Ürün İsmi");
    const authorInput = screen.getByLabelText("Yazar");
    const priceInput = screen.getByLabelText("Fiyat (TL)");

    fireEvent.blur(productNameInput);
    fireEvent.blur(authorInput);
    fireEvent.blur(priceInput);

    // Asserting if error messages are displayed
    await waitFor(() =>
      expect(
        screen.getByText("Bu alanı boş bırakamazsınız.")
      ).toBeInTheDocument()
    );
    expect(
      screen.getByText("Bu alanı boş bırakamazsınız.")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Bu alanı boş bırakamazsınız.")
    ).toBeInTheDocument();
  });

  test("redirects to home page after successfully adding a product", async () => {
    // Mocking addProduct function
    const mockAddProduct = jest.fn();

    render(
      <ProductsProvider value={{ addProduct: mockAddProduct }}>
        <Router>
          <AddProductForm />
          <ToastContainer />
        </Router>
      </ProductsProvider>
    );

    const productNameInput = screen.getByLabelText("Ürün İsmi");
    const authorInput = screen.getByLabelText("Yazar");
    const priceInput = screen.getByLabelText("Fiyat (TL)");

    // Filling form fields
    fireEvent.change(productNameInput, { target: { value: "Test Product" } });
    fireEvent.change(authorInput, { target: { value: "Test Author" } });
    fireEvent.change(priceInput, { target: { value: "10" } });

    const addButton = screen.getByText("Ürün Ekle");
    fireEvent.click(addButton);

    // Asserting if success message is displayed
    await waitFor(() =>
      expect(screen.getByText("Ürün başarıyla eklendi!")).toBeInTheDocument()
    );

    // Asserting if addProduct function is called with correct arguments
    expect(mockAddProduct).toHaveBeenCalledWith({
      id: 1,
      name: "Test Product",
      author: "Test Author",
      price: 10,
    });

    // Asserting if redirect is triggered
    expect(require("react-router-dom").useNavigate).toHaveBeenCalledWith("/");
  });
});
