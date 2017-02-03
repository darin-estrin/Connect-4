$(document).ready(function(){
    initGame();
    displayPlayer();
    $('.reset_button').click(function() {
        reset();
    })
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
        column = col4;
    }else if ($(this).hasClass('column_5')){
        column = col5;
    } else {
        column = col6;
    }
    for (var i = column.length - 1; (!turnOver && i > 0); i--) {
        if(currentPlayer === 1  && !$(column[i]).hasClass('player1_token') && !$(column[i]).hasClass('player2_token')){
            $(column[i]).addClass('player1_token');
            turnOver = true;
            console.log(column);
            changeActivePlayer(currentPlayer);
            displayPlayer();
        } else if(currentPlayer === 0  && !$(column[i]).hasClass('player1_token') && !$(column[i]).hasClass('player2_token')) {
            $(column[i]).addClass('player2_token');
            turnOver = true;
            console.log(column);
            changeActivePlayer(currentPlayer);
            displayPlayer();
        }
    }
}
var turnOver = false;
var player1 = 1;
var player2 = 0;
var currentPlayer = player1;

function displayPlayer (){
    if(currentPlayer === 1) {
        // changes players color to red if active and black if waiting
        $('.player1').find('h2').addClass('active_player');
        $('.player2').find('h2').removeClass('active_player');
        console.log('player1');
    }else {
        currentPlayer = 0;
        $('.player2').find('h2').addClass('active_player');
        $('.player1').find('h2').removeClass('active_player');
        console.log('player2');
    }
}
function changeActivePlayer(player) {
    if (player === 1 ) {
        currentPlayer = 0;
    }
    else if (player === 0) {
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