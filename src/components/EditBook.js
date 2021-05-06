import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import BookForm from "./BookForm";
import BooksContext from "../hooks/BooksContext";

export default function EditBook({ history }) {
  // Equivalent to const id = props.match.id
  const { id } = useParams();
  const { books, setBooks } = useContext(BooksContext);
  const BookToEdit = books.find((book) => book.id === id);

  const handleSubmit = (book) => {
    const filteredBooks = books.filter((book) => book.id !== id);
    setBooks([book, ...filteredBooks]);
    history.push("/");
  };

  return <BookForm book={BookToEdit} handleOnSubmit={handleSubmit} />;
}
