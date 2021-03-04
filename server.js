const express = require("express");
const mongoose = require("mongoose");

const config = require('config');


const app = express();

const PORT = process.env.PORT || 3006;


app.use(express.json())
app.use(express.urlencoded({extended: true}));


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/wanderlist", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected...')).catch(err => console.log(err));


app.use('/api/artistfind/', require('./routes/api/artistfind'))
app.use('/api/users/', require('./routes/api/users'))
app.use('/api/auth/', require('./routes/api/auth'))


app.listen(3006, () => {
    console.log("App running on port 3006!");
  });