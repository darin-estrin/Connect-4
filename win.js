function isWin(row, column, player) {

    var winner = false;

    if (row >= 2) {
        if (testWin(row, column, down, player)) {
            return true;
        }
    }

    if (column >= 2) {
        winner = testWin(row, column, left, player);
            if (!winner) {
                winner = testWin(row, column, diagLeft, player);
            }
        }
        if (column < numCols - 2) {
            winner = testWin(row, column, right, player);
            if (!winner) {
                winner = testWin(row, column, diagRight, player);
            }
        }
    return winner;
}

function testWin(row, column, direction, player) {

    var winner = false;
    switch (direction) {
        case left:
            winner = ((gameBoard [column][row] === player) && (gameBoard [column - 1][row] === player) && (gameBoard [column - 2][row] === player));
            break;
        case right:
            winner = ((gameBoard [column][row] === player) && (gameBoard [column + 1][row] === player) && (gameBoard [column + 2][row] === player));
            break;
        case diagLeft:
            winner = ((gameBoard [column][row] === player) && (gameBoard [column - 1][row - 1] === player) && (gameBoard [column - 2][row - 2] === player));
            break;
        case diagRight:
            winner = ((gameBoard [column][row] === player) && (gameBoard [column + 1][row - 1] === player) && (gameBoard [column + 2][row - 2] === player));
            break;
        case down:
            winner = ((gameBoard [column][row] === player) && (gameBoard [column][row - 1] === player) && (gameBoard [column][row - 2] === player));
            break;
    }
    return winner;
}
