var locationdata = require('./artistloc.json')

const axios = require('axios').default;


console.log(locationdata)

// locationdata.forEach(element => console.log(element));

var i;
for (i = 0; i < locationdata.length; i++) {

var url = 'https://maps.googleapis.com/maps/api/geocode/xml?address=1600+Amphitheatre+Parkway'


axios.get(url)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}