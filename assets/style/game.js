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

                var rightAnswer = 0;

// for (var i = chosenWord.length -1; i >= 0; i--) {
//     var hiddenWord = chosenWord..join()replace(chosenWord[i], "_");
//     console.log(hiddenWord);
// }

function displayText(arr) {
    currentSpan.innerHTML = userInput;
}

//this function resets the game after a win or a loss
function gameReset() {
    guessesRemaining = 13;
    guessedLetters = [];
    wordBank[Math.floor(Math.random() * wordBank.length)];
}

document.onkeyup = function(event) {

    userInput = event.key;

    for (var i = 0; i < chosenWord.length; i++) {
        if (userInput == chosenWord[i]) {
            rightAnswer++;
        }
    }

    //this will control in text onscreen for the current word
    var currentSpan = document.getElementById("current");
    currentSpan.innerHTML = chosenWord;

    // this will prevent repeat inputs
    if ((guessedLetters.indexOf(userInput) < 0) && (event.keyCode >= 65 && event.keyCode <= 90)) {

        //if your input is a part of the chosen word then 
        if (chosenWord.indexOf(userInput) >= 0) {

            //this adds your correct input to the correct guesses array to be compared to the current word
            correctGuesses.push(userInput);

            //when you make a wrong guess
        } else {
            //adds input to incorrect guesses array
            guessedLetters.push(userInput);

            //this will control the text for the letters guessed so far
            var lettersSpan = document.getElementById("guessed-letters");
            lettersSpan.innerHTML = guessedLetters;

            //your remaining guesses goes down
            guessesRemaining--;

            //this will control in text onscreen for the remaining guesses
            var guessesSpan = document.getElementById("guesses-left");
            guessesSpan.innerHTML = guessesRemaining;

            if (guessesRemaining == 0)
                gameReset();
        }


    }

}