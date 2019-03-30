require('dotenv').config();

var keys = require("./keys.js");

var axios = require("axios");

var moment = require('moment');
moment().format();

var fs = require("fs")


/*
axios
  .get("https://en.wikipedia.org/wiki/Kudos_(granola_bar)")
  .then(function(response) {
    // If the axios was successful...
    // Then log the body from the site!
    console.log(response.data);
  })
  */

//concert-this

if (process.argv[2] === "concert-this"){
  var artist = process.argv.slice(3).join(" ");
  var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

  axios.get(queryUrl).then(
    function (response) {

        for(var i = 0; i < response.data.length; i++){
          console.log("Venue: " + response.data[i].venue.name);
          console.log("Location: " + response.data[i].venue.city);
          console.log("Date: " + moment(response.data[i].datetime).format("MM/DD/YYYY"));
          console.log("-------------------------------------------------")

        }
        
  })
};




//spotify-this-song
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
 
  if (process.argv[2] === "spotify-this-song"){
    var songName = process.argv.slice(3).join(" ");
    if (songName === ""){
      songName = "The Sign Ace of Base";
    }
    spotify
      .search({ type: 'track', query: songName })
      .then(function(response){
        //console.log(response.tracks.items[0])
        console.log("Artist(s): " + response.tracks.items[0].artists[0].name);
        console.log("Name: " + response.tracks.items[0].name);
        console.log("Song Preview: " + response.tracks.items[0].preview_url);
        console.log("Album: " + response.tracks.items[0].album.name);
      })
      .catch(function(err) {
        console.log(err); 
      });

  }

//movie-this
if (process.argv[2] === "movie-this") {
  var movieName = process.argv.slice(3).join(" ");
  if (movieName === ""){
    movieName = "Mr. Nobody";
  }
  var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=8c938da9"
  // console.log(queryUrl)

  axios.get(queryUrl).then(
      function (response) {
          console.log("Title: " + response.data.Title);
          console.log("Release Year: " + response.data.Year);
          console.log("IMDB Rating: " + response.data.imdbRating);
          console.log(response.data.Ratings[1].Source+ ": " + response.data.Ratings[1].Value);
          console.log("Country produced: " + response.data.Country);
          console.log("Launguage: " + response.data.Language);
          console.log("Plot: " + response.data.Plot);
          console.log("Actors: " + response.data.Actors);
  })};


//do-what-it-says
if(process.argv[2] === "do-what-it-says"){
  fs.readFile("./random.txt","utf8", function(err, data){
      if (err){

          console.log(err)
      }
      else{
        var cmd = data.split(",")[0];
        var query = data.split(",")[1];
        
          if (cmd === "spotify-this-song") {
           var spotify = new Spotify(keys.spotify);
           spotify.search({ type: 'track', query: query }, function (err, data) {
               if (err) {
                   return console.log('Error occurred: ' + err);
               }
              console.log("Artist(s): " + data.tracks.items[0].artists[0].name);
              console.log("Name: " + data.tracks.items[0].name);
              console.log("Song Preview: " + data.tracks.items[0].preview_url);
              console.log("Album: " + data.tracks.items[0].album.name);
           });
       }
   }
  })}
    ;