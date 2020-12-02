import React, { Component } from "react";
import Form from './Form';
import "./App.css";

class App extends Component {
  
  // define props
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
      printType: 'all',
      bookType: 'no filter',
      listItems: [],
    };
    // bind update functions to states?
    this.searchChange = this.searchChange.bind(this);
    this.printTypeChange = this.printTypeChange.bind(this);
    this.bookTypeChange = this.bookTypeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // fetches from google books api
  fetchBooks() {
    const googleBookURL = `https://www.googleapis.com/books/v1/volumes`;
    const APIkey = 'AIzaSyBbwfVgB3Tm0styebgMNI-I_Zw7WjRqDUo';
    
    // if no filter is selected, run fetch without filter parameter
    if (this.state.bookType === "no filter") {
      fetch(`${googleBookURL}?q=${this.state.searchInput}&printType=${this.state.printType}&key=${APIkey}`)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          this.displayData(data);
        });
    }
    else {
      fetch(`${googleBookURL}?q=${this.state.searchInput}&printType=${this.state.printType}&filter=${this.state.bookType}&key=${APIkey}`)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          this.displayData(data);
        });
    }
  }

  displayData(data) {
    console.log('display data was called');
    console.log(data);
    console.log(data.items[0].volumeInfo);
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

  // render of input forms
  render() {
    return (
      <div className="App">
        <header>
          <h1>Google Book Search</h1>
        </header>

        <Form 
          searchChange={searchInput => this.searchChange(searchInput)}
          printTypeChange={printType => this.printTypeChange(printType)}
          bookTypeChange={bookType => this.bookTypeChange(bookType)}
          handleSubmit={event => this.handleSubmit(event)}
        />

        <div>
          put list of books here
        </div>

        {/*
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
        */}

      </div>
    );
  }
}

export default App;
