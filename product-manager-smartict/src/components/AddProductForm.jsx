// components/AddProductForm.js
import React, { useState } from "react";

const AddProductForm = () => {
  const [productName, setProductName] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (productName.trim() === "") {
      alert("Please enter a product name.");
      return;
    }
    // Here you can add your logic to submit the form data
    setSuccessMessage("Product added successfully!");
    setProductName("");
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
      {successMessage && (
        <div className="bg-green-200 p-2 rounded mb-4">{successMessage}</div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Product Name
          </label>
          <input
            type="text"
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
