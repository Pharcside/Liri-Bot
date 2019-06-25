require("dotenv").config();

var keys = require("./keys.js");

var fs = require("fs");

var spotify = new Spotify(keys.spotify);

var axios = require("axios");

var moment = require("moment");

var Spotify = require("node-spotify-api");

var option = process.argv[2];

var query =process.argv[3];

switch (option) {
    case "movie-this":
        movieThis(query);
        break;

    case "spotify-this-song":
        spotifyCall(query);
        break;
        
    case "concert-this":
        concertThis(query);
        break;
        
    case "do-what-it-says":
        doWhatItSays()
        break;


}

function spotifyCall(songName) {
    spotify.search ({type:"track", query: songName}, function(err,data) {
      if (err){
          return console.log("error occurred" + err);
      } 
      else (process.argv[3] === undefined); {
        songName = "the sign ace of base";
      }
      console.log("\n_Track Info_" + "\nArtist: " + data.tracks.items[0].artists[0].name + "\nSong: " + data.tracks.items[0].name + "\nLink: " + data.tracks.items[0].external_urls.spotify + "\nAlbum: " + data.tracks.items[0].album.name + "\n" + "\nGreat song! Search another :)") 
    },

function moveThis(moveName) {
    if (!movieName){
        movieName = "Mr Nobody";
    }
var queryURL = "http://www.omdbapi.com/?t=" +movieName + "&y=&plot=short&apikey=trilogy"; 
axios.get(queryURL).then(
    function(response){
        if (!movieName){
            moveName = "Mr Nobody";
        }
        console.log("\n_Movie Info_" + "\nTitle: " + response.data.Title + "\nRelease Year: " + response.data.Year + "\nRating: " + response.data.Rated + "\nRelease Country: " + response.data.Country + "\nLanguage: " + response.data.Language + "\nPlot: " + response.data.Plot + "\nActors: " + response.data.Actors + "\n" + "\n Love this one!");
    }
)   
},

function conertThis(artist){
    var bandQueryUrl=  "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    axios.get(bandQueryUrl).then(
        function(response){
            console.log("Upcomming Events");
            console.log("Artist: " + artist + "\nVenue: " + response.data[0].venue.name + "\nLocation: " + response.data[0].venue.country + "\nDate: " + response.data[0].datatime );
        }
    )
},

function doWhatItSays() {
    

    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }
     
        var dataArray = data.split(",");
        var option = dataArray[0];
        var randomSearch = dataArray[1];   

    })})}
