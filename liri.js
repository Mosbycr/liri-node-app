require("dotenv").config();
 
spotify();

var userRequestAction = process.argv[2];
var userInput = process.argv.slice(3).join("+");
console.log(userInput);

switch (userRequestAction){
    case "spotify-this-song":
    console.log("spotify yes");
    break;
}

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