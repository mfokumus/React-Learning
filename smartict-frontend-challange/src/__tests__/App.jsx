import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders navbar", () => {
  render(<App />);
  const linkElement = screen.getByText(/Navbar/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders product list initially", () => {
  render(<App />);
  const productListElement = screen.getByText(/Product List/i);
  expect(productListElement).toBeInTheDocument();
});

test("renders add product form when navigating to add-product route", () => {
  render(<App />);
  fireEvent.click(screen.getByText(/Add Product/i)); // Simulating navigation to add-product route
  const addProductFormElement = screen.getByText(/Add Product Form/i);
  expect(addProductFormElement).toBeInTheDocument();
});
