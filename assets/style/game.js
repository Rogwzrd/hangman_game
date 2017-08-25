//these variables will hold the hangman words
var wordBank = ["michigan", "oregon", "ohio", "mississippi"],

    //remaining gusses
    guessesRemaining = 13,

    //this variable holds the user's input 
    userInput = [],

    //this variable holds guessed letters
    guessedLetters = [],

    //current word is the random variable for the user to solve
    currentWord =  wordBank[Math.floor(Math.random() * wordBank.length)],

    //this array will be fed input when the user makes a correct guess
    correctGuesses = [],

    //this will control in text onscreen for the current word
    currentSpan = document.getElementById("current-Word"),

    //this will control in text onscreen for the remaining guesses
    guessesSpan = document.getElementById("guesses-left"),

    //this will control the text for the letters guessed so far
    guessedSpan = document.getElementById("guessed-letters");

    // guessedSpan.innerHTML = "abousldfupaoisu";

document.onkeyup = 

    document.getElementById("guesses-left").innerHTML = "sojdfg;klsjdf World!";

    document.getElementById("current-Word").innerHTML = "Hello World!";