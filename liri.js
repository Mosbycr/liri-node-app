require("dotenv").config();
var axios = require("axios");
var moment = require('moment');
var Spotify = require("node-spotify-api");
var keys = require("./keys.js");

var userRequestAction = process.argv[2];
var userInput = process.argv.slice(3).join("+");
var artist = process.argv.slice(3).join("");
console.log(userInput);



// Action choices and executions
switch (userRequestAction){
    case "spotify-this-song":
    spotify(userInput);
    break;

    case "concert-this":
    bandsInTown(artist);
    break;

    case "movie-this":
    omdb(userInput);
    break;

    case "do-what-it-says":
    break;
}

//add default song
function spotify(userInput) {
  var spotify = new Spotify(keys.spotify);
  //console.log(spotify);

  if(!userInput){
    userInput = "the+sign+ace+of+base";
  }

  spotify.search({ type: "track", query: userInput, limit: 1 }, function(err,data) {
    if (err) {
      return console.log("Error occurred: " + err);
    }

    //console.log(data);
    console.log("\n******Song Information******" + "\nArtist: " + data.tracks.items[0].artists[0].name + "\nSong name: " + data.tracks.items[0].name +
      "\nAlbum Name: " + data.tracks.items[0].album.name + "\nPreview Link: " + data.tracks.items[0].preview_url);
  });

}

function bandsInTown(artist){
  var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
  //console.log(queryURL);

  axios.get(queryURL).then(function (response) {
    //console.log(response);
    var results = response.data;
    //checks if response is emty - means that band has no events
    if (response.data.length === 0){ 
      console.log("The artist or band you would like to see has no showings available. Please try another!");
    } else {
      //loops through every available event and lists the venue name, location, and date of event
      for (var i = 0; i < results.length; i++) {
        console.log("\n****** Band Event Search Results ******" +
          "\nThe Venue: " + results[i].venue.name +
          "\nThe Venue location is: " + results[i].venue.city + ", " + results[i].venue.region);
        var date = results[i].datetime;
        var newDate = moment(date).format("MM/DD/YYYY");
        console.log("Date of the Event: " + newDate);
      }
    }
  });
}

//axios call to omdb api to retrieve requested movie data
function omdb(movieName){
  // if there is no requested movie for search
  if (!movieName){
    movieName = "mr.nobody";
  }

  var queryURL = "http://www.omdbapi.com/?apikey=trilogy&t=" + movieName + "&type=movie&tomatoes=true";
  console.log(queryURL);

  axios.get(queryURL).then(function (response){
    //console.log(response);
    var movieResults = response.data;
    console.log("\n******Movie Information******" +
    "\nMovie Title: " + movieResults.Title +
    "\nYear Released: " + movieResults.Year +
    "\nCountry: " + movieResults.Country +
    "\nLanguage: " + movieResults.Language +
    "\nIMDB Rating: " + movieResults.Ratings[0].Value +
    "\nRotten Tomatoes Rating: " + movieResults.Ratings[1].Value +
    "\nActors: " + movieResults.Actors +
    "\nPlot: " + movieResults.Plot);
  });
}