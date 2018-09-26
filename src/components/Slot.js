import React from "react";

export default class Slot extends React.Component {
    constructor(props) {
        super(props);
    }
    handleClick = () => {
        this.props.userMakesMove(this.props.value);
    }
    render() {
    const isNotEmpty = this.props.value
    return (
        <React.Fragment>
        { isNotEmpty ? (
        <div className="slot occupied" onClick={this.handleClick}>
            <h2>           
            {this.props.value}
            </h2>
        </div>
        ) : (
            <div className="slot empty"></div> 
        )  }
        </React.Fragment>
    );
  }
}
