$(document).ready(function(){
    initGame();
    displayPlayer();
    $('.reset_button').click(function() {
        reset();
    });
    $('.reset_button').click(function(){
      initG2();
    });
});


var col1 = $('.column_1');
var col2 = $('.column_2');
var col3 = $('.column_3');
var col4 = $('.column_4');
var col5 = $('.column_5');
var col6 = $('.column_6');
var columChosen;

function initGame() {
    $('#column_1').on('click', addPlayerCoin);
    $('#column_2').on('click', addPlayerCoin);
    $('#column_3').on('click', addPlayerCoin);
    $('#column_4').on('click', addPlayerCoin);
    $('#column_5').on('click', addPlayerCoin);
    $('#column_6').on('click', addPlayerCoin);
}
function addPlayerCoin() {
  playerTurnOver = false;
  if ($(this).hasClass('column_1')){
    column = col1;
    columnChosen = 1;
  } else if ($(this).hasClass('column_2')){
    column = col2;
    columnChosen = 2;
  }else if($(this).hasClass('column_3')){
    column = col3;
    columnChosen = 3;
  }else if ($(this).hasClass('column_4')){
    column = col4;
    columnChosen = 4;
  }else if ($(this).hasClass('column_5')){
    column = col5;
    columnChosen = 5;
  } else {
    column = col6;
    columnChosen = 6;
  }
  for (var i = column.length - 1; (!playerTurnOver && i > 0); i--) {
    if ($(column[1]).hasClass('player1_token') || $(column[1]).hasClass('player2_token')){
      return;
    }
    if (currentPlayer === 1  && !$(column[i]).hasClass('player1_token') && !$(column[i]).hasClass('player2_token')){
      $(column[i]).addClass('player1_token');
      playerTurnOver = true;
      var m = document.getElementById('mario_turn');
      m.play();
    } else if(currentPlayer === 2  && !$(column[i]).hasClass('player1_token') && !$(column[i]).hasClass('player2_token')) {
      $(column[i]).addClass('player2_token');
      playerTurnOver = true;
      var b = document.getElementById('bowser_turn');
      b.play();
    }
  }
  if (currentPlayer === 1) {
    gameBoard[i][columnChosen -1] = 1;
  } else {
    gameBoard[i][columnChosen -1] = 2;
  }
  changeActivePlayer(currentPlayer);
  displayPlayer();
  var testWin = winner(i, columnChosen-1, currentPlayer);
}
var playerTurnOver = false;
var player1 = 1;
var player2 = 2;
var currentPlayer = player1;

function displayPlayer (){
  if(currentPlayer === 1) {
    // changes players color to red if active and black if waiting
    $('.player1').find('h2').addClass('active_player');
    $('.player2').find('h2').removeClass('active_player');
  } else {
    currentPlayer = 2;
    $('.player2').find('h2').addClass('active_player');
    $('.player1').find('h2').removeClass('active_player');
  }
}
function changeActivePlayer(player) {
  if (player === 1 ) {
      currentPlayer = 2;
  } else if (player === 2) {
      currentPlayer = 1;
  }
}
function playerWon(){
    if (player1 === win){
        var playerOneWin =$('<h1>').addClass('player_won').text('You defeated Bowser!');
    }else{
        var player2Win =$('<h1>').addClass('player_won').text('You defeated Mario!');

    }
}
function reset(){
    $('.coin_slot').removeClass('player1_token');
    $('.coin_slot').removeClass('player2_token');
    var currentPlayer = player1;
}

// function testWin(row, column, direction, player){
//   var m = document.getElementById('mario_win');
//   var b = document.getElementById('bowser_win');
//   var winner = false;
//   if(totalTurns < 6){
//     return;
//   }
//
//
//   //m.play();
//   //b.play();
// }

var connect4Model = new GenericFBModel('weshouldeatchips',boardUpdated);
function boardUpdated(data){
    console.log("Data", data);
    teamFourGame = data.game;
}

function initG2() {
    col1 = $('.column_1');
    col2 = $('.column_2');
    col3 = $('.column_3');
    col4 = $('.column_4');
    col5 = $('.column_5');
    col6 = $('.column_6');
}

function saveData(data) {
    teamFourGame = $('#game_body');
    connect4Model.saveState({"game": teamFourGame.prop('innerHTML')});
    console.log("Tada");
}

function replaceOldWithNew() {
    $('#game_body').empty();
    $('#game_body').append(teamFourGame);
    initG2();
}
