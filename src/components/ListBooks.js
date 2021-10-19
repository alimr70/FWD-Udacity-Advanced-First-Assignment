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
