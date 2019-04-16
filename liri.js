require("dotenv").config();
var axios = require("axios");
var moment = require('moment');

var userRequestAction = process.argv[2];
var userInput = process.argv.slice(3).join("+"); //will work for spotify?
var artist = process.argv.slice(3).join("");
console.log(userInput);



// Action choices and executions
switch (userRequestAction){
    case "spotify-this-song":
    spotify();
    break;

    case "concert-this":
    bandsInTown(artist);
    break;

    case "movie-this":
    omdb(userInput);
    break;
}

// geting an error for spotify()
function spotify() {
  var Spotify = require("node-spotify-api");
  var keys = require("./keys.js");
  var spotify = new Spotify(keys.spotify);
  console.log(spotify);

  spotify.search({ type: "track", query: "All the Small Things", limit: 1 }, function(err,data) {
    if (err) {
      return console.log("Error occurred: " + err);
    }

    console.log(data);
  });

}


function bandsInTown(artist){
  var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
  console.log(queryURL);

  //need to add some way to say try another band when artist info not retrieved and empty array provided in queryURL - status code will not work both 200 and no error
  axios.get(queryURL).then(function (response) {
    console.log(response);
    var results = response.data;

    if (response.data === []){  //does not work for check 
      console.log("try again");
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