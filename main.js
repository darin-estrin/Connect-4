$(document)
  .ready(function () {
    initGame();
    displayPlayer();
    $('.reset_button').click(function () {
      reset();
    });
    // $('.reset_button').click(function(){   initG2(); });
  });

var gameBoard = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]
    ];
var col1 = $('.column_1');
var col2 = $('.column_2');
var col3 = $('.column_3');
var col4 = $('.column_4');
var col5 = $('.column_5');
var col6 = $('.column_6');
var columnChosen;

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
  if ($(this).hasClass('column_1')) {
    column = col1;
    columnChosen = 0;
  } else if ($(this).hasClass('column_2')) {
    column = col2;
    columnChosen = 1;
  } else if ($(this).hasClass('column_3')) {
    column = col3;
    columnChosen = 2;
  } else if ($(this).hasClass('column_4')) {
    column = col4;
    columnChosen = 3;
  } else if ($(this).hasClass('column_5')) {
    column = col5;
    columnChosen = 4;
  } else {
    column = col6;
    columnChosen = 5;
  }

  for (var i = column.length - 1; (!playerTurnOver && i > 0); i--) {
    if ($(column[1]).hasClass('player1_token') || $(column[1]).hasClass('player2_token')) {
      return;
    }
    if (currentPlayer === 1 && !$(column[i]).hasClass('player1_token') && !$(column[i]).hasClass('player2_token')) {
      $(column[i]).addClass('player1_token');
      //saveData();
      playerTurnOver = true;
      var m = document.getElementById('mario_turn');
      m.play();
    } else if (currentPlayer === 2 && !$(column[i]).hasClass('player1_token') && !$(column[i]).hasClass('player2_token')) {
      $(column[i]).addClass('player2_token');
      //saveData();
      playerTurnOver = true;
      var b = document.getElementById('bowser_turn');
      b.play();
    }
  }

  var row = gameBoard.indexOf(gameBoard[i]);
  if (currentPlayer === 1) {
    gameBoard[i][columnChosen] = 1;
  } else {
    gameBoard[i][columnChosen] = 2;
  }
  checkForWin(currentPlayer, row, columnChosen);
  changeActivePlayer(currentPlayer);
  displayPlayer();
}

function checkForWin(currentPlayer, row, column) {
  // check for horizontal left win
  var count = 1;
  var prevCount = count;
  while (gameBoard[row][column - 1] === currentPlayer && column - 1 >= 0) {
    count++;
    column--;
    if (count === 4) {
      playerWon(currentPlayer);
    } else if (count === prevCount) {
      break;
    }
  }
  count = 1;
  // check horizont right win
  while (gameBoard[row][column + 1] === currentPlayer && column + 1 <= 5) {
    count++;
    column++;
    if (count === 4) {
      playerWon(currentPlayer);
    }
  }
  count = 1;

  // check vertical win
  while ((row + 1) < 5 && currentPlayer === gameBoard[row + 1][column]) {
    count++;
    row++;
    if (count === 4) {
      playerWon(currentPlayer);
    }
  }
  count = 1;
  prevCount = count;

  // check diagonal-down left win
  while ((row + 1) < 5 && (column - 1) >= 0 && currentPlayer === gameBoard[row + 1][column - 1]) {
    count++;
    row++;
    column--;
    if (count === 4) {
      playerWon(currentPlayer);
    } else if (count === prevCount) {
      break;
    }
  }
  count = 1;

  // check diagonal-up right win
  while ((row - 1) >= 0 && (column + 1) <= 5 && currentPlayer === gameBoard[row - 1][column + 1]) {
    count++;
    row--;
    column++;
    if (count === 4) {
      playerWon(currentPlayer);
    }
  }
  count = 1;
  prevCount = count;

  // check diagonal-up left win
  while ((row - 1) >= 0 && (column - 1) >= 0 && currentPlayer === gameBoard[row - 1][column - 1]) {
    count++;
    row--;
    column--;
    if (count === 4) {
      playerWon(currentPlayer);
    } else if (prevCount === count) {
      break;
    }
  }
  count = 1;

  // check diagonal-down right win
  while ((row + 1) < 5 && (column + 1) <= 5 && currentPlayer === gameBoard[row + 1][column + 1]) {
    count++;
    row++;
    column++;
    if (count === 4) {
      playerWon(currentPlayer);
    }
  }

}

var playerTurnOver = false;
var player1 = 1;
var player2 = 2;
var currentPlayer = player1;

function displayPlayer() {
  if (currentPlayer === 1) {
    // changes players color to red if active and black if waiting
    $('.player1')
      .find('h2')
      .addClass('active_player');
    $('.player2')
      .find('h2')
      .removeClass('active_player');
  } else {
    currentPlayer = 2;
    $('.player2')
      .find('h2')
      .addClass('active_player');
    $('.player1')
      .find('h2')
      .removeClass('active_player');
  }
}
function changeActivePlayer(player) {
  if (player === 1) {
    currentPlayer = 2;
  } else if (player === 2) {
    currentPlayer = 1;
  }
  //replaceOldWithNew();
}
function playerWon(currentPlayer) {
  var mario = document.getElementById('mario_win');
  var bowser = document.getElementById('bowser_win');
  $('.coin_slot').hide();
  //%$('#game_body').html('<h1 class="player_won"></h1>');
  if (player1 === currentPlayer) {
    $('.player_won')
      .show()
      .text('Congratulations, you beat Bowser');
    mario.play();
  } else {
    $('.player_won')
      .show()
      .text('Congratulations, you beat Mario');
    bowser.play();

  }
}
function reset() {
  $('.player_won').hide();
  $('.coin_slot').show();
  $('.coin_slot').removeClass('player1_token');
  $('.coin_slot').removeClass('player2_token');
  currentPlayer = 2;
  changeActivePlayer(currentPlayer);
  displayPlayer();
  gameBoard = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]
    ];
}

//
//
//   //m.play();   //b.play(); } var connect4Model = new
// GenericFBModel('weshouldeatchips',boardUpdated); function boardUpdated(data){
//     console.log("Data", data);     teamFourGame = data.game; }
//
// function initG2() {     col1 = $('.column_1');     col2 = $('.column_2');
// col3 = $('.column_3');     col4 = $('.column_4');     col5 = $('.column_5');
//    col6 = $('.column_6'); }
//
// function saveData(data) {     // teamFourGame = $('#game_body');     // var
// updated_table = teamFourGame;     connect4Model.saveState({"game":
// teamFourGame.prop('innerHTML')});     console.log("Tada"); }
//
// function replaceOldWithNew() {     $('#game_body').empty();
// console.log("TEAM:" ,teamFourGame)     $('#game_body').append(teamFourGame);
//    // initG2();
//
// }
