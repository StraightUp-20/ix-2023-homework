import React, { useState, useEffect } from "react";
import BookService from "../../services/BookService";
import { Book } from "../../models/Book";

export default function BookForm(props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");

  useEffect(() => {
    if (props.bookToEdit) {
      setTitle(props.bookToEdit.title);
      setAuthor(props.bookToEdit.author);
      setIsbn(props.bookToEdit.isbn);
    }
  }, [props.bookToEdit]);

  async function onBookFormSubmit(e) {
    e.preventDefault();

    if (!isValid) {
      return;
    }

    const book = await BookService.createBook(
      new Book(title, author, isbn, null)
    );
    props.onBooksCreate(book);
    clearInputs();
  }

  function isValid() {
    return title !== "" && author !== "" && isbn !== "";
  }

  function clearInputs() {
    setTitle("");
    setAuthor("");
    setIsbn("");
  }

  return (
    <div>
      <h1> Library Books </h1>

      <form id="form" onSubmit={onBookFormSubmit}>
        <div className="form-group mt-4">
          <label> Title: </label>
          <input
            id="input-title"
            type="text"
            className="form-control"
            placeholder="Enter Book Title here"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="mt-4">
            <label>Author: </label>
            <input
              id="input-author"
              type="text"
              className="form-control"
              placeholder="Enter Book Author here"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <label>#ISBN: </label>
            <input
              id="input-isbn"
              type="text"
              className="form-control"
              placeholder="Enter Book ISBN here"
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
            />
          </div>
          <div>
            <button
              type="submit"
              className="btn btn-outline-success mt-4 form-control"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
