var destination;
//var beachList;
//var mountainList;
var result;
var beachItems = ["towel", "sunscreen", "hat", "sunglasses", "beachball"];
var mountainItems = ["fishing pole", "bug spray", "chapstick", "hammock", "flashlight"];

destination = prompt("Beach or Mountains");
destination = destination.toUpperCase();

	switch ( destination ){
		case "BEACH":
			result = confirm("It\'s going to be raining at the beach, are you sure you want to vacation in the rain?");
			break;
		case "MOUNTAINS":
			alert("All right!  The mountains sound fun.");
			break;
		default:
			alert("It's either the beach or the mountains.  Pick one.");
			break;
	}

result ? alert("All right!  The beach it is.  Don't forget your raincoat."):alert("OK.  So we'll go to the mountains.");

if (result === false || destination === "MOUNTAINS") {
	alert("You'll want to pack " + mountainItems.join(", "));
} else {
	beachItems.push("raincoat");
	alert("You'll want to pack " + beachItems.join(", ") + ".");
}
//beachList = beachItems.join(", ");
//mountainList = mountainItems.join(", ");