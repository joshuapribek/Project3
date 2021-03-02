const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const Userschema = new Schema({
    id: Number,
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }

    instrument: {
        type: String
    },
    location: {
        type: String,
        require: true
    },

});

Userschema.index({
    name: 1
}, {unique: true});


const User = mongoose.model("Artist", Userschema);

module.exports = User;
