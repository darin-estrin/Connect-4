$(document).ready(function () {
    initializeGame();
    //handleCoinDrop();
});

var gameBoard = [];
var turnOver = false;
var currentPlayer = 1;
var column1 = $(document).find('.column_1');
var column2 = $(document).find('.column_2');
var column3 = $(document).find('.column_3');
var column4 = $(document).find('.column_4');
var column5 = $(document).find('.column_5');
var column6 = $(document).find('.column_6');

function initializeGame() {
    //var innerArray = [];
    $('.colChoice').click(dropChip);
    for (var i = 0; i <= 5; i++){
        gameBoard.push([]);
        for (j = 0; j <= 6; j++){
            gameBoard[i].push('EMPTY');
        }
    }
}

var numRows = 6;
var numCols = 7;
var empty = 'EMPTY';
var full = 'FULL';

function dropChip() {
    var done = false;
    var j = Number(document.getElementById('ColNum').value)-1;
    for (var i = numRows-1; ((i > 0) && (!done)); i--) {
        if (gameBoard [i][j] == empty) {
            gameBoard [i][j] = full;
            done = true;
            console.log (gameBoard[i][j]);
        }
    }
    displayBoard();
}

function displayBoard () { //would use this to rember game page
    for (var i = 0; i < numRows; i++) {
        for (var j = 0; j < numCols; j++) {
            if (gameBoard [i][j] == empty) {
                gameBoard [i][j] = empty;
            }
            else {
                gameBoard [i][j] = full;

            }
            console.log('row ' + i + ' ' + gameBoard [i][j]);
        }
    }
}

////////////////////////////////////////////////////////////
// Darin's progress


// select column to drop in
//$('.').on('click', handleCoinDrop(){
  //console.log(e);
//});

function handleCoinDrop(column) {
  turnOver = false;
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

  for (var i = column.length - 1; (!turnOver && i > 0); i--) {
    if($(column[i]).hasClass('full') === false) {
      $(column[i]).addClass('full');
      turnOver = true;
    }
  }
  console.log(column);
}

/////////////////////////////////////////////////
// Jorge's Progress

function displayPlayer (){
    if(currentPlayer === 1) {
       console.log('player1');
    }else {
      (currentPlayer = 0);
      console.log('player2');
    }
}
displayPlayer();
