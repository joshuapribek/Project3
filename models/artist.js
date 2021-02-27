const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const artistSchema = new Schema({
    id: Number, 
    picurl: {type:String, require: false},
    name: { type: String,
        required: true,
         unique: true,


         },
    location: {type:String, require: true },
    legacy: [Number],
    spotifyurl: {type:String, require: true }
    });

    artistSchema.index( { legacy : '2dsphere' } );
    artistSchema.index( { name : 1 }, { unique: true } );









const Artist = mongoose.model("Artist", artistSchema);

module.exports= Artist;