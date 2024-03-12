import React, { useContext, useState } from "react";
import ReactPaginate from "react-paginate";
import { BooksContext } from "../App";

const ProductList = () => {
  const context = useContext(BooksContext);
  console.log(context, "context");

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-5">
        {context.state.bookList.map((item) => (
          <div key={item.id} className="product-item">
            <img
              className="w-[200px] h-[200px] object-cover m-auto"
              src={item?.image}
              alt=""
            />
            <div className="text-lg mt-3 font-bold text-center">
              {item?.name}
            </div>
            <div className="text-sm mt-2 font-bold text-center">
              {item?.content}
            </div>
            <div className="text-center mt-2 mb-1 font-bold text-lg">
              {item?.price}
              <span> TL</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
