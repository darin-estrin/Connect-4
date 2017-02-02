$(document).ready(function () {
    //initializeGame();
});
// function initializeGame() {
//     $("button").click(dropToken);
// }
// var numRows = 5;
// var numCols = 6;
// var left = 1;
// var right = 2;
// var down = 3;
// var diagRight = 1;
// var diagLeft = 2;
// var gameBoard = [
//     [0],
//     [0],
//     [0],
//     [0],
//     [0]
// ];
// buildBoard();
// function buildBoard() {
//     var colChoice = Number(document.getElementById('chipColumn').value);
//     console.log('Column  '+colChoice);
//     for (var i = 0; i < numRows; i++) {
//         for (var j = 0; j < numCols; j++) {
//             gameBoard [i][j] = j;
//         }
//     }
//     console.log(gameBoard);
// }
// function dropToken (row, column, direction, player) {
// //drop Token code block
//     testForWin(row, column, direction, player);
// }
// function testForWin (row, column, direction, player) {
//     var winner = false;
//     switch (direction) {
//         case left:
//             winner = ((gameBoard [row][column] = player) && (gameBoard [row][column-1]) && (gameBoard [row][column-2]));
//             break;
//         case right:
//             winner = ((gameBoard [row][column] = player) && (gameBoard [row]+[column + 1]) && (gameBoard [row+2][column + 2]));
//             break;
//         case diagLeft:
//             winner = ((gameBoard [row][column] = player) && (gameBoard [row-1][column - 1]) && (gameBoard [row-2][column - 2]));
//             break;
//         case diagRight:
//             winner = ((gameBoard [row][column] = player) && (gameBoard [row]+[column + 1]) && (gameBoard [row+2][column + 2]));
//             break;
//         case down:
//             winner = ((gameBoard [row][column] = player) && (gameBoard [row - 1][column]) && (gameBoard [row - 2][column]));
//             break;
//     }
//     return winner;
// }

////////////////////////////////////////////////////////////
// Darin's progress


var numRows = 5;
var numCols = 6;
var left = 1;
var right = 2;
var down = 3;
var diagRight = 1;
var diagLeft = 2;
var gameBoard = [
    [0],
    [0],
    [0],
    [0],
    [0]
];

function buildBoard() {

    console.log('Column  '+columnChoice);
    for (var i = 0; i < numRows; i++) {
        for (var j = 0; j < numCols; j++) {
            gameBoard [i][j] = j;
        }
    }
    console.log(gameBoard);
}
function dropToken (row, column, direction, player) {
//drop Token code block
    testForWin(row, column, direction, player);
}
function testForWin (row, column, direction, player) {
    var winner = false;
    switch (direction) {
        case left:
            winner = ((gameBoard [row][column] = player) && (gameBoard [row][column-1]) && (gameBoard [row][column-2]));
            break;
        case right:
            winner = ((gameBoard [row][column] = player) && (gameBoard [row]+[column + 1]) && (gameBoard [row+2][column + 2]));
            break;
        case diagLeft:
            winner = ((gameBoard [row][column] = player) && (gameBoard [row-1][column - 1]) && (gameBoard [row-2][column - 2]));
            break;
        case diagRight:
            winner = ((gameBoard [row][column] = player) && (gameBoard [row]+[column + 1]) && (gameBoard [row+2][column + 2]));
            break;
        case down:
            winner = ((gameBoard [row][column] = player) && (gameBoard [row - 1][column]) && (gameBoard [row - 2][column]));
            break;
    }
    return winner;
}





var turnOver = false;
var currentPlayer = 1;
var column1 = $(document).find('.column_1');
var column2 = $(document).find('.column_2');
var column3 = $(document).find('.column_3');
var column4 = $(document).find('.column_4');
var column5 = $(document).find('.column_5');
var column6 = $(document).find('.column_6');
var columChoice;

// select column to drop in
$(this).on('click', function(e){
  console.log(e.target.className);
  columnChoice = e.target;
  handleCoinDrop(columnChoice);
});

function handleCoinDrop(column) {
  turnOver = false;
  // column is equal to the colum that has been clicked on
  switch (column) {
    case column1:
      column = column1;
      break;
    case column2:
      column = column2;
      break;
    case column3:
      column = column3;
      break;
    case column4:
      column = column4;
      break;
    case column5:
      column = column5;
    break;
    case column6:
      column = column6;
      break;
    default:
      break;
  }
  // check the active column for lowest possible row to add to
  // need to change class of "full" to indicate which player owns that square
  for (var i = column.length - 1; (!turnOver && i > 0); i--) {
    if($(column[i]).hasClass('full') === false) {
      $(column[i]).addClass('full');
      turnOver = true;
    }
  }
  //console.log(column);
}

/////////////////////////////////////////////////
// Jorge's Progress

function displayPlayer (){
    if(currentPlayer === 1) {
      // changes players color to red if active and black if waiting
      $('.player1').find('h2').addClass('active_player');
      $('.player2').find('h2').removeClass('active_player');
      console.log('player1');
    }else {
      (currentPlayer = 0);
      $('.player2').find('h2').addClass('active_player');
      $('.player1').find('h2').removeClass('active_player');
      console.log('player2');
    }
}
displayPlayer();
