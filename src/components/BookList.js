import React, { useContext } from "react";
import Book from "./Book";
import BooksContext from "../hooks/BooksContext";

const BookList = () => {
  const { books, setBooks } = useContext(BooksContext);
  const handleRemoveBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div className="book-list">
      {books.length ? (
        books.map((book) => {
          return (
            <Book key={book.id} handleRemoveBook={handleRemoveBook} {...book} />
          );
        })
      ) : (
        <p className="message">No Books added yet..</p>
      )}
    </div>
  );
};

export default BookList;
