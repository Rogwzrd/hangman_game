//these variables will hold the hangman words
var wordBank = {
	washingtonDc : "washington dc",
	oregon : "oregon",
	michigan : "michigan",
	whiteHouse : "white house"
},
	//number of wins
	wins = 0,

	//remaining gusses
	guessesRemaining = 13,

	//test array
	testArray = ["h","a", "p", "p", "y"],

	//this variable holds the user's input
	userInput = [],

	//this variable holds guessed letters
	guessedLetters = [];

function gameWin() {
	wins++;
}

function wrongGuess() {
	gussesRemaining--;
}

function gamereset() {
	guessesRemaining = 13;
	guessedLetters = []
}

//this function starts the game when you press any butotn	
document.onkeyup = function(event) {
	userInput = event.key;

	//convert the key userInput into a string
	//var userString = String.fromCharCode(userInput);

	//if then statement that determines wheter or not a guess has already been placed
	if (guessedLetters.indexOf(userInput) < 0) {
		//this adds the inputs to the guessedLetters array
		guessedLetters.push(userInput);
	} else {
		alert('you already guessed that!')
	}

	//this give the guessedLetters array output on keyup
	console.log(guessedLetters)

	//game output after key input
	var html =
		"<h1>Howard Dean Hangman</h1>" +
		"<br>" +
		"<br>" +
		"<p>Current Word</p>" + word +
		"<br>" +
		"<br>" +
		"<p>Guesses Remaining: "  + guessesRemaining +
		"<br>" +
		"<br>" +
		"<p>Guessed Letters: " + guessedLetters ;
	document.querySelector("#game").innerHTML = html;

}