import React, { Component } from  'react';
import './searchForm.css'

class SearchForm extends Component {

  render() {
    return (
      
      <form>
        <div className="search">
          <label>Search: </label>
          <input
            type="text"
            id="search-box"
            placeholder="i.e. author, book, subject, etc."
          />
          <button type="submit" >
            Search
          </button>
        </div>
        <div className="printAndBookType">
            <label>Print Type: </label>
            <select id="printType">
              <option value="all">all</option>
              <option value="books">books</option>
              <option value="magazines">magazines</option>
            </select>
            <label>Book Type: </label>
            <select id="bookType">
              <option value="no filter">no filter</option>
              <option value="partial">parts of text are viewable</option>
              <option value="full">all of text is viewable</option>
              <option value="free-ebooks">free ebooks</option>
              <option value="paid-ebooks">paid ebooks</option>
              <option value="ebooks">paid or free ebooks</option>
            </select>
        </div>
      </form>
    )
  }
}

export default SearchForm;