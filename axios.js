var axios = require("axios");
var moment = require('moment');
moment().format();
require('dotenv').config()
var Spotify = require("node-spotify-api");
var spotify = new Spotify({
    id: "2818ef8ddf5748e8a9ee03039f8b9d90",
    secret: "7f01e4b4904443e9b7c398f09a4528c8"
  });

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