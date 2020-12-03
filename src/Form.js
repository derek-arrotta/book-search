import React, { Component } from "react";
import SearchForm from "./SearchForm"

class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <SearchForm
          value={this.props.searchInput}
          searchChange={searchInput => this.props.searchChange(searchInput)}
        />
        <label>
          Print Type:
          <select
            id="printType"
            value={this.props.printType}
            onChange={(e) => this.props.printTypeChange(e.target.value)}
          >
            <option value="all">all</option>
            <option value="books">books</option>
            <option value="magazines">magazines</option>
          </select>
        </label>
        <label>
          Book Type:
          <select
            id="bookType"
            value={this.props.bookType}
            onChange={(e) => this.props.bookTypeChange(e.target.value)}
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
    );
  }
}

export default Form;


//------------------------------------------------------------------------------
// THIS CODE BELOW WAS IN RENDER/RETURN BEFORE BEING MOVED TO ITS OWN COMPONENT
//------------------------------------------------------------------------------


/*
    SEARCH FORM
<label id="searchInput">
  Name:
  <input
    type="text"
    value={this.props.searchInput}
    onChange={(e) => this.props.searchChange(e.target.value)}
  />
  <input type="submit" value="Submit" />
</label>
*/