
//Click handler required for testing

$(document).ready(function () {
    initializeGame();
});

function initializeGame() {
    $("button").click(randomizeBoard);
}

//constants for testing purposes
var numRows = 5;
var numCols = 7;


//************ PRODUCTION CODE *********************

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
            if (!winner) {
                winner = testWin(row, column, diagLeft, player);
            }
        }

    //check horizontal and diagonal left
    if (column < numCols - 2) {
        isWin = testWin(row, column, right, player);
            if (!winner) {
                winner = testWin(row, column, diagRight, player);
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



/*
//************ FIX FOR MIDDLE COLUMN USE CASE *********************
function testWin (row, column, player) {
    var win;
    var i;
    win = false;
    for (i=0; ((i<numCols - 2) && (!win)); i++) {
        win = ((gameBoard [i][row] === player) && (gameBoard [i + 1][row] === player) && (gameBoard [column + 2][row] === player));
    }
    if (!win) {
        for (i=0; ((i<numRows - 2) && (!win)); i++) {
            win = ((gameBoard [i][row] === player) && (gameBoard [i + 1][row] === player) && (gameBoard [column + 2][row] === player));
        }
    }
}
//**************  TESTING CODE:  NOT TO BE INCLUDED IN FINAL SOLUTION  **************
//constants for testing purposes
var player = 2; //to be passed as parameters (along with row and column) in actual game
function randomizeBoard() {
    for (var i = 0; i < numCols; i++) {
        for (var j = 0; j < numCols; j++) {
            gameBoard [i][j] = Math.floor((Math.random() * (4 - 0) + 0));
        }
        console.log(gameBoard[i]);
    }
    runTest();
}
function runTest() {
    player = Number(document.getElementById('player').value);
    console.log(winner(2, 3, player));
}
//***********************************************************************************
*/
