import React, { useState, useEffect } from "react";

// Model imports
import { Book } from "../../models/Book";

// Component imports
import BookForm from "./BookForm";
import BookTable from "./BookTable";

// Service imports
import BookService from "../../services/BookService";

export default function BookPage() {
  const [books, setBooks] = useState([]);
  const [bookToEdit, setBookToEdit] = useState("");

  useEffect(() => {
    onInitalLoad();
  }, []);

  async function onInitalLoad() {
    try {
      const books = await BookService.fetchBooks();
      setBooks(books);
    } catch (err) {
      console.log(err);
    }
  }

  async function onBooksCreated(book) {
    setBooks([...books, book]);
    setBookToEdit(null);
  }

  async function onBookRemove(book) {
    await BookService.deleteBook(book.id);

    setBooks(books.filter((x) => x.isbn !== book.id));
  }

  async function onBookEdit(book) {
    setBookToEdit(book);
    setBooks(books.filter((x) => x.isbn !== book.id));
    onBookRemove(book);
  }

  return (
    <div className="container mt-5">
      <div className="card card-body text-start p-4">
        <BookForm onBooksCreated={onBooksCreated} bookToEdit={bookToEdit} />
        <BookTable
          books={books}
          onBookRemove={onBookRemove}
          onBookEdit={onBookEdit}
        />
      </div>
    </div>
  );
}
