import React, { useContext, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useProducts } from "../App";
import ProductDetail from "./ProductDetail";

const ProductList = () => {
  const { products } = useProducts();

  const [itemOffset, setItemOffset] = useState(0);
  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-5">
        {products.map((item, index) => (
          <ProductDetail
            image={item?.image}
            id={item?.id}
            name={item?.name}
            author={item?.author}
            price={item?.price}
            key={index}
          />
        ))}
      </div>
      {/* Pagination */}
      <ReactPaginate
        pageCount={Math.ceil(products.length / perPage)}
        pageRangeDisplayed={5}
        marginPagesDisplayed={1}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </>
  );
};

export default ProductList;
