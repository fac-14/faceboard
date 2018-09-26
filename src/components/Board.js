import React from "react";
import Slot from "./Slot";

export default class Board extends React.Component {
  render() {
      const winning = this.props.complete
    return (
      <React.Fragment>
         <h1>{winning ? "Ya Won" : "" }</h1> 
        <div>
          <div className="row">
            <Slot
              value={this.props.board[0]}
              userMakesMove={this.props.userMakesMove}
            />
            <Slot
              value={this.props.board[1]}
              userMakesMove={this.props.userMakesMove}
            />
            <Slot
              value={this.props.board[2]}
              userMakesMove={this.props.userMakesMove}
            />
          </div>
          <div className="row">
            <Slot
              value={this.props.board[3]}
              userMakesMove={this.props.userMakesMove}
            />
            <Slot
              value={this.props.board[4]}
              userMakesMove={this.props.userMakesMove}
            />
            <Slot
              value={this.props.board[5]}
              userMakesMove={this.props.userMakesMove}
            />
          </div>
          <div className="row">
            <Slot
              value={this.props.board[6]}
              userMakesMove={this.props.userMakesMove}
            />
            <Slot
              value={this.props.board[7]}
              userMakesMove={this.props.userMakesMove}
            />
            <Slot
              value={this.props.board[8]}
              userMakesMove={this.props.userMakesMove}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
