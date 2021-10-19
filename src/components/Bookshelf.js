import React from "react";
import Book from "./Book";

const Bookshelf = ({ bookshelfTitle, books, shelfID, onBookshelfChange }) => {
  const shelfs = {
    currentlyReading: "Currently Reading",
    wantToRead: "Want To Read",
    read: "Read",
  };
  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfs[bookshelfTitle]}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => {
              return (
                book.shelf === shelfID && (
                  <Book
                    key={book.id}
                    book={book}
                    onBookshelfChange={onBookshelfChange}
                  />
                )
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Bookshelf;
