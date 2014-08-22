var express = require('express');
var router = express.Router();
var request = require('request');

router.post('/', function(req, res) {
	// Replace spaces in request
	var term = req.body.text.replace(/\s/g, '+'),
		// Giphy api URL
		url = 'http://api.giphy.com/v1/gifs/search?q=' + term + '&api_key=dc6zaTOxFJmzC',
		// Respond with gif in json
		finishCall = function(item) {
			res.end(JSON.stringify({text: item}));
		};
	// Send request to giphy api
	request(url, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			var data = JSON.parse(body);
			console.log(data.data.length)
			if(data.data.length > 0) {
				var gif = data.data[0].images.original.url;
				finishCall(gif);
			} else {
				finishCall('Sorry - no gif found.');
			}
		} else {
			finishCall('Error with request.');
		}
	});
});

module.exports = router;
