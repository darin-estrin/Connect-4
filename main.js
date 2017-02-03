
$(document).ready(function(){
  initGame();
});

var gameBoard = [[], [], [], [], [], []];
var col1 = $('.column_1');
var col2 = $('.column_2');
var col3 = $('.column_3');
var col4 = $('.column_4');
var col5 = $('.column_5');
var col6 = $('.column_6');

function initGame() {
  $('#column_1').on('click', addPlayerCoin);
  $('#column_2').on('click', addPlayerCoin);
  $('#column_3').on('click', addPlayerCoin);
  $('#column_4').on('click', addPlayerCoin);
  $('#column_5').on('click', addPlayerCoin);
  $('#column_6').on('click', addPlayerCoin);
}

function addPlayerCoin() {
  var column;
  turnOver = false;
  if ($(this).hasClass('column_1')){
    column = col1;
  } else if ($(this).hasClass('column_2')){
    column = col2;
  }else if($(this).hasClass('column_3')){
    column = col3;
  }else if ($(this).hasClass('column_4')){
    column = col5;
  }else if ($(this).hasClass('column_5')){
    column = col5;
  } else {
    column = col6;
  }
  for (var i = column.length - 1; (!turnOver && i > 0); i--) {
    if($(column[i]).hasClass('full') === false) {
      $(column[i]).addClass('full');
      turnOver = true;
    }
  }
  console.log(column);
}
