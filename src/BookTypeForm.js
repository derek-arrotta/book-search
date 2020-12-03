import React, { Component } from "react";
import "./BookTypeForm.css"

class BookTypeForm extends Component {
  render() {
    return (
      <label id="bookTypeForm">
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
    );
  }
}

export default BookTypeForm;
