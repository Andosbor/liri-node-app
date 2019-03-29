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