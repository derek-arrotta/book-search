import React, { Component } from "react";

class PrintTypeForm extends Component {
  render() {
    return (
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
    );
  }
}

export default PrintTypeForm;
