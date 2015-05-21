var sport = prompt("What is your favorite sport?");
var freq = prompt("How often do you play " + sport + " each month?");

//convert and confirm that freq is an int
var intFreq = parseInt(freq);
var isNotInt = isNaN(intFreq);

//if freq is not an int prompt for an int until provided
while (isNotInt == true){
	alert("Digit please.");
	freq = prompt("How often do you play " + sport + " each month?");
	intFreq = parseInt(freq);
	isNotInt = isNaN(intFreq);
}

//calcuate avg and round to single decimal place
var avg = (intFreq / 4.3480);
var adjAvg = Math.round( avg * 10) / 10;

//allow for max of 7 days/week
if (adjAvg > 7) {
	adjAvg = 7
}

alert("You play " + sport + " " + "an average of " + adjAvg + " days per week");




