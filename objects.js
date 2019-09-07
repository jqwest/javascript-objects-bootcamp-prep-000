
/*
//assign an object with the variable playlist and initialize the
//object with a key-value pair - the keys will be artist names
//and the values will be song titles
//( what limitation does this impose on our playlist???
*/
var playlist = {
  artistNames: "",
  songTitles: ""
};

/*create a function called updatePlaylist that accepts three
parameters: playlist(an object), an artist name(string)
and song title.
The body of the functions shoudld add the song and artist as a key-value
pair to the playlist object.  The function should reurn the whole
playlist*/

function updatePlaylist (playlist, artistNames, songTitles){
  playlist[artistNames] = "Phil Ochs",
  playlist[songTitles] = "My Bloody Valentine"
  playlist[playlist] = "Slowdive"
return playlist
}


/* create a function called removeFromPlaylist that accepts two
arguments (the playlist object and the artist name)
The body of the function should delete the key-value pair from
the playlist and return the updated playilst*/

function removeFromPlaylist(playlist, artistNames) {
  delete playlist[artistNames];
  return playlist
}
