var locationdata = require('./jsoninput/newartistarray.json')


const axios = require('axios').default;
var fs = require('fs'); 
// const badChar = [{bad:'ü', good:'u'}, {bad:'Î', good:'i'}];


 function getMyLocations(location,imgurl,artist,spotify){

   

     
             
         var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + location + '&key=' + 'AIzaSyCaiinzaDFPw9N6xB0jtbOXpf6LBP7ToUk'
         
          axios.get(url)
          .then(function (response) {
              console.log(url)
            // handle success
            console.log(response.data.results[0].geometry.location);
            var x = response.data.results[0].geometry.location.lat
            var y = response.data.results[0].geometry.location.lng

            fs.appendFileSync("artistloclatest.json", `
          
            {
              "image" : "${imgurl}",
              "location": "${location}",
              "name": "${artist}",
              "legacy": [${y},${x}],
              "spotifyurl": "${spotify}"
          },
    
            `);

        })
          .catch(function (error) {
            // handle error
            console.log(error);
            fs.appendFileSync("artistloclatest.json", `
          
            {
              "image" : "${imgurl}",
              "location": "${location}",
              "name": "${artist}",
              "legacy": [${'1'},${'1'}],
              "spotifyurl": "${spotify}"
          },
    
            `
            )})
        }

         
        
        


locationdata.forEach((locationdata,i) => {
        
    setTimeout(() => {
        var artist = locationdata.name;
        var imgurl = locationdata.image;
        var location = locationdata.location;
        var spotify = locationdata.spotifyurl;

        console.log(location)

        getMyLocations(location,imgurl,spotify,artist) 

    

}, i * 500)
})







// artistwlocationdata2.push({...x, coords:response.data.results[0].geometry.location})





