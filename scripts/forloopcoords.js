var locationdata = require('./jsoninput/newartistarray.json')


const axios = require('axios').default;
var fs = require('fs'); 
// const badChar = [{bad:'ü', good:'u'}, {bad:'Î', good:'i'}];


 function getMyLocations(imgurl,location,artist,spotify){

   

     
             
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
              "spotifyurl": "${spotify}",
              "legacy": [${y},${x}],
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
              "spotifyurl": "${spotify}",
              "legacy": [${'1'},${'1'}]
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

        console.log(spotify)

        getMyLocations(imgurl,location,artist,spotify) 

    

}, i * 500)
})







// artistwlocationdata2.push({...x, coords:response.data.results[0].geometry.location})





