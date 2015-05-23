/*
var numOne;
var numTwo;

numOne = parseInt(prompt("I\'m going to add 2 numbers together for you.  Provide the first number"));

numTwo = parseInt(prompt("Now, provide the second number"));

if (typeof numOne !== "number") {
    numOne = parseInt(prompt("your first entry was not a number.  Please provide a number"));
} 

if (typeof numTwo !== "number") {
	numTwo = parseInt(prompt("your second entry was not a number.  Please provide a number"));
}

var Sum = numOne + numTwo;
alert(Sum);
*/

do{
    var num1 = prompt("Choose a number:");
} while(isNaN(num1) || !num1);

do {
    var num2 = prompt("Choose another number:");
} while(isNaN(num2) || !num2);

num1 = parseInt(num1);
num2 = parseInt(num2);

//if (typeof num1 === "number" && typeof num2 === "number") {
    alert("Your total is " + (num1 + num2));
//}