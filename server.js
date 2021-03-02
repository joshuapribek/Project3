const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 3006;

app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));

const artistfind = require('./routes/api/artistfind');

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/artist", { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));


  app.use('/api/artistfind/', require('./routes/api/artistfind'))






app.listen(3006, () => {
  console.log("App running on port 3006!");
});
