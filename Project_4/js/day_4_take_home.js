/*
function intCheck() {
	isNotInt = isNaN(sum);
	if (isNotInt = true) {
		math();
	} else {
		return false;
	}
}
*/



//preference = pref();

//console.log( pref() );

var preference;
var numOne;
var numTwo;
var artOne;
var artTwo;
var sum;
var isNotInt;
var artFav;

function pref() {
	preference = prompt("Which do you prefer, math, or art?");
	if (preference !== "math" && preference !== "art") {
		pref();
	} else if (preference === "math") {
		math();
	} else if (preference === "art") {
		art();
	}
}

function math() {
	numOne = parseInt(prompt("I\'m going to add two numbers for you.  Please provide the first number"));
	numTwo = parseInt(prompt("...and now the second number please."));
	sum = numOne + numTwo;
	alert("The sum of your two numbers is " + sum);
}

function art() {
	artOne = prompt("Name one of your favorite art styles.");
	artTwo = prompt("....and another of your favorite art styles.");
	artFav = prompt("which of the art styles that you named is your favorite?");
	if (artOne === artFav){
		alert(artOne + " is your favorite style of art but " + artTwo + " is pretty cool too");
	} else {
		alert(artTwo + " is your favorite style of art but " + artOne + " is pretty cool too");
	}
}


