var sport; 
var freq; 
var avg;
var isNotInt;

sport = prompt("What is your favorite sport?");

//confirm sport is not an empty string
while (sport == ""){
	sport = prompt("What is your favorite sport?");
}

freq = parseInt(prompt("How often do you play " + sport + " each month?"));

//confirm that freq is an int if freq is not an int prompt for an int until provided
isNotInt = isNaN(freq);

while (isNotInt == true){
	freq = parseInt(prompt("How often do you play " + sport + " each month? (response must begin with a digit)"));
	isNotInt = isNaN(freq);
}

//calcuate avg and round to single decimal place
avg = (freq / 4.3480);
avg = Math.round( avg * 10) / 10;

//allow for max of 7 days/week
if (avg > 7) {
	avg = 7;
}

alert("You play " + sport + " " + "an average of " + avg + " days per week");