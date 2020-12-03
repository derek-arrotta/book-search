import React, { Component } from "react";

class BookList extends Component {
  render() {
    return (
      <ul >
        {this.props.books.map((book, index) => (
          <li key={index}>
            <img src={book.volumeInfo.imageLinks.thumbnail} alt="book cover" />
            <div>{book.volumeInfo.title}</div>
            <div>Author(s): {book.volumeInfo.authors.join(", ")}</div>
            {(book.saleInfo.saleability === 'NOT_FOR_SALE')
              ? <div>Price: Not For Sale</div>
              : <div>Price: ${book.saleInfo.listPrice.amount}</div>
            }
            <div>{book.volumeInfo.description}</div>
            <hr />
          </li>
        ))}
      </ul>
      
    )
  }
}

export default BookList;