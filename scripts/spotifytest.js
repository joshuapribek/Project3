const request = require('request'); // "Request" library
const fs = require('fs')
const delay = require('delay');


const locationdata = require('./jsoninput/newartistarray.json');
const { SSL_OP_EPHEMERAL_RSA } = require('constants');



var client_id = 'ccb9fe69d8fd4109994f38b3dbb1314b'; // Your client id
var client_secret = 'fd438460cd144613a3a9120e90ae74c3';
// Your secret



async function spotifybutton(imgurl, location, artist){




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
    
     await request.post(authOptions, function (error, response, body) {
        if (! error && response.statusCode === 200) {
    
    var token = "'" + 'Bearer' + ' ' + body.access_token + "'"
    
      
        }
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': token
        };
        
        var options = {
            
            url: 'https://api.spotify.com/v1/search?q=' + artist + '&type=artist&limit=3',
            headers: headers
        };

        
        
       async function callback(error, response, body) {

        



            if (!error && response.statusCode == 200) 
            
            try {
                var obj = JSON.parse(body)

                

                var final = obj.artists.items[0].external_urls.spotify    


            console.log(final)
            console.log(token)



            fs.appendFileSync("newdatapregeo.json", `
          
            {
              "image" : "${location}",
              "location": "${imgurl}",
              "name": "${artist}",
              "spotifyurl": "${final}"
          },
    
            `);

            } catch (exception) {
                console.error('error no url found');

                fs.appendFileSync("newdatapregeo.json", `
          
                {
                  "image" : "${imgurl}",
                  "location": "${location}",
                  "name": "${artist}",
                  "spotifyurl": "${null}"
              },
        
                `);

                // do something else
              }

          


        }

        request(options, callback);

    

})

    }


    locationdata.forEach((locationdata,i) => {
        
        setTimeout(() => {
            var imgurl = locationdata.image;

            var location = locationdata.location;
            
            var artist = locationdata.name;


         spotifybutton(imgurl, location, artist) 

        

    }, i * 100)
})


 
