require('dotenv').config();
var keys = require("./keys.js");

var axios = require("axios");
var moment = require('moment');
moment().format();

var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

axios
  .get("https://en.wikipedia.org/wiki/Kudos_(granola_bar)")
  .then(function(response) {
    // If the axios was successful...
    // Then log the body from the site!
    console.log(response.data);
  })
  

spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(data); 
  });
  //if (process.argv[2] === "concert-this")