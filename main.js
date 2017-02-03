
$(document).ready(function(){
  initGame();

});

function initGame() {

}

var turnOver = false;
var player1 = 1;
var player2 = 0;
var currentPlayer = player1;
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



displayPlayer();

// function createPlayers() {
//     var player1 = $('.player1')
//     var player2 = $('.player2')
//
// }

// function changeActivePlayer(currentPlayer) {
//     if (currentPlayer == player1 ) {
//         return player2;
//     }
//     else if (currentPlayer == player2) {
//         return player1;
//     }
// }

function changeActivePlayer() {
    if (currentPlayer === 1 ) {
        currentPlayer = 0;
    }
    else if (currentPlayer === 0) {
        currentPlayer = 1;
    }
}

changeActivePlayer(currentPlayer);
console.log("current player:", currentPlayer);

changeActivePlayer(currentPlayer);
console.log("2current player:", currentPlayer);

changeActivePlayer(currentPlayer);
console.log("current player:", currentPlayer);

changeActivePlayer(currentPlayer);
console.log("2current player:", currentPlayer);

