import React from "react";
import Board from "./Board";
import handleMove from "../utils/handleMove";
import fetchGitImage from "../utils/fetchGitImage";
import scrambleBoard from "../utils/scrambleBoard";
import Form from "./Form";
import Header from "./Header";

export default class Game extends React.Component {
  state = {
    complete: false,
    board: ["A", "B", "C", "D", "E", "F", "G", "H", null],
    input: "",
    loading: false
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
  // componentDidMount() {
  //     const username = "developess";
  //     fetchGitImage(username).then(res => {
  //         this.setState(() => {
  //             return { avatarURL: res.data.user.avatarUrl };
  //         });
  //     });
  // }
  handleFormChange = event => {
    const value = event.target.value;
    this.setState({ input: value });
  };
  handleFormSubmit = e => {
    e.preventDefault();
    this.setState({ loading: true });
    const username = this.state.input;
    fetchGitImage(username).then(res => {
      this.setState(() => {
        return { avatarURL: res.data.user.avatarUrl, loading: false };
      });
    });
  };
  render() {
    // console.log(this.state);
    return (
      <React.Fragment>
        <Header />
        <main>
          <Form
            handleFormChange={this.handleFormChange}
            handleFormSubmit={this.handleFormSubmit}
            input={this.state.input}
          />

          <Board
            board={this.state.board}
            avatarURL={this.state.avatarURL}
            userMakesMove={this.userMakesMove}
            complete={this.state.complete}
            scramble={this.scrambleBoard}
            input={this.state.input}
            loading={this.state.loading}
          />
        </main>
      </React.Fragment>
    );
  }
}
