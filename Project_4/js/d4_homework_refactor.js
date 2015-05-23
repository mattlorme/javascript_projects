var preference;
var numOne;
var numTwo;
var artOne;
var artTwo;
var sum;
var artFav;

//Prompts then tests and sets user preference to math or art, 
//then calls the appropriate math(), or art().
function pref() {
	preference = prompt("Which do you prefer, math, or art?");
	preference = preference.toLowerCase();
	
	if (preference !== "math" && preference !== "art") {
		pref();
	} else if (preference === "math") {
		math();
	} else if (preference === "art") {
		art();
	}
}

//Prompts for 2 numbers tests for int the adds them and alerts sum.
function math() {
	do {
    numOne = parseInt(prompt("I\'m going to add two numbers for you.  Please provide the first number"));
	numTwo = parseInt(prompt("...and now the second number please."));;
	} while (isNaN(numOne) == true || isNaN(numTwo) == true);
	sum = numOne + numTwo;
	alert("The sum of your two numbers is " + sum);
}

//Prompts to two art styles and favorite.  
//tests that string is provided.
//alerts both with preferred style listed as favorite.
function art() {
	artOne = prompt("Name one of your favorite art styles.");
	artTwo = prompt("....and another of your favorite art styles.");
	artFav = prompt("which of the art styles that you named is your favorite?");
	if (artOne == "" || artTwo == "" || artFav == "") {
		art();
	} else if (artOne === artFav){
		alert(artOne + " is your favorite style of art but " + artTwo + " is pretty cool too");
	} else {
		alert(artTwo + " is your favorite style of art but " + artOne + " is pretty cool too");
	}
}

