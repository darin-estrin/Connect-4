$(document)
  .ready(function () {
    initGame();
    displayPlayer();
    $('.reset_button').click(function () {
      reset();
    });
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
var counter = 0;

function initGame() {
  $('#column_1').on('click', addPlayerCoin);
  $('#column_2').on('click', addPlayerCoin);
  $('#column_3').on('click', addPlayerCoin);
  $('#column_4').on('click', addPlayerCoin);
  $('#column_5').on('click', addPlayerCoin);
  $('#column_6').on('click', addPlayerCoin);
}

function addPlayerCoin() {
  console.log(this);
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
  if (currentPlayer === 1) {
    $(this).find('img').css('box-shadow', '7px 7px 12px red');
  } else {
    $(this).find('img').css('box-shadow', '7px 7px 12px blue');
  }

  for (var i = column.length - 1; (!playerTurnOver && i > 0); i--) {
    if ($(column[1]).hasClass('player1_token') || $(column[1]).hasClass('player2_token')) {
      return;
    }
    if (currentPlayer === 1 && !$(column[i]).hasClass('player1_token') && !$(column[i]).hasClass('player2_token')) {
      $(column[i]).addClass('player1_token')
        .find('img')
        .replaceWith('<img src="images/mario_8bit1.png"/>');
      //saveData();
      playerTurnOver = true;
      var m = document.getElementById('mario_turn');
      m.play();
    } else if (currentPlayer === 2 && !$(column[i]).hasClass('player1_token') && !$(column[i]).hasClass('player2_token')) {
      $(column[i]).addClass('player2_token')
        .find('img')
        .replaceWith('<img src="images/bowser_8bit.png"/>');
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
  counter++;
  if (counter === 30) {
    displayDraw();
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
      .css('color', 'blue');
    $('.player2')
      .find('h2')
      .css('color', 'black');
  } else {
    currentPlayer = 2;
    $('.player2')
      .find('h2')
      .css('color', 'red');
    $('.player1')
      .find('h2')
      .css('color', 'black');
  }
}
function changeActivePlayer(player) {
  if (player === 1) {
    currentPlayer = 2;
  } else if (player === 2) {
    currentPlayer = 1;
  }
}
function playerWon(currentPlayer) {
  var mario = document.getElementById('mario_win');
  var bowser = document.getElementById('bowser_win');
  $('.coin_drop').hide();
  if (player1 === currentPlayer) {
    $('.player_won')
      .show()
      .text('Player 1 won')
      .append("<img src='images/Ph03nyx-Super-Mario-Paper-Mario (1).ico'>");
    mario.play();
  } else {
    $('.player_won')
      .show()
      .text('Player 2 won').
      append("<img src='images/Ph03nyx-Super-Mario-Paper-Bowser.ico'>");
    bowser.play();

  }
}
function reset() {
  counter = 0;
  var mario = document.getElementById('mario_win');
  var bowser = document.getElementById('bowser_win');
  $('.player_won').hide();
  $('.coin_drop').show();
  $('.coin_slot').removeClass('player1_token');
  $('.coin_slot').removeClass('player2_token');
  $('.coin_slot').find('img').replaceWith('<img src="images/question_mark.png" />');
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
    mario.pause();
    mario.currentTime = 0;
    bowser.pause();
    bowser.currentTime = 0;
}

function displayDraw() {
  $('.coin_drop').hide();
  $('.player_won').show()
    .text('Draw');
}

$('.column img').on('mouseover', function() {
  if (currentPlayer === 1) {
    $(this).css('box-shadow', '7px 7px 12px blue');
  } else {
    $(this).css('box-shadow', '7px 7px 12px red');
  }
})

$('.column img').on('mouseleave', function() {
  $(this).css('box-shadow', '7px 7px 5px #888888');
})