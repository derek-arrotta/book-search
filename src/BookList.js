import React, { Component } from "react";
import Book from './Book'

class BookList extends Component {
  render() {
    return (
      <ul >
        <Book 
          books={this.props.books}
          booksTotal={this.props.booksTotal}
          bookType={this.props.bookType}
        />
      </ul>
      
    )
  }
}

export default BookList;


//------------------------------------------------------------------------------
// THIS CODE BELOW WAS IN RENDER/RETURN BEFORE BEING MOVED TO ITS OWN COMPONENT
//------------------------------------------------------------------------------

/*
    BOOK
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
*/