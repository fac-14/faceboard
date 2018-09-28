import React from "react";

export default class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleFormSubmit}>
        <div>
          <label htmlFor="username-input">Github username: </label>
          <input
            id="username-input"
            type="text"
            value={this.props.input}
            onChange={this.props.handleFormChange}
            autoComplete="off"
            required
          />
        </div>
        <button id="form-btn" type="submit">Submit</button>
      </form>
    );
  }
}
