var playList = [];
playList.push('Back in Black');
playList.push('Cowboy Dan', '9 to 5er\'s Anthem');
playList.unshift('Big Bird');
playList.unshift('Low Commotion', 'Wasp Nest');
printList(playList);

playList.pop(); //Removes item from end of array

playList.shift(); //Removes item from end of array

printList(playList);

//<arrayname.length = list number of items in array