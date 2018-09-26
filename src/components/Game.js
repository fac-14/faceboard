import React from "react";
import Board from "./Board";

export default class Game extends React.Component {
    state = {
        board: [null, null, null, null, null, null, null, null, null],
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
    render() {
        return <Board board={this.state.board} slots={this.state.slots} />;
    }
}
