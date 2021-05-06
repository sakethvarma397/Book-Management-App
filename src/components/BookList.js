import React from "react";
import Book from "./Book";

const BookList = ({ books, setBooks }) => {
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
