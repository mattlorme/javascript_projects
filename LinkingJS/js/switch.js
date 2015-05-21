/*var age;

age = parseInt(prompt("How old are you?"));
               
if (age >= 50) {
alert("your halfway to a century");
}
    else if (age < 50 && age >= 30) {
    alert("you are in your prime");
}
    else if (age < 30 && age >= 18) {
    alert("you are young and hip");
}
    else {
    alert("go home");
}


//boolean switch

var age = parseInt(prompt("how old are you"));
*/

/* if (isNaN(num)) {
	num = parseInt(prompt("That\'s not a number.  Pick a number"));
}
switch (age >= 50) {
    case true:
        alert("your halfway to a century");
        break;
}
switch (age >= 30) {
	case true:
       alert("you are in your prime");
       break;
}    
switch (age >= 18) {
	case true:
    	alert("you are young and hip");
        break;
    default:
        alert("go home");
}*/

//traditional switch

/*
var gender;
var boyPrice;
var girlPrice;

boyPrice = 40.00;
girlPrice = 10.00;

gender = prompt("are you a boy or girl?");
      
confirm("you are a " + gender);

switch (gender) {
    case "boy":
            alert("entrance fee is $" + boyPrice + ".00");
            break;
    case "girl":
            alert("entrance fee is $" + girlPrice + ".00");
            break;
    default:
            alert("Sorry, boys and girls only");
}          
*/

//Ternary

var gender;
var boyPrice;
var girlPrice;

boyPrice = 40.00;
girlPrice = 10.00;

gender = prompt("are you a boy or girl?");

alert(gender === ("boy") ? "Entrance fee is $" + (boyPrice:girlPrice) + ".00");