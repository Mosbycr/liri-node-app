# Liri
Liri node.js application allows users to search and retrieve information for movies, songs, and bands in town.

# Installation
In order to run this application you will need to:
- npm install axios
- npm install dotenv
- npm install fs
- npm install moment
- npm install node-spotify-api
- create a .env file that includes the spotify client id and secred id:

  - SPOTIFY_ID={your id here }
SPOTIFY_SECRET={your id here}

# Getting Started
1. Open the terminal for liri.js and in ther terminal run node liri.js
-put pic-
2. Add the action you would like to take and the requested movie, song, or artist/band
3. Requests can be single or multiple words
-put pics-

# Actions
 There are 4 actions available:
 - concert-this
 - spotify-this-song
 - movie-this
 - do-what-it-says
 
 # concert-this
 ### what it does:
 Axios is used to call the Bands In Town API and retrieve a list of events and information for the inputed request
 ### what it returns:
 * The venue name
 * The venue location
 * The date of the event
 ### examples
 * calling concert-this
 * calling concert-this and a requested artist/band
 * the response
 * if the band is unavailable a message stating so is relayed
 
  
