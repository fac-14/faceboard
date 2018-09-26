import React from "react";
import Slot from "./Slot";

export default class Board extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <Slot value={this.props.slots.box1} />
                    <Slot value={this.props.slots.box2} />
                    <Slot value={this.props.slots.box3} />
                </div>
                <div>
                    <Slot value={this.props.slots.box4} />
                    <Slot value={this.props.slots.box5} />
                    <Slot value={this.props.slots.box6} />
                </div>
                <div>
                    <Slot value={this.props.slots.box7} />
                    <Slot value={this.props.slots.box8} />
                    <Slot value={this.props.slots.box9} />
                </div>
            </React.Fragment>
        );
    }
}
