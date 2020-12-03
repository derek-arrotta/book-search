import React, { Component } from "react";
import "./Book.css"

class Book extends Component {
  render() {
    return (
      <div id="book">
          {(this.props.booksTotal === 0)
            ? <div>No Results :(</div>
            : (
                <div>
                  {this.props.books.map((book, index) => (
                    <li key={index}>
                      <div id="title">{book.volumeInfo.title}</div>
                      <div id="row">
                        <div id="column">
                          <img src={book.volumeInfo.imageLinks.thumbnail} alt="book cover"/>
                        </div>
                        <div id="column" className="book-info">
                          
                          {(book.volumeInfo.printType === 'MAGAZINE')
                            ? <div>Author(s): NA</div>
                            : <div>Author(s): {book.volumeInfo.authors.join(", ")}</div> 
                          }
                          {
                            (book.saleInfo.saleability === 'NOT_FOR_SALE') ? <div>Price: Not For Sale</div> : 
                            (this.props.bookType === 'free-ebooks') ? <div>Price: Free</div> :
                            <div>Price: ${book.saleInfo.listPrice.amount}</div>
                          }
                          <div id="description">{book.volumeInfo.description}</div>
                        </div>
                      </div>
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