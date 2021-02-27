var wins = document.querySelector(".win");
var losses = document.querySelector(".lose");
var start = document.querySelector(".start-button");
var reset = document.querySelector(".reset-button");
var word = document.querySelector("#wordSpace");
var wordToGuess;
var guess;

var words = ["apple", "orange", "javascript", "pencil", "john", "random", "hummingbird", "cappuccino"];

start.addEventListener("click", function(){
    wordToGuess = words[Math.floor(Math.random()* words.length)];
    var spaces = [];
    console.log(wordToGuess);

    for(i=0; i<wordToGuess.length; i++){
        spaces.push("_ ");
    }
    word.textContent = spaces.join('');

    for(i=0; i<wordToGuess.length; i++){
        console.log(spaces[i]);
        console.log(wordToGuess[i]);
        if(guess = wordToGuess[i]){
            spaces[i] = wordToGuess[i];
        }
    }
});

reset.addEventListener("click", function(){
    wins.textContent = 0;
    losses.textContent = 0;
});

function keyGuess(event){
    var key = event.key.toString();
    guess = key;
    console.log(guess);
    console.log
}

document.addEventListener("keydown", keyGuess);


// if keydown event = one of the letters, replace _ with letter