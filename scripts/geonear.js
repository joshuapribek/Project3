const mongoose = require("mongoose");
const fs = require('fs');

const Artist = require("../models/artist");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/artist"
  );

Artist.aggregate([
    {
      $geoNear: {
         near: { type: "Point", coordinates: [ -73.99279 , 40.719296 ] },
         distanceField: "dist.calculated",
         maxDistance: 20000,
         includeLocs: "dist.location",
         spherical: true
      }
    }
 ])