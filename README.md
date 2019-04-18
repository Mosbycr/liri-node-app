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
4. All responses will be logged in the terminal and will also be appended to log.txt for a clear to read list of the information.

![Screenshot (34)](https://user-images.githubusercontent.com/46547100/56397875-1ef8ca80-6214-11e9-913b-5bf422ac4414.png)

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

![Screenshot (33)](https://user-images.githubusercontent.com/46547100/56335540-f23ca880-616a-11e9-9b86-8bca212c550b.png)

# spotify-this-song
### what it does:
Using the node-spotify-api to call upon the Spotify API to retrieve song information for the inputed request
### what it returns:
* Artist
* Song Name
* Album 
* URL Preview Link for the song
### examples
* calling spotify-this-song

![Screenshot (23)](https://user-images.githubusercontent.com/46547100/56335851-2e243d80-616c-11e9-8223-f179168ee598.png)
* calling spotify-this-song and a requested song

![Screenshot (24)](https://user-images.githubusercontent.com/46547100/56335852-2e243d80-616c-11e9-88a5-a34c40dc3cce.png)
* the response

![Screenshot (25)](https://user-images.githubusercontent.com/46547100/56335854-2e243d80-616c-11e9-8370-cde2a82a0f70.png)
* if a action is made without a song request information will be recieved for "The Sign"
 
![Screenshot (27)](https://user-images.githubusercontent.com/46547100/56335855-2e243d80-616c-11e9-8c5d-7b243e78af57.png)

# movie-this
### what it does:
Axios is used to call on the OMDB API to retrieve information on a movie for the inputed request
### what it returns:
* Movie Title
* Year
* Country
* Language
* IMDB Rating
* Rotten Tomatoes Rating
* Actors
* Plot
### examples
* calling movie-this

![Screenshot (30)](https://user-images.githubusercontent.com/46547100/56336296-c7a01f00-616d-11e9-9f28-9e774429e782.png)
* calling movie-this and a requested movie

![Screenshot (28)](https://user-images.githubusercontent.com/46547100/56336220-7ee86600-616d-11e9-853a-fcc009588916.png)
* the response

![Screenshot (29)](https://user-images.githubusercontent.com/46547100/56336221-7ee86600-616d-11e9-9b45-f9a6f80ca61e.png)
* if an action is made without a request the movie information for Mr. Nobody will be returned.

![Screenshot (30)](https://user-images.githubusercontent.com/46547100/56336222-7ee86600-616d-11e9-9c04-632740db54cf.png)

# do-what-it-says
### what it does:
It reads the random.txt file for information on which action to call and the request to make
 - The .txt file has in it: spotify-this-song,"I Want it That Way" 
 - The .txt file can be changed to use any of the actions
### examples
![Screenshot (32)](https://user-images.githubusercontent.com/46547100/56336294-c7a01f00-616d-11e9-8be4-54f97b4c96ec.png)



  
