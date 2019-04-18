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
![Screenshot (18)](https://user-images.githubusercontent.com/46547100/56335246-bce38b00-6169-11e9-946e-a122841d55b5.png)

2. Add the action you would like to take and the requested movie, song, or artist/band

3. Requests can be single or multiple words



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
 ![Screenshot (19)](https://user-images.githubusercontent.com/46547100/56335247-bce38b00-6169-11e9-9feb-4ff34c698c9f.png)
 
 * calling concert-this and a requested artist/band
 ![Screenshot (20)](https://user-images.githubusercontent.com/46547100/56335248-bce38b00-6169-11e9-9933-befe3593339e.png)
 ![Screenshot (21)](https://user-images.githubusercontent.com/46547100/56335249-bce38b00-6169-11e9-8316-90bfdb18b5b0.png)

* the response 
![Screenshot (22)](https://user-images.githubusercontent.com/46547100/56335250-bce38b00-6169-11e9-8b93-04dbedd59392.png)

* if the band is unavailable a message stating so is relayed
 
  
