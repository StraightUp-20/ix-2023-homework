import React from "react";

export default function BookTable(props) {
  return (
    <div>
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="table-body">
          {props.books.map((book) => {
            return (
              <tr key={book.isbn}>
                <td id="input-title">{book.title}</td>
                <td id="input-author">{book.author}</td>
                <td id="input-isbn">{book.isbn}</td>
                <td>
                  <div>
                    <button
                      className="btn btn-danger me-1"
                      onClick={() => props.onBookRemove(book)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-warning ms-1"
                      oncClick={() => props.onBookEdit(book)}
                    >
                      Edit
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
