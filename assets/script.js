var timerEl = document.getElementById(".timer-text");
var wins = document.querySelector(".win");
var losses = document.querySelector(".lose");
var start = document.querySelector(".start-button");
var reset = document.querySelector(".reset-button");
var word = document.querySelector("#wordSpace");
var wordToGuess;
var guess;
var spaces = [];


// gets win/loss history
var userWon = localStorage.getItem("wins");
var userLost = localStorage.getItem("losses");


// timer for game
var timeLeft = 10;


var words = ["apple", "orange", "javascript", "pencil", "john", "random", "hummingbird", "cappuccino", "the"];


function countdown(){
    var timeInterval = setInterval(function(){
        timeLeft--;
        timerEl.textContent = secondsLeft
    }, 1000);
}

// prints out win/loss numbers
wins.textContent = userWon;
losses.textContent = userLost;

// if statement if user loss, add to loss counter
if (timeLeft === 0) {
    userLost++
    losses.textContent = userLost;
    localStorage.setItem("losses", userLost);
} else {
    // if statement if user won, add to win counter
    userWon++;
    wins.textContent = userWon;
    localStorage.setItem("wins", userWon);
}





start.addEventListener("click", function(){
    wordToGuess = words[Math.floor(Math.random()* words.length)];
    console.log(wordToGuess);

    for(i=0; i<wordToGuess.length; i++){
        spaces.push("_ ");
    }
    word.textContent = spaces.join('');
    console.log(spaces.join(''));
});

reset.addEventListener("click", function(){
    wins.textContent = 0;
    losses.textContent = 0;
});

function keyGuess(event){
    var key = event.key.toString();
    guess = key;
    
    for(i=0; i<wordToGuess.length; i++){
        if(guess == wordToGuess[i]){
            console.log("YES");
        }
    }
}

document.addEventListener("keydown", keyGuess);




// if keydown event = one of the letters, replace _ with letter
