import React from "react";

export default class Slot extends React.Component {
    render() {
        return <h2>{this.props.value}</h2>;
    }
}
