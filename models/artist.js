const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const artistSchema = new Schema({
    name: {type:String, require: true },
    location: {type:String, require: true },
    coordinate: String
});



const Artist = mongoose.model("Artist", artistSchema);

module.exports= Artist;