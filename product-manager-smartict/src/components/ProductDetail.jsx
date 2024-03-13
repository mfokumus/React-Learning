import React from "react";

const ProductDetail = ({ id, image, name, author, price }) => {
  return (
    <div className="flex flex-col product-item">
      <div className="absolute top-0 left-0 z-10 bg-gray-900 text-white rounded-full p-2">
        {id}
      </div>
      <img
        className="w-[200px] h-[200px] object-cover m-auto"
        src={image}
        alt=""
      />
      <div className="text-lg mt-3 font-bold text-center">
        Kitap adı: {name}
      </div>
      <div className="text-lg mt-2 font-bold text-center">Yazar: {author}</div>
      <div className="text-center mt-2 mb-1 font-bold text-lg">
        Fiyat : {price}
        <span> TL</span>
      </div>
    </div>
  );
};

export default ProductDetail;
