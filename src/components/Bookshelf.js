import React from "react";
import Book from "./Book";

const Bookshelf = ({ bookshelfTitle, books, shelfID }) => {
  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{bookshelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => {
              return (
                book.shelf === shelfID && (
                  <Book
                    key={book.id}
                    id={book.id}
                    imageURL={book.imageLinks.thumbnail}
                    title={book.title}
                    authors={book.authors}
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
