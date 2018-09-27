import React from "react";
import Board from "./Board";
import handleMove from "../utils/handleMove";
import fetchGitImage from "../utils/fetchGitImage";
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
        var newBoard = scrambleBoard(this.state.board);
        this.setState(() => {
            return { board: newBoard };
        });
    };
    componentDidMount() {
        const username = "developess";
        fetchGitImage(username).then(res => {
            this.setState(() => {
                return { avatarURL: res.data.user.avatarUrl };
            });
        });
    }
    render() {
        console.log(this.state);
        return (
            <Board
                board={this.state.board}
                avatarURL={this.state.avatarURL}
                userMakesMove={this.userMakesMove}
                complete={this.state.complete}
                scramble={this.scrambleBoard}
            />
        );
    }
}
