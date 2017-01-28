console.log('The is my post to twitter!');

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);


var tweet = {
  status: '#coding from node.js'
}

T.post('statuses/update', tweet, tweeted);

function tweeted(err, data, response) {
  if (err) {
  	console.log("Something went wwrong!");
  } else {
    console.log("It worked!");
  }
}