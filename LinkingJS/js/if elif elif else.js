var age;

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