var axios = require("axios");
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
  .catch(function(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an object that comes back with details pertaining to the error that occurred.
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  });

spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(data); 
  });