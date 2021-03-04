const express = require('express')
const router = express.Router();
const auth = require('../../middleware/auth')

const Artist = require('../../models/artist');

router.get('/:lat/:lon',  (req, res) => {
  const {lat, lon} = req.params

  Artist.aggregate([
    {
      $geoNear: {
         near: { type: "Point", coordinates: [ Number(lon) , Number(lat) ] },
                                           //  user lat // user long //
         distanceField: "dist.calculated",
         maxDistance: 200000,
         includeLocs: "dist.location",
         spherical: true
      }
    },
    { $limit: 20 }
  ])
  .then(data =>  res.send(data))
   .catch(error=>  {
    console.error(error);
    } )
  }); 
  module.exports = router
