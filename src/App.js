// IMPORT
import React, { Component } from "react";
import "./App.css";
import Form from './Form';
import BookList from './BookList';


// APP COMPONENT
class App extends Component {
  
  // define props
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
      printType: 'all',
      bookType: 'no filter',
      books: [],
    };
    // bind update functions to states?
    this.searchChange = this.searchChange.bind(this);
    this.printTypeChange = this.printTypeChange.bind(this);
    this.bookTypeChange = this.bookTypeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateDataState = this.updateDataState.bind(this);
  }

  // fetches from google books api
  fetchBooks() {
    const googleBookURL = `https://www.googleapis.com/books/v1/volumes`;
    const APIkey = 'AIzaSyBbwfVgB3Tm0styebgMNI-I_Zw7WjRqDUo';
    
    // if 'no filter' is selected, run fetch without filter parameter
    if (this.state.bookType === "no filter") {
      fetch(`${googleBookURL}?q=${this.state.searchInput}&printType=${this.state.printType}&key=${APIkey}`)
        .then(res => res.json())
        .then(response => {
          console.log(response);
          this.updateDataState(response.items);
        });
    }
    else {
      fetch(`${googleBookURL}?q=${this.state.searchInput}&printType=${this.state.printType}&filter=${this.state.bookType}&key=${APIkey}`)
        .then(res => res.json())
        .then(response => {
          console.log(response);
          this.updateDataState(response.items);
        });
    }
  }

  // update state with new response data after submit is pressed
  updateDataState(responseItems) {
   console.log('display data was called');
   this.setState({books: responseItems});
   console.log(this.state.books);
  }

  // if search input, print type, or book type is changed, update the state
  searchChange(searchInput) {
    this.setState({searchInput});
  }
  printTypeChange(printType) {
    this.setState({printType});
  }
  bookTypeChange(bookType) {
    this.setState({bookType});
  }

  // when submit is clicked, run fetchBooks
  handleSubmit(event) {
    console.log(this.state.searchInput);
    console.log(this.state.printType);
    console.log(this.state.bookType);
    event.preventDefault();
    this.fetchBooks();
  }

  // render APP (header, form, list of books)
  render() {
    return (
      <div className="App">
        
        {/* HEADER */}
        <header>
          <h1>Google Book Search</h1>
        </header>

        {/* FORM */}
        <Form 
          searchChange={searchInput => this.searchChange(searchInput)}
          printTypeChange={printType => this.printTypeChange(printType)}
          bookTypeChange={bookType => this.bookTypeChange(bookType)}
          handleSubmit={event => this.handleSubmit(event)}
        />

        {/* LIST OF BOOKS */}
        <BookList
          books={this.state.books}
        />

      </div>
    );
  }

}

export default App;



//-----------------------------------------------------------------------
// THIS CODE BELOW WAS IN RENDER/RETURN BEFORE BEING MOVED TO ITS OWN COMPONENT
//------------------------------------------------------------------------

/*
    FORM
<form onSubmit={this.handleSubmit}>
  <label id="searchInput">
    Name:
    <input
      type="text"
      value={this.state.searchInput}
      onChange={e => this.searchChange(e.target.value)}
    />
  </label>
  <input type="submit" value="Submit" />
  <label>Print Type: 
    <select
      id="printType"
      value={this.state.printType}
      onChange={e => this.printTypeChange(e.target.value)}
    >
      <option value="all">all</option>
      <option value="books">books</option>
      <option value="magazines">magazines</option>
    </select>
  </label>
  <label>Book Type: 
    <select
      id="bookType"
      value={this.state.bookType}
      onChange={e => this.bookTypeChange(e.target.value)}
    >
      <option value="no filter">no filter</option>
      <option value="partial">parts of text are viewable</option>
      <option value="full">all of text is viewable</option>
      <option value="free-ebooks">free ebooks</option>
      <option value="paid-ebooks">paid ebooks</option>
      <option value="ebooks">paid or free ebooks</option>
    </select>
  </label>
</form>
*/

/*
    LIST
<ul >
  {this.state.books.map((book, index) => (
    <li key={index}>
      <img src={book.volumeInfo.imageLinks.thumbnail} alt="book cover" />
      <div>{book.volumeInfo.title}</div>
      <div>Author(s): {book.volumeInfo.authors}</div>
      {(book.saleInfo.saleability === 'NOT_FOR_SALE')
      ? <div>Price: Not For Sale</div>
      : <div>Price: ${book.saleInfo.listPrice.amount}</div>
      }
      <div>{book.volumeInfo.description}</div>
      <hr />
    </li>
  ))}
</ul>
*/