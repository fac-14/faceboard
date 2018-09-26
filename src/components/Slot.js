import React from "react";

export default class Slot extends React.Component {
  render() {
    return (
      <div className="slot">
        <h2>{this.props.value}</h2>
      </div>
    );
  }
}
