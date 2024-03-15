import React, { useContext, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Pagination from "./Pagination";
import { useProducts } from "../App";
import ProductDetail from "./ProductDetail";

const ProductList = () => {
  const { products, removeProduct } = useProducts();

  const [itemOffset, setItemOffset] = useState(0);
  const [sortedBy, setSortedBy] = useState("mostVoted"); // State to track sorting criteria
  const [votedProducts, setVotedProducts] = useState({}); // State to track votes

  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products
    .sort((a, b) => {
      if (sortedBy === "mostVoted") {
        return (votedProducts[b.id] || 0) - (votedProducts[a.id] || 0);
      } else {
        return (votedProducts[a.id] || 0) - (votedProducts[b.id] || 0);
      }
    })
    .slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  const handleSortChange = (e) => {
    setSortedBy(e.target.value);
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="mt-2 mb-4 flex justify-end items-center">
          <div>
            <label htmlFor="sort" className="mr-2 font-bold">
              Sort by:
            </label>
            <select
              id="sort"
              className="p-1 border border-gray-300 rounded bg-orange-500"
              value={sortedBy}
              onChange={handleSortChange}
            >
              <option value="mostVoted">Most Voted</option>
              <option value="leastVoted">Least Voted</option>
            </select>
          </div>
        </div>

        <div className=" grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-8 ">
          {currentItems.map((item) => (
            <div key={item.id} className="flex items-center border-[2px]">
              <ProductDetail
                id={item.id}
                name={item.name}
                author={item.author}
                price={item.price}
                removeProduct={removeProduct}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row justify-center items-center mt-5">
        <Pagination />
      </div>
      {/* <ReactPaginate
        className="paginate"
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      /> */}
    </>
  );
};

export default ProductList;

// import React, { useState } from "react";
// import ReactPaginate from "react-paginate";
// import { useProducts } from "../App";
// import ProductDetail from "./ProductDetail";

// const ProductList = () => {
//   const { products, removeProduct } = useProducts();

//   const [itemOffset, setItemOffset] = useState(0);
//   // Simulate fetching items from another resources.
//   // (This could be items from props; or items loaded in a local state
//   // from an API endpoint with useEffect and useState)
//   const itemsPerPage = 5;
//   const endOffset = itemOffset + itemsPerPage;
//   console.log(`Loading items from ${itemOffset} to ${endOffset}`);
//   const currentItems = products.slice(itemOffset, endOffset);
//   const pageCount = Math.ceil(products.length / itemsPerPage);

//   // Invoke when user click to request another page.
//   const handlePageClick = (event) => {
//     const newOffset = (event.selected * itemsPerPage) % products.length;
//     console.log(
//       `User requested page number ${event.selected}, which is offset ${newOffset}`
//     );
//     setItemOffset(newOffset);
//   };

//   return (
//     <>
//       <div className="container mx-auto">
//         <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-8 justify-items-center ">
//           {currentItems.map((item, index) => (
//             <ProductDetail
//               image={item?.image}
//               id={item?.id}
//               name={item?.name}
//               author={item?.author}
//               price={item?.price}
//               key={index}
//               removeProduct={removeProduct}
//             />
//           ))}
//         </div>
//       </div>
//       {/* Pagination */}
//       <ReactPaginate
//         className="paginate "
//         breakLabel="..."
//         nextLabel=">"
//         onPageChange={handlePageClick}
//         pageRangeDisplayed={5}
//         pageCount={pageCount}
//         previousLabel="<"
//         renderOnZeroPageCount={null}
//       />
//     </>
//   );
// };

// export default ProductList;
