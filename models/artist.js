const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const artistSchema = new Schema({
    name: {type:String, require: true },
    location: {type:String, require: true },
    coords: {
        lat: Number,
        long:  Number
      }
    });



const Artist = mongoose.model("Artist", artistSchema);

module.exports= Artist;