import React from "react";

export default function BookTable(props) {
  return (
    <div>
      <table className="table mt-5">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">ISBN</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody id="table-body">
          {props.books.map((book) => {
            return (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.isbn}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger me-1"
                    onClick={() => props.onBookRemove(book)}
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    className="btn btn-warning ms-1"
                    onClick={() => props.onBookEdit(book)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
