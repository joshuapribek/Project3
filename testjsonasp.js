var request = require('request'); // "Request" library
const fs = require('fs')

// var locationdata = require('./artistloclatest.json')



var client_id = '9f6e02b601574509ae4140e089b8c19a'; // Your client id
var client_secret = '590fd5efe70c45fbb3e5d8a01bb08188';
// Your secret

 function spotifyloop(artist) {

// your application requests authorization
var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
        'Authorization': 'Basic ' + (
            new Buffer(client_id + ':' + client_secret).toString('base64')
        )
    },
    form: {
        grant_type: 'client_credentials'
    },
    json: true
};

 request.post(authOptions, function (error, response, body) {
    if (! error && response.statusCode === 200) {

var token = "'" + 'Bearer' + ' ' + body.access_token + "'"

console.log(token)
        
// spotify url query//

        var query = artist

        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': token
        };

        var options = {
            url: 'https://api.spotify.com/v1/search?q=' + query + '&type=artist&market=US&limit=1&offset=5',
            headers: headers
        };

        function callback(error, response, body) {
            if (! error && response.statusCode == 200) {



                var obj = JSON.parse(body)

                console.log(obj.artists.items[0].external_urls.spotify)

                var final = obj.artists.items[0].external_urls.spotify

                fs.appendFileSync("spotifyurl.json", JSON.stringify({i: final}) );

            }
        }

        request(options, callback);
      }
    })
    
    }

    spotifyloop()