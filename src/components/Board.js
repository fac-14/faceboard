import React from "react";
import Slot from "./Slot";

export default class Board extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <Slot value={this.props.slots.box1} userMakesMove={this.props.userMakesMove}/>
                    <Slot value={this.props.slots.box2} userMakesMove={this.props.userMakesMove}/>
                    <Slot value={this.props.slots.box3} userMakesMove={this.props.userMakesMove}/>
                </div>
                <div className="row">
                    <Slot value={this.props.slots.box4} userMakesMove={this.props.userMakesMove}/>
                    <Slot value={this.props.slots.box5} userMakesMove={this.props.userMakesMove}/>
                    <Slot value={this.props.slots.box6} userMakesMove={this.props.userMakesMove}/>
                </div>
                <div className="row">
                    <Slot value={this.props.slots.box7} userMakesMove={this.props.userMakesMove}/>
                    <Slot value={this.props.slots.box8} userMakesMove={this.props.userMakesMove}/>
                    <Slot value={this.props.slots.box9} userMakesMove={this.props.userMakesMove}/>
                </div>
            </React.Fragment>
        );
    }
}
