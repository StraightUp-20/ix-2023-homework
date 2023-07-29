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
  const [bookToEdit, setBookToEdit] = useState(null);

  useEffect(() => {
    if (!books.length) {
      onInitalLoad();
    }
  }, []);

  async function onInitalLoad() {
    try {
      const books = await TaskService.fetchTasks();
      setBooks(books);
    } catch (err) {
      console.log(err);
    }
  }

  async function onBookCreate(book) {
    setBookToEdit(null);
    setBooks([...books, book]);
  }

  async function onBookRemove(bookId) {
    // await BookService.deleteBook(bookId);
    setBooks(books.filter((x) => x.isbn !== bookId.isbn));
  }

  // async function onTaskCompleteToggle(bookId) {
  //   const taskToToggle = books.find((book) => book.id === bookId);
  //   taskToToggle.complete = !taskToToggle.complete;

  //   const updatedBook = await BookService.updateBook(taskToToggle);

  //   setBooks(
  //     books.map((book) => {
  //       return book.id === bookId ? bookTask : book;
  //     })
  //   );
  // }

  async function onBookEdit(book) {
    setBookToEdit(book);
    setBooks(books.filter((x) => x.isbn !== book.isbn));
    onBookRemove(book);
  }

  return (
    <div className="container mt-5">
      <div className="card card-body text-start p-4">
        <BookForm onBookCreate={onBookCreate} bookToEdit={bookToEdit} />
        <BookTable
          tasks={books}
          onBookRemove={onBookRemove}
          onBookEdit={onBookEdit}
        />
      </div>
    </div>
  );
}
