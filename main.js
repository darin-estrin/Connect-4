$(document).ready(function () {
    //initializeGame();
    //findColumnClicked();
    $('.column').click(function(e){
      console.log(e);
    });
});

////////////////////////////////////////////////////////////
// Darin's progress

var gameBoard = [[],[],[],[],[],[]];
var turnOver = false;
var currentPlayer = 1;
var column1 = $(document).find('.column_1');
var column2 = $(document).find('.column_2');
var column3 = $(document).find('.column_3');
var column4 = $(document).find('.column_4');
var column5 = $(document).find('.column_5');
var column6 = $(document).find('.column_6');
var columnChoice;

// select column to drop in


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
