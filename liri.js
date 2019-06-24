require("dotenv").config();

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

var axios = require("axios")

var moment = require('moment');



// variables to call functions
var spotifyThisSong = function() {
    console.log (""+ input);

};

var movieThis = function () {
    console.log ("" + input);
};

var doWhatItSays = function(){
    console.log ("" + input);

};

var concertThis = function() {
    console.log ();
};

// Switch statement to call functions

switch (command) {
    case "concert-this":
        concertThis();
        break;

    case "spotify-this-song":
        spotifyThisSong();
        break;
        
    case "movie-this":
        movieThis();
        break;

    case "do-what-it-says":
        doWhatItSays();
        break;

}

