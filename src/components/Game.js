import React from "react";
import Board from "./Board";
import handleMove from "../utils/handleMove";
import scrambleBoard from "../utils/scrambleBoard";

export default class Game extends React.Component {
    state = {
        complete: false,
        board: ["A", "B", "C", "D", "E", "F", "G", "H", null]
    };
    userMakesMove = value => {
        const position = this.state.board.indexOf(value);
        const newState = handleMove(position, this.state.board);
        this.setState((prevState, props) => {
            return newState;
        });
    };
    scrambleBoard = () => {
        var newBoard = scrambleBoard(this.state.board)
        this.setState(() => {
            return { board : newBoard }
        })
    }
    render() {
        return (
            <Board
                board={this.state.board}
                userMakesMove={this.userMakesMove}
                complete={this.state.complete}
                scramble={this.scrambleBoard}
            />
        );
    }
}
