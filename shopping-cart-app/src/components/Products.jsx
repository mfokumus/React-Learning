import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BooksContext } from "../App";

const Products = () => {
  const context = useContext(BooksContext);
  console.log(context, "context");

  const totalCartCount = context.state.cart.reduce(
    (total, book) => total = total + book.count,
    0
  )

  return (
    <div>
      <h2>
        <span>Kitap Listesi</span>
        <Link style={{ textDecoration: "none" }} to="/cart">
          Sepetim ({totalCartCount})
        </Link>
      </h2>
      {context.state.bookList.map((book) => (
        <div className="book" key={book.id}>
          <img src={book.image} alt={book.name} />
          <div>
            <h4>{book.name}</h4>
            <p>Yazar: {book.author}</p>
            <p>Fiyat: &#8378; {book.price}</p>
            <button onClick={() => context.addToCart(book)}>Sepete Ekle</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
