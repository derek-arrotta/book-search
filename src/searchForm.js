import React, { Component } from  'react';
import './searchForm.css'

class SearchForm extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      search: "",
      printType: "",
      bookType: ""
    };
  }

  searchChanged(search) {
    this.setState({
      search
    });
  }

  printTypeChanged(printType) {
    this.setState({
      printType
    });
  }

  bookTypeChanged(bookType) {
    this.setState({
      bookType
    });
  }

  handleSubmit(e {
    e.preventDefault();
    const 
  })
  
  render() {
    return (
      <div className="searchForm">
        <form>
          <div className="search">
            <label>Search: </label>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="i.e. author, book, subject, etc."
              onChange={e => this.search(e.target.value)}
              required
            />
            <button
              type="submit"
            >
              Search
            </button>
          </div>
          <div className="printAndBookType">
              <label>Print Type: </label>
              <select id="printType">
                <option>all</option>
                <option>books</option>
                <option>magazines</option>
              </select>
              <label>Book Type: </label>
              <select id="bookType">
                <option>no filter</option>
                <option>partial</option>
                <option>full</option>
                <option>free-ebooks</option>
                <option>paid-ebooks</option>
                <option>ebooks</option>
              </select>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchForm;