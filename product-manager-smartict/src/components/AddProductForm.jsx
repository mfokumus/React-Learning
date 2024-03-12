import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Data } from "../data/Data";

const AddProductForm = () => {
  const [productName, setProductName] = useState("");
  const [productAuthor, setProductAuthor] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState(null);

  const handleFormSubmit = () => {
    // Yeni ürünü ekleme işlemi burada gerçekleştirilebilir
    const newProduct = {
      id: Data.length + 1,
      name: productName,
      author: productAuthor,
      price: parseFloat(productPrice),
      image: productImage || MeImage, // Eğer yüklenen bir resim yoksa, varsayılan resmi kullan
    };
    Data.push(newProduct);
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Ürün Ekle</h2>
      <form className="max-w-lg mx-auto">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image"
          >
            Ürün Resmi (URL)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="image"
            type="file"
            accept="image/*"
            onChange={(e) =>
              setProductImage(URL.createObjectURL(e.target.files[0]))
            }
          />
          {productImage && (
            <img
              src={productImage}
              alt="Product"
              className="mt-2 w-32 h-32 object-cover"
            />
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Ürün İsmi
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Ürün İsmi"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="author"
          >
            Yazar
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="author"
            type="text"
            placeholder="Yazar"
            value={productAuthor}
            onChange={(e) => setProductAuthor(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="price"
          >
            Fiyat (TL)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            type="number"
            placeholder="Fiyat (TL)"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleFormSubmit}
          >
            Ürün Ekle
          </Link>
          <Link
            to="/"
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            İptal
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
