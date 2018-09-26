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
        if (areArraysSame(newBoard,winningBoard)) {
            console.log("YOU WIN");
            return { complete: true , board: newBoard };
        }
        return { board : newBoard };
    } else {
        console.log("INVALID");
        return { board : newBoard };
    }
};

function areArraysSame(arr1, arr2) {
    if (arr1.length === arr2.length) {
        for (let i = 0 ; i < arr1.length ; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}

export default handleMove;
