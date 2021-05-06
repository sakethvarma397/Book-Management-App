import React from "react";
import { useParams } from "react-router-dom";
import BookForm from "./BookForm";

export default function EditBook({ history, books, setBooks }) {
  // Equivalent to const id = props.match.id
  const { id } = useParams();
  const BookToEdit = books.find((book) => book.id === id);

  const handleSubmit = (book) => {
    const filteredBooks = books.filter((book) => book.id !== id);
    setBooks([book, ...filteredBooks]);
    history.push("/");
  };

  return <BookForm book={BookToEdit} handleOnSubmit={handleSubmit} />;
}
