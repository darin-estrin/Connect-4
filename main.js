$(document).ready(function () {
    initializeGame();
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
$('div.zero').on('click', function(event){
  console.log($(event));
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
  console.log(column);
}

function CheckForWin(){

  // Need to check for vertical win by adding iterating down through column
  // and checking for a match




  // Check for horizontal win by comparing columns to both the left and right
  // of the most recent chip dropped



  // Check for diagnal win by using a combination for adding 1 to the row and 1
  // to the columm, adding 1 to the row and substacting 1 from the column and vice versa.


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
