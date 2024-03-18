import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../components/Navbar";

test("renders Navbar correctly", () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

  // Asserting if SmartICT Frontend Challenge title is rendered
  expect(screen.getByText("SmartICT Frontend Challenge", { selector: 'a' })).toBeInTheDocument();

  // Asserting if navigation buttons are rendered
  expect(screen.getByText("Anasayfa")).toBeInTheDocument();
  expect(screen.getByText("Ürün Ekle", { selector: 'button' })).toBeInTheDocument();
});
