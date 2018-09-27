import React from "react";
import slideImage from "../assets/abba.png";

export default class Slot extends React.Component {
    handleClick = () => {
        this.props.userMakesMove(this.props.value);
    };
    render() {
        const isNotEmpty = this.props.value;
        const clipClasses = `clip-image clip-${this.props.value}`;
        return (
            <React.Fragment>
                {isNotEmpty ? (
                    <div className="slot occupied" onClick={this.handleClick}>
                        <img src={slideImage} className={clipClasses} />
                    </div>
                ) : (
                    <div className="slot empty" />
                )}
            </React.Fragment>
        );
    }
}
