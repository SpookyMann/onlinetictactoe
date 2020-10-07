let currentPlayer = "X";
let gameStatus = ""; // " " - continue, "Tie", "X wins", "O wins"
let numTurns = 0;
let idNames = ["one", "two", "three", "four", "five", "six",
                  "seven", "eight", "nine"];

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAzOGjdQZNXSx00x9mtP8U8X95Ttkm99Jk",
    authDomain: "online-tic-tac-toe-9f63b.firebaseapp.com",
    databaseURL: "https://online-tic-tac-toe-9f63b.firebaseio.com",
    projectId: "online-tic-tac-toe-9f63b",
    storageBucket: "online-tic-tac-toe-9f63b.appspot.com",
    messagingSenderId: "211282832628",
    appId: "1:211282832628:web:72fcbba0c46f6ae17b42a1",
    measurementId: "G-3MS9ELCCT5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// reset board and all variables
function newGame() {

  //reset board
  for (var i = 0; i < idNames.length; i++) {
    document.getElementById(idNames[i]).innerHTML = "";
  } // for

  numTurns = 0;
  gameStatus = "";
  currentPlayer = "X";

  changeVisibility("controls");

} // newGame

// take player turn
function playerTakesTurn(e) {

  if (e.innerHTML == "") {
    e.innerHTML = currentPlayer;
    checkGameStatus();
  } else {
    showLightBox("This box is already selected.", "Please try an empty box.");
    return;
  } // else

  // game is over
  if (gameStatus != ""){
    showLightBox(gameStatus, "Game Over.");
  }

} // playerTakesTurn

// after each turn, check for a winner, a tie,
// or continue playing
function checkGameStatus(){
  numTurns++; // count turn

  // check for a win
  if (checkWin()) {
      gameStatus = currentPlayer + " won";
      return;
  } // if

  // check for tie
  if (numTurns == 9) {
      gameStatus = "Tied Game";
  } // if

  // switch current player
  currentPlayer = (currentPlayer == "X" ? "O" : "X");

} // checkGameStatus

// check for a Win, there 8 win paths
function checkWin() {
  let cb = []; // current board
  cb[0] = ""; // not gonna use
  cb[1] = document.getElementById("one").innerHTML;
  cb[2] = document.getElementById("two").innerHTML;
  cb[3] = document.getElementById("three").innerHTML;
  cb[4] = document.getElementById("four").innerHTML;
  cb[5] = document.getElementById("five").innerHTML;
  cb[6] = document.getElementById("six").innerHTML;
  cb[7] = document.getElementById("seven").innerHTML;
  cb[8] = document.getElementById("eight").innerHTML;
  cb[9] = document.getElementById("nine").innerHTML;

  // top row
  if (cb[1] != "" && cb[1] == cb[2] && cb[2] == cb[3]) {
    return true;
  } // if

   // bottom row
  if (cb[7] != "" && cb[7] == cb[8] && cb[8] == cb[9]) {
    return true;
  } // if

  // middle row
  if (cb[4] != "" && cb[4] == cb[5] && cb[5] == cb[6]) {
    return true;
  } // if

  // left column
  if (cb[1] != "" && cb[1] == cb[4] && cb[4] == cb[7]) {
    return true;
  } // if

  // right column
  if (cb[3] != "" && cb[3] == cb[6] && cb[6] == cb[9]) {
    return true;
  } // if

  // middle column
  if (cb[2] != "" && cb[2] == cb[5] && cb[5] == cb[8]) {
    return true;
  } // if

  // down diagnal
  if (cb[1] != "" && cb[1] == cb[5] && cb[5] == cb[9]) {
    return true;
  } // if

  // up diagnal
  if (cb[3] != "" && cb[3] == cb[5] && cb[5] == cb[7]) {
    return true;
  } // if

} // checkWin

// change the visibility of divID
function changeVisibility(divID){
  var element = document.getElementById(divID);

  // if element exists, it is considered true
  if (element) {
    element.className = (element.className == 'hidden')? 'unhidden' : 'hidden';
  } // if

} // changeVisibility

function showLightBox(message, message2) {

  // set messages
  document.getElementById("message").innerHTML = message;
  document.getElementById("message2").innerHTML = message2;

  // show light box
  changeVisibility("lightbox");
  changeVisibility("boundaryMessage");

}

function continueGame() {
  changeVisibility("lightbox");
  changeVisibility("boundaryMessage");

  // if the game is over, show controls
  if (gameStatus != "") {
    changeVisibility("controls");
  }

} // continueGame
