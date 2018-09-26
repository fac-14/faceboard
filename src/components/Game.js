import React from "react";
import Board from "./Board";
import lookupMoves from '../utils/lookupMoves';

export default class Game extends React.Component {
    state = {
        board: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', null],
        slots: {
            box1: "A",
            box2: "B",
            box3: "C",
            box4: "D",
            box5: "E",
            box6: "F",
            box7: "G",
            box8: "H",
            box9: null
        }
    };
    userMakesMove = (value) => {
        const position = this.state.board.indexOf(value);
        console.log(position)
    }
    render() {
        return <Board board={this.state.board} slots={this.state.slots} userMakesMove={this.userMakesMove}/>;
    }
}
