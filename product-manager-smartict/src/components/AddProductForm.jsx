import React, { useContext, useEffect, useState } from "react";
import MeImage from "../assets/me.jpg";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useProducts } from "../App";

const AddProductForm = () => {
  const { products, addProduct } = useProducts();

  const [productName, setProductName] = useState("");
  const [productAuthor, setProductAuthor] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState(null);

  const navigate = useNavigate();

  const [touched, setTouched] = useState({
    name: false,
    author: false,
    price: false,
  });

  const handleFormSubmit = () => {
    if (!productName || !productAuthor || !productPrice || !productImage) {
      toast.error("Lütfen tüm alanları doldurun.");
      return;
    }
    // Yeni ürünü ekleme işlemi burada gerçekleştirilebilir
    const newProduct = {
      id: products.length + 1, // setProducts içinde products.length + 1 kullanın
      name: productName,
      author: productAuthor,
      price: parseFloat(productPrice),
      image: productImage || MeImage, // Eğer yüklenen bir resim yoksa, varsayılan resmi kullan
    };

    // Yeni ürünü eklemek için addProduct kullan
    addProduct(newProduct);

    // Başarı mesajını gösterme ve anasayfa yönlendirmesi 
    toast.success("Ürün başarıyla eklendi!", {
      autoClose: 2000,
      onClose: () => navigate("/"),
    });
  };

  const handleBlur = (field) => {
    if (field === "name" && productName.trim() === "") {
      setTouched((prevState) => ({
        ...prevState,
        name: true,
      }));
    } else if (field === "author" && productAuthor.trim() === "") {
      setTouched((prevState) => ({
        ...prevState,
        author: true,
      }));
    } else if (field === "price" && productPrice.trim() === "") {
      setTouched((prevState) => ({
        ...prevState,
        price: true,
      }));
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Ürün Ekle</h2>
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
        <div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Ürün İsmi
            </label>
            <input
              className={
                "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" +
                (touched.name && productName.trim() === ""
                  ? " border-red-500"
                  : " border-blue-500")
              }
              id="name"
              type="text"
              placeholder="Ürün İsmi"
              value={productName}
              onChange={(e) => {
                setProductName(e.target.value);
                setTouched((prevState) => ({
                  ...prevState,
                  name: false,
                }));
              }}
              onBlur={() => handleBlur("name")}
            />
            {touched.name && productName.trim() === "" && (
              <p className="text-red-500 text-xs italic">
                Bu alanı boş bırakamazsınız.
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="author"
            >
              Yazar
            </label>
            <input
              className={
                "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" +
                (touched.author && productAuthor.trim() === ""
                  ? " border-red-500"
                  : " border-blue-500")
              }
              id="author"
              type="text"
              placeholder="Yazar"
              value={productAuthor}
              onChange={(e) => {
                setProductAuthor(e.target.value);
                setTouched((prevState) => ({
                  ...prevState,
                  author: false,
                }));
              }}
              onBlur={() => handleBlur("author")}
            />
            {touched.author && productAuthor.trim() === "" && (
              <p className="text-red-500 text-xs italic">
                Bu alanı boş bırakamazsınız.
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="price"
            >
              Fiyat (TL)
            </label>
            <input
              className={
                "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" +
                (touched.price && productPrice.trim() === ""
                  ? " border-red-500"
                  : " border-blue-500")
              }
              id="price"
              type="number"
              placeholder="Fiyat (TL)"
              value={productPrice}
              onChange={(e) => {
                setProductPrice(e.target.value);
                setTouched((prevState) => ({
                  ...prevState,
                  price: false,
                }));
              }}
              onBlur={() => handleBlur("price")}
            />
            {touched.price && productPrice.trim() === "" && (
              <p className="text-red-500 text-xs italic">
                Bu alanı boş bırakamazsınız.
              </p>
            )}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleFormSubmit}
          >
            Ürün Ekle
          </button>
          <div className="flex gap-2">
            <Link
              to="/"
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              İptal
            </Link>
            <Link
              to="/"
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Ana Sayfaya Dön
            </Link>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddProductForm;
