require("dotenv").config();
 
spotify();

var userRequestAction = process.argv[2];

switch (userRequestAction){
    case "spotify-this-song":
    console.log("spotify yes");
    break;
}

function spotify() {
  //var Spotify = require("node-spotify-api");
  var keys = require("./keys.js");
  var spotify = new Spotify(keys.spotify);


}