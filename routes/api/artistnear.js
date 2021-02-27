const router = require("express").Router();



router
.get('/artistsnear', function(req, res) {

Artist.aggregate([
  {
    $geoNear: {
       near: { type: "Point", coordinates: [ -73.99279 , 40.719296 ] },
                                         //  user lat // user long //
       distanceField: "dist.calculated",
       maxDistance: 2000000,
       includeLocs: "dist.location",
       spherical: true
    }

  },
  { $limit: 5 }

])
.then(data =>  res.send(data))
 .catch(error=>  {
  console.error(error);
  } )





});