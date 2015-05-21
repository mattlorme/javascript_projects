//ask for users Birthday
var birthday = prompt("what day where you born?  yyyy-mm-dd format plz");

//convert sting from prompt to ms date
var bdayConvert = Date.parse(birthday);

//Adjust for 0 = January so user doesn't have to use 1978-06-05 for July 5th 1978
//cause the average person doesn't think of Jan as month 0
var dateAdjusted = bdayConvert - 2557800002;

//Get today's date using new Date() function
var today = new Date();

//post alert to user to identify the date that their computer thinks it is
alert("today is " + today);

//math in ms to subtract birthday ms from today ms
var ageInMs = today - dateAdjusted;

//Convert ms to years
var ageInYears = Math.floor(ageInMs / 31536000000);

//triumphantly announce users ability to not die
alert("Congratulations you've managed not to die for " + ageInYears + " years!");


