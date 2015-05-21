var num;

num = parseInt(prompt("Pick a number"));


if (isNaN(num)) {
	num = parseInt(prompt("That\'s not a number.  Pick a number"));
} else { 
	num = num % 2;
}

if (num == 0) {
	alert("your number was even");
} else {
	alert('your number was odd');
}