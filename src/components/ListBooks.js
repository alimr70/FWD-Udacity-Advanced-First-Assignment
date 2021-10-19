import React, { Component } from "react";
import Bookshelf from "./Bookshelf";
import * as BooksAPI from "../BooksAPI";
import { Link } from "react-router-dom";

class ListBooks extends Component {
  state = {
    shelfs: ["currentlyReading", "wantToRead", "read"],
    books: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({ books }));
    });
  }

  changeBookshelf = (id, shelf) => {
    let foundBook = this.state.books.find((book) => book.id === id);
    let newBooksState = this.state.books.filter((book) => book.id !== id);
    foundBook = { ...foundBook, shelf };
    newBooksState = [...newBooksState, foundBook];
    this.setState(() => ({
      books: newBooksState,
    }));
  };

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1> MyReads </h1>
        </div>
        <div className="list-books-content">
          {this.state.shelfs.map((shelf) => (
            <Bookshelf
              key={shelf}
              shelfID={shelf}
              bookshelfTitle={shelf}
              books={this.state.books}
              onBookshelfChange={this.changeBookshelf}
            />
          ))}
        </div>
        <Link to="/search" className="open-search">
          <button>Add a book </button>
        </Link>
      </div>
    );
  }
}

export default ListBooks;
