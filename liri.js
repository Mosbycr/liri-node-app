require("dotenv").config();
var axios = require("axios");
var moment = require('moment');

var userRequestAction = process.argv[2];
var userInput = process.argv.slice(3).join("+"); //will work for spotify?
//console.log(userInput);

omdb();

// Action choices and executions
switch (userRequestAction){
    case "spotify-this-song":
    spotify();
    break;

    case "concert-this":
    bandsInTown();
    break;

    case "movie-this":
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


function bandsInTown(){
  //variable that takes artists name of any length
  var artist = process.argv.slice(3).join("");
  //console.log(artist);
  var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
  console.log(queryURL);

  //need to add some way to say try another band when artist info not retrieved and empty array provided in queryURL - status code will not work both 200 and no error
  axios.get(queryURL).then(function (response) {
    //  console.log(response);
    var results = response.data;

    //loops through every available event and lists the venue name, location, and date of event
    for (var i = 0; i < results.length; i++){
      console.log("\n****** Band Event Search Results ******" +
      "\nThe Venue: " + results[i].venue.name +
      "\nThe Venue location is: " + results[i].venue.city + ", " + results[i].venue.region);
      var date = results[i].datetime;
      var newDate = moment(date).format("MM/DD/YYYY");
      console.log("Date of the Event: " + newDate);
    }
    
  // }).catch(function (error) {
  //   if (error.response) {
  //     // The request was made and the server responded with a status code
  //     // that falls out of the range of 2xx
  //     console.log(error.response.data);
  //     console.log(error.response.status);
  //     console.log(error.response.headers);
  //   } else if (error.request) {
  //     // The request was made but no response was received
  //     // `error.request` is an object that comes back with details pertaining to the error that occurred.
  //     console.log(error.request);
  //   } else {
  //     // Something happened in setting up the request that triggered an Error
  //     console.log("Error", error.message);
  //   }
  //   console.log(error.config);
  });


}

function omdb(){

}