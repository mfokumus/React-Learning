import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetail = ({ id, image, name, author, price, removeProduct }) => {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const handleRemoveClick = () => {
    setShowConfirmationModal(true);
  };

  const handleConfirmDelete = () => {
    // Close the confirmation modal
    setShowConfirmationModal(false);

    // Delete the product
    removeProduct(id);

    // Show success message
    toast.success("Ürün başarıyla silindi!", {
      autoClose: 2000,
    });
  };

  const handleCancelDelete = () => {
    // Close the confirmation modal
    setShowConfirmationModal(false);
  };

  return (
    <div>
      <div className="relative">
        <div className="flex mb-5 mx-4 items-center">
          <div className="w-[200px] h-[200px] mr-4 relative">
            <img className="w-full h-full object-cover " src={image} alt="" />
          </div>
          <div className="text-lg mb-1">
            <div>
              <span className="font-bold">Kitap adı:</span> {name}
            </div>
            <div>
              <span className="font-bold">Yazar:</span> {author}
            </div>
            <div>
              <span className="font-bold">Fiyat:</span> {price} TL
            </div>

            <button
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded inline-flex items-center"
              onClick={handleRemoveClick}
            >
              Ürünü Sil
            </button>
          </div>
        </div>
        {/* Confirmation modal window */}
        {showConfirmationModal && (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-8 rounded-lg">
              <p className="text-lg mb-4">
                Ürünü silmek istediğinizden emin misiniz?
              </p>
              <div className="flex justify-center">
                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded inline-flex items-center mr-4"
                  onClick={handleConfirmDelete}
                >
                  Sil
                </button>
                <button
                  className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded inline-flex items-center"
                  onClick={handleCancelDelete}
                >
                  İptal
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductDetail;
