import React, { Component } from "react";
import Book from "./Book";

class Bookshelf extends Component {
  render() {
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.bookshelfTitle}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.books.map((book) => {
                return (
                  book.shelf === this.props.shelfID && (
                    <Book
                      key={book.title}
                      url={book.url}
                      title={book.title}
                      author={book.author}
                    />
                  )
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default Bookshelf;
