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