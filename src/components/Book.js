import React from "react";
import BookshelfChanger from "./BookshelfChanger";

const Book = ({ id, imageURL, title, authors }) => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${imageURL}")`,
            }}
          />
          <BookshelfChanger />
        </div>
        <div className="book-title"> {title} </div>
        {authors.map((author) => (
          <div key={author} className="book-authors">
            {author}
          </div>
        ))}
      </div>
    </li>
  );
};

export default Book;
