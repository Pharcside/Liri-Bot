require("dotenv").config();

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

var axios = require("axios")

var moment = require("moment");

var Spotify = require("node-spotify-api");

// input
var query = process.argv;
var type =process.argv[2];
var array = [];

//loop through 
for (var i = 3; i < query.length; i++) {
    array.push(query[i]);
    array.push("+");
}

array.splice(-1);
var finalSearch = array.join("");

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




// variables to call functions
var spotifyThisSong = function() {
    if (finaSearch === ""){
        console.log ("\n");
        console.log("No Artist entered");
        console.log("\n");

    }
    else {
        axios.get("https://rest.bandsintown.com/artists/" + finalSearch + "/events?app_id=codingbootcamp").then(
            function (response){
             if (response.data.length <= 0){
                 console.log("no info for this artist");
             }  
             else {
                 
                 }
             } 
                
            
        
    

            }

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


