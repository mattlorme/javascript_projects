var playList = [
  ['Back in Black', 'AC/DC'],
  ['Cowboy Dan', 'Modest Mouse'],
  ['9 to 5er\'s Anthem', 'Aesop Rock'],
  ['Big Bird', 'Andrew Jackson Jihad'],
  ['Low Commotion', 'Timber Timbre'],
  ['Wasp Nest', 'The National'],
];

function print( message ) {
  document.write(message);
}

function printSongs( songs ) {
  var listHTML = '<ol>';
  for ( var i = 0; i < songs.length; i += 1) {
    listHTML += '<li>' + songs[i][0] + ' by ' + songs[i][1] + '</li>';
  }
  listHTML += '</ol>';
  print(listHTML);
}

printSongs(playList);