import React from "react";
import Board from "./Board";
import handleMove from "../utils/handleMove";

export default class Game extends React.Component {
    state = {
        complete: false,
        board: ["A", "B", "C", "D", "E", "F", "G", "H", null]
    };
    userMakesMove = value => {
        const position = this.state.board.indexOf(value);
        const newMove = handleMove(position, this.state.board);
        console.log(newMove);
    };
    render() {
        return (
            <Board
                board={this.state.board}
                userMakesMove={this.userMakesMove}
            />
        );
    }
}
