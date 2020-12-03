import React, { Component } from "react";

class Book extends Component {
  render() {
    return (
      <div>
          {(this.props.booksTotal === 0)
            ? <div>No Results :(</div>
            : (
                <div>
                  {this.props.books.map((book, index) => (
                    <li key={index}>
                      <img src={book.volumeInfo.imageLinks.thumbnail} alt="book cover" />
                      <div>{book.volumeInfo.title}</div>
                      {(book.volumeInfo.printType === 'MAGAZINE')
                        ? <div>Author(s): NA</div>
                        : <div>Author(s): {book.volumeInfo.authors.join(", ")}</div> 
                      }
                      {
                        (book.saleInfo.saleability === 'NOT_FOR_SALE') ? <div>Price: Not For Sale</div> : 
                        (this.props.bookType === 'free-ebooks') ? <div>Price: Free</div> :
                        <div>Price: ${book.saleInfo.listPrice.amount}</div>
                      }
                      <div>{book.volumeInfo.description}</div>
                      <hr />
                    </li>
                  ))}
                </div>
              )
          }

      </div>
    )
  }
}

export default Book;