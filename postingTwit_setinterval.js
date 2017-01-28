console.log('The postingTwit setInterval');

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

tweetMyMessage();
setInterval(tweetMyMessage, 1000*10);

function tweetMyMessage() {

	var randomNumber = Math.floor(Math.random()*100);

	var tweet = {
	  status: '#' + randomNumber + 'Hello From Node JS'
	}

	T.post('statuses/update', tweet, tweeted);

	function tweeted(err, data, response) {
	  if (err) {
	  	console.log("Something went wwrong!");
	  } else {
	    console.log("It worked!");
	  }
	}
}