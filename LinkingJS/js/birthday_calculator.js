var currentDate = new Date();

var birthDate = new Date(1978, 6, 5);

var ageInMs = currentDate - birthDate;

var ageInYears = Math.floor(ageInMs / 31536000000);

document.write("Today's date is " + currentDate + ". "); 
document.write("My birthday is " + birthDate + ". ");
document.write("I am " + ageInYears + " years old.");
	 
	