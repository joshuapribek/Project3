const mongoose = require("mongoose");
const fs = require('fs');

const Artist = require("../models/artist");


mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/artist"
  );
  

Artist.collection.deleteMany({}).then(data => {console.log(data.result.n+" records deleted")
process.exit(0);}).catch(err => {console.log(err);
process.exit(1)});