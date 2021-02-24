var locationdata = require('../artistloc.json')


const axios = require('axios').default;
var fs = require('fs'); 
// const badChar = [{bad:'ü', good:'u'}, {bad:'Î', good:'i'}];

let artistwlocationdata2 = []

async function getMyLocations(start, end){

    
   const allLocations = locationdata.slice(start, end).map(async (x,i) => {

            
            var query = x.location.replace(/,/g, '')
            
        var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + query + '&key=' + 'AIzaSyCaiinzaDFPw9N6xB0jtbOXpf6LBP7ToUk'
        
        return await axios.get(url)
        // console.log(response.data.results[0].geometry.location);
 
    
    // artistwlocationdata2.push({...x, cords: response.data.results[0].geometry.location})
    
    
    //   return {...x, cords: response.data.results[0].geometry.location}
    
});

const locations = (await Promise.all(allLocations)).map((response,i) => ({...locationdata[i], coords:response.data.results[0].geometry.location}))
artistwlocationdata2 = artistwlocationdata2.concat(locations);

console.log('Done!');
}






// artistwlocationdata2.push({...x, coords:response.data.results[0].geometry.location})

getMyLocations(0,100)
setTimeout(() => getMyLocations(101, 200), 1000);
setTimeout(() => getMyLocations(201, 300), 2000);

setTimeout(() => fs.appendFileSync('asdofasdoifj.json', JSON.stringify(artistwlocationdata2)), 6000);



