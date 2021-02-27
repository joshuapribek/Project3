var artistdata = require('./asdofasdoifj.json')

const distancearray = [];


  //distance function//

function distance(lat1, lon1, lat2, lon2, unit) {
    var radlat1 = Math.PI * lat1/180
    var radlat2 = Math.PI * lat2/180
    var theta = lon1-lon2
    var radtheta = Math.PI * theta/180
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
        dist = 1;
    }
    dist = Math.acos(dist)
    dist = dist * 180/Math.PI
    dist = dist * 60 * 1.1515
    if (unit=="K") { dist = dist * 1.609344 }
    if (unit=="N") { dist = dist * 0.8684 }
    var finaldist = dist

    // push to dist array //

    distancearray.push(finaldist);

    return dist
}

// function miles() {


//   const R = 6371e3; // metres
//   const φ1 = lat1 * Math.PI/180; // φ, λ in radians
//   const φ2 = lat2 * Math.PI/180;
//   const Δφ = (lat2-lat1) * Math.PI/180;
//   const Δλ = (lon2-lon1) * Math.PI/180;
  
//   const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
//             Math.cos(φ1) * Math.cos(φ2) *
//             Math.sin(Δλ/2) * Math.sin(Δλ/2);
//   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  
//   const d = R * c; // in metres


// }

  //distance function//

  //data import//

var data = artistdata

var html = "";
var poslat = 31.9686
var poslng = 99.9018;



function distanceloop() {
    for (var i = 0; i < data.length; i++) {
    distance(poslat, poslng, data[i].coords.lat,data[i].coords.lng)
 


}
}

function findclosest(distancearray) {



}

distanceloop(),findclosest()

var arr = distancearray
var min = Math.min.apply(Math, arr)
var minindex = arr.indexOf(min)
console.log(min)
console.log(minindex);

i = minindex

var minartist = artistdata[i].name

console.log(minartist)



// for (var i = 0; i < data.length; i++) {
//     // if this location is within 0.1KM of the user, add it to the list
//     if (distance(poslat, poslng, data[i].lat, data[i].lng, "K") <= 0.1) {
//         html += '<p>' + data[i].location + ' - ' + data[i].code + '</p>';
//     }
// }

// $('#nearbystops').append(html);