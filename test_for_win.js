var numCols = 6;
var left = 1;
var right = 2;
var down = 3;
var diagRight = 4;
var diagLeft = 5;

var gameBoard = [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]
];

//invoked to determine win status after token dropped by player
//past row, column and player number (player 1 = 1, player 2 = 2), returns boolean status
function winner(row, column, player) {

    var isWin = false;

    //check for 3 down
    if (row >= 2) {
        if (testWin(row, column, down, player)) {
            return true;
        }
    }

    //check horizontal and diagonal left
    if (column >= 2) {
        isWin = testWin(row, column, left, player);
        if (!isWin) {
            isWin = testWin(row, column, diagLeft, player);
        }
    }

    //check horizontal and diagonal left
    if (column < numCols - 2) {
        isWin = testWin(row, column, right, player);
        if (!isWin) {
            isWin = testWin(row, column, diagRight, player);
        }
    }

    return isWin; //return boolean win status
}

function testWin(row, column, direction, player) {

    var winner = false;

    //check 3 cells adjacent to row, column, for value == player number  -- return true if match

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
