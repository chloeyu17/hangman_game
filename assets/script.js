var timerEl = document.getElementById(".timer-text");
var winEl = document.querySelector("#win");
var lossEl = document.querySelector("#lose");

// timer for game
var timeLeft = 10;

function countdown(){
    var timeInterval = setInterval(function(){
        timeLeft--;
        timerEl.textContent = secondsLeft
    }, 1000);
}

// gets win/loss history
var userWon = localStorage.getItem("wins");
var userLost = localStorage.getItem("losses");

// prints out win/loss numbers
winEl.textContent = userWon;
lossEl.textContent = userLost;

// if statement if user loss, add to loss counter
if (timerLeft === 0) {
    userLost++
    lossEl.textContent = userLost;
    localStorage.setItem("losses", userLost);
} else {
    // if statement if user won, add to win counter
    userWon++;
    winEl.textContent = userWon;
    localStorage.setItem("wins", userWon);
}