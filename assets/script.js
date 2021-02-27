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
var wins = document.querySelector(".win");
var losses = document.querySelector(".lose");
var start = document.querySelector(".start-button");
var reset = document.querySelector(".reset-button");
var word = document.querySelector("#wordSpace");
var guess;

var words = ["apple", "orange", "javascript", "pencil", "john", "random", "hummingbird", "cappuccino"];

start.addEventListener("click", function(){
    var guess = words[Math.floor(Math.random()* words.length)];
    console.log(word);
    var spaces = [];

    for(i=0; i<guess.length; i++){
        spaces.push("_ ");
    }
    console.log(spaces.join(''));
    word.textContent = spaces.join('');
});

reset.addEventListener("click", function(){
    wins.textContent = 0;
    losses.textContent = 0;
});

function keyGuess(event){
    var key = event.key.toString();
    guess = key;
}

document.addEventListener("keydown", keyGuess);


// if keydown event = one of the letters, replace _ with letter
