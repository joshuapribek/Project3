const express = require("express");

const mongoose = require("mongoose");

const { Artist } = require("./models");

// const routes = require("./routes");

const PORT = process.env.PORT || 3000;



const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}



mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/artist", { useNewUrlParser: true });



app.get('/artists', function(req, res) {

Artist.aggregate([
  {
    $geoNear: {
       near: { type: "Point", coordinates: [ -73.99279 , 40.719296 ] },
       distanceField: "dist.calculated",
       maxDistance: 2000000,
       includeLocs: "dist.location",
       spherical: true
    }
  }
])
.then(data =>  res.send(data))
 .catch(error=>  {
  console.error(error);
  } )





});

app.get('/', function(req, res) {


  Artist.find()
  .then(data =>  res.send(data))
   .catch(error=>  {
    console.error(error);
    } )
  
  
  
  
  
  });



app.listen(3000, () => {
  console.log("App running on port 3000!");
});
