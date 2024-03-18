import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { MemoryRouter, BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddProductForm from "../components/AddProductForm";
import { PorductsContext } from "../App";

jest.mock("react-toastify", () => ({
  ...jest.requireActual("react-toastify"),
  toast: {
    error: jest.fn(),
    success: jest.fn(),
  },
}));

jest.mock("../App", () => ({
  useProducts: jest.fn(() => ({
    products: [],
    addProduct: jest.fn(),
  })),
}));

describe("AddProductForm Component", () => {
  test("renders AddProductForm correctly", () => {
    render(
      <MemoryRouter>
        <AddProductForm />
        <ToastContainer />
      </MemoryRouter>
    );

    // Asserting if form elements are rendered
    expect(screen.getByLabelText("Ürün İsmi")).toBeInTheDocument();
    expect(screen.getByLabelText("Yazar")).toBeInTheDocument();
    expect(screen.getByLabelText("Fiyat (TL)")).toBeInTheDocument();
    // Finding the "Ürün Ekle" button within button elements
    const addButton = screen.getByRole("button", { name: "Ürün Ekle" });
    expect(addButton).toBeInTheDocument();

    expect(screen.getByText("İptal")).toBeInTheDocument();
    expect(screen.getByText("Ana Sayfaya Dön")).toBeInTheDocument();
  });

  test("displays error message when form is submitted with empty fields", async () => {
    render(
      <MemoryRouter>
        <AddProductForm />
        <ToastContainer />
      </MemoryRouter>
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
      <MemoryRouter>
        <AddProductForm />
        <ToastContainer />
      </MemoryRouter>
    );

    const productNameInput = screen.getByLabelText("Ürün İsmi");
    const authorInput = screen.getByLabelText("Yazar");
    const priceInput = screen.getByLabelText("Fiyat (TL)");

    fireEvent.blur(productNameInput);
    fireEvent.blur(authorInput);
    fireEvent.blur(priceInput);

    // Asserting if error message is displayed
    const errorMessages = screen.getAllByText("Bu alanı boş bırakamazsınız.");
    expect(errorMessages.length).toBeGreaterThan(0);
  });

  test("adds product and redirects to home page after successfully submitting the form", async () => {
    const mockAddProduct = jest.fn();
    jest
      .spyOn(require("react-router-dom"), "useNavigate")
      .mockReturnValue(jest.fn());

    render(
      <MemoryRouter>
        <AddProductForm />
        <ToastContainer />
      </MemoryRouter>
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
