//these variables will hold the hangman words
var wordBank = ["michigan", "oregon", "ohio", "mississippi"],

    //remaining gusses
    guessesRemaining = 13,

    //this variable holds the user's input 
    userInput = [],

    //this variable holds guessed letters
    guessedLetters = [],

    //current word is the random variable for the user to solve
    chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)],

    //this array will be fed input when the user makes a correct guess
    correctGuesses = [];


function gameReset() {
    guessesRemaining = 13;
    guessedLetters = [];
}

document.onkeyup = function(event) {

    userInput = event.key;

    //this will control in text onscreen for the current word
    var currentSpan = document.getElementById("current");
    currentSpan.innerHTML = chosenWord;

    //this will control in text onscreen for the remaining guesses
    var guessesSpan = document.getElementById("guesses-left");
    guessesSpan.innerHTML = guessesRemaining;

    //this will control the text for the letters guessed so far
    var lettersSpan = document.getElementById("guessed-letters");
    lettersSpan.innerHTML = guessedLetters;

    // this will prevent repeat inputs
    if ((guessedLetters.indexOf(userInput) < 0) && (event.keyCode >= 65 && event.keyCode <= 90)) {

        //this line adds guesses to the visual output
        guessedLetters.push(userInput);
    }

    if (chosenWord.length === correctGuesses.length) {
        gameReset();
    }

}