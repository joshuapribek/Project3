const fs = require('fs'); 

var locationdata = require('./asdofasdoifj.json')

for (i = 0; i < locationdata.length; i++) {
    console.log(locationdata[i].coords)
    var x = locationdata[i].coords.lat
    var y = locationdata[i].coords.lng
    var artistname = locationdata[i].name
    var locationname = locationdata[i].location


      
          fs.appendFileSync("artistloclatest.json", `
          
          {
            "location": "${locationname}",
            "name": "${artistname}",
            "legacy": [${y},${x}]
        },
  
          `);


  }

