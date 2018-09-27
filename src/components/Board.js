import React from "react";
import Slot from "./Slot";

export default class Board extends React.Component {
    render() {
        const winning = this.props.complete;
        if (!this.props.avatarURL) {
            console.log(this.props);
            return (
                <h3>
                    ...This loading screen brought to you by the Space4 WiFi
                </h3>
            );
        }
        return (
            <React.Fragment>
                <h1>{winning ? "Ya Won" : ""}</h1>
                <button onClick={this.props.scramble}>Scramble</button>
                <div className="border">
                    <div className="row">
                        <Slot
                            value={this.props.board[0]}
                            userMakesMove={this.props.userMakesMove}
                            avatarURL={this.props.avatarURL}
                        />
                        <Slot
                            value={this.props.board[1]}
                            userMakesMove={this.props.userMakesMove}
                            avatarURL={this.props.avatarURL}
                        />
                        <Slot
                            value={this.props.board[2]}
                            userMakesMove={this.props.userMakesMove}
                            avatarURL={this.props.avatarURL}
                        />
                    </div>
                    <div className="row">
                        <Slot
                            value={this.props.board[3]}
                            userMakesMove={this.props.userMakesMove}
                            avatarURL={this.props.avatarURL}
                        />
                        <Slot
                            value={this.props.board[4]}
                            userMakesMove={this.props.userMakesMove}
                            avatarURL={this.props.avatarURL}
                        />
                        <Slot
                            value={this.props.board[5]}
                            userMakesMove={this.props.userMakesMove}
                            avatarURL={this.props.avatarURL}
                        />
                    </div>
                    <div className="row">
                        <Slot
                            value={this.props.board[6]}
                            userMakesMove={this.props.userMakesMove}
                            avatarURL={this.props.avatarURL}
                        />
                        <Slot
                            value={this.props.board[7]}
                            userMakesMove={this.props.userMakesMove}
                            avatarURL={this.props.avatarURL}
                        />
                        <Slot
                            value={this.props.board[8]}
                            userMakesMove={this.props.userMakesMove}
                            avatarURL={this.props.avatarURL}
                        />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
