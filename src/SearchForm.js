import React, { Component } from "react";

class SearchForm extends Component {
  render() {
    return (
      <label id="searchInput">
        Name:
        <input
          type="text"
          value={this.props.searchInput}
          onChange={(e) => this.props.searchChange(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </label>
    );
  }
}

export default SearchForm;
