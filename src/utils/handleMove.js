const handleMove = (position, board) => {
    const history = [];
    const winningBoard = ["A", "B", "C", "D", "E", "F", "G", "H", null];
    const table = {
        0: [1, 3],
        1: [0, 2, 4],
        2: [1, 5],
        3: [0, 4, 6],
        4: [1, 3, 5, 7],
        5: [2, 4, 8],
        6: [3, 7],
        7: [4, 6, 8],
        8: [7, 5]
    };
    const newBoard = board.slice(0);
    const emptySpace = newBoard.indexOf(null);
    const validMoves = table[position];
    if (validMoves.indexOf(emptySpace) > -1) {
        newBoard[emptySpace] = newBoard[position];
        newBoard[position] = null;
        history.push(newBoard);
        if (newBoard === winningBoard) {
            return "victory";
        }
        return newBoard;
    } else {
        return null;
    }
};

export default handleMove;
