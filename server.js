const express = require("express");

const mongoose = require("mongoose");

const app = express();

const { Artist } = require("./models");



// const routes = require("./routes");
// app.use(routes);


const PORT = process.env.PORT || 3005;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}



mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/artist", { useNewUrlParser: true });



app.get('/artistsnear/:lat/:lon', function(req, res) {
  const {lat, lon} = req.params

  Artist.aggregate([
    {
      $geoNear: {
         near: { type: "Point", coordinates: [ Number(lon) , Number(lat) ] },
                                           //  user lat // user long //
         distanceField: "dist.calculated",
         maxDistance: 2000000,
         includeLocs: "dist.location",
         spherical: true
      }
  
    },
    { $limit: 5 }
  
  ])
  .then(data =>  res.send(data))
   .catch(error=>  {
    console.error(error);
    } )
  
  
  
  
  
  });

  // app.post('/artistsnear', function(req, res) {


  //   const latitude = req.params.latitude;
  //   const longitude = req.params.longitude;





app.listen(3005, () => {
  console.log("App running on port 3005!");
});
