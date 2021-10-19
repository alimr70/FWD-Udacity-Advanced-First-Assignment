import React from "react";
import BookshelfChanger from "./BookshelfChanger";

const Book = ({ url, title, author }) => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${url}")`,
            }}
          />
          <BookshelfChanger />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{author}</div>
      </div>
    </li>
  );
};

export default Book;
