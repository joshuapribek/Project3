const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const artistSchema = new Schema({
    id: Number, 
    name: {type:String, require: true },
    location: {type:String, require: true },
    legacy: [Number]
    });

    artistSchema.index( { legacy : '2dsphere' } )




const Artist = mongoose.model("Artist", artistSchema);

module.exports= Artist;