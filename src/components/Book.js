import React from "react";
import BookshelfChanger from "./BookshelfChanger";

const Book = ({ book, onBookshelfChange }) => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${
                book.imageLinks ? book.imageLinks.thumbnail : ""
              }")`,
            }}
          />
          <BookshelfChanger
            book={book}
            onBookshelfChange={onBookshelfChange ? onBookshelfChange : ""}
          />
        </div>
        <div className="book-title"> {book.title} </div>
        {book.authors &&
          book.authors.map((author) => (
            <div key={author} className="book-authors">
              {author}
            </div>
          ))}
      </div>
    </li>
  );
};

export default Book;
