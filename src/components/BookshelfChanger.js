import React, { Component } from "react";
import * as BooksAPI from "../BooksAPI";

class BookshelfChanger extends Component {
  state = {
    book: {},
    shelf: "",
  };

  componentDidMount() {
    BooksAPI.get(this.props.book.id).then((book) =>
      this.setState(() => ({ shelf: book.shelf }))
    );
    this.setState(() => ({
      book: this.props.book,
    }));
  }

  handleChange = (e) => {
    e.persist();
    BooksAPI.update(this.state.book, e.target.value);
    if (this.props.onBookshelfChange)
      this.props.onBookshelfChange(this.state.book.id, e.target.value);
  };

  render() {
    return (
      <div className="book-shelf-changer">
        <select onChange={(e) => this.handleChange(e)} value={this.state.shelf}>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading"> Currently Reading </option>
          <option value="wantToRead"> Want to Read </option>
          <option value="read"> Read </option>
          <option value="none"> None </option>
        </select>
      </div>
    );
  }
}

export default BookshelfChanger;
