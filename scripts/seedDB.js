const mongoose = require("mongoose");

const Artist = require("../models/artist");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/artist"
  );
  

const artistSeed = [
    {"location":"Paris, Île-de-France, France","name":"Daft Punk"},
    {"location":"Limerick, County Limerick, Munster, Ireland","name":"Aphex Twin"}
];  //maybe use fs (file system) to import(read) the list of artist name value pairs

//you need to replace seed if already created
Artist.collection.insertMany(artistSeed).then(data => {console.log(data.result.n+" records inserted")
process.exit(0);}).catch(err => {console.log(err);
process.exit(1)});