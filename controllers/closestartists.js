const db = require("../models");
const router = require('express').Router();


// GET closest artists
router.get('/', async (req, res) => {
  try {
    const dbGalleryData = db.places.aggregate([
      {
        $geoNear: {
           near: { type: "Point", coordinates: [ -73.99279 , 40.719296 ] },
           distanceField: "dist.calculated",
           maxDistance: 2,
           query: { category: "Parks" },
           includeLocs: "dist.location",
           spherical: true
        }
      }
   ])}
