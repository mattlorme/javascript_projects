//prompt the user for a number less than 100. use that number for the starting point of the loop.

//prompt the user for a second number to use as the end point of the loop

//edge cases

//If the second number is smaller than the first change the order of the count to descending

var firstNum;
var lastNum;

function getNumber() {
	firstNum = parseInt(prompt("Provide a number less than 100."));
	lastNum = parseInt(prompt("Now, provide a second number that will be an end point."));
	if (firstNum > 100 || isNaN(firstNum) || lastNum > 100 || isNaN(lastNum)) {
		alert("ID-10T error with the nums.  Try again please.")
		getNumber();
	} 
}
		
function isMultipleThree(number) {
    if (number % 3 !== 0 || number < 3 || isNaN(number) ) {
        return false;
    } else {
        return true;
    }
}

function isMultipleFive(number) {
    if (number % 5 !== 0 || number < 5 || isNaN(number) ) {
        return false;
    } else {
        return true;
    }
}


function fizzBuzz() {
	getNumber();
	if (lastNum > firstNum) {
	    for(i = firstNum; i <= lastNum; i++) {
	        if (isMultipleThree(i) && isMultipleFive(i)) {
	        console.log('fizzbuzz');
	        } else if (isMultipleThree(i)) {
	        console.log('fizz');
	        } else if (isMultipleFive(i)) {
	        console.log('buzz');
	        } else {
	        console.log(i);
	        }
	    }
	} else if (firstNum > lastNum) {
		for(i = firstNum; i >= lastNum; i--) {
	        if (isMultipleThree(i) && isMultipleFive(i)) {
	        console.log('fizzbuzz');
	        } else if (isMultipleThree(i)) {
	        console.log('fizz');
	        } else if (isMultipleFive(i)) {
	        console.log('buzz');
	        } else {
	        console.log(i);
	        }
	    }
	} else {
		alert("Pretty tricky, but your numbers are equal.  Muahahahahhaha")
	}
}


// function isMultiple() {
// 	num = parseInt(prompt("Provide a number and lets see if it\'s a multiple of three or 5"));
// 	if (isNaN(num) === true) {
// 		isMultiple();
// 	} else {
// 		isModNum3 = (num % 3);
// 		isModNum5 = (num % 5);
// 	}

// 	if (isModNum3 === 0 && isModNum5 === 0) {
// 		alert(num + " is a multiple of both 3 and 5");
// 	} else if (isModNum3 === 0) {
// 		alert(num + " is a multiple of 3 but not 5");
// 	} else if (isModNum5 === 0) {
// 		alert(num + " is a multiple of 5 but not 3");
// 	} else {
// 		alert("your number isn't a multiple of either 3 or 5")
// 	}
// }

// var num;
// var isModNum3;
// var isModNum5;

// function fizzbuzz() {
// 	for (i = 1; i <= 100; i++) {

// 		isModNum3 = (i % 3);
// 		isModNum5 = (i % 5);
		
// 		if (isModNum3 === 0 && isModNum5 === 0) {
// 			console.log("fizzbuzz");
// 		} else if (isModNum3 === 0) {
// 			console.log("fizz");
// 		} else if (isModNum5 === 0) {
// 			console.log("buzz");
// 		} else {
// 			console.log(i)
// 		}
// 	}
// }

// function isMultipleThree(number) {
//     if (number % 3 !== 0 || number < 3 || isNaN(number) ) {
//         return false;
//     } else {
//         return true;
//     }
// }

// function isMultipleFive(number) {
//     if (number % 5 !== 0 || number < 5 || isNaN(number) ) {
//         return false;
//     } else {
//         return true;
//     }
// }


// function fizzBuzz() {
//     for(i = 0; i <= 100; i++) {
//         if (isMultipleThree(i) && isMultipleFive(i)) {
//         console.log('fizzbuzz');
//         } else if (isMultipleThree(i)) {
//         console.log('fizz');
//         } else if (isMultipleFive(i)) {
//         console.log('buzz');
//         } else {
//         console.log(i);
//         }
//     }
// }