const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const Userschema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },

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


const User = mongoose.model("user", Userschema);

module.exports = User;
