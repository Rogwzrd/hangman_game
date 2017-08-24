//these variables will hold the hangman words
var wordBank = ["michigan", "oregon", "ohio", "mississippi"]
    //number of wins
    wins = 0,

    //remaining gusses
    guessesRemaining = 13,

    //test array
    testArray = ["h", "a", "p", "p", "y"],

    //this variable holds the user's input 
    userInput = [],

    //this variable holds guessed letters
    guessedLetters = [],

    //current word is the random variable for the user to solve
    currentWord =  wordBank[Math.floor(Math.random() * wordBank.length)],

    //this array will be fed input when the user makes a correct guess
    correctGuesses = [];

function gameWin() {
    wins++;
    alert("We\'re going to " + currentWord + ". Byaaahh!");
}

function wrongGuess() {
    guessesRemaining--;
}

function gameReset() {
    guessesRemaining = 13;
    guessedLetters = [];
    currentWord = wordBank[Math.floor(Math.random() * wordBank.length)]
}

//this function starts the game when you press any butotn	
document.onkeyup = function(event) {
    userInput = event.key;

    //convert the key userInput into a string
    var userString = String.fromCharCode(userInput);

    //if then statement that determines wheter or not a guess has already been placed
    if (guessedLetters.indexOf(userInput) < 0) {

        //this adds the inputs to the guessedLetters array
        guessedLetters.push(userInput);
    } else {
        alert('you already guessed that!');
    }

    //if you make a correct guess this pushes your input to the correct guess array
    if (currentWord.indexOf(userInput) >= 0) {
        correctGuesses.push(userInput);
    } else {
        wrongGuess();
        if (guessesRemaining === 0) {
            gameReset();
        }
    }

    //this checks to see if the user wins by sorting characters in both the correct guesses and current word array
    // if (correctGuesses.sort().join(",") === currentWord.sort().join(",")) {
    //     gameWin();
    //     gameReset();
    // }

    if (correctGuesses === currentWord) {
    	gameWin();
    	gameReset();
    }


    //this give the guessedLetters array output on keyup
    console.log(guessedLetters)

    //game output after key input
    var html =
        "<h1>Howard Dean Hangman</h1>" +
        "<br>" +
        "<br>" +
        "<p>Current Word</p>" + currentWord +
        "<br>" +
        "<br>" +
        "<p>Guesses Remaining: " + guessesRemaining +
        "<br>" +
        "<br>" +
        "<p>Guessed Letters: " + guessedLetters;
    document.querySelector("#game").innerHTML = html;
}