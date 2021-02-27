const mongoose = require("mongoose");
const fs = require('fs');

const Artist = require("../models/artist");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/artist", { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
  
// const artistseed2 = 

// fs.readFile('./artistLocation/artistloc.json',
//     // callback function that is called when reading file is done
//     function(err, data) {       
//         if (err) throw err;
//         // data is a buffer containing file content
//         console.log(data.toString('utf8'))
// });

// console.log(artistseed2)

const artistSeed = [
          
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/9fd718d4c80e4ac89107c6c0bb908440.webp",
    "location": "Paris, le-de-France, France",
    "spotifyurl": "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi",
    "legacy": [2.3522219,48.856614],
    "name": "Daft Punk"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/cacaf8e507ab4f90cf676c4bdb618ff3.webp",
    "location": "Braintree, Essex, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/4k1ELeJKT1ISyDv8JivPpB",
    "legacy": [0.5509269,51.880087],
    "name": "The Prodigy"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/81b5cc07d8822d02546cbda7fd9fe61a.webp",
    "location": "Antibes, Alpes-Maritimes, Provence-Alpes-Cte-d'Azur, France",
    "spotifyurl": "https://open.spotify.com/artist/63MQldklfxkjYDoUE4Tppz",
    "legacy": [7.125102,43.58041799999999],
    "name": "M83"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/0ab1d2500e181d49c3a2a47e461b624b.webp",
    "location": "Romford, Havering, London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/1PXHzxRDiLnjqNrRn2Xbsa",
    "legacy": [0.178319,51.577076],
    "name": "Underworld"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/14ba31bdd445447f81ed06c8647a1f3e.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/67tgMwUfnmqzYsNAtnP6YJ",
    "legacy": [-0.1277583,51.5073509],
    "name": "Groove Armada"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/13a6457ff3cf4f299e4df051221948b3.webp",
    "location": "Chelmsford, Essex, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/4mtHSXwIHihO6MWNq5Qoko",
    "legacy": [0.4685497,51.7355868],
    "name": "Squarepusher"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a9bdd156588c45928586f594bfe66fa9.webp",
    "location": "Thessalia, Greece",
    "spotifyurl": "https://open.spotify.com/artist/4P70aqttdpJ9vuYFDmf7f6",
    "legacy": [22.047637,39.6102887],
    "name": "Vangelis"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a9010c887c094fc0aaf61bca48f0e12c.webp",
    "location": "Leiden, Zuid-Holland, Netherlands",
    "spotifyurl": "https://open.spotify.com/artist/0SfsnGyD8FpIN4U4WCkBZ5",
    "legacy": [4.4970097,52.1601144],
    "name": "Armin van Buuren"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/56954ae0c948f888314fb4403525aa4c.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/5he5w2lnU9x7JFhnwcekXX",
    "legacy": [-118.2436596,34.0522265],
    "name": "Skrillex"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/4afdba381cb541d8bb8e9c96f6614bbf.webp",
    "location": "Bangor, County Down, Northern Ireland, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/536BYVgOnRky0xjsPT96zl",
    "legacy": [-5.6730648,54.6541971],
    "name": "Two Door Cinema Club"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/97c3c4fda88043db9c7ed86c139011de.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/4KlYg0F5KG9QNDFKaeTNAy",
    "legacy": [-0.1277583,51.5073509],
    "name": "VNV Nation"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/9dfd7a9ba90a498abd81e318ffcf2144.webp",
    "location": "Tokyo, Japan",
    "spotifyurl": "https://open.spotify.com/artist/00G1NTDAoU7rBpjG4KoYAM",
    "legacy": [139.6503106,35.6761919],
    "name": "DJ Krush"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/f5a74877ee814cef96b0e8b2f9405d60.webp",
    "location": "Miami, Miami-Dade County, Florida, United States",
    "spotifyurl": "https://open.spotify.com/artist/0ZsnKPvBsvvycnET2GZMrG",
    "legacy": [-80.1917902,25.7616798],
    "name": "Prefuse 73"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b5ed94201c084a46a9070fe1e1d24231.webp",
    "location": "New Orleans, Louisiana, United States",
    "spotifyurl": "https://open.spotify.com/artist/53N4oJpWtmnB0KGLLserGC",
    "legacy": [-90.0715323,29.95106579999999],
    "name": "Telefon Tel Aviv"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/981a96f890b94ed0911aa5177fcc567f.webp",
    "location": "Rockville, Montgomery County, Maryland, United States",
    "spotifyurl": "https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX",
    "legacy": [-77.1527578,39.0839973],
    "name": "BT"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/4350717a5ade456485056ccaa7475a7a.webp",
    "location": "Broadford, Skye, Highland, Scotland, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/5YjEVrNMrIRw2xGbjTN6Ti",
    "legacy": [-5.9096592,57.24139169999999],
    "name": "Mylo"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/143fa9707f5bfe504e3d3c173edf49e1.webp",
    "location": "Breda, Breda, Noord-Brabant, Netherlands",
    "spotifyurl": "https://open.spotify.com/artist/2o5jDhtHVPhrJdv3cEQ99Z",
    "legacy": [4.768323,51.5719149],
    "name": "Tisto"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d71e8ee285845fca4d586960bfc9683a.webp",
    "location": "Oslo, Norway",
    "spotifyurl": "https://open.spotify.com/artist/0azLE0hIUlbMbV0g2Ezt9m",
    "legacy": [10.7522454,59.9138688],
    "name": "Xploding Plastix"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d65b2983a568488199454749e12a632c.webp",
    "location": "Berlin, Germany",
    "spotifyurl": "https://open.spotify.com/artist/1qcU8NabUQ5efQf8UGW6CV",
    "legacy": [13.404954,52.52000659999999],
    "name": "The Whitest Boy Alive"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/7adacecb48cb45958059d09b8db2a5fa.webp",
    "location": "Uppsala, Uppsala Municipality, Uppsala, Sweden",
    "spotifyurl": "https://open.spotify.com/artist/7wyBxBXLVLaiF2jxHCpvTe",
    "legacy": [17.6389267,59.85856380000001],
    "name": "Koop"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/e1d102c47a39438582807dbb856dd6b1.webp",
    "location": "Bristol, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/6tCENAD2FBfIMyygJMeOJV",
    "legacy": [-2.58791,51.454513],
    "name": "Fuck Buttons"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/4a273eba6e5a861652aa0ad402347f08.webp",
    "location": "New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/6HCnsY0Rxi3cg53xreoAIm",
    "legacy": [-74.0059728,40.7127753],
    "name": "Emancipator"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/29bb726b26db4ceda7823010fdbe6b0e.webp",
    "location": "Le Plessis-Bouchard, Val-d'Oise, le-de-France, France",
    "spotifyurl": "https://open.spotify.com/artist/23ymPLjbtAMzTJS2qRtQ8Z",
    "legacy": [2.234035,49.00380699999999],
    "name": "Sbastien Tellier"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/33425f0946604580bf8807e2f2ba37f1.webp",
    "location": "Bckeburg, Niedersachsen, Germany",
    "spotifyurl": "https://open.spotify.com/artist/1nN9sUUgtCl0Z9ciCLc48Q",
    "legacy": [9.052123300000002,52.2592762],
    "name": "Timo Maas"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/0de09a092ffda2364a873ae60c7d595a.webp",
    "location": "City of St Albans, Hertfordshire, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/31jvzuB4ikftPQZJwrYfCF",
    "legacy": [-0.339436,51.752725],
    "name": "Enter Shikari"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b297771d7bee45079f977a3c3491b3d5.webp",
    "location": "Lund, Lund Municipality, Skne, Sweden",
    "spotifyurl": "https://open.spotify.com/artist/0utS63XytOEVN1EtzWhJpG",
    "legacy": [13.1910073,55.7046601],
    "name": "The Radio Dept."
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/1747d80e942e4d468fef4f251e465cb1.webp",
    "location": "West Midlands, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/0qzzGu8qpbXYpzgV52wOFT",
    "legacy": [-1.829833,52.4750743],
    "name": "Bibio"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/e933b610ebbe4001bfb1af3b43a4a91e.webp",
    "location": "Fort Collins, Larimer County, Colorado, United States",
    "spotifyurl": "https://open.spotify.com/artist/4iVhFmG8YCCEHANGeUUS9q",
    "legacy": [-105.084423,40.5852602],
    "name": "Pretty Lights"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/7aad1fbcde0b0952dbc1b5d15740c9fc.webp",
    "location": "Westminster, London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/2m62cc253Xvd9qYQ8d2X3d",
    "legacy": [-0.1356583,51.4974948],
    "name": "The Alan Parsons Project"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a421feb188e041ebb580c31453257ba4.webp",
    "location": "Tby municipality, Stockholms ln, Sweden",
    "spotifyurl": "https://open.spotify.com/artist/5sm0jQ1mq0dusiLtDJ2b4R",
    "legacy": [18.0703298,59.4419],
    "name": "Eric Prydz"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/59080f0578124f1e8c7d3314c96b7f19.webp",
    "location": "Brighton, Brighton and Hove, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/0j2MwhbFTvquOBhs3LeIfU",
    "legacy": [-0.137163,50.82253000000001],
    "name": "Fujiya & Miyagi"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/7751189b9ff04ed2ce968ec76e842a7e.webp",
    "location": "Nashville, Davidson County, Tennessee, United States",
    "spotifyurl": "https://open.spotify.com/artist/0VOR7Ie9xUSb45fzIIVJQ1",
    "legacy": [-86.7816016,36.1626638],
    "name": "Hammock"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/56892237b57f48bbb2030c97ebf6379d.webp",
    "location": "Camberwell, Southwark, London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/5NCKpzuowtihcIrIHFjKbJ",
    "legacy": [-0.09301369999999999,51.4740846],
    "name": "Nitin Sawhney"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/7763846368fb45ecbdec8e5eb604b536.webp",
    "location": "Reading, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/25w2vpqq7dYleBAqMx7Ijx",
    "legacy": [-0.9781303,51.4542645],
    "name": "Zoot Woman"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/2a2b4fa6d5df4d1c9dfab99f162a541a.webp",
    "location": "San Francisco, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/1JPy5PsJtkhftfdr6saN2i",
    "legacy": [-122.4194155,37.7749295],
    "name": "Bassnectar"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/eb8c19c7bd564f209bb02ea2b2180821.webp",
    "location": "Bordeaux, Gironde, Nouvelle-Aquitaine, France",
    "spotifyurl": "https://open.spotify.com/artist/2EsL7l54h5MZm34uFVsRQi",
    "legacy": [-0.57918,44.837789],
    "name": "Kap Bambino"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/568b46e700da428e9816466dafeaccbd.webp",
    "location": "Wien, Austria",
    "spotifyurl": "https://open.spotify.com/artist/1h5fdExX00l0ujyhHMwFHt",
    "legacy": [16.3738189,48.2081743],
    "name": "Peace Orchestra"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/0d5cba58fff04fa9a121c2d876ab39a5.webp",
    "location": "Reykjavk, Hfuborgarsvi, Iceland",
    "spotifyurl": "https://open.spotify.com/artist/3IpQziA6YwD53PQ5xbwgLF",
    "legacy": [-21.9426354,64.146582],
    "name": "Jhann Jhannsson"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3706092d6a8a9b1535dc1e6087c7f5bd.webp",
    "location": "Sollentuna municipality, Stockholms ln, Sweden",
    "spotifyurl": "https://open.spotify.com/artist/2YL0l5fnyHE9FEf1bwFGCc",
    "legacy": [17.9414801,59.43911],
    "name": "Kleerup"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ee08c53343284dc0b9360ab89d78c479.webp",
    "location": "Sydney, New South Wales, Australia",
    "spotifyurl": "https://open.spotify.com/artist/6fXEqmGQEt6ONuqVmwrN46",
    "legacy": [151.2092955,-33.8688197],
    "name": "Bag Raiders"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/80fb450c5dca1c7896bc4e016a7fc18a.webp",
    "location": "Venice, Los Angeles, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/7pyhre5oEEFMqcgMEvJY7q",
    "legacy": [-118.4694832,33.9850469],
    "name": "Sky Ferreira"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/21fab19983254e9edc844c20bc795078.webp",
    "location": "Caracas, Venezuela",
    "spotifyurl": "https://open.spotify.com/artist/7kDf1ziRxPFtWbbZB1XmrM",
    "legacy": [-66.90360629999999,10.4805937],
    "name": "Kid606"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5ba6654b8bd9913e04b65c4b395516a0.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/55XX7sgmxtVFNJnHrQMXh5",
    "legacy": [-0.1277583,51.5073509],
    "name": "The Legendary Pink Dots"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/62fbd138279b4251bd4f37d1e8287942.webp",
    "location": "Croydon, London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/0RSRLPv7ZmcrlyboVGR0hL",
    "legacy": [-0.098234,51.376165],
    "name": "Anne Clark"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c2a5eefabfd44c76cc5425ab60664daa.webp",
    "location": "Kent, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/0zdn1nNmOZXHZ9K28FvcFp",
    "legacy": [0.5217254000000001,51.2787075],
    "name": "Matthew Herbert"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/56155192b3d5496fa96d4104e2edb4f0.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/3H24Sx4OTtMrkpQlcpGLtu",
    "legacy": [-0.1277583,51.5073509],
    "name": "Hexstatic"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c4172ba3d3604d8f88963ff6a6223217.webp",
    "location": "Porsgrunn, Telemark, Norway",
    "spotifyurl": "https://open.spotify.com/artist/4p35pLn1lRgqoVVsnqNZEK",
    "legacy": [9.6555147,59.1385567],
    "name": "Bugge Wesseltoft"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/cec38c3383a82239e139130bbd828e4b.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/7qdsk0UXx2jCX7jbp6rxeq",
    "legacy": [-0.1277583,51.5073509],
    "name": "The Black Dog"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5dcd63b96af846ca8fa1032f55753e6f.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/6sIZakv0uaA3qQmOOPTOQt",
    "legacy": [-0.1277583,51.5073509],
    "name": "Piano Magic"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/834b10dbb72b4202aa789e07d839d7dd.webp",
    "location": "Hertfordshire, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/5FWi1mowu6uiU2ZHwr1rby",
    "legacy": [-0.2376744,51.80978229999999],
    "name": "Feed Me"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/dfe09a13f7844108ae69ff1a2552cfb6.webp",
    "location": "Hssleholm, Hssleholm Municipality, Skne, Sweden",
    "spotifyurl": "https://open.spotify.com/artist/1jBFgqfCh0pz5eNIWFvJGQ",
    "legacy": [13.7667654,56.15891449999999],
    "name": "Familjen"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/8834750a02d24ecda3e12408247aaf8e.webp",
    "location": "Bucureti, Romania",
    "spotifyurl": "https://open.spotify.com/artist/1oiZoULxUJDYGOKMgVefP4",
    "legacy": [26.1025384,44.4267674],
    "name": "Morandi"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/e05bd93a84284790a4bdc8253e8655b3.webp",
    "location": "Montreal, Montreal, Quebec, Canada",
    "spotifyurl": "https://open.spotify.com/artist/3sGo1fGde8kx9sFUu8TZb4",
    "legacy": [-73.567256,45.5016889],
    "name": "Akufen"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/0a888f37ebce4bcecb59f767d6c70db0.webp",
    "location": "Copenhagen, Capital Region of Denmark, Denmark",
    "spotifyurl": "https://open.spotify.com/artist/50Lr1puweM1hFsF1LpIZLM",
    "legacy": [12.5683372,55.6760968],
    "name": "WhoMadeWho"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/fdf334df98d0404e9b23e1335fe57e29.webp",
    "location": "Reykjavk, Hfuborgarsvi, Iceland",
    "spotifyurl": "https://open.spotify.com/artist/22V3XeUvqBmVzu82JdKFWi",
    "legacy": [-21.9426354,64.146582],
    "name": "FM Belfast"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/fdf334df98d0404e9b23e1335fe57e29.webp",
    "location": "Reykjavk, Hfuborgarsvi, Iceland",
    "spotifyurl": "https://open.spotify.com/artist/22V3XeUvqBmVzu82JdKFWi",
    "legacy": [-21.9426354,64.146582],
    "name": "FM Belfast"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/fdf334df98d0404e9b23e1335fe57e29.webp",
    "location": "Reykjavk, Hfuborgarsvi, Iceland",
    "spotifyurl": "https://open.spotify.com/artist/22V3XeUvqBmVzu82JdKFWi",
    "legacy": [-21.9426354,64.146582],
    "name": "FM Belfast"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3470ef43864b410f8ca294c1905ada94.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/0L8ExT028jH3ddEcZwqJJ5",
    "legacy": [-118.2436596,34.0522265],
    "name": "Red Hot Chili Peppers"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/398b96868ddd81accf78dfaa65e09527.webp",
    "location": "Liverpool, Merseyside, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2",
    "legacy": [-2.9915726,53.4083714],
    "name": "The Beatles"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/e0a6cf0aab1e4e979503de6cbebe9c87.webp",
    "location": "Brixton, Lambeth, London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/0oSGxfWSnnOXhD2fKuz2Gy",
    "legacy": [-0.1156148,51.4612794],
    "name": "David Bowie"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/0694baa5af95b430016c440553dba169.webp",
    "location": "Nashville, Davidson County, Tennessee, United States",
    "spotifyurl": "https://open.spotify.com/artist/2qk9voo8llSGYcZ6xrBzKx",
    "legacy": [-86.7816016,36.1626638],
    "name": "Kings of Leon"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/6bf8a8f11584d79d282650a60a8af881.webp",
    "location": "Limerick, County Limerick, Munster, Ireland",
    "spotifyurl": "https://open.spotify.com/artist/7t0rwkOPGlDPEhaOcVtOt9",
    "legacy": [-8.6267343,52.6638367],
    "name": "The Cranberries"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5d7619914ea242128b73016d3101b5a4.webp",
    "location": "New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/1nJvji2KIlWSseXRSlNYsC",
    "legacy": [-74.0059728,40.7127753],
    "name": "The Velvet Underground"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/babd78cf217efaeb176831cb34491227.webp",
    "location": "Boston, Suffolk County, Massachusetts, United States",
    "spotifyurl": "https://open.spotify.com/artist/6zvul52xwTWzilBZl6BUbT",
    "legacy": [-71.0588801,42.3600825],
    "name": "Pixies"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b33cd759074f2be81badf6efdb7bf43f.webp",
    "location": "Anaheim, Orange County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/0cQbJU1aAzvbEmTuljWLlF",
    "legacy": [-117.9143012,33.8365932],
    "name": "No Doubt"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/697500d18da74c598bedf983f4933207.webp",
    "location": "Reading, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/3MM8mtgFzaEJsqbjZBSsHJ",
    "legacy": [-0.9781303,51.4542645],
    "name": "Bloc Party"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d845a978fecb4b3f9d84037588241e6a.webp",
    "location": "Bellingham, Whatcom County, Washington, United States",
    "spotifyurl": "https://open.spotify.com/artist/0YrtvWJMgSdVrk3SfNjTbx",
    "legacy": [-122.4786854,48.7519112],
    "name": "Death Cab for Cutie"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/04437b18dd344158adb84295ec3b4f64.webp",
    "location": "Bridport, Dorset, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/12VaqyEhgwDRuFfEqbnrpz",
    "legacy": [-2.758301,50.7335769],
    "name": "PJ Harvey"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/6a08be0d8e9c4621c6e635f49d10ef0c.webp",
    "location": "Buffalo, Erie County, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/2sil8z5kiy4r76CRTXxBCA",
    "legacy": [-78.8783689,42.88644679999999],
    "name": "Goo Goo Dolls"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/2eee8161d3b946a68eeafc1912cef517.webp",
    "location": "Springfield, Hampden County, Massachusetts, United States",
    "spotifyurl": "https://open.spotify.com/artist/5KDIH2gF0VpelTqyQS7udb",
    "legacy": [-72.589811,42.1014831],
    "name": "Staind"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/8ef904eba2d64534c3a24a31cbe6293b.webp",
    "location": "El Paso, El Paso County, Texas, United States",
    "spotifyurl": "https://open.spotify.com/artist/75U40yZLLPglFgXbDVnmVs",
    "legacy": [-106.4850217,31.7618778],
    "name": "The Mars Volta"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/9d76e1dc0dd245d3aa0f65040330a43e.webp",
    "location": "Toronto, Ontario, Canada",
    "spotifyurl": "https://open.spotify.com/artist/2Hkut4rAAyrQxRdof7FVJq",
    "legacy": [-79.3831843,43.653226],
    "name": "Rush"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/2e77577e4262464c99bcc4f818626a9d.webp",
    "location": "San Diego, San Diego County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/2UazAtjfzqBF0Nho2awK4z",
    "legacy": [-117.1610966,32.7157305],
    "name": "Stone Temple Pilots"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/724fcb8ff04b4494ac85eb56ebcfc2bb.webp",
    "location": "Denver, Colorado, United States",
    "spotifyurl": "https://open.spotify.com/artist/0zOcE3mg9nS6l3yxt1Y0bK",
    "legacy": [-104.990251,39.7392358],
    "name": "The Fray"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/33b8dfa04adf49d39979f820baeb05fa.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/78SHxLdtysAXgywQ4vE0Oa",
    "legacy": [-0.1277583,51.5073509],
    "name": "Bush"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/f190298222ed45cb9f8d8fe8e9eb0805.webp",
    "location": "Walton, Liverpool, Merseyside, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/4STHEaNw4mPZ2tzheohgXB",
    "legacy": [-2.9566329,53.4439144],
    "name": "Paul McCartney"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5afd43658ad3b4a731a5559646df59c6.webp",
    "location": "Haverhill, Essex County, Massachusetts, United States",
    "spotifyurl": "https://open.spotify.com/artist/3HVdAiMNjYrQIKlOGxoGh5",
    "legacy": [-71.0772796,42.7762015],
    "name": "Rob Zombie"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ccca7e92d6a5424fa2857dd1535762f4.webp",
    "location": "Kennett, Dunklin County, Missouri, United States",
    "spotifyurl": "https://open.spotify.com/artist/4TKTii6gnOnUXQHyuo9JaD",
    "legacy": [-90.0556493,36.2361762],
    "name": "Sheryl Crow"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b297563c814b8991e8cbd1511ad2fbc9.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/2yJwXpWAQOOl5XFzbCxLs9",
    "legacy": [-118.2436596,34.0522265],
    "name": "Bad Religion"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/03f7d7e34c0c4ebdb987cc5f7b84e6ab.webp",
    "location": "Van Nuys, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/0PFtn5NtBbbUNbU9EAmIWF",
    "legacy": [-118.451357,34.1898566],
    "name": "Toto"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/250481d29e3700dfa23390a4f0a4f30f.webp",
    "location": "Dublin, County Dublin, Leinster, Ireland",
    "spotifyurl": "https://open.spotify.com/artist/6biWAmrHyiMkX49LkycGqQ",
    "legacy": [-6.2603097,53.3498053],
    "name": "Thin Lizzy"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/aaec099c33703f4a145f2cc840f830e8.webp",
    "location": "Santa Barbara, Santa Barbara County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/6jJ0s89eD6GaHleKKya26X",
    "legacy": [-119.6981901,34.4208305],
    "name": "Katy Perry"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/cce8be1d73e34eb09c8f8564236c8e03.webp",
    "location": "Manchester, Greater Manchester, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/1lYT0A0LV5DUfxr6doRP3d",
    "legacy": [-2.2426305,53.4807593],
    "name": "The Stone Roses"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/e0d793ad05ec400092ce3a65d6a38eae.webp",
    "location": "Detroit, Wayne County, Michigan, United States",
    "spotifyurl": "https://open.spotify.com/artist/4xNadaO5ZZLVJdqDIVVIua",
    "legacy": [-83.0457538,42.331427],
    "name": "Electric Six"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/cbd6e8e8b1904c578536cc4c8d5ae013.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/0IBAqjHG8DSaD7PPCGnGiZ",
    "legacy": [-0.1277583,51.5073509],
    "name": "Babyshambles"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ba357970b9ef42adbc2f5f4af2417ee5.webp",
    "location": "Topeka, Shawnee County, Kansas, United States",
    "spotifyurl": "https://open.spotify.com/artist/2hl0xAkS2AIRAu23TVMBG1",
    "legacy": [-95.67515759999999,39.0473451],
    "name": "Kansas"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/0eec1bba77b743dd9a134d43ac1af079.webp",
    "location": "Carle Place, North Hempstead, Nassau County, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/32Jb1X3wSmmoHj2epZReZA",
    "legacy": [-73.6104058,40.7526008],
    "name": "Steve Vai"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/349ed9298a0bb82ba9374d390f0cc9d3.webp",
    "location": "San Diego, San Diego County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/7xklw3WodFZiNNmQt3DIgp",
    "legacy": [-117.1610966,32.7157305],
    "name": "Angels & Airwaves"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/f03c214ef15843d5903b3a2b3ad94a62.webp",
    "location": "Dunfermline, Fife, Scotland, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/6fvN9GmMCVKb5LY0WsnjFP",
    "legacy": [-3.452151,56.071741],
    "name": "Nazareth"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/aba62f9f2ebc45648d4f8ced758b88b8.webp",
    "location": "West Chester, Chester County, Pennsylvania, United States",
    "spotifyurl": "https://open.spotify.com/artist/3ZQEU2arcWXSv3oz8hwWBK",
    "legacy": [-75.6054882,39.9606643],
    "name": "CKY"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a36ed05db7c8400daf7b5edf9e4b67de.webp",
    "location": "Boston, Suffolk County, Massachusetts, United States",
    "spotifyurl": "https://open.spotify.com/artist/0vWCyXMrrvMlCcepuOJaGI",
    "legacy": [-71.0588801,42.3600825],
    "name": "Boys Like Girls"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/f06433d4f6ad4f33a11e777d72d148f5.webp",
    "location": "Detroit, Wayne County, Michigan, United States",
    "spotifyurl": "https://open.spotify.com/artist/4FZ3j1oH43e7cukCALsCwf",
    "legacy": [-83.0457538,42.331427],
    "name": "Jack White"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/2f9811572a6b42a2bdc17b0448964b65.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/5sD1ZLf2dGQ9gQ3YJl1eAd",
    "legacy": [-118.2436596,34.0522265],
    "name": "Blind Melon"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d2e7215d67c221732dbbf235a68ad15a.webp",
    "location": "Stockton, San Joaquin County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/3inCNiUr4R6XQ3W43s9Aqi",
    "legacy": [-121.1710389,37.9175935],
    "name": "Pavement"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d753390ad7fc40628b71e1109b139e67.webp",
    "location": "New Brunswick, Middlesex County, New Jersey, United States",
    "spotifyurl": "https://open.spotify.com/artist/61awhbNK16ku1uQyXRsQj5",
    "legacy": [-74.4518188,40.4862157],
    "name": "Thursday"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b0b841ecc5354687b4d8353f42f4c446.webp",
    "location": "Ballybricken, County Limerick, Munster, Ireland",
    "spotifyurl": "https://open.spotify.com/artist/55s643XPig11NyYM8do64C",
    "legacy": [-8.5147897,52.56778019999999],
    "name": "Dolores O'Riordan"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/e151f6084779f97d57207994b95d0a9e.webp",
    "location": "San Francisco, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/6QtGlUje9TIkLrgPZrESuk",
    "legacy": [-122.4194155,37.7749295],
    "name": "Steve Miller Band"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/807ac9c20c00432aa97bf5a387e028c2.webp",
    "location": "Gary, Lake County, Indiana, United States",
    "spotifyurl": "https://open.spotify.com/artist/3fMbdgg4jU18AjLCKBhRSm",
    "legacy": [-87.3371523,41.6020403],
    "name": "Michael Jackson"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a56a07f2a22dc89f5eee70731bfcc95a.webp",
    "location": "Hsbach, Bayern, Germany",
    "spotifyurl": "https://open.spotify.com/artist/6x9jRPDmA8Ihpw3A9FBowD",
    "legacy": [10.5719357,49.3004246],
    "name": "Bhse Onkelz"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/7c21769846106111c02814519c20df5f.webp",
    "location": "New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/1bs7HoMkSyQwcobCpE9KpN",
    "legacy": [-74.0059728,40.7127753],
    "name": "The Mamas & the Papas"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/deb02d26ab204f808d04cabe4eca3241.webp",
    "location": "Vernon, Wilbarger County, Texas, United States",
    "spotifyurl": "https://open.spotify.com/artist/0JDkhL4rjiPNEp92jAgJnS",
    "legacy": [-99.2650804,34.1545306],
    "name": "Roy Orbison"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/2edc9749e7fca1ca3e2cd8f9eb096d65.webp",
    "location": "Zaragoza, Zaragoza, Aragn, Spain",
    "spotifyurl": "https://open.spotify.com/artist/3qAPxVwIQRBuz5ImPUxpZT",
    "legacy": [-0.8890853,41.6488226],
    "name": "Hroes del Silencio"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5ec5718ad33f01d5cee9b442c6420d6e.webp",
    "location": "Toronto, Ontario, Canada",
    "spotifyurl": "https://open.spotify.com/artist/1rCIEwPp5OnXW0ornlSsRl",
    "legacy": [-79.3831843,43.653226],
    "name": "Metric"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3102935ac7d14931a51b84eb4a033f0a.webp",
    "location": "Heinola, Pijt-Hme, Finland",
    "spotifyurl": "https://open.spotify.com/artist/5kwthnxNdfnqGk0nL35wDC",
    "legacy": [26.0303431,61.2020433],
    "name": "Apulanta"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/42ac0c707a6bad0eba1331e89f3249fc.webp",
    "location": "Rock Hill, York County, South Carolina, United States",
    "spotifyurl": "https://open.spotify.com/artist/4feAxLUxIU7G4KXhH0h2ni",
    "legacy": [-81.02507840000001,34.9248667],
    "name": "Emery"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/11f073ad969a480b83b5ad95117e052b.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/4iSKnRZAxkmqNok6tv10Se",
    "legacy": [-118.2436596,34.0522265],
    "name": "Crazy Town"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/bde5b13b4d50913ab0c745ea0272950f.webp",
    "location": "Champaign, Champaign County, Illinois, United States",
    "spotifyurl": "https://open.spotify.com/artist/55vs7NT1KxcFjbMC4y202E",
    "legacy": [-88.2433829,40.1164204],
    "name": "REO Speedwagon"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/af87aba641a04fa9836fbf72f08b95cc.webp",
    "location": "Perth, Western Australia, Australia",
    "spotifyurl": "https://open.spotify.com/artist/5INjqkS1o8h1imAzPqGZBb",
    "legacy": [115.8604572,-31.9505269],
    "name": "Tame Impala"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c480a1bc182784e919cc63d84d11cce0.webp",
    "location": "Hermosa Beach, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/6i0KVTOvm96T55mbp742ks",
    "legacy": [-118.3995194,33.8622366],
    "name": "Pennywise"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/27d67e7bca3c4519a79403705004c6af.webp",
    "location": "Huntington Beach, Orange County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/3bXhZFreBJF4QDUUiMmtZW",
    "legacy": [-117.9988026,33.6594835],
    "name": "Reel Big Fish"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/7bfbfde9f1136218ebd66abfa9098d1d.webp",
    "location": "Sheerwater, Woking, Surrey, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/7Lf3LOZp3U3u2f6cWMd3AH",
    "legacy": [-0.5600349,51.316774],
    "name": "Paul Weller"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/27ca5b24315c48e1b8ed99bd2445bb13.webp",
    "location": "Ruston, Lincoln Parish, Louisiana, United States",
    "spotifyurl": "https://open.spotify.com/artist/2ooIqOf4X2uz4mMptXCtie",
    "legacy": [-92.63792699999999,32.5232053],
    "name": "Neutral Milk Hotel"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/8fb38451c2a9436e852c0da4c4691ae8.webp",
    "location": "New Hope, Bucks County, Pennsylvania, United States",
    "spotifyurl": "https://open.spotify.com/artist/3u1ulLq00Y3bfmq9FfjsPu",
    "legacy": [-74.9512785,40.36427279999999],
    "name": "Ween"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/da080380019040d68a15ce589eff3a0c.webp",
    "location": "Dingle, Liverpool, Merseyside, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/6DbJi8AcN5ANdtvJcwBSw8",
    "legacy": [-2.9593668,53.381682],
    "name": "Ringo Starr"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/531c530ecc1c41df96cd17b877911e9b.webp",
    "location": "New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/0CF71zaDOJWCynIkW9bSK8",
    "legacy": [-74.0059728,40.7127753],
    "name": "White Zombie"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a62cc5871179245fa590d1030c37673c.webp",
    "location": "Lancashire, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/6waa8mKu91GjzD4NlONlNJ",
    "legacy": [-2.7044052,53.7632254],
    "name": "The Hollies"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c3180a402b7acdd7c7eae632e1e97375.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/2pAajGWerK3ghwToNWFENS",
    "legacy": [-118.2436596,34.0522265],
    "name": "Puscifer"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/30a3e942f9ab4156afba3b3732cc5ee5.webp",
    "location": "Toronto, Ontario, Canada",
    "spotifyurl": "https://open.spotify.com/artist/6pDRa5fS3myWSP0fpIUcNl",
    "legacy": [-79.3831843,43.653226],
    "name": "Evans Blue"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/062d3cf239d54b4d80ca89e56ef6ff46.webp",
    "location": "Ghent, Oost-Vlaanderen, Flanders, Belgium",
    "spotifyurl": "https://open.spotify.com/artist/43mWhBXSflupNLuNjM5vff",
    "legacy": [3.7174243,51.0543422],
    "name": "Soulwax"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/8c85dd456f6a456ab1967f2d6ec188d7.webp",
    "location": "Rio de Janeiro, Rio de Janeiro, Brazil",
    "spotifyurl": "https://open.spotify.com/artist/1PwOU6fFbmaGkK3wkbb8fU",
    "legacy": [-43.1728965,-22.9068467],
    "name": "Cazuza"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/78eae1dc229f4172af284a868a80735f.webp",
    "location": "Yekaterinburg, Sverdlovskaya oblast', Russian Federation",
    "spotifyurl": "null",
    "legacy": [60.64540859999999,56.8430993],
    "name": " "
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/27e1fa993e244238907ea7ad5d675791.webp",
    "location": "New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/0hWRiJV8KlRZvsZeemUJVv",
    "legacy": [-74.0059728,40.7127753],
    "name": "Fun Lovin' Criminals"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a800e89457304abb8cb8c1bdeec71980.webp",
    "location": "Clearwater, Pinellas County, Florida, United States",
    "spotifyurl": "https://open.spotify.com/artist/5X09SRt3qx77eh0XRreLjr",
    "legacy": [-82.8001026,27.9658533],
    "name": "The Almost"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/7379094907234db7b43428d2a68e9d5b.webp",
    "location": "Santos, So Paulo, Brazil",
    "spotifyurl": "https://open.spotify.com/artist/1on7ZQ2pvgeQF4vmIA09x5",
    "legacy": [-46.3367247,-23.9475247],
    "name": "Charlie Brown Jr."
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/eca50fb86dd1549af5706fdf916faf92.webp",
    "location": "Oss, Noord-Brabant, Netherlands",
    "spotifyurl": "https://open.spotify.com/artist/2kO6zjt4a1OIqxOERhliEX",
    "legacy": [5.5140482,51.7611801],
    "name": "The Gathering"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ac497fa622464ed196422926e29ccfb0.webp",
    "location": "Bremerton, Kitsap County, Washington, United States",
    "spotifyurl": "https://open.spotify.com/artist/1cSpfa4Un4NCOzeOKgGtG9",
    "legacy": [-122.6269768,47.5650067],
    "name": "MxPx"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5f81190c1f9343c786c29802bb1aa13d.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/1n65zfwYIj5kKEtNgxUlWb",
    "legacy": [-0.1277583,51.5073509],
    "name": "Siouxsie and the Banshees"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/34c2fca3a53b4104a07c1eff56490674.webp",
    "location": "Frederiksberg Municipality, Capital Region of Denmark, Denmark",
    "spotifyurl": "https://open.spotify.com/artist/655zc6SaolsLw5Fd9WAcbo",
    "legacy": [12.5293611,55.68069200000001],
    "name": "Kashmir"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/12b87a863a644f43a8b350d077c85fe6.webp",
    "location": "Plasencia, Cceres, Extremadura, Spain",
    "spotifyurl": "https://open.spotify.com/artist/3bgsNtcf5d5h9jbQbohfBK",
    "legacy": [-6.0838065,40.04209549999999],
    "name": "Extremoduro"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/4cce1e72e652aebd5fe08b47fd339d6b.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/0Ak6DLKHtpR6TEEnmcorKA",
    "legacy": [-0.1277583,51.5073509],
    "name": "The Vaccines"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/f48b444da69a42d5baf06d2ddb235188.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/6x33CmZWo2Ve4hxYl2Craq",
    "legacy": [-0.1277583,51.5073509],
    "name": "Foghat"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c98c3efd31f64f94bbfd84bb9b39b037.webp",
    "location": "Paris, le-de-France, France",
    "spotifyurl": "https://open.spotify.com/artist/4CAsSAU842glNKJX71ndA9",
    "legacy": [2.3522219,48.856614],
    "name": "Louise Attaque"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/7600dd9abdd04a018d38180f9646f146.webp",
    "location": "Chicago, Cook County, Illinois, United States",
    "spotifyurl": "https://open.spotify.com/artist/3mY9Ii0cL5SQxpOTAm8SHx",
    "legacy": [-87.6297982,41.8781136],
    "name": "Warren Zevon"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/70c2111603dc47a8a035f1c810d20c1c.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/4FAEZeJcsYYBkNq2D3KGTV",
    "legacy": [-118.2436596,34.0522265],
    "name": "Three Dog Night"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/2af42f1d2aa1990fb1b2cc6f16ee22af.webp",
    "location": "Philadelphia, Philadelphia County, Pennsylvania, United States",
    "spotifyurl": "https://open.spotify.com/artist/3D4qYDvoPn5cQxtBm4oseo",
    "legacy": [-75.1652215,39.9525839],
    "name": "mewithoutYou"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/110c503af2534994a2af1f7b9c82a520.webp",
    "location": "Fresno, Fresno County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/5oRnbmgqvvq7fVlgk4vcEa",
    "legacy": [-119.2320784,36.9858984],
    "name": "Gary Jules"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/110c503af2534994a2af1f7b9c82a520.webp",
    "location": "Fresno, Fresno County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/5oRnbmgqvvq7fVlgk4vcEa",
    "legacy": [-119.2320784,36.9858984],
    "name": "Gary Jules"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ee1a1ca5836a4e5289a5642442db780f.webp",
    "location": "Vancouver, Metro Vancouver, British Columbia, Canada",
    "spotifyurl": "https://open.spotify.com/artist/00sAr10UTV1JZtHqxsLVn4",
    "legacy": [-123.1207375,49.2827291],
    "name": "Black Mountain"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ee1a1ca5836a4e5289a5642442db780f.webp",
    "location": "Vancouver, Metro Vancouver, British Columbia, Canada",
    "spotifyurl": "https://open.spotify.com/artist/00sAr10UTV1JZtHqxsLVn4",
    "legacy": [-123.1207375,49.2827291],
    "name": "Black Mountain"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/110c503af2534994a2af1f7b9c82a520.webp",
    "location": "Fresno, Fresno County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/5oRnbmgqvvq7fVlgk4vcEa",
    "legacy": [-119.2320784,36.9858984],
    "name": "Gary Jules"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ee1a1ca5836a4e5289a5642442db780f.webp",
    "location": "Vancouver, Metro Vancouver, British Columbia, Canada",
    "spotifyurl": "https://open.spotify.com/artist/00sAr10UTV1JZtHqxsLVn4",
    "legacy": [-123.1207375,49.2827291],
    "name": "Black Mountain"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/8070006ae491d3153c35d10510652f0e.webp",
    "location": "St. Joseph, Buchanan County, Missouri, United States",
    "spotifyurl": "https://open.spotify.com/artist/7dGJo4pcD2V6oG8kP0tJRR",
    "legacy": [-94.84668099999999,39.7674578],
    "name": "Eminem"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/f16677242b24bd85ef316ed7c3281c74.webp",
    "location": "Atlanta, Fulton County, Georgia, United States",
    "spotifyurl": "https://open.spotify.com/artist/5K4W6rqBFWDnAN6FQUkS6x",
    "legacy": [-84.3879824,33.7489954],
    "name": "Kanye West"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3691f2f1cfac76a0ce9bb0dfed560c76.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/7dWYWUbO68rXJOcyA7SpJk",
    "legacy": [-118.2436596,34.0522265],
    "name": "Fort Minor"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/8ebbdab7317c4e93ab2be413da7d44e1.webp",
    "location": "South Jamaica, Queens, New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/3q7HBObVc0L8jNeTe5Gofh",
    "legacy": [-73.7919103,40.6808594],
    "name": "50 Cent"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/6ec0689a938b4142ab91035929b0f6d6.webp",
    "location": "Atlanta, Fulton County, Georgia, United States",
    "spotifyurl": "https://open.spotify.com/artist/4OBJLual30L7gRl5UkeRcT",
    "legacy": [-84.3879824,33.7489954],
    "name": "T.I."
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d70f81027eac4522879b57b7a66c290c.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/1O7aMVbDeSXY2LiVBhb13w",
    "legacy": [-0.1277583,51.5073509],
    "name": "The Herbaliser"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/75cec74cba4b45bbae43a847d3c4d4ed.webp",
    "location": "Mount Vernon, Westchester County, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/1HwM5zlC5qNWhJtM00yXzG",
    "legacy": [-73.8370786,40.9125992],
    "name": "DMX"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/902480e7a14140e6abf34985d45ce912.webp",
    "location": "New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/0AuW7OCyKfFrsMbtHrYgIV",
    "legacy": [-74.0059728,40.7127753],
    "name": "House of Pain"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/8657a900ed985f1ee7a6c156582d3f10.webp",
    "location": "Austin, Travis County, Texas, United States",
    "spotifyurl": "https://open.spotify.com/artist/2NdeV5rLm47xAvogXrYhJX",
    "legacy": [-97.7430608,30.267153],
    "name": "Ciara"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/0fc2ed608ae642fca5dfc4faa4d27690.webp",
    "location": "Queens, New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/7ibAWtDtmEfaVhc1FJ3Vl9",
    "legacy": [-73.7948516,40.7282239],
    "name": "Eric B. & Rakim"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ee7c40e941544b79a4f2ecc4986fdca9.webp",
    "location": "Brownsville, Brooklyn, New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/4iCwCMnqsNZ6atvRiADgtn",
    "legacy": [-73.9125304,40.665214],
    "name": "RZA"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/25ce16aedee540aec0c94bfce1bdc7f9.webp",
    "location": "Virginia Beach, Virginia, United States",
    "spotifyurl": "https://open.spotify.com/artist/2RdwBSPQiwcmiDo9kixcl8",
    "legacy": [-75.97798499999999,36.8529263],
    "name": "Pharrell Williams"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/dfb83fb0238f5fe9e0e6827f38df4dbe.webp",
    "location": "Brooklyn, New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/0urTpYCsixqZwgNTkPJOJ4",
    "legacy": [-73.9441579,40.6781784],
    "name": "Aaliyah"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d343125b60c441de905c27832c7463f7.webp",
    "location": "Boston, Suffolk County, Massachusetts, United States",
    "spotifyurl": "https://open.spotify.com/artist/0BK94SazL2jI020Y8ezR4f",
    "legacy": [-71.0588801,42.3600825],
    "name": "La Coka Nostra"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/cf9b0366e92a47a2acf26ac1df7de8ca.webp",
    "location": "Mount Uniacke, Hants County, Nova Scotia, Canada",
    "spotifyurl": "https://open.spotify.com/artist/6jbuMVAvWgoPxEb1wMglyz",
    "legacy": [-63.8321123,44.8951877],
    "name": "Buck 65"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a1d51d7f658c1b62abf91cb74caa73a1.webp",
    "location": "East Orange, Essex County, New Jersey, United States",
    "spotifyurl": "https://open.spotify.com/artist/4Otx4bRLSfpah5kX8hdgDC",
    "legacy": [-74.2048677,40.767323],
    "name": "Naughty By Nature"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/71ff1ee206fb99b2355d3b336758d93f.webp",
    "location": "Long Beach, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/2h93pZq0e7k5yf4dywlkpM",
    "legacy": [-118.1937395,33.7700504],
    "name": "Frank Ocean"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/27c7675b9a41d383db9e487cd8809de4.webp",
    "location": "Frankfurt am Main, Hessen, Germany",
    "spotifyurl": "https://open.spotify.com/artist/6l3HvQ5sa6mXTsMTB19rO5",
    "legacy": [8.6821267,50.1109221],
    "name": "J. Cole"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/09b7b9a6916c463a9aedf11746f5689e.webp",
    "location": "Durham, Durham County, North Carolina, United States",
    "spotifyurl": "https://open.spotify.com/artist/0s9MrSopEoAn8JqwBipgdO",
    "legacy": [-78.898619,35.9940329],
    "name": "Little Brother"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/643b5cf62440201b4d9736f6059d7973.webp",
    "location": "Detroit, Wayne County, Michigan, United States",
    "spotifyurl": "https://open.spotify.com/artist/7aA592KWirLsnfb5ulGWvU",
    "legacy": [-83.0457538,42.331427],
    "name": "Danny Brown"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/e4a2f0c359d34cf5956fa0be9b57987c.webp",
    "location": "Oakland, Alameda County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/6S9rh06VCCIYEvYMFnVMVN",
    "legacy": [-122.2711639,37.8043514],
    "name": "Flipsyde"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/8f896acdabb94280a4d9207815df9ec8.webp",
    "location": "New Rochelle, Westchester County, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/3YyZFf9ZN2YbkqeZia8zHX",
    "legacy": [-73.7823549,40.9114882],
    "name": "Brand Nubian"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/e6509038e5f94affac51c297f0e2fcf7.webp",
    "location": "White Plains, Westchester County, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/2dBj3prW7gP9bCCOIQeDUf",
    "legacy": [-73.7629097,41.03398620000001],
    "name": "Danger Mouse"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/fde0844a34aa440a949bc0b857673287.webp",
    "location": "St. Louis, Missouri, United States",
    "spotifyurl": "https://open.spotify.com/artist/3s2wTjWxK8NOX09dmsvVOh",
    "legacy": [-90.19940419999999,38.6270025],
    "name": "Chingy"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/179aabcd6d7fb711d50dca451294072b.webp",
    "location": "Atlanta, Fulton County, Georgia, United States",
    "spotifyurl": "https://open.spotify.com/artist/0701LAQrkY5Il5vt06uNnC",
    "legacy": [-84.3879824,33.7489954],
    "name": "Trouble"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/fe8e3566a11740a082c9c33e3071276e.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/4Icvbp9RDt5aY2TWDOVDsr",
    "legacy": [-118.2436596,34.0522265],
    "name": "Afroman"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/e5d7817dd9fe3315d34a26a6b07153e0.webp",
    "location": "Plumstead, Greenwich, London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/0Tob4H0FLtEONHU1MjpUEp",
    "legacy": [0.08650139999999999,51.4873853],
    "name": "Tinie Tempah"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a62ad2305953d836690d79d96580771a.webp",
    "location": "Nutley, Essex County, New Jersey, United States",
    "spotifyurl": "https://open.spotify.com/artist/5vSQUyT33qxr1xAX2Tkf3A",
    "legacy": [-74.15987249999999,40.8223168],
    "name": "Clams Casino"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5dcbad58b2f04ef0b5fb783b345ccdfb.webp",
    "location": "Oakland, Alameda County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/4IvS1ZZ5nyiNMheybfx3Hf",
    "legacy": [-122.2711639,37.8043514],
    "name": "The Coup"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a7503592ad9b49bf292d2b14184a368f.webp",
    "location": "Atlanta, Fulton County, Georgia, United States",
    "spotifyurl": "https://open.spotify.com/artist/5nLYd9ST4Cnwy6NHaCxbj8",
    "legacy": [-84.3879824,33.7489954],
    "name": "CeeLo Green"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/af663b3034ed04ccf0d47e6a4f7f9d29.webp",
    "location": "New Orleans, Louisiana, United States",
    "spotifyurl": "https://open.spotify.com/artist/6X8WdFjrNhXATMDSs26aCc",
    "legacy": [-90.0715323,29.95106579999999],
    "name": "Curren$y"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/790f5b55e415ae648668f578551f224d.webp",
    "location": "East Los Angeles, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/0Ph64AJnzKQwXj4y7bWi2U",
    "legacy": [-118.1669736,34.0224417],
    "name": "Delinquent Habits"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/9542f8064ce34a22971c562ec1dba5e4.webp",
    "location": "Clapham, Lambeth, London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/1k8VBufn1nBs8LN9n4snc8",
    "legacy": [-0.1413263,51.4658813],
    "name": "Stereo MC's"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/fddbfa41ba094665add57e85afb6e4a7.webp",
    "location": "Inglewood, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/0f5nVCcR06GX8Qikz0COtT",
    "legacy": [-118.3531311,33.9616801],
    "name": "Omarion"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a1d352ff411b66a41ba50b5ec175686c.webp",
    "location": "Port Arthur, Jefferson County, Texas, United States",
    "spotifyurl": "https://open.spotify.com/artist/6ZhjJOJXXwnPS8PrXdmjLw",
    "legacy": [-93.93994699999999,29.8849504],
    "name": "UGK"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/581040824f424d0b8b949140d1116377.webp",
    "location": "Beverly Hills, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/0eVyjRhzZKke2KFYTcDkeu",
    "legacy": [-118.4003563,34.0736204],
    "name": "The Alchemist"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/1c3c51880a296fc5a6c3548bfd7fab0d.webp",
    "location": "Sankt-Peterburg, Russian Federation",
    "spotifyurl": "https://open.spotify.com/artist/1gCOYbJNUa1LBVO5rlx0jB",
    "legacy": [30.3609096,59.9310584],
    "name": "Oxxxymiron"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/6e85ff27a3a54d04a3f86a6043ce9c44.webp",
    "location": "Yokohama, Kanagawa, Japan",
    "spotifyurl": "https://open.spotify.com/artist/5kgH3qVSSDPPmKnQfrkblH",
    "legacy": [139.6379639,35.4436739],
    "name": "RIP SLYME"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/2aa6739293170bb83b3fbd1d6a41a687.webp",
    "location": "Meridian, Lauderdale County, Mississippi, United States",
    "spotifyurl": "https://open.spotify.com/artist/0CKa42Jqrc9fSFbDjePaXP",
    "legacy": [-88.703656,32.3643098],
    "name": "Big K.R.I.T."
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ab97b9312e5549fa81fab35bf77dbdd0.webp",
    "location": "Oakland, Alameda County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/7jocoSCuCtpCxCI6IbP8ye",
    "legacy": [-122.2711639,37.8043514],
    "name": "Digital Underground"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/9ba3926e125d4da49d6477e13227070b.webp",
    "location": "San Francisco, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/0tRxVqFSJrai3XTMOiEHVn",
    "legacy": [-122.4194155,37.7749295],
    "name": "MC Frontalot"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a64e70ea16384496a8482916302512ee.webp",
    "location": "Brooklyn, New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/5XI6qfoZSiEYtmItjfEX1Q",
    "legacy": [-73.9441579,40.6781784],
    "name": "O.C."
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/e9fa9e706186432ba2f7bbadf49896c3.webp",
    "location": "Vsters, Vsters Municipality, Vstmanland, Sweden",
    "spotifyurl": "https://open.spotify.com/artist/53bap4fIHfhPGNrU4STPpe",
    "legacy": [16.5448092,59.60990049999999],
    "name": "Looptroop Rockers"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/77ec7b6f9eb55eee5caf06cef14189cd.webp",
    "location": "Yakima, Yakima County, Washington, United States",
    "spotifyurl": "https://open.spotify.com/artist/3qgsChODA5iJM6AdA0rr21",
    "legacy": [-120.5058987,46.6020711],
    "name": "Sadistik"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/996712e58f004434adf6f15f8c683f17.webp",
    "location": "Accra, Greater Accra, Ghana",
    "spotifyurl": "https://open.spotify.com/artist/7h2Y48bG543JDzEed383cx",
    "legacy": [-0.1869644,5.6037168],
    "name": "Tinchy Stryder"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/8241f90e09ba4b66b8c000dfbd1b4ae4.webp",
    "location": "Newark, Essex County, New Jersey, United States",
    "spotifyurl": "https://open.spotify.com/artist/5m7wCUhYhBh7A3A3YMxrbt",
    "legacy": [-74.1723667,40.735657],
    "name": "Queen Latifah"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/bb158925696e458b86a11c5c06e66a03.webp",
    "location": "Philadelphia, Philadelphia County, Pennsylvania, United States",
    "spotifyurl": "https://open.spotify.com/artist/6NyJIFHAePjHR1pFxwisqz",
    "legacy": [-75.1652215,39.9525839],
    "name": "Kurupt"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/25ce16aedee540aec0c94bfce1bdc7f9.webp",
    "location": "Virginia Beach, Virginia, United States",
    "spotifyurl": "https://open.spotify.com/artist/2RdwBSPQiwcmiDo9kixcl8",
    "legacy": [-75.97798499999999,36.8529263],
    "name": "Pharrell Williams"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d1afa239c1cc464b8fcbf15fa9cdb86d.webp",
    "location": "Reykjavk, Hfuborgarsvi, Iceland",
    "spotifyurl": "https://open.spotify.com/artist/23usj4WXxVWSxiffMuCkxM",
    "legacy": [-21.9426354,64.146582],
    "name": "Quarashi"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b8b7cca18bfb483c8fada3e997a8331b.webp",
    "location": "Jackson, Hinds County, Mississippi, United States",
    "spotifyurl": "https://open.spotify.com/artist/7jFaoqWPhYLrKzjzlpXmUO",
    "legacy": [-90.1848103,32.2987573],
    "name": "David Banner"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b9f71bb9ecc718e1fd865a174aed5b27.webp",
    "location": "Seattle, King County, Washington, United States",
    "spotifyurl": "https://open.spotify.com/artist/3JhNCzhSMTxs9WLGJJxWOY",
    "legacy": [-122.3320708,47.6062095],
    "name": "Macklemore"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/7152c53648c47ca091a668f7fcddae34.webp",
    "location": "Staten Island, New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/1l7ZsJRRS8wlW3WfJfPfNS",
    "legacy": [-74.1502007,40.5795317],
    "name": "Christina Aguilera"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/8d40c9e518a74b459dac963130befd79.webp",
    "location": "Long Beach, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/1jKpNUjiz4KXgaAZD5FI9S",
    "legacy": [-118.1937395,33.7700504],
    "name": "Zack De La Rocha"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/13e06da1fada4c6d9536136f7707b483.webp",
    "location": "Berkeley, Alameda County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/05Am7rOfCvNggzIEeAhbiV",
    "legacy": [-122.273042,37.8715226],
    "name": "MC Lars"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/8f7cd9ca181847ac8b9399e352d0b46e.webp",
    "location": "Moskva, Russian Federation",
    "spotifyurl": "https://open.spotify.com/artist/6wBUn8gMP85n8dPu6LoUcF",
    "legacy": [37.6172999,55.755826],
    "name": ".."
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5635f646a7ef43beae6eb3b8cff9f79f.webp",
    "location": "Sankt-Peterburg, Russian Federation",
    "spotifyurl": "https://open.spotify.com/artist/3hBOq5UdTGxRSydEn93Aat",
    "legacy": [30.3609096,59.9310584],
    "name": "Bad Balance"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5e47797cd2f24399ab45b5cebf6fa3af.webp",
    "location": "Ditzingen, Baden-Wrttemberg, Germany",
    "spotifyurl": "https://open.spotify.com/artist/4QS6MMKct3F3LkN7cr6vHg",
    "legacy": [9.067556399999999,48.8264662],
    "name": "Thomas D"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/716e156612ef498291c2098affb4b174.webp",
    "location": "Brooklyn, New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/6gl67jXbrwnMYZNZv88MKk",
    "legacy": [-73.9441579,40.6781784],
    "name": "Stetsasonic"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/29672ebd22d940e8b846693699d60955.webp",
    "location": "Minden, Nordrhein-Westfalen, Germany",
    "spotifyurl": "https://open.spotify.com/artist/7JvxCo2bUzfYeReYFYizQ9",
    "legacy": [8.894920599999999,52.2964919],
    "name": "Curse"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d8a81010d5534ef68cc49f18b9c4063a.webp",
    "location": "South Jamaica, Queens, New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/50UMTib697JJ44le8DO2Va",
    "legacy": [-73.7919103,40.6808594],
    "name": "Tony Yayo"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5313fc5185de4ec2a8a82cf11ca5b4aa.webp",
    "location": "Philadelphia, Philadelphia County, Pennsylvania, United States",
    "spotifyurl": "https://open.spotify.com/artist/20sxb77xiYeusSH8cVdatc",
    "legacy": [-75.1652215,39.9525839],
    "name": "Meek Mill"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c23fd85f08224751a74c1115e0ddd3b4.webp",
    "location": "Hawthorne, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/6vHBuUxrcpn1do5UaEJ7g6",
    "legacy": [-118.3525748,33.9164032],
    "name": "Domo Genesis"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3f18eff4ef9c4837877dce94c60ba676.webp",
    "location": "Kaliningrad, Kaliningradskaya oblast', Russian Federation",
    "spotifyurl": "https://open.spotify.com/artist/2I2xGX3zkMamB0ofjZiRNA",
    "legacy": [20.4522144,54.7104264],
    "name": "Babangida"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/09517c4bc006418d84a26757581f688d.webp",
    "location": "Phoenix, Maricopa County, Arizona, United States",
    "spotifyurl": "https://open.spotify.com/artist/1HRXCnjeHZ17CdVOW27usc",
    "legacy": [-112.0740373,33.4483771],
    "name": "DJ Z-Trip"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/7f4a9dba9921463f97dc588ceb4d08d2.webp",
    "location": "Aachen, Nordrhein-Westfalen, Germany",
    "spotifyurl": "https://open.spotify.com/artist/1SUu1Bi7ev9HbOzyVC77qD",
    "legacy": [6.083886800000001,50.7753455],
    "name": "Kool Savas"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/361317d7f9004d3e82144a90676c4a87.webp",
    "location": "St. Louis, Missouri, United States",
    "spotifyurl": "https://open.spotify.com/artist/1Zz5UxfKSSqc6hpa3xJPCw",
    "legacy": [-90.19940419999999,38.6270025],
    "name": "J-Kwon"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/11f073ad969a480b83b5ad95117e052b.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/4iSKnRZAxkmqNok6tv10Se",
    "legacy": [-118.2436596,34.0522265],
    "name": "Crazy Town"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/048fa5144cc64f6591fcf98ed044a116.webp",
    "location": "Compton, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/4XqfpACObRB5AsBcUYjL8X",
    "legacy": [-118.2200712,33.8958492],
    "name": "MC Eiht"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/657eca05d098437ba97b9bcfc04851be.webp",
    "location": "New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/7dGJo4pcD2V6oG8kP0tJRR",
    "legacy": [-74.0059728,40.7127753],
    "name": "eMC"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/0562b2736bce40a9a650ef74a141a69a.webp",
    "location": "Flagstaff, Coconino County, Arizona, United States",
    "spotifyurl": "https://open.spotify.com/artist/5BwLD4Qf20YfGudalJqGrE",
    "legacy": [-111.651302,35.1982836],
    "name": "Sole and the Skyrider Band"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/0562b2736bce40a9a650ef74a141a69a.webp",
    "location": "Flagstaff, Coconino County, Arizona, United States",
    "spotifyurl": "https://open.spotify.com/artist/5BwLD4Qf20YfGudalJqGrE",
    "legacy": [-111.651302,35.1982836],
    "name": "Sole and the Skyrider Band"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/0562b2736bce40a9a650ef74a141a69a.webp",
    "location": "Flagstaff, Coconino County, Arizona, United States",
    "spotifyurl": "https://open.spotify.com/artist/5BwLD4Qf20YfGudalJqGrE",
    "legacy": [-111.651302,35.1982836],
    "name": "Sole and the Skyrider Band"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c825233e09af4641a5ce7b6ece883aae.webp",
    "location": "High Green, Sheffield, South Yorkshire, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/7Ln80lUS6He07XvHI8qqHH",
    "legacy": [-1.494032,53.474144],
    "name": "Arctic Monkeys"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/0675c5fd124c4c269a86f8ba9fc0e32d.webp",
    "location": "Abingdon-on-Thames, Oxfordshire, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/4Z8W4fKeB5YxbusRsdQVPb",
    "legacy": [-1.2879529,51.67078],
    "name": "Radiohead"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3f12d26b9ee543da99fd1e1d7b738f7a.webp",
    "location": "Manchester, Greater Manchester, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/3yY2gUcIsjMr8hjo51PoJ8",
    "legacy": [-2.2426305,53.4807593],
    "name": "The Smiths"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/4f7c851a387edc6e1c002d575650f0c9.webp",
    "location": "Leeds, Leeds, West Yorkshire, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/0LbLWjaweRbO4FDKYlbfNt",
    "legacy": [-1.5490774,53.8007554],
    "name": "Kaiser Chiefs"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/217a1ea2f86adecfc8643437bd54fb4a.webp",
    "location": "Toronto, Ontario, Canada",
    "spotifyurl": "https://open.spotify.com/artist/7lOJ7WXyopaxri0dbOiZkd",
    "legacy": [-79.3831843,43.653226],
    "name": "Broken Social Scene"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/9c27b0c51d0f4270afbe4342fb3efc17.webp",
    "location": "Montreal, Montreal, Quebec, Canada",
    "spotifyurl": "https://open.spotify.com/artist/3kjuyTCjPG1WMFCiyc5IuB",
    "legacy": [-73.567256,45.5016889],
    "name": "Arcade Fire"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5fdb928de2f8398b8a2014320c513890.webp",
    "location": "Oxford, Oxfordshire, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/6FQqZYVfTNQ1pCqfkwVFEa",
    "legacy": [-1.2577263,51.7520209],
    "name": "Foals"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b4ff2028b73a4a5684896a781a8ff00c.webp",
    "location": "Berkeley, Alameda County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/35YNL4wwv11ZkmeWWL51y7",
    "legacy": [-122.273042,37.8715226],
    "name": "We Are Scientists"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/6dc93c3bba454f6aa0528dedf9a4b3ef.webp",
    "location": "Los Feliz, Los Angeles, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/3zunDAtRDg7kflREzWAhxl",
    "legacy": [-118.2848199,34.1063307],
    "name": "Eels"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/8756dda77d5148b3a7d26421fde154e3.webp",
    "location": "Welwyn Garden City, Hertfordshire, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/4BntNFyiN3VGG4hhRRZt9d",
    "legacy": [-0.208661,51.8031689],
    "name": "The Subways"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d41d100823220e3196e1a4ba493d07cc.webp",
    "location": "Cwmaman, Rhondda Cynon Taf, Wales, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/21UJ7PRWb3Etgsu99f8yo8",
    "legacy": [-3.441969,51.68576299999999],
    "name": "Stereophonics"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/12eb28aee57546dab414969691305c00.webp",
    "location": "Newcastle upon Tyne, Tyne and Wear, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/048FBwXjFYBWxSggPDipic",
    "legacy": [-1.61778,54.978252],
    "name": "Maxmo Park"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/f352ce2113f64a2a87763baa12651a67.webp",
    "location": "Anaheim, Orange County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/3nnQpaTvKb5jCQabZefACI",
    "legacy": [-117.9143012,33.8365932],
    "name": "Jeff Buckley"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/16eff5d8e64940d194ac05d848b7b2e8.webp",
    "location": "Chicago, Cook County, Illinois, United States",
    "spotifyurl": "https://open.spotify.com/artist/3hozsZ9hqNq7CoBGYNlFTz",
    "legacy": [-87.6297982,41.8781136],
    "name": "OK Go"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ab6b35de3f3c118aa0be6629326c15b2.webp",
    "location": "So Paulo, So Paulo, Brazil",
    "spotifyurl": "https://open.spotify.com/artist/2K13AVg3bFpHSxDM1vJ0qA",
    "legacy": [-46.63330939999999,-23.5505199],
    "name": "Cansei de Ser Sexy"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/48ad57a207704f06b70cc7f8a2ecb652.webp",
    "location": "Staines-upon-Thames, Surrey, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/14Gi3Uph96lpNB3utkoVAD",
    "legacy": [-0.515525,51.43148],
    "name": "Hard-Fi"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/23ff6b966edf41ea943fe2a53a8ede26.webp",
    "location": "Huntington Beach, Orange County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/6GH0NzpthMGxu1mcfAkOde",
    "legacy": [-117.9988026,33.6594835],
    "name": "Hellogoodbye"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/58947846d9b98a9295a0851269cbac68.webp",
    "location": "Ramsbottom, Bury, Greater Manchester, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/0TJB3EE2efClsYIDQ8V2Jk",
    "legacy": [-2.32049,53.648457],
    "name": "Elbow"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5389cc3c3ead4bc4a250e2408172b6b0.webp",
    "location": "Hoylake, Wirral, Merseyside, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/6OiHleP2bHM18dXq4aZQWt",
    "legacy": [-3.1762801,53.393238],
    "name": "The Coral"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a39fac7d319548b3c8670871a6a56ad5.webp",
    "location": "Crouch End, Haringey, London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/3pTE9iaJTkWns3mxpNQlJV",
    "legacy": [-0.1221464,51.5819979],
    "name": "Bombay Bicycle Club"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c3873b244da548659d5367ac8802d476.webp",
    "location": "Louisville, Jefferson County, Kentucky, United States",
    "spotifyurl": "https://open.spotify.com/artist/43O3c6wewpzPKwVaGEEtBM",
    "legacy": [-85.7584557,38.2526647],
    "name": "My Morning Jacket"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/f2049dfadbff9eb2d23ee0398f04b409.webp",
    "location": "Austin, Travis County, Texas, United States",
    "spotifyurl": "https://open.spotify.com/artist/5E7zSu46SqTmgKqsc0tFkY",
    "legacy": [-97.7430608,30.267153],
    "name": "Okkervil River"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/241ae9987e7451628e753c7ba839eb3c.webp",
    "location": "Santa Monica, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/37w38cCSGgKLdayTRjna4W",
    "legacy": [-118.4911912,34.0194543],
    "name": "Mazzy Star"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3470ef43864b410f8ca294c1905ada94.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/0L8ExT028jH3ddEcZwqJJ5",
    "legacy": [-118.2436596,34.0522265],
    "name": "Red Hot Chili Peppers"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/8ef904eba2d64534c3a24a31cbe6293b.webp",
    "location": "El Paso, El Paso County, Texas, United States",
    "spotifyurl": "https://open.spotify.com/artist/75U40yZLLPglFgXbDVnmVs",
    "legacy": [-106.4850217,31.7618778],
    "name": "The Mars Volta"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/6d2b14768d06470392d5cfa263992181.webp",
    "location": "Jacksonville, Onslow County, North Carolina, United States",
    "spotifyurl": "https://open.spotify.com/artist/2qc41rNTtdLK0tV3mJn2Pm",
    "legacy": [-77.4302414,34.7540524],
    "name": "Ryan Adams"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/669bbbcf2e49413a92e15b8346efbdc5.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/3kdrMtLybQIl93rXJlvF3w",
    "legacy": [-0.1277583,51.5073509],
    "name": "New Young Pony Club"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/2555e1d00900425fb79e6368c8f526b2.webp",
    "location": "Minneapolis, Hennepin County, Minnesota, United States",
    "spotifyurl": "https://open.spotify.com/artist/19zqV9DV3txjMUjHvltl2D",
    "legacy": [-93.2650108,44.977753],
    "name": "Motion City Soundtrack"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/9ae8c6757b774250825dc6ee5f839c31.webp",
    "location": "Olympia, Thurston County, Washington, United States",
    "spotifyurl": "https://open.spotify.com/artist/4wLIbcoqmqI4WZHDiBxeCB",
    "legacy": [-122.9006951,47.0378741],
    "name": "Sleater-Kinney"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/347f5cf61a84413b900e280c60f8126b.webp",
    "location": "Philadelphia, Philadelphia County, Pennsylvania, United States",
    "spotifyurl": "https://open.spotify.com/artist/6Jrxnp0JgqmeUX1veU591p",
    "legacy": [-75.1652215,39.9525839],
    "name": "Santigold"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/eb020cf1a9930281cfa22370a700b676.webp",
    "location": "Silver Lake, Los Angeles, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/75dQReiBOHN37fQgWQrIAJ",
    "legacy": [-118.2702036,34.0869409],
    "name": "Local Natives"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/515d820c22df4e8aaa30e3860d8f9779.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/3ImqpXKKgkH5VydfgX1hd4",
    "legacy": [-118.2436596,34.0522265],
    "name": "Say Anything"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/691f0ba0fd41405c9f33d12e5fcc2ba4.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/2rBcvLKWCZs9w1qIWv560v",
    "legacy": [-0.1277583,51.5073509],
    "name": "Charlotte Gainsbourg"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/20934a36786349cab5e9c21641299a5b.webp",
    "location": "Wimbledon, Merton, London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/6NJWSp0xcJQQPzR375b8B3",
    "legacy": [-0.2206288,51.41833889999999],
    "name": "Jamie T"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/60c10f4ab5074f41a0855456e251abc7.webp",
    "location": "Denton, Denton County, Texas, United States",
    "spotifyurl": "https://open.spotify.com/artist/4YsP5zmteLQ7etNjHAOu30",
    "legacy": [-97.13306829999999,33.2148412],
    "name": "Midlake"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/00770ad17e514409aafe40400fe1fb23.webp",
    "location": "Austin, Travis County, Texas, United States",
    "spotifyurl": "https://open.spotify.com/artist/7b697TI9p2abLzSo3eJTKW",
    "legacy": [-97.7430608,30.267153],
    "name": "Voxtrot"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/110c503af2534994a2af1f7b9c82a520.webp",
    "location": "Fresno, Fresno County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/5oRnbmgqvvq7fVlgk4vcEa",
    "legacy": [-119.2320784,36.9858984],
    "name": "Gary Jules"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/2a9d4114b25a4a6e9a7cab40de100471.webp",
    "location": "Redmond, King County, Washington, United States",
    "spotifyurl": "https://open.spotify.com/artist/2nNyMDW51EHYbBXu3lFbLR",
    "legacy": [-122.121512,47.6739881],
    "name": "The Blood Brothers"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/e4469781c67a67d4f442694fc89fcb66.webp",
    "location": "Buffalo, Erie County, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/77oD8X9qLXZhpbCjv53l5n",
    "legacy": [-78.8783689,42.88644679999999],
    "name": "Mercury Rev"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/386b134b04594556c56f1f878b5f2343.webp",
    "location": "Boston, Suffolk County, Massachusetts, United States",
    "spotifyurl": "https://open.spotify.com/artist/34XlPCFfB4vT7P1ekWq9Jc",
    "legacy": [-71.0588801,42.3600825],
    "name": "Guster"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d7c0408ded084eb3a631b956905b5961.webp",
    "location": "Minneapolis, Hennepin County, Minnesota, United States",
    "spotifyurl": "https://open.spotify.com/artist/3PjtmMdeYx3Dg49ZRLS27J",
    "legacy": [-93.2650108,44.977753],
    "name": "Tapes 'n Tapes"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/347f5cf61a84413b900e280c60f8126b.webp",
    "location": "Philadelphia, Philadelphia County, Pennsylvania, United States",
    "spotifyurl": "https://open.spotify.com/artist/6Jrxnp0JgqmeUX1veU591p",
    "legacy": [-75.1652215,39.9525839],
    "name": "Santigold"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d3be5f082e281cbf6069b579d27a1332.webp",
    "location": "Stockholm, Stockholm municipality, Stockholms ln, Sweden",
    "spotifyurl": "https://open.spotify.com/artist/6xSTQT32ZxLQPe37QIC308",
    "legacy": [17.9672428,59.31706999999999],
    "name": "Anna Ternheim"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/8a2e29281b05455b9e02170fdb940f2d.webp",
    "location": "Falkirk, Falkirk, Scotland, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/6g8Jqb5JMfv92eB2r0awTN",
    "legacy": [-3.7839131,56.00187750000001],
    "name": "Arab Strap"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/1bc299d25ab546e3a874be5dabaaa88e.webp",
    "location": "Helmsley, North Yorkshire, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/0V6iWD05yAOe1C3pJpbMbk",
    "legacy": [-1.0562636,54.24650579999999],
    "name": "One Night Only"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/93427bfc621a4b30950310afc22dbb9c.webp",
    "location": "Enniskillen, Fermanagh, County Fermanagh, Northern Ireland, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/7EV6jW6dotBdvsHj6xPixi",
    "legacy": [-7.6315336,54.34382429999999],
    "name": "The Divine Comedy"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/aeca59dac46048cd8d0ebe4eb55ed9e9.webp",
    "location": "Detroit, Wayne County, Michigan, United States",
    "spotifyurl": "https://open.spotify.com/artist/5QPNEMldc8k1g5hT54PCWg",
    "legacy": [-83.0457538,42.331427],
    "name": "The Von Bondies"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3a9e257f640f4869c859b82d9d1de73b.webp",
    "location": "Portland, Multnomah County, Oregon, United States",
    "spotifyurl": "https://open.spotify.com/artist/4qAJ54O4V0W8SQcSz0bl1C",
    "legacy": [-122.6750261,45.5051064],
    "name": "The Thermals"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/f1b6df4da3a54ab6a2607bc1b4fd67ab.webp",
    "location": "Santa Monica, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/0WISkx0PwT6lYWdPqKUJY8",
    "legacy": [-118.4911912,34.0194543],
    "name": "Stephen Malkmus"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c1158988da7f4eb198bd90f4a3ae009f.webp",
    "location": "Chicago, Cook County, Illinois, United States",
    "spotifyurl": "https://open.spotify.com/artist/0ihBDeJlIlXo4LFfAllsGm",
    "legacy": [-87.6297982,41.8781136],
    "name": "The Sea and Cake"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/f75b9b7b4744416ac1ad9665dbd34dc6.webp",
    "location": "Ruston, Lincoln Parish, Louisiana, United States",
    "spotifyurl": "https://open.spotify.com/artist/4a2nAPF15Gv8V65Ba3IJSB",
    "legacy": [-92.63792699999999,32.5232053],
    "name": "The Olivia Tremor Control"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/92728f10d239679a9d257ec2e1f877dc.webp",
    "location": "Brooklyn, New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/1bwUhKRmEkOZ1wuTnV9XjC",
    "legacy": [-73.9441579,40.6781784],
    "name": "Beach Fossils"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/2e5d69e54f207ed826884f68c722778d.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/4njdEjTnLfcGImKZu1iSrz",
    "legacy": [-118.2436596,34.0522265],
    "name": "Awolnation"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/9d305b9d36e56714ed1082b4d68d2ecf.webp",
    "location": "Liverpool, Merseyside, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/6brxwggDm8Er0hBtxO0JrW",
    "legacy": [-2.9915726,53.4083714],
    "name": "The La's"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3271710c6e8649b08af1c9346b881995.webp",
    "location": "Newtown, Sydney, New South Wales, Australia",
    "spotifyurl": "https://open.spotify.com/artist/51K48NCxjB11t9eqUWWoIq",
    "legacy": [151.1785003,-33.8978149],
    "name": "Youth Group"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/899191c23be34f96b4e260e09ff23103.webp",
    "location": "Royal Oak, Oakland County, Michigan, United States",
    "spotifyurl": "https://open.spotify.com/artist/2Ij97fuR3unjlboQfIYs31",
    "legacy": [-83.1446485,42.4894801],
    "name": "Brendan Benson"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a5df50405a03e4a60922682691022cd4.webp",
    "location": "Austin, Travis County, Texas, United States",
    "spotifyurl": "https://open.spotify.com/artist/0CoiIc6ZLBvF9Cjmb1Cj49",
    "legacy": [-97.7430608,30.267153],
    "name": "Shearwater"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/1bab43d3ecbf4810a34d86a4f1bc8cf7.webp",
    "location": "Paris, le-de-France, France",
    "spotifyurl": "https://open.spotify.com/artist/32aFdXARUiqP81SXqIPD4w",
    "legacy": [2.3522219,48.856614],
    "name": "Yael Naim"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/066981738de4463080c3a02cc1bba55e.webp",
    "location": "Oxford, Oxfordshire, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/5TUa95aB5Vu2CzwCnZd6t0",
    "legacy": [-1.2577263,51.7520209],
    "name": "This Town Needs Guns"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/876d849082544c31af048574637a4140.webp",
    "location": "Berlin, Germany",
    "spotifyurl": "https://open.spotify.com/artist/3FweAJRBCbUOGR6jULfaRi",
    "legacy": [13.404954,52.52000659999999],
    "name": "Element of Crime"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/402ad30cf98e6bc6903d8a5114cac134.webp",
    "location": "Anacortes, Skagit County, Washington, United States",
    "spotifyurl": "https://open.spotify.com/artist/4Sw0SFu1fFdYXdAEVdrqnO",
    "legacy": [-122.6126718,48.51260449999999],
    "name": "Mount Eerie"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d808e9bdbaf14c2f933543b6f50d115a.webp",
    "location": "Skive, Skive Municipality, Central Denmark Region, Denmark",
    "spotifyurl": "https://open.spotify.com/artist/6T5tfhQCknKG4UnH90qGnz",
    "legacy": [9.0309083,56.5651232],
    "name": "Dn"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/aafcf7b81fad4955a840281ae76f7b16.webp",
    "location": "Bremerton, Kitsap County, Washington, United States",
    "spotifyurl": "https://open.spotify.com/artist/4CvZd3qzC2HbLxAoAEBRIL",
    "legacy": [-122.6269768,47.5650067],
    "name": "Ben Gibbard"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ecf6377e26014a84b26fc614c3072761.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/2nszamLjZFgu3Yx77mKxuC",
    "legacy": [-0.1277583,51.5073509],
    "name": "UNKLE"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d2cac65fee63b11ef0ddce2f3da3f7ca.webp",
    "location": "Dublin, County Dublin, Leinster, Ireland",
    "spotifyurl": "https://open.spotify.com/artist/7FDlvgcodNfC0IBdWevl4u",
    "legacy": [-6.2603097,53.3498053],
    "name": "James Vincent McMorrow"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/922986f64494662ec5d6a990589a043e.webp",
    "location": "Draper, Salt Lake County, Utah, United States",
    "spotifyurl": "https://open.spotify.com/artist/181bsRPaVXVlUKXrxwZfHK",
    "legacy": [-111.8638226,40.5246711],
    "name": "Meg & Dia"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/36e2b48d315f2a71cc4f60c010a7a85b.webp",
    "location": "Newport, Newport County, Rhode Island, United States",
    "spotifyurl": "https://open.spotify.com/artist/5xU5wRTlZHVRoo2OxPvqA4",
    "legacy": [-71.3128285,41.4901024],
    "name": "Throwing Muses"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3ba5b0676ffd48598150bb8d0ed62399.webp",
    "location": "Seattle, King County, Washington, United States",
    "spotifyurl": "https://open.spotify.com/artist/79JJCxCCfJ8HufX6w8q2k4",
    "legacy": [-122.3320708,47.6062095],
    "name": "Damien Jurado"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/6629170af51843d98323224e72997503.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/7DEseTqRODmSu3C7jxCHl5",
    "legacy": [-0.1277583,51.5073509],
    "name": "The Boxer Rebellion"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/da4b74137bfd5918654b70350e19c630.webp",
    "location": "Cleveland, Cuyahoga County, Ohio, United States",
    "spotifyurl": "https://open.spotify.com/artist/6rnbB5fuUuCSsspvFsxIpT",
    "legacy": [-81.6943605,41.49932],
    "name": "Cloud Nothings"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ff13d20e6830f726d6bcb16b8f6c5f6c.webp",
    "location": "Manchester, Greater Manchester, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/3mIj9lX2MWuHmhNCA7LSCW",
    "legacy": [-2.2426305,53.4807593],
    "name": "The 1975"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3906d977cb6948c6b85e62e73ac0573e.webp",
    "location": "Ann Arbor, Washtenaw County, Michigan, United States",
    "spotifyurl": "https://open.spotify.com/artist/6xYBLeSMu1AqPsnUzEvx5n",
    "legacy": [-83.7430378,42.2808256],
    "name": "Anya Marina"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/7d2aeebf6f76f03f606abb54aefd1185.webp",
    "location": "Brest, Finistre, Bretagne, France",
    "spotifyurl": "https://open.spotify.com/artist/00sazWvoTLOqg5MFwC68Um",
    "legacy": [-4.486076,48.390394],
    "name": "Yann Tiersen"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c9c9f7e07a43adb09f5cf55c9f7d4602.webp",
    "location": "Nottingham, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/3Bd1cgCjtCI32PYvDC3ynO",
    "legacy": [-1.1581086,52.95478319999999],
    "name": "London Grammar"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/99fd77dfe23cf89f696f45b6f30333e6.webp",
    "location": "Bristol, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/6FXMGgJwohJLUSr5nVlf9X",
    "legacy": [-2.58791,51.454513],
    "name": "Massive Attack"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/78581b450f5f4b11a49b7c51b511759c.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/1Ft4Az62nVeFfBoeefcw89",
    "legacy": [-118.2436596,34.0522265],
    "name": "The Like"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5d5cff5299fdef270d92bd3d8c607bb7.webp",
    "location": "Grand Rapids, Kent County, Michigan, United States",
    "spotifyurl": "https://open.spotify.com/artist/7lQKE6HaKQcCsgLRMhsh5W",
    "legacy": [-85.6680863,42.9633599],
    "name": "La Dispute"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5415bcccc22c4d399d9936ef4df1f32b.webp",
    "location": "Sheffield, South Yorkshire, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/6DVVsQAnpHdJjb1nYuOQ6g",
    "legacy": [-1.470085,53.38112899999999],
    "name": "65daysofstatic"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/6834efc1692741918a1707d65740d7b9.webp",
    "location": "Providence, Providence County, Rhode Island, United States",
    "spotifyurl": "https://open.spotify.com/artist/3rT8xTwSOMDURtWpPyoKIO",
    "legacy": [-71.4128343,41.8239891],
    "name": "Deer Tick"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/02c1c10fe3004169957bf3c045add02b.webp",
    "location": "Louisville, Jefferson County, Kentucky, United States",
    "spotifyurl": "https://open.spotify.com/artist/5ZjMJYukp8ZmGCpXpzqZkV",
    "legacy": [-85.7584557,38.2526647],
    "name": "VHS or Beta"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/6b333450b5bb7bb937bd8e0cdaa0f1b4.webp",
    "location": "Cuiab, Mato Grosso, Brazil",
    "spotifyurl": "https://open.spotify.com/artist/0rexWKb4rBwWS07SoHqsX0",
    "legacy": [-56.0968227,-15.60086],
    "name": "Vanguart"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/83b8ef21222546608f18fa3ce09c5970.webp",
    "location": "Chelmsford, Essex, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/3Nhyo9KNcy4JI38iOWIWk3",
    "legacy": [0.4685497,51.7355868],
    "name": "Tom McRae"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/6b333450b5bb7bb937bd8e0cdaa0f1b4.webp",
    "location": "Cuiab, Mato Grosso, Brazil",
    "spotifyurl": "https://open.spotify.com/artist/0rexWKb4rBwWS07SoHqsX0",
    "legacy": [-56.0968227,-15.60086],
    "name": "Vanguart"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/83b8ef21222546608f18fa3ce09c5970.webp",
    "location": "Chelmsford, Essex, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/3Nhyo9KNcy4JI38iOWIWk3",
    "legacy": [0.4685497,51.7355868],
    "name": "Tom McRae"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/6b333450b5bb7bb937bd8e0cdaa0f1b4.webp",
    "location": "Cuiab, Mato Grosso, Brazil",
    "spotifyurl": "https://open.spotify.com/artist/0rexWKb4rBwWS07SoHqsX0",
    "legacy": [-56.0968227,-15.60086],
    "name": "Vanguart"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/83b8ef21222546608f18fa3ce09c5970.webp",
    "location": "Chelmsford, Essex, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/3Nhyo9KNcy4JI38iOWIWk3",
    "legacy": [0.4685497,51.7355868],
    "name": "Tom McRae"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/77be9d4f51949813088eba8d87db8235.webp",
    "location": "Alton, Madison County, Illinois, United States",
    "spotifyurl": "https://open.spotify.com/artist/0kbYTNQb4Pb1rPbbaF0pT4",
    "legacy": [-90.1842764,38.8906038],
    "name": "Miles Davis"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/fe6b4fb54ed64405a80d430ac1259177.webp",
    "location": "Hamlet, Richmond County, North Carolina, United States",
    "spotifyurl": "https://open.spotify.com/artist/2hGh5VOeeqimQFxqXvfCUf",
    "legacy": [-79.6942222,34.8848775],
    "name": "John Coltrane"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/874cb22cd6ce4a2895749ab58959f45f.webp",
    "location": "Yale, Payne County, Oklahoma, United States",
    "spotifyurl": "https://open.spotify.com/artist/3rxeQlsv0Sc2nyYaZ5W71T",
    "legacy": [-96.69919329999999,36.1142305],
    "name": "Chet Baker"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/f57b8492fe3e408fc021bb5fbaa2bee1.webp",
    "location": "Norfolk, Virginia, United States",
    "spotifyurl": "https://open.spotify.com/artist/4jXfFzeP66Zy67HM2mvIIF",
    "legacy": [-76.28587259999999,36.8507689],
    "name": "Bill Evans"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/61e5c1b9ac9241fd9317bec11eeb7c2e.webp",
    "location": "Norristown, Montgomery County, Pennsylvania, United States",
    "spotifyurl": "https://open.spotify.com/artist/3U3C9o6UTYNdEsDckpRyvX",
    "legacy": [-75.3399048,40.121497],
    "name": "Jaco Pastorius"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/655bbb291e1a4077a4b3fd89d6e4e00a.webp",
    "location": "Red Bank, Monmouth County, New Jersey, United States",
    "spotifyurl": "https://open.spotify.com/artist/2jFZlvIea42ZvcCw4OeEdA",
    "legacy": [-74.0643065,40.3470543],
    "name": "Count Basie"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/056a657ed5227114df14d6e62c8fd3ea.webp",
    "location": "La Habana, Cuba",
    "spotifyurl": "https://open.spotify.com/artist/11kBu957KTYoAltZHDm8gW",
    "legacy": [-82.3665956,23.1135925],
    "name": "Buena Vista Social Club"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/7bb7db1025ab477fc70086090ab54756.webp",
    "location": "Philadelphia, Philadelphia County, Pennsylvania, United States",
    "spotifyurl": "https://open.spotify.com/artist/38C3okxv3fyyOIQUVPCdGX",
    "legacy": [-75.1652215,39.9525839],
    "name": "Lee Morgan"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a807197975aa4d0ab9d2bb17560a1731.webp",
    "location": "Santa Rosa, Sonoma County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/3qUMmh5biaB5hqpF4LqS3m",
    "legacy": [-122.7140548,38.440429],
    "name": "Julie London"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/f3386e71717242b6bcfaac002578ef09.webp",
    "location": "Doncaster, South Yorkshire, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/4v0R1feRiuCDch7aAheVhY",
    "legacy": [-1.128462,53.52282],
    "name": "John McLaughlin"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d5ffe3e3c37441d2866495d94dda3db7.webp",
    "location": "Harlem, Manhattan, New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/570vCzcespB48HIQyTbDO6",
    "legacy": [-73.9464769,40.8115504],
    "name": "Bud Powell"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/1f13b98633594f69cf1a41000b725346.webp",
    "location": "Missouri, United States",
    "spotifyurl": "https://open.spotify.com/artist/0JM134st8VY7Ld9T2wQiH0",
    "legacy": [-91.8318334,37.9642529],
    "name": "Coleman Hawkins"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5007daf5b0684c2f970303170059bc58.webp",
    "location": "Mar del Plata, Buenos Aires, Argentina",
    "spotifyurl": "https://open.spotify.com/artist/7dsugSamBB7enWE2IrlbFg",
    "legacy": [-57.5426106,-38.0054771],
    "name": "Astor Piazzolla"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/0f52b4a7904243f199bfebfa6dea775b.webp",
    "location": "Cleveland, Cuyahoga County, Ohio, United States",
    "spotifyurl": "https://open.spotify.com/artist/2EExdpjU4SK3xnJHO5paJf",
    "legacy": [-81.6943605,41.49932],
    "name": "Henry Mancini"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/4d187c0f5c31471691403582116d4564.webp",
    "location": "Seattle, King County, Washington, United States",
    "spotifyurl": "https://open.spotify.com/artist/6I3M904Y9IwgDjrQ9pANiB",
    "legacy": [-122.3320708,47.6062095],
    "name": "Kenny G"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/4eeee9f8afb8428fa1be37b2d564fe8e.webp",
    "location": "Harlem, Manhattan, New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/2E3nXyfocf7qfHAIFNbBuj",
    "legacy": [-73.9464769,40.8115504],
    "name": "Carmen McRae"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c4172ba3d3604d8f88963ff6a6223217.webp",
    "location": "Porsgrunn, Telemark, Norway",
    "spotifyurl": "https://open.spotify.com/artist/4p35pLn1lRgqoVVsnqNZEK",
    "legacy": [9.6555147,59.1385567],
    "name": "Bugge Wesseltoft"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/eedb3d27f7a34fdaa6e175e93305bfc7.webp",
    "location": "Karlsruhe, Baden-Wrttemberg, Germany",
    "spotifyurl": "https://open.spotify.com/artist/4teb5pXOgNilgOxTgbIdYu",
    "legacy": [8.4036527,49.0068901],
    "name": "Kammerflimmer Kollektief"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ec1cd374b1b1dc9395d1ce8cf67ef03c.webp",
    "location": "Pozna, Wielkopolskie, Poland",
    "spotifyurl": "https://open.spotify.com/artist/6BoLqGW2NuMvgHqiDbyfOC",
    "legacy": [16.9251681,52.406374],
    "name": "Krzysztof Komeda"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/30d690aafe854df78aa2d696862a8133.webp",
    "location": "Amsterdam, Noord-Holland, Netherlands",
    "spotifyurl": "https://open.spotify.com/artist/287jMoxHzjERgHI6ja8TKa",
    "legacy": [4.9041389,52.3675734],
    "name": "Candy Dulfer"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a207920b14ba43a5adaa82f690329001.webp",
    "location": "Ealing, London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/6J7biCazzYhU3gM9j1wfid",
    "legacy": [-0.3413965,51.5250366],
    "name": "Jamiroquai"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/84b10bc530559427c11fc766657f036e.webp",
    "location": "Detroit, Wayne County, Michigan, United States",
    "spotifyurl": "https://open.spotify.com/artist/7nwrblOf59ulOiB6djwPVh",
    "legacy": [-83.0457538,42.331427],
    "name": "Dianne Reeves"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/1905e40de5ae4d80b37a4ed66f234818.webp",
    "location": "Philadelphia, Philadelphia County, Pennsylvania, United States",
    "spotifyurl": "https://open.spotify.com/artist/0QrowybipCKUDnq5y10PD2",
    "legacy": [-75.1652215,39.9525839],
    "name": "Amos Lee"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/299831cc98a60a03d8f2532b5fc69cbf.webp",
    "location": "Marshall, Saline County, Missouri, United States",
    "spotifyurl": "https://open.spotify.com/artist/6ryjbFyWBZho9KGXqKZdqQ",
    "legacy": [-93.1968704,39.1230777],
    "name": "Bob James"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/e514cc2789284ddebfc2dc55e6fdf7e5.webp",
    "location": "BedfordStuyvesant, Brooklyn, New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/2I6nP70ltmOHi6xjJUXHMe",
    "legacy": [-73.9417735,40.6872176],
    "name": "Lena Horne"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/179a5fe6202f4008ae378a7cb291353c.webp",
    "location": "Boston, Suffolk County, Massachusetts, United States",
    "spotifyurl": "https://open.spotify.com/artist/217b0uqAzsOOhGcnoANZqj",
    "legacy": [-71.0588801,42.3600825],
    "name": "Sonny Stitt"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/accaf6028841441ba2f25593315bec09.webp",
    "location": "Badin, Stanly County, North Carolina, United States",
    "spotifyurl": "https://open.spotify.com/artist/063xkuRULzZu8fcoPR2rKR",
    "legacy": [-80.1177335,35.4034789],
    "name": "Lou Donaldson"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b55f4efaf41c4c8f83901deb180345dd.webp",
    "location": "Oakland, Alameda County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/0JCxGVxsISZzJHJPUOtceB",
    "legacy": [-122.2711639,37.8043514],
    "name": "Tower of Power"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3f007e2657bf45fba1f7841f52f36525.webp",
    "location": "Brinkley, Monroe County, Arkansas, United States",
    "spotifyurl": "https://open.spotify.com/artist/2nRbxpnBMMbtMBWH5QdqH2",
    "legacy": [-91.19456880000001,34.8878719],
    "name": "Louis Jordan"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/cfd63f8cf84b431a92f9a7be233f5b19.webp",
    "location": "Stranda, Mre og Romsdal, Norway",
    "spotifyurl": "https://open.spotify.com/artist/32pN1An13076I4PTMzn2g7",
    "legacy": [6.9424091,62.3091141],
    "name": "Arve Henriksen"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/05f35c653a894e19a0916558da6cc993.webp",
    "location": "Milwaukee, Milwaukee County, Wisconsin, United States",
    "spotifyurl": "https://open.spotify.com/artist/7CUcJMFBfSARR8js036QOn",
    "legacy": [-87.9064736,43.0389025],
    "name": "Woody Herman"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a64b32e2b99ec104c452d5e31d5a7127.webp",
    "location": "Reykjavk, Hfuborgarsvi, Iceland",
    "spotifyurl": "https://open.spotify.com/artist/0L2E40bnomT7iQiZvKYC0B",
    "legacy": [-21.9426354,64.146582],
    "name": "Bjrk"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/e4f67326bac4fe704b6ee44efe7673fc.webp",
    "location": "Borlnge, Borlnge Municipality, Dalarna, Sweden",
    "spotifyurl": "https://open.spotify.com/artist/04HqRx07Bv9gh7rsrMTqs7",
    "legacy": [15.433969,60.484304],
    "name": "Miss Li"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/0773e00a4a654bb0bc3321d45ec48ba9.webp",
    "location": "Witbank, Mpumalanga, South Africa",
    "spotifyurl": "https://open.spotify.com/artist/1b3F5FI7TX4IWTNA4P1kWp",
    "legacy": [29.2553229,-25.8727817],
    "name": "Hugh Masekela"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ac4e80d45957497fb3ec7884bb327959.webp",
    "location": "Toronto, Ontario, Canada",
    "spotifyurl": "https://open.spotify.com/artist/0OhbmRARz9nrChla8W2OGU",
    "legacy": [-79.3831843,43.653226],
    "name": "Molly Johnson"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/abc4a3069633422b994a15b6c587226e.webp",
    "location": "Rio de Janeiro, Brazil",
    "spotifyurl": "https://open.spotify.com/artist/0VSgciOd32tP2Yna1w4vDr",
    "legacy": [-43.1728965,-22.9068467],
    "name": "Baden Powell"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/9020421d36684159a3aae3ebcd69df2c.webp",
    "location": "Brooklyn, New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/2KGF6IKZfVGCKfyqcNVGfh",
    "legacy": [-73.9441579,40.6781784],
    "name": "Antibalas Afrobeat Orchestra"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/e8df2df231ddc0419d387b8eec3e9b61.webp",
    "location": "El Reno, Canadian County, Oklahoma, United States",
    "spotifyurl": "https://open.spotify.com/artist/0DNuWm5ZBKuCIXLNmrzuk5",
    "legacy": [-97.9550493,35.5322741],
    "name": "Sam Rivers"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/35f5727c4f7141c79a77d950f9a8a4d3.webp",
    "location": "Rochester, Medway, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/5hj7Mbefn4UoAjZZNBEmdj",
    "legacy": [0.506721,51.38800000000001],
    "name": "The James Taylor Quartet"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a2358d0eb4204a3e92f9108dcab8e111.webp",
    "location": "Detroit, Wayne County, Michigan, United States",
    "spotifyurl": "https://open.spotify.com/artist/0dAZ2slrElfR0Y5flcoSPt",
    "legacy": [-83.0457538,42.331427],
    "name": "Dorothy Ashby"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d1af05cec1474e7fb47ff25e6457a1a6.webp",
    "location": "Heathfield, East Sussex, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/4KMt98IljgbTUeeU9KAu7y",
    "legacy": [0.2564428,50.9667401],
    "name": "Fred Frith"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/f227555b20a873b9a1b9f9dc2323c19e.webp",
    "location": "Ossining, Westchester County, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/6QBN53AVQ0IcbSZrKxqwoB",
    "legacy": [-73.8615246,41.1628731],
    "name": "Sonny Sharrock"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/7ff37ea2612a43c4a31830d431fd8418.webp",
    "location": "New Orleans, Louisiana, United States",
    "spotifyurl": "https://open.spotify.com/artist/7IbO8NvxclKsk7WTOZ42bv",
    "legacy": [-90.0715323,29.95106579999999],
    "name": "Terence Blanchard"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b7413751cd8b4f1aa17d33f4be47b77b.webp",
    "location": "Minato, Tokyo, Japan",
    "spotifyurl": "https://open.spotify.com/artist/3Rq3YOF9YG9YfCWD4D56RZ",
    "legacy": [139.7515077,35.65808130000001],
    "name": "Nujabes"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/95def75b71b36d47c969e64f5260d8d7.webp",
    "location": "Ann Arbor, Washtenaw County, Michigan, United States",
    "spotifyurl": "https://open.spotify.com/artist/4G6HhUUQ1LgyYnA2WJppf8",
    "legacy": [-83.7430378,42.2808256],
    "name": "Colin Stetson"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/bf070ab2167542da8ce75eae2d0c149a.webp",
    "location": "Paris, le-de-France, France",
    "spotifyurl": "https://open.spotify.com/artist/01C9OoXDvCKkGcf735Tcfo",
    "legacy": [2.3522219,48.856614],
    "name": "Serge Gainsbourg"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/6b483bcd98a34c47a1d6ca1ee25a897a.webp",
    "location": "New Orleans, Louisiana, United States",
    "spotifyurl": "https://open.spotify.com/artist/6F6lawSnwGWWgdXFN7LXO7",
    "legacy": [-90.0715323,29.95106579999999],
    "name": "The Dirty Dozen Brass Band"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d433d96f729d479280c9addae2774993.webp",
    "location": "Oregon, Dane County, Wisconsin, United States",
    "spotifyurl": "https://open.spotify.com/artist/5QJZUg9ngYII5FkgAGFgW7",
    "legacy": [-89.38456339999999,42.9261116],
    "name": "Youngblood Brass Band"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/406be95aaddf45f0c544ed28fe6b8a92.webp",
    "location": "Newark, Essex County, New Jersey, United States",
    "spotifyurl": "https://open.spotify.com/artist/6y7dRlvApiCjP12JrxWQjh",
    "legacy": [-74.1723667,40.735657],
    "name": "Ike Quebec"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/1803abba9f4ec5f677df8fa7714789e9.webp",
    "location": "Wichita, Sedgwick County, Kansas, United States",
    "spotifyurl": "https://open.spotify.com/artist/27hSR8e34ZM5vj5fUFixyb",
    "legacy": [-97.33005299999999,37.68717609999999],
    "name": "Stan Kenton"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d6e7f15e8cab4bcba1eca3652a87cbde.webp",
    "location": "Lee's Summit, Missouri, United States",
    "spotifyurl": "https://open.spotify.com/artist/3t58jfUhoMLYVO14XaUFLA",
    "legacy": [-94.3821724,38.9108408],
    "name": "Pat Metheny & Brad Mehldau"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/23675c9fbdec4dccae4a086c5c680cab.webp",
    "location": "Minneapolis, Hennepin County, Minnesota, United States",
    "spotifyurl": "https://open.spotify.com/artist/2jCjj3atiDT70VeEshQbOr",
    "legacy": [-93.2650108,44.977753],
    "name": "John Lurie"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a7725ca826afef1d13c4ff875175dcbf.webp",
    "location": "Muskogee, Muskogee County, Oklahoma, United States",
    "spotifyurl": "https://open.spotify.com/artist/6pVkGhtBvjj1P52yn0tNLG",
    "legacy": [-95.3696909,35.7478769],
    "name": "Barney Kessel"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/65e43dc004a747afa6e05fe08d8ef92b.webp",
    "location": "Bangor, Gwynedd, Wales, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/37NqXwtb6nIEqRt4EJSoIO",
    "legacy": [-4.129263,53.22739],
    "name": "Duffy"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/0cfc6b795211442cc4e93e05462a5a6b.webp",
    "location": "16 October 2001 (aged 72)",
    "spotifyurl": "https://open.spotify.com/artist/3CEdEF8RsuL3hAFJaujvr0",
    "legacy": [1,1],
    "name": "Etta Jones"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5e40bb922cbde6b210a587cc87b8dc0f.webp",
    "location": "So Lus, Maranho, Brazil",
    "spotifyurl": "https://open.spotify.com/artist/26DN8VRVU1IRg0AFgUfMZO",
    "legacy": [-45.2744159,-4.9609498],
    "name": "Tania Maria"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/4d4783037c2e4506b53e686591927a9e.webp",
    "location": "Reykjavk, Hfuborgarsvi, Iceland",
    "spotifyurl": "null",
    "legacy": [-21.9426354,64.146582],
    "name": "Bjrk Gumundsdttir & tr Gumundar Inglfssonar"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/182d1e55ae864dffa069d23c616112ad.webp",
    "location": "Eureka, Humboldt County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/2zq0uqN9Wq12tqrQQt1ozw",
    "legacy": [-124.1636729,40.8020712],
    "name": "Mr. Bungle"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/1e59a9a84a49456caafd95bc7260bb44.webp",
    "location": "Hoboken, Hudson County, New Jersey, United States",
    "spotifyurl": "https://open.spotify.com/artist/1Mxqyy3pSjf8kZZL4QVxS0",
    "legacy": [-74.0323626,40.7439905],
    "name": "Frank Sinatra & Count Basie"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c439aa051bf844a08275eedb761b2b23.webp",
    "location": "Moskva, Russian Federation",
    "spotifyurl": "https://open.spotify.com/artist/3z6Gk257P9jNcZbBXJNX5i",
    "legacy": [37.6172999,55.755826],
    "name": "Regina Spektor"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/e591fd0f7f524b52af20a7989372f309.webp",
    "location": "San Diego, San Diego County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/5dVua2HdrY1VlbPh6OM9KZ",
    "legacy": [-117.1610966,32.7157305],
    "name": "The Gaslamp Killer"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/508d499607ce41b19bdfb10e8fb35d77.webp",
    "location": "Chicago, Cook County, Illinois, United States",
    "spotifyurl": "https://open.spotify.com/artist/7qVvIFc9DktkAc0HKzRhNo",
    "legacy": [-87.6297982,41.8781136],
    "name": "Johnny Hartman"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/0edb1765f919407b80e28bc18930e0d9.webp",
    "location": "Helsinki, Uusimaa, Finland",
    "spotifyurl": "https://open.spotify.com/artist/3IyO9AT4qU8VLyOUcZfgMg",
    "legacy": [24.9383791,60.16985569999999],
    "name": "Don Johnson Big Band"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/7fa44bed3aa346379995eccd9794853d.webp",
    "location": "Berlin, Germany",
    "spotifyurl": "https://open.spotify.com/artist/2I5A4xP3QGJEDKGhhXMAVr",
    "legacy": [13.404954,52.52000659999999],
    "name": "Jacky Terrasson"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/17bbbc2618d74ee1b240932253dd8c52.webp",
    "location": "La Habana, Cuba",
    "spotifyurl": "https://open.spotify.com/artist/30Mx3ZadPgGZTcs38FvYP8",
    "legacy": [-82.3665956,23.1135925],
    "name": "Paquito D'Rivera"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/2b4810b3cfb14c6a935510d1cc2da307.webp",
    "location": "Camagey, Camagey, Cuba",
    "spotifyurl": "https://open.spotify.com/artist/2zyVwasA2QkaVopBFZ2RfX",
    "legacy": [-77.9053182,21.3926035],
    "name": "Omar Sosa"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/98d04ee93ca04d27aa9c4ab5ef5b3ad3.webp",
    "location": "Hanover, Niedersachsen, Germany",
    "spotifyurl": "https://open.spotify.com/artist/6FlxhoUGATC40TALMesaFM",
    "legacy": [9.732010400000002,52.3758916],
    "name": "Vinicio Capossela"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/da58d255466850c725cdcd6d718b1d73.webp",
    "location": "Tampa, Hillsborough County, Florida, United States",
    "spotifyurl": "https://open.spotify.com/artist/7KjjSmSX5wCE1KYOerEf6D",
    "legacy": [-82.4571776,27.950575],
    "name": "Nat Adderley"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/88db77553a1e4b6bcb3ffe89a88bdb85.webp",
    "location": "Tokyo, Japan",
    "spotifyurl": "https://open.spotify.com/artist/0lRXEutklZUeNdWIJA1NI0",
    "legacy": [139.6503106,35.6761919],
    "name": "Casiopea"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c24b81e9a76a4ad8a2e3377f36d6b834.webp",
    "location": "Buenos Aires, Argentina",
    "spotifyurl": "https://open.spotify.com/artist/2d5lQo9YQ1DkAsBKTRp7Iu",
    "legacy": [-58.3815591,-34.6036844],
    "name": "Karen Souza"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/11127488407f492b83914d6225e598b6.webp",
    "location": "Cayenne, Arrondissement of Cayenne, French Guiana",
    "spotifyurl": "https://open.spotify.com/artist/0TQUgpZqEnfluYEfKQBYB6",
    "legacy": [-52.3134531,4.92242],
    "name": "Henri Salvador"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/11127488407f492b83914d6225e598b6.webp",
    "location": "Cayenne, Arrondissement of Cayenne, French Guiana",
    "spotifyurl": "https://open.spotify.com/artist/0TQUgpZqEnfluYEfKQBYB6",
    "legacy": [-52.3134531,4.92242],
    "name": "Henri Salvador"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/11127488407f492b83914d6225e598b6.webp",
    "location": "Cayenne, Arrondissement of Cayenne, French Guiana",
    "spotifyurl": "https://open.spotify.com/artist/0TQUgpZqEnfluYEfKQBYB6",
    "legacy": [-52.3134531,4.92242],
    "name": "Henri Salvador"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/efeac1ff21d0ce3337a4f86982543cf4.webp",
    "location": "Kingston, Jamaica",
    "spotifyurl": "https://open.spotify.com/artist/2QsynagSdAqZj3U9HgDzjD",
    "legacy": [-76.8099041,18.0178743],
    "name": "Bob Marley & The Wailers"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/cee48d0fae97492c9925c41a6c4338f8.webp",
    "location": "Kendal, Manchester, Jamaica",
    "spotifyurl": "https://open.spotify.com/artist/1TsG4AumsMt1Tcq2nHpov9",
    "legacy": [-77.4872226,18.085426],
    "name": "Lee Scratch Perry"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b3232c8d82d4408fa8091ad5ca44aa3b.webp",
    "location": "Dimbokro, Lacs, Cote D'Ivoire",
    "spotifyurl": "https://open.spotify.com/artist/41ekW4MXG59xJMXR8dX1OG",
    "legacy": [-4.7122337,6.657475199999999],
    "name": "Alpha Blondy"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/fd90f6e92b514d83a9ee588c3e7dd2d2.webp",
    "location": "Opole, Opolskie, Poland",
    "spotifyurl": "https://open.spotify.com/artist/3ivtXosZwKwE2sWrcjZZYi",
    "legacy": [17.9230651,50.6683223],
    "name": "Eastwest Rockers"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/6581bdc77c444e7a82c78687bf54cbeb.webp",
    "location": "Arlington County, Virginia, United States",
    "spotifyurl": "null",
    "legacy": [-77.09098089999999,38.8816208],
    "name": "Soldiers of Jah Army"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/cae067f10a2ce9d3aba6600aeea6e2d6.webp",
    "location": "Kingston, Jamaica",
    "spotifyurl": "https://open.spotify.com/artist/0nGxKkhmIzyu6bvuXrko1e",
    "legacy": [-76.8099041,18.0178743],
    "name": "The Congos"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/385f4dac179e448db7936aeeded171f0.webp",
    "location": "Berlin, Germany",
    "spotifyurl": "https://open.spotify.com/artist/06sVMzmcw141RgryE8TuMj",
    "legacy": [13.404954,52.52000659999999],
    "name": "Ohrbooten"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5054cf4b4bf54d378796e867ead57a81.webp",
    "location": "New Orleans, Louisiana, United States",
    "spotifyurl": "https://open.spotify.com/artist/5Ayl2bJtN5mdCsxZoxs9n1",
    "legacy": [-90.0715323,29.95106579999999],
    "name": "Collie Buddz"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d9cdd0d43e9b466eb017f557ca7cb7cb.webp",
    "location": "Kobuck, lskie, Poland",
    "spotifyurl": "null",
    "legacy": [-97.394132,32.837651],
    "name": "Caa Gra Barwinkw"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c782aa525c6544c2ab3390ba525e140c.webp",
    "location": "Belford Roxo, Rio de Janeiro, Brazil",
    "spotifyurl": "https://open.spotify.com/artist/4cx31cxKTg5L8blZE24qfZ",
    "legacy": [-43.3996264,-22.7645391],
    "name": "Cidade Negra"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/73b184d8b32d43c480c583b5465785c0.webp",
    "location": "Kingston, Jamaica",
    "spotifyurl": "https://open.spotify.com/artist/4c4iX8pe1SV13xToguoelN",
    "legacy": [-76.8099041,18.0178743],
    "name": "T.O.K."
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5d5944c16c3a7b5a4dec9c08fb4f925e.webp",
    "location": "Saint James, Jamaica",
    "spotifyurl": "https://open.spotify.com/artist/45QpZznbXYo3nWy0TIhvgv",
    "legacy": [-77.85959629999999,18.3923184],
    "name": "Max Romeo & The Upsetters"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/52e8aa35a1314452854cce545f1636fa.webp",
    "location": "Port Antonio, Portland, Jamaica",
    "spotifyurl": "https://open.spotify.com/artist/6xKQ3GOnt3gjzja4IcLyg4",
    "legacy": [-76.44763209999999,18.1712764],
    "name": "Mikey Dread"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/6458f978133540f8bf82f1a1648697c5.webp",
    "location": "Kingston, Jamaica",
    "spotifyurl": "https://open.spotify.com/artist/1FcB6xMihhP9Hb6AdGVbWe",
    "legacy": [-76.8099041,18.0178743],
    "name": "Desmond Dekker & The Aces"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/9ac6877c8d2545778d3e3d4cce05e1be.webp",
    "location": "14 November 1984 (aged 38)",
    "spotifyurl": "https://open.spotify.com/artist/7a6In9UVdQx5TpBGLZT2RZ",
    "legacy": [1,1],
    "name": "Keith Hudson"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ebe6df81b6794814a2fc6337c36ceb46.webp",
    "location": "San Diego, San Diego County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/7jgZFR40bWjwOrRCOZFB02",
    "legacy": [-117.1610966,32.7157305],
    "name": "Tribal Seeds"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c84a03fbcfcd4143aff240cdf3fc5c3d.webp",
    "location": "Copenhagen, Capital Region of Denmark, Denmark",
    "spotifyurl": "https://open.spotify.com/artist/2OLmN3LLWtLF7zerL4VdaX",
    "legacy": [12.5683372,55.6760968],
    "name": "Laid Back"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/e80cfd2456aa4f30b469e85c8dd3bcd1.webp",
    "location": "Buff Bay, Portland, Jamaica",
    "spotifyurl": "https://open.spotify.com/artist/3kc5AFnL1TQQdNaMdSW2UO",
    "legacy": [-76.66004149999999,18.2342641],
    "name": "Wayne Wonder"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/84c685ab17f240e4a5012100c5b0bc2f.webp",
    "location": "Kingston, Jamaica",
    "spotifyurl": "https://open.spotify.com/artist/1LAgDHjyZvOQf39Fa9rtlT",
    "legacy": [-76.8099041,18.0178743],
    "name": "Tenor Saw"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/9246673ae8fb48ffab366125dbb3e9f2.webp",
    "location": "Clarendon, Jamaica",
    "spotifyurl": "https://open.spotify.com/artist/3Ko5w2NYcaqtAtvDrJMdw5",
    "legacy": [-77.2405153,17.9557183],
    "name": "Dennis Alcapone"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/f0b1a80f28a54876aaf0a9040c85ea69.webp",
    "location": "Dresden, Sachsen, Germany",
    "spotifyurl": "https://open.spotify.com/artist/3gXLeeyXoh0rYZ8AUfmKQF",
    "legacy": [13.7372621,51.0504088],
    "name": "Yellow Umbrella"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/0d6e93afab504df7afe8bb1f8f06a6f8.webp",
    "location": "So Paulo, Brazil",
    "spotifyurl": "https://open.spotify.com/artist/5fKHm5RVUWIIirTGZlwGeO",
    "legacy": [-46.63330939999999,-23.5505199],
    "name": "Planta e Raiz"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/91a99e0262afe02efbe5242538850a4d.webp",
    "location": "Osaka, Japan",
    "spotifyurl": "https://open.spotify.com/artist/151w10AZKmL4a6iPwgxap3",
    "legacy": [135.5022535,34.6937249],
    "name": "MINMI"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/4c5f7d1a06a54ddcbb1a268279d524bf.webp",
    "location": "Washington, D.C., United States",
    "spotifyurl": "https://open.spotify.com/artist/25KNo5GDS6ZpLkjasaecA3",
    "legacy": [-77.0368707,38.9071923],
    "name": "Thievery Corporation"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a161a52adc084dfeb0ebdfb812207d57.webp",
    "location": "Kingston, Jamaica",
    "spotifyurl": "https://open.spotify.com/artist/5FhVnyPs1wSLjkZk4mU69M",
    "legacy": [-76.8099041,18.0178743],
    "name": "Al Campbell"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/39844955fe4841d281731123e1d6569b.webp",
    "location": "Saint James, Barbados",
    "spotifyurl": "https://open.spotify.com/artist/4M6Z1wubeKtwPqbjJygTOc",
    "legacy": [-59.6304714,13.1842181],
    "name": "Shontelle"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/fcb0afbbb2e7d8f5fc16db96a3fc36f0.webp",
    "location": "South Orange, Essex County, New Jersey, United States",
    "spotifyurl": "https://open.spotify.com/artist/2Mu5NfyYm8n5iTomuKAEHl",
    "legacy": [-74.2609903,40.7489277],
    "name": "Lauryn Hill"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/15b2f837e9db4010a578b34981f973e9.webp",
    "location": "La Habana, Cuba",
    "spotifyurl": "https://open.spotify.com/artist/3xMQnjb0NrcSJ094beuXVy",
    "legacy": [-82.3665956,23.1135925],
    "name": "Rico Rodriguez"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ee2bd28dc1e441fca7ca21ec72860080.webp",
    "location": "Kingston, Jamaica",
    "spotifyurl": "https://open.spotify.com/artist/2rVr4KpUNe5Kyxnir7RCbW",
    "legacy": [-76.8099041,18.0178743],
    "name": "Norris Man"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/13e4ca5da0f04f688a3f6a3296295e8f.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/2X3pNc13eRGofTO9Yt3sMi",
    "legacy": [-118.2436596,34.0522265],
    "name": "Fishbone"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c2697980bc444016b281a69678161ca0.webp",
    "location": "Huntington Beach, Orange County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/5mqVp01QToxogKFDjMYFZD",
    "legacy": [-117.9988026,33.6594835],
    "name": "The Dirty Heads"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/db184bf508f84293a142292e52aa6b6b.webp",
    "location": "Manchester, Jamaica",
    "spotifyurl": "https://open.spotify.com/artist/6PkSULcbxFKkxdgrmPGAvn",
    "legacy": [-77.5160788,18.0669654],
    "name": "Ce'cile"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/2bb706ef5fdf4bec98f5b95984102f20.webp",
    "location": "Hamina, Kymenlaakso, Finland",
    "spotifyurl": "https://open.spotify.com/artist/3b9AnZICKvmVlgG2nKEplU",
    "legacy": [27.1878317,60.5693374],
    "name": "Pelle Miljoona"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/6b3711b8c51d4c0ca2752fd2f9d1905c.webp",
    "location": "Denver, Colorado, United States",
    "spotifyurl": "https://open.spotify.com/artist/1TQtbRQbaXw5CeN3mC0DJH",
    "legacy": [-104.990251,39.7392358],
    "name": "Corey Harris"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3db44c2cd2a242338aa34d99cbfe6410.webp",
    "location": "Kingston, Jamaica",
    "spotifyurl": "https://open.spotify.com/artist/0h9oPMP5nFi3mY0lK4cSuy",
    "legacy": [-76.8099041,18.0178743],
    "name": "Leroy Sibbles"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/756d68a1f58ddc358708d7348e03608f.webp",
    "location": "Spanish Town, Saint Catherine, Jamaica",
    "spotifyurl": "https://open.spotify.com/artist/2oZcMYiKpjaA2Et5mU3RPP",
    "legacy": [-76.9748123,18.0166835],
    "name": "Chronixx"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/f2f46073dc364db7b69682916651d3d0.webp",
    "location": "Saint Mary, Jamaica",
    "spotifyurl": "https://open.spotify.com/artist/0AGCyTR1OlPi02FXIUhazq",
    "legacy": [-76.964306,18.3092711],
    "name": "Kiddus I"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5e512139158e4aebab704b96c074f2c3.webp",
    "location": "Birmingham, West Midlands, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/0gYuavkgXQapJXmASabd2o",
    "legacy": [-1.890401,52.48624299999999],
    "name": "Ali Campbell"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/1019d63c4fb144d2c48f0dc757abeb1d.webp",
    "location": "11 June 2005 (aged 52)",
    "spotifyurl": "https://open.spotify.com/artist/5GgX23TgqGxu7hCm6qVDo4",
    "legacy": [1,1],
    "name": "Jennifer Lara"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/799e7983f1aa46eca1d95dd06ab8dc2d.webp",
    "location": "Edinburgh, Scotland, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/1w87Ioh9tj6JvGLAl9EQs9",
    "legacy": [-3.188267,55.953252],
    "name": "The Rootsman"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c625f07016184deaa20bd91a222ce282.webp",
    "location": "Washington, D.C., United States",
    "spotifyurl": "https://open.spotify.com/artist/7lj2zDdfzBz8pCzfRx9WYu",
    "legacy": [-77.0368707,38.9071923],
    "name": "Born Jamericans"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3ca308502b7a4c89a9a2ceb4faea4121.webp",
    "location": "22 November 1980 (aged 24)",
    "spotifyurl": "https://open.spotify.com/artist/6BpcMPRaLWKu3hd1XWTKjh",
    "legacy": [1,1],
    "name": "General Echo"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3ca308502b7a4c89a9a2ceb4faea4121.webp",
    "location": "22 November 1980 (aged 24)",
    "spotifyurl": "https://open.spotify.com/artist/6BpcMPRaLWKu3hd1XWTKjh",
    "legacy": [1,1],
    "name": "General Echo"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3ca308502b7a4c89a9a2ceb4faea4121.webp",
    "location": "22 November 1980 (aged 24)",
    "spotifyurl": "https://open.spotify.com/artist/6BpcMPRaLWKu3hd1XWTKjh",
    "legacy": [1,1],
    "name": "General Echo"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/398b96868ddd81accf78dfaa65e09527.webp",
    "location": "Liverpool, Merseyside, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2",
    "legacy": [-2.9915726,53.4083714],
    "name": "The Beatles"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c825233e09af4641a5ce7b6ece883aae.webp",
    "location": "High Green, Sheffield, South Yorkshire, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/7Ln80lUS6He07XvHI8qqHH",
    "legacy": [-1.494032,53.474144],
    "name": "Arctic Monkeys"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/0d896318abd4e7c8982e15423f88291b.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/1u7kkVrr14iBvrpYnZILJR",
    "legacy": [-0.1277583,51.5073509],
    "name": "Sex Pistols"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/39ed61491137c5a43a2ffb67bbf01894.webp",
    "location": "Glasgow, Scotland, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/0XNa1vTidXlvJ2gHSsRi4A",
    "legacy": [-4.251806,55.864237],
    "name": "Franz Ferdinand"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3f12d26b9ee543da99fd1e1d7b738f7a.webp",
    "location": "Manchester, Greater Manchester, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/3yY2gUcIsjMr8hjo51PoJ8",
    "legacy": [-2.2426305,53.4807593],
    "name": "The Smiths"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/8756dda77d5148b3a7d26421fde154e3.webp",
    "location": "Welwyn Garden City, Hertfordshire, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/4BntNFyiN3VGG4hhRRZt9d",
    "legacy": [-0.208661,51.8031689],
    "name": "The Subways"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/69c4e3e6edc09e3c0d0b17dcb7bd96d1.webp",
    "location": "Birmingham, West Midlands, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/5M52tdBnJaKSvOpJGz8mfZ",
    "legacy": [-1.890401,52.48624299999999],
    "name": "Black Sabbath"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/37ce1d315bf6450fa6df5dee0f27e6d2.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/6fHETUBbKmdmgybtFOFQuc",
    "legacy": [-0.1277583,51.5073509],
    "name": "Dirty Pretty Things"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/e065432c89951e58376abda85a4d5d3c.webp",
    "location": "Bolton, Greater Manchester, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/2DxlS3lTLFIq70S7ap5H3y",
    "legacy": [-2.4282192,53.57686469999999],
    "name": "Buzzcocks"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/2596e7b0d9f248e092bf4cfe21e26d30.webp",
    "location": "Oxford, Oxfordshire, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/0sHeX8oQ6o7xic3wMf4NBU",
    "legacy": [-1.2577263,51.7520209],
    "name": "Supergrass"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5e543bbc4b6647d382105ef8579e6260.webp",
    "location": "Reading, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/4bFfSfCBYpFh37ziXCSqUs",
    "legacy": [-0.9781303,51.4542645],
    "name": "Does It Offend You, Yeah?"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/6b62dfa1ee3eae4ffca46b5fa060a6ec.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/2mpeljBig2IXLXRAFO9AAs",
    "legacy": [-0.1277583,51.5073509],
    "name": "Dido"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/f7ebc8e512a86af881fe2a76e6ee459d.webp",
    "location": "Halifax, Calderdale, West Yorkshire, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/6eUKZXaKkcviH0Ku9w2n3V",
    "legacy": [-1.85754,53.72702],
    "name": "Ed Sheeran"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a62cc5871179245fa590d1030c37673c.webp",
    "location": "Lancashire, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/6waa8mKu91GjzD4NlONlNJ",
    "legacy": [-2.7044052,53.7632254],
    "name": "The Hollies"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c95e1926f9e64fb085b81b4f452cdf4a.webp",
    "location": "Morden, Merton, London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/1SBU4DvQapOFCnxMzENUkp",
    "legacy": [-0.19446,51.394943],
    "name": "Good Shoes"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/1d67bb61879587b7be640e01a945a87c.webp",
    "location": "Liverpool, Merseyside, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/0ucLPotcQNI7AViFytdhBz",
    "legacy": [-2.9915726,53.4083714],
    "name": "Ladytron"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ab60e0f7f63d4831b1538a1832f346e2.webp",
    "location": "Croydon, London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/6oX4tx055oEFYM3ahDTyOD",
    "legacy": [-0.098234,51.376165],
    "name": "Noisettes"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/77ffb142f5e94470b4abdc2437ef59c9.webp",
    "location": "Oxford, Oxfordshire, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/5WM5zPOswRcPu07rxP2dQv",
    "legacy": [-1.2577263,51.7520209],
    "name": "Hugh Laurie"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/02e5fb613dcd2f0adcf090c7212231f6.webp",
    "location": "Whiston, Knowsley, Merseyside, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/60vX3zLcdKRXvKLITVh5Df",
    "legacy": [-2.791738,53.418071],
    "name": "Melanie C"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/1bc299d25ab546e3a874be5dabaaa88e.webp",
    "location": "Helmsley, North Yorkshire, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/0V6iWD05yAOe1C3pJpbMbk",
    "legacy": [-1.0562636,54.24650579999999],
    "name": "One Night Only"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/1f4ca2c09ada4d8bf27f5c917990ec32.webp",
    "location": "Stoke Newington, Hackney, London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/4fwuXg6XQHfdlOdmw36OHa",
    "legacy": [-0.08349229999999999,51.561175],
    "name": "Paloma Faith"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/7cf7b8b12e62bad7d65adb12f9e5c659.webp",
    "location": "Hampstead, Camden, London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/7mlge4peaoNgzTsY6M32RB",
    "legacy": [-0.1761749,51.5556461],
    "name": "Marianne Faithfull"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5ee26b4665c4726393de0f93c05eb74c.webp",
    "location": "Eversley, Hampshire, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/7B2edU3Q7btJoNsoHCNohM",
    "legacy": [-0.889119,51.35248],
    "name": "Laura Marling"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/e3d2378063c34d40cd1c2fb3b667cca1.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/0NKDgy9j66h3DLnN8qu1bB",
    "legacy": [-0.1277583,51.5073509],
    "name": "Eurythmics"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/79c40669f2aeae679062be9752ebd9fd.webp",
    "location": "Clifton, Nottingham, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/4hf3caW9H8uFwwbv5pFjcg",
    "legacy": [-1.1790071,52.9058408],
    "name": "Jake Bugg"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/df246367762b4aab97260f99b8a83d81.webp",
    "location": "Sheffield, South Yorkshire, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/13W7XLRXdWeLmIu9vacE1w",
    "legacy": [-1.470085,53.38112899999999],
    "name": "Jarvis Cocker"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/1833f9b16010488b9ccae9e615a8de0c.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/5lModM3s3qlPQKYjtwWuXD",
    "legacy": [-0.1277583,51.5073509],
    "name": "The Duke Spirit"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ec5274711a6549ab95558f00bd9b5e23.webp",
    "location": "Surrey, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/29XJ6qIJAQdRSw64f47aJe",
    "legacy": [-0.5599501,51.31475930000001],
    "name": "Sham 69"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d9bdf7ed07cb42288f9419fcd7234b02.webp",
    "location": "Johannesburg, Gauteng, South Africa",
    "spotifyurl": "https://open.spotify.com/artist/1UQRtt7eHW6Bt4INNTUtb3",
    "legacy": [28.0473051,-26.2041028],
    "name": "Johnny Flynn"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/1f9de043bdb2401dbb91cb2363944480.webp",
    "location": "Bristol, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/5squ8uM6fhMQY71t9xobJC",
    "legacy": [-2.58791,51.454513],
    "name": "Kosheen"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/caadeb2d0d1473dc6dda5655dd4c9cb9.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/2LIdnZDzySb04oH40be1fR",
    "legacy": [-0.1277583,51.5073509],
    "name": "Fairport Convention"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/fb11e848b93e172f11d6d24cf7c3ec55.webp",
    "location": "Manchester, Greater Manchester, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/1HOeqtP7tHkKNJNLzQ2tnr",
    "legacy": [-2.2426305,53.4807593],
    "name": "Everything Everything"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/7a71bdcde9154f2f86778aaf81a519f4.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/4EfSXeVFbCEYIde3E9k4wr",
    "legacy": [-0.1277583,51.5073509],
    "name": "Cockney Rejects"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/581bea7e608099e86e652407888d86ac.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/1moxjboGR7GNWYIMWsRjgG",
    "legacy": [-0.1277583,51.5073509],
    "name": "Florence + the Machine"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/0f4479216cce4995c9b3b0262571dfdf.webp",
    "location": "Coventry, West Midlands, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/01xiB0IlXMXy3wrrotgDnU",
    "legacy": [-1.519693,52.406822],
    "name": "Clint Mansell"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c774278949887975dd26fa583edaa5a9.webp",
    "location": "Totnes, Devon, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/54QMjE4toDfiCryzYWCpXX",
    "legacy": [-3.685797,50.433741],
    "name": "Metronomy"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/16211ed654304665b05a4106b0fc497f.webp",
    "location": "Reading, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/4s80V6BJwBbS1UEbjeQejQ",
    "legacy": [-0.9781303,51.4542645],
    "name": "Pete and the Pirates"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/162a2d116dc53c04429c6923a1774620.webp",
    "location": "Birmingham, West Midlands, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/1iL8p9yzijWY1XnqVgHF5P",
    "legacy": [-1.890401,52.48624299999999],
    "name": "Clare Maguire"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b0612bb5f8f54b1fa4d1a3ed71263187.webp",
    "location": "Haywards Heath, West Sussex, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/0ndVVO80abvgGgjv2ICzct",
    "legacy": [-0.106333,50.999041],
    "name": "Brett Anderson"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a576535771fde449cb02fc37d62c2d6f.webp",
    "location": "Leicester, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/33qUIIydEBgWpe58IA0o61",
    "legacy": [-1.1397592,52.6368778],
    "name": "Maybeshewill"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/62ddc2e1564538f1cfe05eff5d65dbc3.webp",
    "location": "Kingston upon Thames, Kingston upon Thames, London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/57HiMjhnxdJflQodRyC5Ju",
    "legacy": [-0.300689,51.41233],
    "name": "Lucie Silvas"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/748ad8e7ae6b4868a15d25db816864ab.webp",
    "location": "York, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/7D5oTJSXSHf51auG0106CQ",
    "legacy": [-1.0872979,53.95996510000001],
    "name": "Benjamin Francis Leftwich"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/e7bc1db131cc4d139861c48d8eb2f5fa.webp",
    "location": "South Shields, South Tyneside, Tyne and Wear, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/5z96yaS2s1USscDldCCDgw",
    "legacy": [-1.427406,54.999424],
    "name": "Angelic Upstarts"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/67970284fdd341cb880c4fc26aaa841e.webp",
    "location": "Coventry, West Midlands, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/3wRksusBxJ6npu0PryYheF",
    "legacy": [-1.519693,52.406822],
    "name": "The Selecter"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/7e386be965864f0ebe2d418f55be8059.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/0O0lrN34wrcuBenkqlEDZe",
    "legacy": [-0.1277583,51.5073509],
    "name": "The Psychedelic Furs"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/988b88109f8f49953d1e87f1b4d27219.webp",
    "location": "Weybridge, Surrey, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/1kNQXvepPjaPgUfeDAF2h6",
    "legacy": [-0.457904,51.3716269],
    "name": "You Me at Six"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/7fe7a741a6b64662b10a339d127a79b5.webp",
    "location": "Hampshire, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/57xdnSVt4ahJCIXYLieQ25",
    "legacy": [-1.3080629,51.05769480000001],
    "name": "The Troggs"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b076e388354e46e3bc18f3119a38081f.webp",
    "location": "Liverpool, Merseyside, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/5Eeivnx2N0cg0L0wsFWNyV",
    "legacy": [-2.9915726,53.4083714],
    "name": "To My Boy"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/81f3b2fb8d18470e89f992b6273174ed.webp",
    "location": "Cardiff, Wales, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/0FOcXqJgJ1oq9XfzYTDZmZ",
    "legacy": [-3.17909,51.48158100000001],
    "name": "Super Furry Animals"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5e45190f5597a1a20445d153aea4aa11.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/72hqBMsw7x5jnfxxwkii8L",
    "legacy": [-0.1277583,51.5073509],
    "name": "Leftfield"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/985396bc7a0b6856fb4e37124f4a4a13.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/3Rj0tDHoX7C5NFq5DKIpHt",
    "legacy": [-0.1277583,51.5073509],
    "name": "Stereolab"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/baee601c7b39478c8e1be29e77455611.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/6pBNfggcZZDCmb0p92OnGn",
    "legacy": [-0.1277583,51.5073509],
    "name": "Chase & Status"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/cc5560e41f1742e6a7f7f16173ece6da.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/7nkLRaWHImCvWGHdNGnhVE",
    "legacy": [-0.1277583,51.5073509],
    "name": "Ten Years After"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/66aff2868c2c4692c686e740ec3278f2.webp",
    "location": "Longsight, Manchester, Greater Manchester, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/7sjttK1WcZeyLPn3IsQ62L",
    "legacy": [-2.2001784,53.4541219],
    "name": "Noel Gallagher"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/4de533203f6f4264bdcca783e29f1688.webp",
    "location": "Abergele, Conwy, Wales, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/29SeiO68HQHBs7pDdWOvvX",
    "legacy": [-3.581405,53.284355],
    "name": "Jesu"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/e2b8bc350c5742a3b1f3a441c2f2283f.webp",
    "location": "Rugby, Warwickshire, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/1ZOlVrZ2MtNSY9LcFYklDB",
    "legacy": [-1.265032,52.370878],
    "name": "Spacemen 3"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/58e9f0db05284a448a1e110f332aa997.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/72o2T9aqYR2PFNYpzYrMmw",
    "legacy": [-0.1277583,51.5073509],
    "name": "The Tiger Lillies"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/863e77b4b3e34d897fe65656867dd52b.webp",
    "location": "Southampton, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/6loBF9iQdE11WSX29fNKqY",
    "legacy": [-1.4043509,50.90970040000001],
    "name": "Howard Jones"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/05060186b0f64de19782713eac3669b9.webp",
    "location": "Macclesfield, Cheshire East, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/2B0PgHZi2zaDqjKe86Gaip",
    "legacy": [-2.119287,53.258663],
    "name": "Mr. Scruff"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ca967b3be9e445dba7de9b7f3a328b6f.webp",
    "location": "Oxford, Oxfordshire, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/6YUCNP1BG3eCUWQ3zdSSRk",
    "legacy": [-1.2577263,51.7520209],
    "name": "Thea Gilmore"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/2acc96d031b84857a163fd4514b62336.webp",
    "location": "Brixton, Lambeth, London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/2wpWOzQE5TpA0dVnh5YD08",
    "legacy": [-0.1156148,51.4612794],
    "name": "Bronski Beat"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3b23cfaf981646a6b945f47788d08fe7.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/25mrbNwFzoqPWyYXLhiDRw",
    "legacy": [-0.1277583,51.5073509],
    "name": "Alexi Murdoch"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/2ffe5698ebf143eb8aed32bf8d708b36.webp",
    "location": "Sheffield, South Yorkshire, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/1CcPlAmcnJjC4FnaPVzv2v",
    "legacy": [-1.470085,53.38112899999999],
    "name": "I Monster"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/9d16a340c1bb4c26b95bb3a533fc3508.webp",
    "location": "Guildford, Surrey, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/4K3NWDwBIxgktui14SccR2",
    "legacy": [-0.570409,51.23622],
    "name": "The Vapors"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c0752769c82aa3e90dc908cb519321a9.webp",
    "location": "Gloucestershire, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/6nB0iY1cjSY1KyhYyuIIKH",
    "legacy": [-2.1608329,51.846509],
    "name": "FKA twigs"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/9133fae5e4ec4b73a62a51b61cf50660.webp",
    "location": "Cambridgeshire, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/6ASGmWCYupa0CXGtsDdYSI",
    "legacy": [0.1218195,52.2052973],
    "name": "Jamie Lidell"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/2441920d9e2a46688804b37098ced0e4.webp",
    "location": "Saddleworth, Oldham, Greater Manchester, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/4yNl6kohlH1jcbfXwkcpg9",
    "legacy": [-1.9949813,53.557788],
    "name": "Twisted Wheel"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/10e6e70f051b8f15ecb399641a35980b.webp",
    "location": "Sheffield, South Yorkshire, England, United Kingdom",
    "spotifyurl": "null",
    "legacy": [-1.470085,53.38112899999999],
    "name": "The Comsat Angels"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3549e9a794d74518bdb5cc91ec34ad12.webp",
    "location": "Davyhulme, Trafford, Greater Manchester, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/4Qk5Rvoyk2vPhbaJyAP1uL",
    "legacy": [-2.369664,53.4532519],
    "name": "Jim Noir"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/0d38bcaa2b044cebcc5c28581ace8063.webp",
    "location": "Bristol, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/6WEyPcf9ezhNLm1xOBjbwH",
    "legacy": [-2.58791,51.454513],
    "name": "Crippled Black Phoenix"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/9542f8064ce34a22971c562ec1dba5e4.webp",
    "location": "Clapham, Lambeth, London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/1k8VBufn1nBs8LN9n4snc8",
    "legacy": [-0.1413263,51.4658813],
    "name": "Stereo MC's"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/88ed4e7285d84fd2a6c7134dd698b90a.webp",
    "location": "Birkenhead, Wirral, Merseyside, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/6hBQq083tyW3yrF1gdVt4Q",
    "legacy": [-3.023009,53.38999099999999],
    "name": "Half Man Half Biscuit"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/74753fd512194ace9742cb875951b2d5.webp",
    "location": "Stourbridge, Dudley, West Midlands, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/0Uo1d5A6BR1I155GlD9WYo",
    "legacy": [-2.148731,52.456891],
    "name": "The Wonder Stuff"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/7eeefb00e7294521a7591d0b53bda833.webp",
    "location": "Royal Leamington Spa, Warwickshire, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/7HorCYRsMBxPIRFYQE4Ch9",
    "legacy": [-1.5200789,52.2851905],
    "name": "Nizlopi"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/bdc812d885104964b6d15c222f61cdc6.webp",
    "location": "Bellaghy, County Londonderry, Northern Ireland, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/0NUTVTeuBpdsfvbW4RxA6e",
    "legacy": [-6.518924699999999,54.80824579999999],
    "name": "General Fiasco"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/4350717a5ade456485056ccaa7475a7a.webp",
    "location": "Broadford, Skye, Highland, Scotland, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/5YjEVrNMrIRw2xGbjTN6Ti",
    "legacy": [-5.9096592,57.24139169999999],
    "name": "Mylo"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c1acc6361c3b4376a1e3b118d36d10b7.webp",
    "location": "Basingstoke, Hampshire, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/4o7n4kFtUtWYqiu5grxxSA",
    "legacy": [-1.0923964,51.26654],
    "name": "Carl Bart"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c1acc6361c3b4376a1e3b118d36d10b7.webp",
    "location": "Basingstoke, Hampshire, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/4o7n4kFtUtWYqiu5grxxSA",
    "legacy": [-1.0923964,51.26654],
    "name": "Carl Bart"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c1acc6361c3b4376a1e3b118d36d10b7.webp",
    "location": "Basingstoke, Hampshire, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/4o7n4kFtUtWYqiu5grxxSA",
    "legacy": [-1.0923964,51.26654],
    "name": "Carl Bart"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/760f06edd74354f5fd0cf5ff09d5e41a.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/3RGLhK1IP9jnYFH4BRFJBS",
    "legacy": [-0.1277583,51.5073509],
    "name": "The Clash"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/bc631b3c20cf23c32e0d6f046ff7c403.webp",
    "location": "Berkeley, Alameda County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/7oPftvlwr6VrsViSDV7fJY",
    "legacy": [-122.273042,37.8715226],
    "name": "Green Day"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/7ef98456900443c186135c74da73069c.webp",
    "location": "Hermosa Beach, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/5Mhs3Eu8lU6sRCtRYsmABV",
    "legacy": [-118.3995194,33.8622366],
    "name": "Black Flag"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a66684c497874a84b1a6c6c353f62ce8.webp",
    "location": "Ann Arbor, Washtenaw County, Michigan, United States",
    "spotifyurl": "https://open.spotify.com/artist/4BFMTELQyWJU1SwqcXMBm3",
    "legacy": [-83.7430378,42.2808256],
    "name": "The Stooges"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3b2a1afbc528978da12b55a44f66e601.webp",
    "location": "Montreal, Montreal, Quebec, Canada",
    "spotifyurl": "https://open.spotify.com/artist/2p4FqHnazRucYQHyDCdBrJ",
    "legacy": [-73.567256,45.5016889],
    "name": "Simple Plan"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3ae4c452a86744dcbbd637e3269c9b5a.webp",
    "location": "Washington, D.C., United States",
    "spotifyurl": "https://open.spotify.com/artist/07PiZYrhllpSXtELkUxlrf",
    "legacy": [-77.0368707,38.9071923],
    "name": "Minor Threat"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/2cd82b16c84a4d9f893830756eaa07d8.webp",
    "location": "La Habra, Orange County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/6SiyKSeJo6gcsS2NvuAbsl",
    "legacy": [-117.946137,33.9318591],
    "name": "Zebrahead"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/2a65657ed533f771fd9c3ceb9f8f372b.webp",
    "location": "San Francisco, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/0cOVRC8EOwDwXrs3JTrRN5",
    "legacy": [-122.4194155,37.7749295],
    "name": "Me First and the Gimme Gimmes"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ec5274711a6549ab95558f00bd9b5e23.webp",
    "location": "Surrey, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/29XJ6qIJAQdRSw64f47aJe",
    "legacy": [-0.5599501,51.31475930000001],
    "name": "Sham 69"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/babd78cf217efaeb176831cb34491227.webp",
    "location": "Boston, Suffolk County, Massachusetts, United States",
    "spotifyurl": "https://open.spotify.com/artist/6zvul52xwTWzilBZl6BUbT",
    "legacy": [-71.0588801,42.3600825],
    "name": "Pixies"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/8f15e4a4fb5246c391ce2bf9c01fcd82.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/5BgWMOdEUJYdUBH3WXfMWt",
    "legacy": [-0.1277583,51.5073509],
    "name": "X-Ray Spex"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/36f500890388023fc6024f82a5aae413.webp",
    "location": "New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/3zDvanHxaETiHltPkKKYhT",
    "legacy": [-74.0059728,40.7127753],
    "name": "Agnostic Front"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/fa641283a95344498745563dcde8d0cc.webp",
    "location": "San Antonio, Bexar County, Texas, United States",
    "spotifyurl": "https://open.spotify.com/artist/62BcWP4fzR8axESibNQEhs",
    "legacy": [-98.49362819999999,29.4241219],
    "name": "Butthole Surfers"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/411d0fe4ec0a553cd2f9c4ec97845245.webp",
    "location": "Berlin, Germany",
    "spotifyurl": "https://open.spotify.com/artist/7xZHrltZh8zIRvjimgABvj",
    "legacy": [13.404954,52.52000659999999],
    "name": "Nina Hagen"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/099cdb50dda74839abfa9f282961a142.webp",
    "location": "New Brunswick, Middlesex County, New Jersey, United States",
    "spotifyurl": "https://open.spotify.com/artist/1OKOTYGoCE2buxTYMegJp7",
    "legacy": [-74.4518188,40.4862157],
    "name": "Streetlight Manifesto"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5260403bcc7d43afb28b59f07a2d6fde.webp",
    "location": "Copenhagen, Capital Region of Denmark, Denmark",
    "spotifyurl": "https://open.spotify.com/artist/7MvgOAoxA9ZgOxtRBYxLWJ",
    "legacy": [12.5683372,55.6760968],
    "name": "HorrorPops"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/72f7159e131246fac65ad4926dc6e364.webp",
    "location": "Chicago, Cook County, Illinois, United States",
    "spotifyurl": "https://open.spotify.com/artist/0aQ8Ow9YAkGxr5bbehjkcS",
    "legacy": [-87.6297982,41.8781136],
    "name": "The Lawrence Arms"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/bdf4d41a42e64a09979143695f517069.webp",
    "location": "Hollywood, Los Angeles, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/5qrZ4EXMTVH4e6odErsQjb",
    "legacy": [-118.3286614,34.0928092],
    "name": "Murderdolls"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/e7bc1db131cc4d139861c48d8eb2f5fa.webp",
    "location": "South Shields, South Tyneside, Tyne and Wear, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/5z96yaS2s1USscDldCCDgw",
    "legacy": [-1.427406,54.999424],
    "name": "Angelic Upstarts"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c324f571e45b4e9a8a4a9cfa4bfc3d37.webp",
    "location": "Nizhny Novgorod, Nizhegorodskaya oblast', Russian Federation",
    "spotifyurl": "https://open.spotify.com/artist/15iLwKufC68VF9mNjmIE7D",
    "legacy": [44.0058793,56.3268684],
    "name": "F.P.G."
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/def5d33d78154f4b8fb0cea46a7c570c.webp",
    "location": "East Elmhurst, Queens, New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/421A23lYymEUE6SozCfWbr",
    "legacy": [-73.8713099,40.7737505],
    "name": "Johnny Thunders"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a77adeb006ce41da99b671a5c20b9a36.webp",
    "location": "Cutler Bay, Miami-Dade County, Florida, United States",
    "spotifyurl": "https://open.spotify.com/artist/4zYmn9QW7Fzd7DzJsK9LyT",
    "legacy": [-80.34685929999999,25.5808323],
    "name": "Against All Authority"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/8b9ca5dd884f4452ae0599bbc7445f9e.webp",
    "location": "New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/5UqTO8smerMvxHYA5xsXb6",
    "legacy": [-74.0059728,40.7127753],
    "name": "Sonic Youth"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3709d911fa8f4df1cd862534fd2a33f8.webp",
    "location": "Pontypridd, Rhondda Cynon Taf, Wales, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/7KnaZr690xW0sCihF9Z8oP",
    "legacy": [-3.342314,51.60077399999999],
    "name": "Lostprophets"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/2087d96335e446d497de77f65751a90a.webp",
    "location": "Van Nuys, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/5tdgsNGbOvPQZjcco3yOMt",
    "legacy": [-118.451357,34.1898566],
    "name": "Rollins Band"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/45c8db56926247d7aa456922b505b570.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/3Un18X4NF1bpjgUk44lUzn",
    "legacy": [-118.2436596,34.0522265],
    "name": "The Gun Club"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a6df39ff3693465588871d3a2796e5ec.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/7swtUG7Md62y3wP2huMeab",
    "legacy": [-118.2436596,34.0522265],
    "name": "45 Grave"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3268299a50504645af96736c16395216.webp",
    "location": "Natick, Middlesex County, Massachusetts, United States",
    "spotifyurl": "https://open.spotify.com/artist/2eRdPaLHWAL4d1WcNUO9Vz",
    "legacy": [-71.3468091,42.2775281],
    "name": "The Modern Lovers"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ee0e34f752ef4bf89d028dcc0b18b320.webp",
    "location": "Santa Monica, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/71h7GTahhKcSkQ1ayhTvOD",
    "legacy": [-118.4911912,34.0194543],
    "name": "Something Corporate"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c9b2bff7ec2f48b794e2823d7558a139.webp",
    "location": "St. Catharines, Regional Municipality of Niagara, Ontario, Canada",
    "spotifyurl": "https://open.spotify.com/artist/53RsXctnNmj9oKXvcbvzI2",
    "legacy": [-79.2468626,43.1593745],
    "name": "Alexisonfire"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/04250ceca60554ca9fb0d971f2ec990d.webp",
    "location": "Tampa, Hillsborough County, Florida, United States",
    "spotifyurl": "https://open.spotify.com/artist/5n71fmAB8Un2IfAPn64erN",
    "legacy": [-82.4571776,27.950575],
    "name": "From First to Last"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/8ce15e11401c400686e3fb40e5f824c7.webp",
    "location": "Huntington Beach, Orange County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/0nmQIMXWTXfhgOBdNzhGOs",
    "legacy": [-117.9988026,33.6594835],
    "name": "Avenged Sevenfold"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/61c2530ea4414a0e827c2fba707b9694.webp",
    "location": "Oakland, Alameda County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/5abLT4tuAZuFx5dKHaYSGo",
    "legacy": [-122.2711639,37.8043514],
    "name": "The Matches"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/86e743f66b9a43a4a066a114f5d13c31.webp",
    "location": "San Diego, San Diego County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/5GOJQ1HSMGp1rEnOhBeH1h",
    "legacy": [-117.1610966,32.7157305],
    "name": "Rocket from the Crypt"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5f2bfa6bcf8149faaa4d77f9d7fab84d.webp",
    "location": "Seattle, King County, Washington, United States",
    "spotifyurl": "https://open.spotify.com/artist/6Yuow6YoiBaVPFNjZ5BQi7",
    "legacy": [-122.3320708,47.6062095],
    "name": "Green River"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/40ee6479090748068b9d7d3c3e6c3feb.webp",
    "location": "Seattle, King County, Washington, United States",
    "spotifyurl": "https://open.spotify.com/artist/52FjGy6x2rxunrgiRdOnUt",
    "legacy": [-122.3320708,47.6062095],
    "name": "The Briefs"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/6ffb9254260f41708ed4346b352a7402.webp",
    "location": "Pomona, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/1KFz81eR4ZcTBqDQjwkgDP",
    "legacy": [-117.7499909,34.055103],
    "name": "Total Chaos"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d96b0f7d55c4452db2b38f79f3cf87a2.webp",
    "location": "Chicago, Cook County, Illinois, United States",
    "spotifyurl": "https://open.spotify.com/artist/40Yq4vzPs9VNUrIBG5Jr2i",
    "legacy": [-87.6297982,41.8781136],
    "name": "The Smashing Pumpkins"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/7e2541455cde454b817405cf90db907a.webp",
    "location": "Winnenden, Baden-Wrttemberg, Germany",
    "spotifyurl": "https://open.spotify.com/artist/4A3ZGNdTWn4w4Aw6VFqoJm",
    "legacy": [9.397142299999999,48.8750046],
    "name": "NoRMAhl"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/2765276f0497470da1f94affdadde507.webp",
    "location": "Cardiff, Wales, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/7fvToIpjDfwtLhAoZdVF5W",
    "legacy": [-3.17909,51.48158100000001],
    "name": "Demented Are Go!"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/0271f07050c34abcbdc061e3807d51a4.webp",
    "location": "Irun, Guipzcoa, Pas Vasco, Spain",
    "spotifyurl": "https://open.spotify.com/artist/2bSQxEqvD23Y4W6ztHaann",
    "legacy": [-1.7888495,43.3381465],
    "name": "Kortatu"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/1cd3160c1336491c88a06f16e4e8019b.webp",
    "location": "Yalta, Avtonomna Respublika Krym, Ukraine",
    "spotifyurl": "null",
    "legacy": [34.1532687,44.4909462],
    "name": " "
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/9ee48d01d55b45d1a4ef74ec9c648011.webp",
    "location": "Melbourne, Victoria, Australia",
    "spotifyurl": "https://open.spotify.com/artist/2LyXoG111QdqfI0HLYQgvS",
    "legacy": [144.9630576,-37.8136276],
    "name": "Bodyjar"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b97d7d35fae24090a914ea4641f9eb40.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/3P6duIn7oHeiBACZfYeNud",
    "legacy": [-118.2436596,34.0522265],
    "name": "FIDLAR"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/4585d713b7ff4dd898c6bddb10a4b25e.webp",
    "location": "Ipswich, Suffolk, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/43OKr8veKrM8ptgj3LcpOg",
    "legacy": [1.14822,52.056736],
    "name": "Extreme Noise Terror"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/cf2b60e377266d00b561de72c96a671a.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/7MhMgCo0Bl0Kukl93PZbYS",
    "legacy": [-0.1277583,51.5073509],
    "name": "Blur"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/387762149b5d40119d89af8b011bd547.webp",
    "location": "Zurich, Zrich, Switzerland",
    "spotifyurl": "https://open.spotify.com/artist/3SWm16ID5OfrCqf8RhMeDd",
    "legacy": [8.541694,47.3768866],
    "name": "Liliput"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/f8845830d29a48c280aaa578c189960a.webp",
    "location": "Celle, Niedersachsen, Germany",
    "spotifyurl": "https://open.spotify.com/artist/22ZJNiHwAO21ulAhYadWAW",
    "legacy": [10.0628514,52.6175963],
    "name": "Rasta Knast"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/1df129bbf67f4dc6bc3aab26dc3d8c40.webp",
    "location": "Leeds, West Yorkshire, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/5imRzqxKFbH09H37IrZcMp",
    "legacy": [-1.5490774,53.8007554],
    "name": "Abrasive Wheels"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c18fe501b3894376ae279128adfb0178.webp",
    "location": "Rotterdam, Rotterdam, Zuid-Holland, Netherlands",
    "spotifyurl": "https://open.spotify.com/artist/7qkq2G92f2yMJVejh6NBEJ",
    "legacy": [4.4777326,51.9244201],
    "name": "Batmobile"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/289e9eb7cb37fe1489bbc08f90d47042.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/1hckaudcoOzWyeRIlrOksc",
    "legacy": [-0.1277583,51.5073509],
    "name": "Kelly Osbourne"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/72de027a77244a9aaec46fb8ec810cab.webp",
    "location": "Marshalltown, Marshall County, Iowa, United States",
    "spotifyurl": "https://open.spotify.com/artist/24OGO7fr96L0azkG3pZZa2",
    "legacy": [-92.90803749999999,42.0494674],
    "name": "Modern Life Is War"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/8cf2040c9cd265ae73a761974383740d.webp",
    "location": "Minneapolis, Hennepin County, Minnesota, United States",
    "spotifyurl": "https://open.spotify.com/artist/5oPflNEIhaZ8pFJWxMZtDv",
    "legacy": [-93.2650108,44.977753],
    "name": "Off With Their Heads"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/1886195e73f5ada84aa396a1774b96d9.webp",
    "location": "Helsinki, Uusimaa, Finland",
    "spotifyurl": "https://open.spotify.com/artist/76ptJV8617638xrpeoUtzl",
    "legacy": [24.9383791,60.16985569999999],
    "name": "The Rasmus"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/cf91f78df3f948d18995295ef14db412.webp",
    "location": "Glendale, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/7ou4oSEDh1AWwIUmlIz5WD",
    "legacy": [-118.255075,34.1425078],
    "name": "Go Betty Go"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/0c6bdcf51be941d1ae790664ba608d1c.webp",
    "location": "Albany, Albany County, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/38SIMA9z2a7ATlRVenIcHc",
    "legacy": [-73.7562317,42.6525793],
    "name": "Limp Wrist"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/f12ef851494a4c2d8936c75866b8f632.webp",
    "location": "Berlin, Germany",
    "spotifyurl": "https://open.spotify.com/artist/1TK9teM1JNeujWUjpQR7Fh",
    "legacy": [13.404954,52.52000659999999],
    "name": "Die Skeptiker"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/653e5b736aa14e11ce54fcf13c134240.webp",
    "location": "Columbia, Lexington County, South Carolina, United States",
    "spotifyurl": "null",
    "legacy": [-81.0739825,33.9934867],
    "name": "Antischism"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/afde2dba03c24c69972837d6f68aef96.webp",
    "location": "Wien, Austria",
    "spotifyurl": "https://open.spotify.com/artist/5RD9WnUcx9pzMMTJUBrYky",
    "legacy": [16.3738189,48.2081743],
    "name": "3 Feet Smaller"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/19383eee7f924c2f95082dc48f662c46.webp",
    "location": "Sacramento, Sacramento County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/46PqexcuFAphFVDvw3V2BZ",
    "legacy": [-121.4943996,38.5815719],
    "name": "Groovie Ghoulies"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/67c44fbb1eaa431f8ffdee279357490f.webp",
    "location": "Basildon, Essex, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/762310PdDnwsDxAQxzQkfX",
    "legacy": [0.488736,51.57608399999999],
    "name": "Depeche Mode"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a60c485118064983bd48a3992f98d6d4.webp",
    "location": "Detroit, Wayne County, Michigan, United States",
    "spotifyurl": "https://open.spotify.com/artist/5SlxIxRqgFVFeSfpG6SHdf",
    "legacy": [-83.0457538,42.331427],
    "name": "Koffin Kats"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/55492fc611564e3dbc1bf5bca12349f3.webp",
    "location": "Crawley, West Sussex, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/7bu3H8JO7d0UbMoVzbo70s",
    "legacy": [-0.1872275,51.1091401],
    "name": "The Cure"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/1021d5ce48e3d99b7259f8cdd69cb77c.webp",
    "location": "New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/2x9SpqnPi8rlE9pjHBwmSC",
    "legacy": [-74.0059728,40.7127753],
    "name": "Talking Heads"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/1745d28b0e9949918731d54dd853dfcc.webp",
    "location": "Middlesbrough, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/3UbyYnvNIT5DFXU4WgiGpP",
    "legacy": [-1.234956,54.574227],
    "name": "Whitesnake"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/7688f9d84cb94770a73bd3bc369e4b3e.webp",
    "location": "Pasadena, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/2cnMpRsOVqtPMfq7YiFE6K",
    "legacy": [-118.1445155,34.1477849],
    "name": "Van Halen"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/32a6a9b355e247f1a2761239d918a0ef.webp",
    "location": "Davyhulme, Trafford, Greater Manchester, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/3iTsJGG39nMg9YiolUgLMQ",
    "legacy": [-2.369664,53.4532519],
    "name": "Morrissey"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/36f1028759d9c179c7c0429ce1c11a1d.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/3iUjRVvYCsMfz7tuAQtBDI",
    "legacy": [-0.1277583,51.5073509],
    "name": "Ultravox"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/8130e8ee3522de24c2e97587a6f953e4.webp",
    "location": "Hammersmith, Hammersmith and Fulham, London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/5KQMtyPE8DCQNUzoNqlEsE",
    "legacy": [-0.223731,51.491187],
    "name": "Gary Numan"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a8658c1476094e86cea80d4e1702253e.webp",
    "location": "Liverpool, Merseyside, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/0uAjBatvB4ubpd4kCfjmNt",
    "legacy": [-2.9915726,53.4083714],
    "name": "A Flock of Seagulls"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/82f13b6f6bb34ef78fb3260b113bd660.webp",
    "location": "Guildford, Surrey, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/0RUEHcBiENFEqxgicqS2ig",
    "legacy": [-0.570409,51.23622],
    "name": "The Stranglers"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ec607a2794aa4b21a05f76b1702e4f16.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/0k17h0D3J5VfsdmQ1iZtE9",
    "legacy": [-0.1277583,51.5073509],
    "name": "Pink Floyd"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/0421bea8b68f407fb6909da62efc6b84.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/1Fmb52lZ6Jv7FMWXXTPO3K",
    "legacy": [-118.2436596,34.0522265],
    "name": "Joan Jett and the Blackhearts"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b3f05e57aba6413a81cf0e7bbcbaca80.webp",
    "location": "Chicago, Cook County, Illinois, United States",
    "spotifyurl": "https://open.spotify.com/artist/0grdhNhiRLFBaFVyybqsj6",
    "legacy": [-87.6297982,41.8781136],
    "name": "Richard Marx"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/7b3ee793cb0b4c0bcc2ccb23d5ea7a37.webp",
    "location": "Zurich, Zrich, Switzerland",
    "spotifyurl": "https://open.spotify.com/artist/3zxKH0qp3nBCuPZCZT5Vaf",
    "legacy": [8.541694,47.3768866],
    "name": "Yello"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/e1a86efe4ac741fec19f589cef35d247.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/3cniTumSiUysiPWXapGx1i",
    "legacy": [-0.1277583,51.5073509],
    "name": "Cutting Crew"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/27cb787fdc43147333a9c6d0401c5510.webp",
    "location": "Phoenix, Maricopa County, Arizona, United States",
    "spotifyurl": "https://open.spotify.com/artist/7crPfGd2k81ekOoSqQKWWz",
    "legacy": [-112.0740373,33.4483771],
    "name": "Stevie Nicks"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b8db2a8d83fc412fc15e00378b121e87.webp",
    "location": "Leighton Buzzard, Central Bedfordshire, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/0f3kLT4wvi2mFHlHJgV8Hl",
    "legacy": [-0.6606569999999999,51.9196839],
    "name": "Kajagoogoo"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/88165303b92645ba9f594592e7c6d663.webp",
    "location": "Lincoln Park, Wayne County, Michigan, United States",
    "spotifyurl": "https://open.spotify.com/artist/485uL27bPomh29R4JmQehQ",
    "legacy": [-83.1785361,42.2505943],
    "name": "Bob Seger"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/fba4d6687bc14cfd9ef8c68ec767ed8d.webp",
    "location": "Billericay, Essex, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/0s0rOb0gT2S9N0SDcjtPC4",
    "legacy": [0.418397,51.627903],
    "name": "Alison Moyet"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b333d3bcae1c408ca70dcc84671943f4.webp",
    "location": "Birmingham, West Midlands, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/4QTVePrFu1xuGM9K0kNXkk",
    "legacy": [-1.890401,52.48624299999999],
    "name": "Dexys Midnight Runners"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/92550fa5bd874f5e850e214640cd39ef.webp",
    "location": "Hertford, Hertfordshire, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/568ZhdwyaiCyOGJRtNYhWf",
    "legacy": [-0.08115699999999999,51.795756],
    "name": "Deep Purple"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/e6bd461a9b5b41e8c18ae0543f9196ba.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/5PN2aHIvLEM98XIorsPMhE",
    "legacy": [-118.2436596,34.0522265],
    "name": "Kim Carnes"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/60712bcbe2c14ec18978e45adfb0da34.webp",
    "location": "Malibu, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/2hO4YtXUFJiUYS2uYFvHNK",
    "legacy": [-118.7797571,34.0259216],
    "name": "Traveling Wilburys"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d554d11ea57946ea9217d7c93545d97f.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/3LtBdgNHdH0Ix8hCFZ4NJG",
    "legacy": [-0.1277583,51.5073509],
    "name": "Blancmange"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/7f2eb2139e4b401f9210c48eddab5f39.webp",
    "location": "Aylesbury, Buckinghamshire, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/7ai5TWiOG8g9Hds5AATS28",
    "legacy": [-0.8084,51.815606],
    "name": "Marillion"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5a96091683f44df3be09fe718ee07ea4.webp",
    "location": "Dunfermline, Fife, Scotland, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/1h8YIw9HLr6E8gdXVDRbVJ",
    "legacy": [-3.452151,56.071741],
    "name": "Big Country"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/e3c4cbf9fabd4d7ea7c25ab1c33476ae.webp",
    "location": "Minneapolis, Hennepin County, Minnesota, United States",
    "spotifyurl": "https://open.spotify.com/artist/6bJUzb3mLEYCkTAp7eNJgO",
    "legacy": [-93.2650108,44.977753],
    "name": "Information Society"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/0b5fb6d84f844aedaaf3eaa09c26c461.webp",
    "location": "Redcliffe, Queensland, Australia",
    "spotifyurl": "https://open.spotify.com/artist/1LZEQNv7sE11VDY3SdxQeN",
    "legacy": [153.1063,-27.2258],
    "name": "Bee Gees"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/9b6e91149bdb4bf6ab2310fae5d09744.webp",
    "location": "Paris, le-de-France, France",
    "spotifyurl": "https://open.spotify.com/artist/1yjAx9cww4f1QuAaN3dUI2",
    "legacy": [2.3522219,48.856614],
    "name": "Desireless"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c4eac89b6f214dd9ba515bdfe87de171.webp",
    "location": "Dublin, County Dublin, Leinster, Ireland",
    "spotifyurl": "https://open.spotify.com/artist/3G3Gdm0ZRAOxLrbyjfhii5",
    "legacy": [-6.2603097,53.3498053],
    "name": "My Bloody Valentine"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3ecf02dc7ee242b3c2a662b8e76844dd.webp",
    "location": "Pemberton, Wigan, Greater Manchester, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/7LTzUnZaptYfAFmvqW5M6D",
    "legacy": [-2.6774101,53.5350097],
    "name": "Limahl"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/670c77c0d0054449978b33d1970fbc77.webp",
    "location": "Muskegon, Muskegon County, Michigan, United States",
    "spotifyurl": "https://open.spotify.com/artist/33EUXrFKGjpUSGacqEHhU4",
    "legacy": [-86.24839209999999,43.2341813],
    "name": "Iggy Pop"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/09e94fbbefbc4e53a6a4b14ab23d206e.webp",
    "location": "St. Louis, Missouri, United States",
    "spotifyurl": "https://open.spotify.com/artist/24hJWbo98sH84tb0nkeaqy",
    "legacy": [-90.19940419999999,38.6270025],
    "name": "Michael McDonald"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ceb986e3184989759ec0b8e2331fa8c3.webp",
    "location": "Minneapolis, Hennepin County, Minnesota, United States",
    "spotifyurl": "https://open.spotify.com/artist/0lwRI7lvmlRY5DiA5Xa6wQ",
    "legacy": [-93.2650108,44.977753],
    "name": "Lipps, Inc."
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a3bdf4c6c94548978563a3074dd9480d.webp",
    "location": "Yekaterinburg, Sverdlovskaya oblast', Russian Federation",
    "spotifyurl": "https://open.spotify.com/artist/3tYzkTZtYt5dGBSrAnWpX0",
    "legacy": [60.64540859999999,56.8430993],
    "name": "Nautilus Pompilius"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/69d49e9901804970c9543ed13b9850a3.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/6zPcUezmkw9aGjoRlBxYxw",
    "legacy": [-118.2436596,34.0522265],
    "name": "Wall of Voodoo"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/9c7a817bbe9041dbb680d30571f5b6ce.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/0ECwFtbIWEVNwjlrfc6xoL",
    "legacy": [-118.2436596,34.0522265],
    "name": "Eagles"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/4170fcaa51ee456f86223547dbd6a353.webp",
    "location": "Boston, Suffolk County, Massachusetts, United States",
    "spotifyurl": "https://open.spotify.com/artist/6w7j5wQ5AI5OQYlcM15s2L",
    "legacy": [-71.0588801,42.3600825],
    "name": "Extreme"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b61ce5409ff647e5a4f6502eb08c87e5.webp",
    "location": "Bern, Bern, Switzerland",
    "spotifyurl": "https://open.spotify.com/artist/2oNZUW4sR0AGXRyPExtFnW",
    "legacy": [7.4474468,46.9479739],
    "name": "Grauzone"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/229643bb70cdd822bdc6be751a30b380.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/1JVoO5bwfU8GNuAZLpBoHe",
    "legacy": [-0.1277583,51.5073509],
    "name": "The Dream Academy"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/cec601d3c0e94d2ca20863feaf21a357.webp",
    "location": "Belfast, County Down, Northern Ireland, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/23wr9RJZg0PmYvVFyNkQ4j",
    "legacy": [-5.715766700000001,54.32769870000001],
    "name": "Gary Moore"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/e479bf324509440bc495f39ec234c123.webp",
    "location": "Boston, Suffolk County, Massachusetts, United States",
    "spotifyurl": "https://open.spotify.com/artist/5UMQV83wwZCCvRSQCVjZw6",
    "legacy": [-71.0588801,42.3600825],
    "name": "Mission of Burma"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/667d21a9419c45a6c5d61bc0ac08241f.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/2wzMOQwNT6ZvVB4amvhFAH",
    "legacy": [-0.1277583,51.5073509],
    "name": "The Pogues"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/60c5dbe219b94ee49df166109020813b.webp",
    "location": "Paris, le-de-France, France",
    "spotifyurl": "https://open.spotify.com/artist/7CdlYgtOoxBtNjuDeIxSPM",
    "legacy": [2.3522219,48.856614],
    "name": "Les Rita Mitsouko"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/e99e381400854832a57743ec75eb28fe.webp",
    "location": "Worksop, Nottinghamshire, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/3Z1tibPKhUYWCno0IYicCN",
    "legacy": [-1.122745,53.309302],
    "name": "John Parr"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/58c86ac1134b4744b02f0a2b66fbd0f0.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/6TR7TYiDiS5okigndyMIpK",
    "legacy": [-0.1277583,51.5073509],
    "name": "The Monochrome Set"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/087b077910ba5d5ca820d6867771261b.webp",
    "location": "Kew Gardens Hills, Queens, New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/70cRZdQywnSFp9pnc2WTCE",
    "legacy": [-73.8207618,40.724707],
    "name": "Simon & Garfunkel"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/e3aff2009ccb4466b4c8b29126612da3.webp",
    "location": "Carteret, Middlesex County, New Jersey, United States",
    "spotifyurl": "https://open.spotify.com/artist/06KgaEpSluofkcChSo7TNr",
    "legacy": [-74.2282005,40.5773266],
    "name": "The Smithereens"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3a2802d6b779431f92a705f5c5225d41.webp",
    "location": "Lihue, Kauai County, Hawaii, United States",
    "spotifyurl": "https://open.spotify.com/artist/0bByarMN8ryEFQsRo6iCUN",
    "legacy": [-159.3711111,21.9811111],
    "name": "Glenn Medeiros"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/af229a76867d4ef2bdf2acd7b1cc1682.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/5JEhWD9S2znCiQRiGj2OUk",
    "legacy": [-0.1277583,51.5073509],
    "name": "The Lords of the New Church"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/280e16bbba3d43f9996fa5739c4c8733.webp",
    "location": "Port of Spain, Trinidad, Trinidad and Tobago",
    "spotifyurl": "https://open.spotify.com/artist/0Suv0tRrNrUlRzAy8aXjma",
    "legacy": [-61.5085625,10.6603196],
    "name": "Haddaway"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d94f61c92c6d48c5a2276f6fd4741304.webp",
    "location": "Bradford, West Yorkshire, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/0sD8Amms4kSxs5tBV4CUmR",
    "legacy": [-1.759398,53.795984],
    "name": "Smokie"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/6abe8554cd5340a0c0ed3d4e32e818f9.webp",
    "location": "Luton, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/6w6z8m4WXX7Tub4Rb6Lu7R",
    "legacy": [-0.4200255,51.8786707],
    "name": "Jethro Tull"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/1a4e10b425444434b2a0c7998232b646.webp",
    "location": "Liverpool, Merseyside, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/4Tvos0a5rRrBu4Oodu5f79",
    "legacy": [-2.9915726,53.4083714],
    "name": "Julian Lennon"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/bb6d4f51906d4e69afa680709b6690b5.webp",
    "location": "Genoa, Genova, Liguria, Italy",
    "spotifyurl": "https://open.spotify.com/artist/5BwOOeKayeMZXa5SSaiRxv",
    "legacy": [8.946256,44.4056499],
    "name": "Ricchi e poveri"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d9e9c773b78e46c3a1f66b2b477591d9.webp",
    "location": "Bahia, Brazil",
    "spotifyurl": "https://open.spotify.com/artist/6kJHpEjr5eNnVJeyfTbs3G",
    "legacy": [-41.7007272,-12.579738],
    "name": "Camisa de Vnus"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/9b90a6c2c51d4f85b7392b9364439fa0.webp",
    "location": "Hawthorne, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/3oDbviiivRWhXwIE8hxkVV",
    "legacy": [-118.3525748,33.9164032],
    "name": "The Beach Boys"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b33cd759074f2be81badf6efdb7bf43f.webp",
    "location": "Anaheim, Orange County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/0cQbJU1aAzvbEmTuljWLlF",
    "legacy": [-117.9143012,33.8365932],
    "name": "No Doubt"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/276c5eee438d461287f47b8d7260e78a.webp",
    "location": "Toshkent, Uzbekistan",
    "spotifyurl": "null",
    "legacy": [69.2400734,41.2994958],
    "name": " "
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c1464229449369e2ad924aa5334c1e62.webp",
    "location": "Tehran, Tehrn, Iran, Islamic Republic of",
    "spotifyurl": "https://open.spotify.com/artist/5MraexJKZDrQYzS98kNwie",
    "legacy": [51.3889736,35.6891975],
    "name": "Sevdaliza"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b62741bfb7af460f84350c275b62dd8d.webp",
    "location": "Voronezh, Voronezhskaya oblast', Russian Federation",
    "spotifyurl": "null",
    "legacy": [39.19192880000001,51.6683487],
    "name": " "
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/77bc84475f9e46ac96060801f2088619.webp",
    "location": "Brooklyn, New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/0tUERnHmr1tKp2pSwPLN8b",
    "legacy": [-73.9441579,40.6781784],
    "name": "Robin Beck"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/4492498acf8340e1bdcc7b6c6cb18bf7.webp",
    "location": "Washington, D.C., United States",
    "spotifyurl": "https://open.spotify.com/artist/7GPNaPWw3STF8NYp39pd8G",
    "legacy": [-77.0368707,38.9071923],
    "name": "Amii Stewart"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/00f4670745044bde9572f973fb3a8950.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/2iVoDxX4iDDXYr2WbMucaw",
    "legacy": [-0.1277583,51.5073509],
    "name": "New Musik"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/8c7b0cc7fe3746adb622f014a492958b.webp",
    "location": "Palisades, Orangetown, Rockland County, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/14cTO4S2dPhz4XuVEMMX3v",
    "legacy": [-73.9132927,41.0113078],
    "name": "Amy Holland"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c9ed423136a7405e8864b82fcf7ba3bf.webp",
    "location": "Oconomowoc, Waukesha County, Wisconsin, United States",
    "spotifyurl": "https://open.spotify.com/artist/3IXBujNySf3RBaGjDI8dqm",
    "legacy": [-88.4992659,43.1116731],
    "name": "Jane Wiedlin"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/40fe4388e73648268ffd6f9f3ddd3882.webp",
    "location": "Westbury, North Hempstead, Nassau County, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/2yzxX2DI9LFK8VFTyW2zZ8",
    "legacy": [-73.5876273,40.7556561],
    "name": "Joe Satriani"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/05b3040cfa664fdb92cd6ec9173ab1c8.webp",
    "location": "Gttingen, Niedersachsen, Germany",
    "spotifyurl": "https://open.spotify.com/artist/5tG5dl5mS2wB5w72YBpsyg",
    "legacy": [9.915803499999999,51.54128040000001],
    "name": "Herbert Grnemeyer"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/72bacf13c071434793c53cd0f1395a52.webp",
    "location": "Monkstown, County Dublin, Leinster, Ireland",
    "spotifyurl": "https://open.spotify.com/artist/2szQRWh2F0RUs9bkbepwok",
    "legacy": [-6.153956,53.2937046],
    "name": "Hothouse Flowers"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/fbca141c5b0747ad99b2926c642478d0.webp",
    "location": "Munich, Bayern, Germany",
    "spotifyurl": "https://open.spotify.com/artist/1g1nVvle9qO9AWIUWYvPAP",
    "legacy": [11.5819805,48.1351253],
    "name": "Dschinghis Khan"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/9fd718d4c80e4ac89107c6c0bb908440.webp",
    "location": "Paris, le-de-France, France",
    "spotifyurl": "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi",
    "legacy": [2.3522219,48.856614],
    "name": "Daft Punk"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/e5b29916be1359ccc7ee0d4eb7d4d1a0.webp",
    "location": "New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/066X20Nz7iquqkkCW6Jxy6",
    "legacy": [-74.0059728,40.7127753],
    "name": "LCD Soundsystem"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/0d3e8724d33a4da2db0bcc5676f071f5.webp",
    "location": "Manhattan, New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/1HY2Jd0NmPuamShAr6KMms",
    "legacy": [-73.9712488,40.7830603],
    "name": "Lady Gaga"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/afc8bd3836054625845aa1fa71c86813.webp",
    "location": "New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/3Y10boYzeuFCJ4Qgp53w6o",
    "legacy": [-74.0059728,40.7127753],
    "name": "Scissor Sisters"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/304367ac78d44e959f30d1cd893ed44b.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/5MO2kbaGGA2a8kL4c9qqHq",
    "legacy": [-0.1277583,51.5073509],
    "name": "Paul Oakenfold"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/2952fe3f2a2f2f2110220725c2a60333.webp",
    "location": "Wandsworth, London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/3iOvXCl6edW5Um0fXEBRXy",
    "legacy": [-0.1896638,51.45682739999999],
    "name": "The xx"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/e10a4d911efd528abdb45504a9c3f054.webp",
    "location": "Tessenderlo, Limburg, Flanders, Belgium",
    "spotifyurl": "https://open.spotify.com/artist/47BNWfpngeFHYvBlPPyraM",
    "legacy": [5.0881938,51.0642666],
    "name": "Kate Ryan"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/4350717a5ade456485056ccaa7475a7a.webp",
    "location": "Broadford, Skye, Highland, Scotland, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/5YjEVrNMrIRw2xGbjTN6Ti",
    "legacy": [-5.9096592,57.24139169999999],
    "name": "Mylo"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/59eb7b98dc6ec0c59add70a9cb8cd7db.webp",
    "location": "Chelsea, Kensington and Chelsea, London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/2ycnb8Er79LoH2AsR5ldjh",
    "legacy": [-0.170037,51.4869429],
    "name": "Pet Shop Boys"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/03707c7027ea83af85c1c98c135ea830.webp",
    "location": "Melbourne, Victoria, Australia",
    "spotifyurl": "https://open.spotify.com/artist/6XCS9JCn56Q252cMOTbeq6",
    "legacy": [144.9630576,-37.8136276],
    "name": "Dannii Minogue"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b1cb5257d113cf2f62031c3dc2c76f98.webp",
    "location": "Paris, le-de-France, France",
    "spotifyurl": "https://open.spotify.com/artist/0AkpPlFLnr0VQwZQeMGht0",
    "legacy": [2.3522219,48.856614],
    "name": "Modjo"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5b2def9c3ffaacf1ab9f9d95f9afa6ab.webp",
    "location": "Brussels, Belgium",
    "spotifyurl": "https://open.spotify.com/artist/5j4HeCoUlzhfWtjAfM1acR",
    "legacy": [4.3517103,50.8503396],
    "name": "Stromae"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/31e6740ce5514de79d67bbd938fd2828.webp",
    "location": "Frankfurt am Main, Hessen, Germany",
    "spotifyurl": "https://open.spotify.com/artist/488v7rQzthLNK22r0UvMie",
    "legacy": [8.6821267,50.1109221],
    "name": "La Bouche"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b51126b92d06d711b9c6641fff9fef92.webp",
    "location": "Essex, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ",
    "legacy": [0.4856781,51.57424469999999],
    "name": "Gorillaz"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/6bba540b8ad84eda976cf9b95a5d27bc.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/2IkHcHKErbWa0TA14yHkbl",
    "legacy": [-0.1277583,51.5073509],
    "name": "Dirty Vegas"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/669bbbcf2e49413a92e15b8346efbdc5.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/3kdrMtLybQIl93rXJlvF3w",
    "legacy": [-0.1277583,51.5073509],
    "name": "New Young Pony Club"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d79df38b2959476fb980c03cd4dcbaea.webp",
    "location": "Brooklyn, New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/7gHscNMDI8FF8pcgrV8eIn",
    "legacy": [-73.9441579,40.6781784],
    "name": "Matt & Kim"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/1ad46338be064871b922df87974ba713.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/0z5DFXmhT4ZNzWElsM7V89",
    "legacy": [-0.1277583,51.5073509],
    "name": "Erasure"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5d4776d770774308974f2f1a4f69d7c4.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/0aTdKgInKeMlNnwWSa1YPT",
    "legacy": [-0.1277583,51.5073509],
    "name": "OceanLab"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/8552ad56be02a1b59d0e795c5eedecd8.webp",
    "location": "Newark, Essex County, New Jersey, United States",
    "spotifyurl": "https://open.spotify.com/artist/6XpaIBNiVzIetEPCWDvAFP",
    "legacy": [-74.1723667,40.735657],
    "name": "Whitney Houston"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/234ae8045a234c1994cb93aed547ee70.webp",
    "location": "Grenoble, Isre, Auvergne-Rhne-Alpes, France",
    "spotifyurl": "https://open.spotify.com/artist/3QhNv79NoIvarU6N57GBzL",
    "legacy": [5.724524,45.188529],
    "name": "Miss Kittin & The Hacker"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/0c3c2d7404604e9f93fae75c55d946d0.webp",
    "location": "New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/6w9ED7WnjSscMaY2RCVOHh",
    "legacy": [-74.0059728,40.7127753],
    "name": "Shy Child"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/12f3f74c1faa44ef9c4342ff3da01c61.webp",
    "location": "Kingston, Jamaica",
    "spotifyurl": "https://open.spotify.com/artist/3Isy6kedDrgPYoTS1dazA9",
    "legacy": [-76.8099041,18.0178743],
    "name": "Sean Paul"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/92d31e58e6e227351c53554811bf7c3b.webp",
    "location": "Stockholm, Stockholm municipality, Stockholms ln, Sweden",
    "spotifyurl": "https://open.spotify.com/artist/0EodhzA6yW1bIdD5B4tcmJ",
    "legacy": [17.9672428,59.31706999999999],
    "name": "Darin"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/84eafb42d4ca4bb8ef25e152b780b9e1.webp",
    "location": "Ciudad de Mxico, Mexico",
    "spotifyurl": "https://open.spotify.com/artist/1d6dwipPrsFSJVmFTTdFSS",
    "legacy": [-99.133208,19.4326077],
    "name": "Paulina Rubio"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/71476bd59f4c707b273e65369e85ecde.webp",
    "location": "Dallas, Dallas County, Texas, United States",
    "spotifyurl": "https://open.spotify.com/artist/23zg3TcAtWQy7J6upgbUnj",
    "legacy": [-96.79698789999999,32.7766642],
    "name": "Usher"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c095b3f072b44ce8b1cc6bff4ea1a45e.webp",
    "location": "Havre de Grace, Harford County, Maryland, United States",
    "spotifyurl": "https://open.spotify.com/artist/1cK2Abwkni7m51wJCSGllN",
    "legacy": [-76.09161700000001,39.5492792],
    "name": "Ultra Nat"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/602de2b81f2e421dc2fd14218746391b.webp",
    "location": "New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/2n6FviARgtjjimZXu18uRM",
    "legacy": [-74.0059728,40.7127753],
    "name": "Le Tigre"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/2cf3f4b5b9f44d36b850bd9e39a69d14.webp",
    "location": "Leigh-on-Sea, Essex, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/2uhEmRPgI5Ppg2T3o8VP31",
    "legacy": [0.6535069,51.5423959],
    "name": "Tina Cousins"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b55943107ba14e3289380d679f1a1f21.webp",
    "location": "Austin, Travis County, Texas, United States",
    "spotifyurl": "https://open.spotify.com/artist/2waNUwuthEgcBTFvYo26vo",
    "legacy": [-97.7430608,30.267153],
    "name": "Ghostland Observatory"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/db5823d34e1e5781d478d414c9e69eba.webp",
    "location": "Paris, le-de-France, France",
    "spotifyurl": "https://open.spotify.com/artist/1LsXqDdYVyONhrjAORENbu",
    "legacy": [2.3522219,48.856614],
    "name": "Kaoma"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/855fcf6dd0c65d889ca62fac5a3e1726.webp",
    "location": "Neuilly-sur-Seine, Hauts-de-Seine, le-de-France, France",
    "spotifyurl": "https://open.spotify.com/artist/2LTa2TleomBhi05k8khxCF",
    "legacy": [2.26851,48.884831],
    "name": "Antoine Clamaran"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ae52d0bfcfa8478cba8b63e7c94b8b18.webp",
    "location": "Haifa, Hefa, Israel",
    "spotifyurl": "https://open.spotify.com/artist/6S2tas4z6DyIklBajDqJxI",
    "legacy": [34.989571,32.7940463],
    "name": "Infected Mushroom"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/377b67b0f02f4fbfa8bc50d2b824445c.webp",
    "location": "Chicago, Cook County, Illinois, United States",
    "spotifyurl": "https://open.spotify.com/artist/4QQgXkCYTt3BlENzhyNETg",
    "legacy": [-87.6297982,41.8781136],
    "name": "Earth, Wind & Fire"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/61644b05696d478f85657196f8d9dd80.webp",
    "location": "Glasgow, Scotland, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/1gnKXnSL1BgGCTIrV3d4iq",
    "legacy": [-4.251806,55.864237],
    "name": "Shitdisco"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/60a94fa20dc25828ab9f851ea039b8b2.webp",
    "location": "Croydon, London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/1N2FgBLehaq77UEdJhCt7f",
    "legacy": [-0.098234,51.376165],
    "name": "Saint Etienne"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/0f1698a938c64705a697873de68128d6.webp",
    "location": "Mnster, Nordrhein-Westfalen, Germany",
    "spotifyurl": "https://open.spotify.com/artist/0bIvvfPnM3YeHeORD57sAE",
    "legacy": [7.6261347,51.9606649],
    "name": "WestBam"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3c6b6931a9fe4fd4824ba4cc6764f18a.webp",
    "location": "Liding municipality, Stockholms ln, Sweden",
    "spotifyurl": "https://open.spotify.com/artist/5a2Kj8Jq5yZV1GxUKqCRdK",
    "legacy": [18.1468001,59.36295999999999],
    "name": "Antiloop"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/72a712c0c0604ba4cba007e2204fa1ea.webp",
    "location": "Tower Hamlets, London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/0ym94xKp2PIOJtTZKpxbAa",
    "legacy": [-0.0293396,51.52026069999999],
    "name": "Samantha Fox"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/234eac6284c772314d6b88d193e33653.webp",
    "location": "Columbia, Lexington County, South Carolina, United States",
    "spotifyurl": "https://open.spotify.com/artist/5LmYIx9kSWBJOWbP4xAxb1",
    "legacy": [-81.0739825,33.9934867],
    "name": "Alexis Jordan"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/9931440475ef43d1a57da1971d6a91e4.webp",
    "location": "Aarhus, Aarhus Municipality, Central Denmark Region, Denmark",
    "spotifyurl": "null",
    "legacy": [10.203921,56.162939],
    "name": "Ida Corr Vs Fedde Le Grand"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/2c5abab62033d01261cb103662813877.webp",
    "location": "Searcy, White County, Arkansas, United States",
    "spotifyurl": "https://open.spotify.com/artist/7y8lzaGqtadGmtAtg2SGv4",
    "legacy": [-91.73368459999999,35.2468204],
    "name": "Beth Ditto"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b0912dcf86e0491caa560a88edf33bd2.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/2tJIQxQM0X4lCYERyANSdT",
    "legacy": [-0.1277583,51.5073509],
    "name": "Kirsty Hawkshaw"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/2f0335a6f0abf7e4e97dbfb455aa8954.webp",
    "location": "Stockholm, Stockholm municipality, Stockholms ln, Sweden",
    "spotifyurl": "https://open.spotify.com/artist/423xb5WEuRw4wxGWa7N7Xt",
    "legacy": [17.9672428,59.31706999999999],
    "name": "Marie Serneholt"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/9f5c93b7e3a249789a79c0783fef8737.webp",
    "location": "Delft, Zuid-Holland, Netherlands",
    "spotifyurl": "https://open.spotify.com/artist/3CfH3WZPzbk5mNDWXpGIy6",
    "legacy": [4.3570677,52.01157689999999],
    "name": "Sander Kleinenberg"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/698ae6e21d6a445892631d5e3b818e36.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/5aj3LEYRbuaabjjHkj5oE1",
    "legacy": [-0.1277583,51.5073509],
    "name": "Death in Vegas"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/e7b227fb1b87473086ffad6579811917.webp",
    "location": "Beograd, Serbia",
    "spotifyurl": "https://open.spotify.com/artist/1bpzpALZwOoKXzwMg2i8WB",
    "legacy": [20.4489216,44.786568],
    "name": "Dirty South"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/7d4b8a7388104e95bb206f6226f08cd7.webp",
    "location": "Tel Aviv, Tel-Aviv, Israel",
    "spotifyurl": "https://open.spotify.com/artist/03IVYRlAC972SOHPb86Usr",
    "legacy": [34.78176759999999,32.0852999],
    "name": "Dana International"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/eca6f4ae60c63ddb8433ffa8c62aa211.webp",
    "location": "Ajaccio, Corse-du-Sud, Corse, France",
    "spotifyurl": "https://open.spotify.com/artist/53deL58uye6fCqRK4COtR4",
    "legacy": [8.738635,41.919229],
    "name": "Alize"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/550cb82d3b7dc8367fefb49d93860ced.webp",
    "location": "Breda, Breda, Noord-Brabant, Netherlands",
    "spotifyurl": "https://open.spotify.com/artist/6BrvowZBreEkXzJQMpL174",
    "legacy": [4.768323,51.5719149],
    "name": "Hardwell"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/85c4f894d3a2441585911724e89be66b.webp",
    "location": "Milan, Milano, Lombardia, Italy",
    "spotifyurl": "https://open.spotify.com/artist/2A0sY7UDhv5v4hjvrhTlya",
    "legacy": [9.189982,45.4642035],
    "name": "Ron van den Beuken"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/e04a63e5bc7542d6c232880dabe8f2c1.webp",
    "location": "Seoul, Korea, Republic of",
    "spotifyurl": "https://open.spotify.com/artist/1loWI8jVk9btgJXHgqHXPD",
    "legacy": [126.9779692,37.566535],
    "name": "After School"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5961b8b5e03c471a8e6d14ead0bb7dee.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/6CwQfN34JdGHfo0A752Lts",
    "legacy": [-0.1277583,51.5073509],
    "name": "David Morales"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/78c4ea0bb9de4586ac424596ba6f949e.webp",
    "location": "Edmonds, Snohomish County, Washington, United States",
    "spotifyurl": "https://open.spotify.com/artist/0ydZ40cufQqm2BqSw80PRP",
    "legacy": [-122.3773551,47.8106521],
    "name": "Danger Radio"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/2597932061984ef7bbae02e1c7c20ddc.webp",
    "location": "Antwerp, Antwerpen, Flanders, Belgium",
    "spotifyurl": "https://open.spotify.com/artist/2MMXs21RASEwAmU7gRheQ0",
    "legacy": [4.402461499999999,51.2194496],
    "name": "Arsenal"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/2597932061984ef7bbae02e1c7c20ddc.webp",
    "location": "Antwerp, Antwerpen, Flanders, Belgium",
    "spotifyurl": "https://open.spotify.com/artist/2MMXs21RASEwAmU7gRheQ0",
    "legacy": [4.402461499999999,51.2194496],
    "name": "Arsenal"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/2597932061984ef7bbae02e1c7c20ddc.webp",
    "location": "Antwerp, Antwerpen, Flanders, Belgium",
    "spotifyurl": "https://open.spotify.com/artist/2MMXs21RASEwAmU7gRheQ0",
    "legacy": [4.402461499999999,51.2194496],
    "name": "Arsenal"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/f5c67f5941e78a99370f794d3b0970b8.webp",
    "location": "Hauula, Honolulu County, Hawaii, United States",
    "spotifyurl": "https://open.spotify.com/artist/3GBPw9NK25X1Wt2OUvOwY3",
    "legacy": [-157.9225549,21.5918615],
    "name": "Jack Johnson"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a88c44f50f2d4fe5cf49b463924c2929.webp",
    "location": "Celbridge, County Kildare, Leinster, Ireland",
    "spotifyurl": "https://open.spotify.com/artist/14r9dR01KeBLFfylVSKCZQ",
    "legacy": [-6.538458899999999,53.339897],
    "name": "Damien Rice"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5e18ec44b5e846189ba5111f07be5c15.webp",
    "location": "Nashua, Hillsborough County, New Hampshire, United States",
    "spotifyurl": "https://open.spotify.com/artist/6DoH7ywD5BcQvjloe9OcIj",
    "legacy": [-71.46756599999999,42.7653662],
    "name": "Ray LaMontagne"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ce4f1ae954314eb0ce672b58f68b4469.webp",
    "location": "Shaker Heights, Cuyahoga County, Ohio, United States",
    "spotifyurl": "https://open.spotify.com/artist/7omzannyG2lfDqP5xyZo34",
    "legacy": [-81.5370671,41.4739419],
    "name": "Joshua Radin"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3d8dfb6746ae7d935207027c57a113fc.webp",
    "location": "Joplin, Jasper County, Missouri, United States",
    "spotifyurl": "https://open.spotify.com/artist/5pUmXBIQtqpvdV1HAy2xYC",
    "legacy": [-94.51328099999999,37.08422710000001],
    "name": "Never Shout Never"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/542b8424b5074d6d8d32855bdafb5b28.webp",
    "location": "Kharkiv, Kharkivs'ka Oblast', Ukraine",
    "spotifyurl": "null",
    "legacy": [36.230383,49.9935],
    "name": " "
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5b4bcdb9545ed40048ecb79390f890d1.webp",
    "location": "Detroit, Wayne County, Michigan, United States",
    "spotifyurl": "https://open.spotify.com/artist/4MXUO7sVCaFgFjoTI5ox5c",
    "legacy": [-83.0457538,42.331427],
    "name": "Sufjan Stevens"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/518e2a7d795076e7728db100839cacbd.webp",
    "location": "Victoria, Australia",
    "spotifyurl": "https://open.spotify.com/artist/5lbM4g6bhxjNX7R5QHP2nD",
    "legacy": [144.7851531,-37.4713077],
    "name": "Xavier Rudd"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/7ef9494a0df14e4d84787fa649b63ac8.webp",
    "location": "Sioux Falls, Minnehaha County, South Dakota, United States",
    "spotifyurl": "https://open.spotify.com/artist/4W8SeWrRZUburGZyp5JwYj",
    "legacy": [-96.731265,43.5460223],
    "name": "The Spill Canvas"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ab9ff7b4bf7d41fdc1447554033815df.webp",
    "location": "El Palomar, Buenos Aires, Argentina",
    "spotifyurl": "https://open.spotify.com/artist/4W3fa7tiXGVXl3KilbACqt",
    "legacy": [-58.5943604,-34.6266731],
    "name": "Gustavo Santaolalla"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/8364a34ecfac4131b7119776a339d669.webp",
    "location": "Moscow, Latah County, Idaho, United States",
    "spotifyurl": "https://open.spotify.com/artist/6igfLpd8s6DBBAuwebRUuo",
    "legacy": [-117.000165,46.73238749999999],
    "name": "Josh Ritter"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/118d8421cdce548dacd448383981ffde.webp",
    "location": "Atlanta, Fulton County, Georgia, United States",
    "spotifyurl": "https://open.spotify.com/artist/6G7OerKc3eBO9sVkRNopFC",
    "legacy": [-84.3879824,33.7489954],
    "name": "Cat Power"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/73da4d9bc128498cb22d9f92ca085f94.webp",
    "location": "Evanston, Cook County, Illinois, United States",
    "spotifyurl": "https://open.spotify.com/artist/0mXTJETA4XUa12MmmXxZJh",
    "legacy": [-87.68769689999999,42.0450722],
    "name": "Eddie Vedder"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/eaa462d626e84a83cae67440c4915f90.webp",
    "location": "Houston, Harris County, Texas, United States",
    "spotifyurl": "https://open.spotify.com/artist/6iU0naWn1UgiTReoiXqPXI",
    "legacy": [-95.3698028,29.7604267],
    "name": "Chuck Ragan"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/f9247a8283e30f9043b7fb2d062548ee.webp",
    "location": "Edinburgh, Scotland, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/5zzrJD2jXrE9dZ1AklRFcL",
    "legacy": [-3.188267,55.953252],
    "name": "KT Tunstall"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/cb9fa577738a4db19701aa6ae5a72f77.webp",
    "location": "Honolulu, Honolulu County, Hawaii, United States",
    "spotifyurl": "https://open.spotify.com/artist/6CQrZZn0g2ZNfIcXbi4pdo",
    "legacy": [-157.8583333,21.3069444],
    "name": "Mason Jennings"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/128af3c4a7104a818ffa88fe318f1ff7.webp",
    "location": "Livonia, Wayne County, Michigan, United States",
    "spotifyurl": "https://open.spotify.com/artist/5Tw6OSRLoU7IHTO8kHGRQr",
    "legacy": [-83.35270969999999,42.36837],
    "name": "Rosie Thomas"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/073c49b2a32b976a1e10a43094b396d3.webp",
    "location": "Ottawa, Ontario, Canada",
    "spotifyurl": "https://open.spotify.com/artist/6ogn9necmbUdCppmNnGOdi",
    "legacy": [-75.69719309999999,45.4215296],
    "name": "Alanis Morissette"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/6da8518f8c2948db8d93b4e2ce8a799a.webp",
    "location": "Texas, United States",
    "spotifyurl": "https://open.spotify.com/artist/2F3dZJv3K7T5sLthbp8vYa",
    "legacy": [-99.9018131,31.9685988],
    "name": "Jay Brannan"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/716f5ab313434cb4a3c5f095fd65f0b9.webp",
    "location": "Tacoma, Pierce County, Washington, United States",
    "spotifyurl": "https://open.spotify.com/artist/6yFbpXlBH8XHVQGjUPUvKU",
    "legacy": [-122.4442906,47.2528768],
    "name": "He Is We"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3906d977cb6948c6b85e62e73ac0573e.webp",
    "location": "Ann Arbor, Washtenaw County, Michigan, United States",
    "spotifyurl": "https://open.spotify.com/artist/6xYBLeSMu1AqPsnUzEvx5n",
    "legacy": [-83.7430378,42.2808256],
    "name": "Anya Marina"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/54d442f14d0044aea331fc59e7169d61.webp",
    "location": "Carencro, Lafayette Parish, Louisiana, United States",
    "spotifyurl": "https://open.spotify.com/artist/4cEwEednPwWCdYT7ZhROZe",
    "legacy": [-92.04900959999999,30.317144],
    "name": "Marc Broussard"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/fd3c9d629dc24a75bfe211800de1919e.webp",
    "location": "Cologne, Nordrhein-Westfalen, Germany",
    "spotifyurl": "https://open.spotify.com/artist/1AhYnfs5mzb3ennyLFXlYD",
    "legacy": [6.9602786,50.937531],
    "name": "Ottmar Liebert"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3199deba87a1be8ab2bccd905c30507f.webp",
    "location": "Sydney, New South Wales, Australia",
    "spotifyurl": "https://open.spotify.com/artist/4gZRt9wlRx1IsxT9glJdrc",
    "legacy": [151.2092955,-33.8688197],
    "name": "Julia Stone"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/21538ad4cf50405bbe3d4de6af7224a5.webp",
    "location": "Chicago, Cook County, Illinois, United States",
    "spotifyurl": "https://open.spotify.com/artist/7qVz2CTVWQynqvLaaxZXw6",
    "legacy": [-87.6297982,41.8781136],
    "name": "Matt Skiba"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/1cfee6275bfb460eb810bddc0e2ba66f.webp",
    "location": "21 August 1999 (aged 29)",
    "spotifyurl": "https://open.spotify.com/artist/7wlucFCBa4p2fyijjsCz3V",
    "legacy": [1,1],
    "name": " '"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3d4777fe02f04f6db266b0d7fe3ca3ee.webp",
    "location": "Eau Claire, Chippewa County, Wisconsin, United States",
    "spotifyurl": "https://open.spotify.com/artist/4LEiUm1SRbFMgfqnQTwUbQ",
    "legacy": [-91.4984941,44.811349],
    "name": "Bon Iver & St. Vincent"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5355258e5f4f421886fff24d3ac8ef27.webp",
    "location": "Washington, D.C., United States",
    "spotifyurl": "https://open.spotify.com/artist/4js8BDiQwnHLlDmT1shPH7",
    "legacy": [-77.0368707,38.9071923],
    "name": "John Fahey"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/0dfe3da4de904cfaa38502b2258603af.webp",
    "location": "Dunstable, Central Bedfordshire, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/244fcyNSuyhbRlMGfMbYrO",
    "legacy": [-0.52039,51.885644],
    "name": "Badly Drawn Boy"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/bb1724ee426c4e30836fef3a58fa624c.webp",
    "location": "Washington, D.C., United States",
    "spotifyurl": "https://open.spotify.com/artist/6Hizgjo92FnMp8wGaRUNTn",
    "legacy": [-77.0368707,38.9071923],
    "name": "Vertical Horizon"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ee5fd39502659612e24b075fce7ecff1.webp",
    "location": "Santa Monica, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/3X0tJzVYoWlfjLYI0Ridsw",
    "legacy": [-118.4911912,34.0194543],
    "name": "Suzanne Vega"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b71977289f0e4e508d3cb1e6e0925dc6.webp",
    "location": "Seattle, King County, Washington, United States",
    "spotifyurl": "https://open.spotify.com/artist/5dTYaRzOn4rXGBLH052EeQ",
    "legacy": [-122.3320708,47.6062095],
    "name": "A Fine Frenzy"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ba443e0430044787bd8bba4f4af4b7c9.webp",
    "location": "Eugene, Lane County, Oregon, United States",
    "spotifyurl": "https://open.spotify.com/artist/39GVRVaqlKh7JL8Yl5ZKcb",
    "legacy": [-123.0867536,44.0520691],
    "name": "Tim Hardin"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/907081e5dcbfade692028016f20d4774.webp",
    "location": "Baltimore, Maryland, United States",
    "spotifyurl": "https://open.spotify.com/artist/1bB0hKohfWkczaTMQLQdlR",
    "legacy": [-76.6121893,39.2903848],
    "name": "Robbie Basho"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/7d2aeebf6f76f03f606abb54aefd1185.webp",
    "location": "Brest, Finistre, Bretagne, France",
    "spotifyurl": "https://open.spotify.com/artist/00sazWvoTLOqg5MFwC68Um",
    "legacy": [-4.486076,48.390394],
    "name": "Yann Tiersen"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/8123da30d494425ebec285fc3401cf47.webp",
    "location": "Richmond, Virginia, United States",
    "spotifyurl": "https://open.spotify.com/artist/3UpIbyXfGzmHG6TMH4dJEk",
    "legacy": [-77.4360481,37.5407246],
    "name": "Aimee Mann"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/683bae573d264561b3fd641057ac490f.webp",
    "location": "Fort Worth, Tarrant County, Texas, United States",
    "spotifyurl": "https://open.spotify.com/artist/3ZWab2LEVkNKiBPIClTwof",
    "legacy": [-97.35165579999999,32.7732044],
    "name": "Townes Van Zandt"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c6543ce8ffccb05eb12699c52899794d.webp",
    "location": "Birmingham, Jefferson County, Alabama, United States",
    "spotifyurl": "https://open.spotify.com/artist/5IWCU0V9evBlW4gIeGY4zF",
    "legacy": [-86.8103567,33.5185892],
    "name": "Waxahatchee"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/1c9a139ef75d4707adaf4711f644cb17.webp",
    "location": "Winnipeg, Winnipeg Capital Region, Manitoba, Canada",
    "spotifyurl": "https://open.spotify.com/artist/331QVEZKK1yz5KhYiR2pBj",
    "legacy": [-97.13837439999999,49.895136],
    "name": "The Wailin' Jennys"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/30803071219f44399743db7040c4ddc7.webp",
    "location": "Searsmont, Waldo County, Maine, United States",
    "spotifyurl": "https://open.spotify.com/artist/3haVJx9TUcufYl1rPyH0iv",
    "legacy": [-69.1950411,44.3617419],
    "name": "Peter Broderick"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5322caf0365691c99902bd2ba7748844.webp",
    "location": "Leavenworth, Leavenworth County, Kansas, United States",
    "spotifyurl": "https://open.spotify.com/artist/01Ppu7N8uYJI8SAONo2YZA",
    "legacy": [-94.9224637,39.3111112],
    "name": "Melissa Etheridge"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/44e89fc57c954152a49f81870663d766.webp",
    "location": "Philadelphia, Philadelphia County, Pennsylvania, United States",
    "spotifyurl": "https://open.spotify.com/artist/3JVgWZxQa78cVa2cUuAUQ4",
    "legacy": [-75.1652215,39.9525839],
    "name": "Matt Pond PA"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/40aa173f8f634e0ca36374754fc24d61.webp",
    "location": "Manhattan, New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/70eE3MS4oHZvZVLLY2fU8B",
    "legacy": [-73.9712488,40.7830603],
    "name": "Elvis Perkins"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/bc5fc085b72c407dbfbdfb82eca6865c.webp",
    "location": "Evanston, Cook County, Illinois, United States",
    "spotifyurl": "https://open.spotify.com/artist/3wnsAakCkhyU3yKQYMZmGo",
    "legacy": [-87.68769689999999,42.0450722],
    "name": "David Ryan Harris"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ff20e9ba507f4838a6155ba18ba974b8.webp",
    "location": "Arles, Bouches-du-Rhne, Provence-Alpes-Cte-d'Azur, France",
    "spotifyurl": "https://open.spotify.com/artist/3jc496ljiyrS3ECrD7QiqL",
    "legacy": [4.6277769,43.676647],
    "name": "Gipsy Kings"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ca2356913377483da117ebba7ef9c427.webp",
    "location": "Portland, Multnomah County, Oregon, United States",
    "spotifyurl": "https://open.spotify.com/artist/3Meu28o8P5z9Zjm6NTGihT",
    "legacy": [-122.6750261,45.5051064],
    "name": "Agalloch"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/59e9d224cac24bed80099d51dcbecbe6.webp",
    "location": "New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/0HWPt04Mf5xOmv70oKdbtn",
    "legacy": [-74.0059728,40.7127753],
    "name": "David Rovics"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c9a9da0770424944ba4f0b5ed93a31b9.webp",
    "location": "Hyogo, Japan",
    "spotifyurl": "https://open.spotify.com/artist/0C9HwsaagMBxCdG43F9A0l",
    "legacy": [134.5453787,34.8579518],
    "name": "orange pekoe"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/6ad5aef3015a4cca83df1012e261fbf8.webp",
    "location": "Canberra, Australian Capital Territory, Australia",
    "spotifyurl": "https://open.spotify.com/artist/07b70bBhNviDB0PaASyOVG",
    "legacy": [149.1300092,-35.2809368],
    "name": "M. Craft"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/056a657ed5227114df14d6e62c8fd3ea.webp",
    "location": "La Habana, Cuba",
    "spotifyurl": "https://open.spotify.com/artist/11kBu957KTYoAltZHDm8gW",
    "legacy": [-82.3665956,23.1135925],
    "name": "Buena Vista Social Club"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d6ea06763dca4450932e0dea9b1f7cc7.webp",
    "location": "New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/2Icsf5D1lAs2EFx6kggg5D",
    "legacy": [-74.0059728,40.7127753],
    "name": "Jeffrey Lewis"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a04bd6c2c3354e35a30937982a8297ee.webp",
    "location": "New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/5c9uFWpZY2MTlk7Rft0tgp",
    "legacy": [-74.0059728,40.7127753],
    "name": "Janis Ian"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c66f7e917ed6bd2cb41e429cb27056d3.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/0H39MdGGX6dbnnQPt6NQkZ",
    "legacy": [-118.2436596,34.0522265],
    "name": "Spain"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/aa505fea8cd5467eb17b12e82b4a186a.webp",
    "location": "Stockholm, Stockholm municipality, Stockholms ln, Sweden",
    "spotifyurl": "https://open.spotify.com/artist/7ouftpJMgNucNyQ3uIObfw",
    "legacy": [17.9672428,59.31706999999999],
    "name": "Taxi Taxi!"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/e6dfee61e7774a17a8b0c956a74fa215.webp",
    "location": "New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/4QGC11o7gQR7MBEJ5cUMSv",
    "legacy": [-74.0059728,40.7127753],
    "name": "Mindy Smith"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/40cbbeb85e7c4006be69d07e65f7f6dd.webp",
    "location": "Colonia, Middlesex County, New Jersey, United States",
    "spotifyurl": "https://open.spotify.com/artist/2MWKhzU2iggdtLs4xLTqrP",
    "legacy": [-74.3039227,40.584867],
    "name": "John Gorka"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/8f184616503a4436a416c5a93ab0022e.webp",
    "location": "Dundalk, County Louth, Leinster, Ireland",
    "spotifyurl": "https://open.spotify.com/artist/1VbWUxZTRNY2gw3qZ1tg9W",
    "legacy": [-6.405957,53.9979451],
    "name": "The Corrs"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/297e621e28b34333b4ea43e7a12a37e3.webp",
    "location": "Toronto, Ontario, Canada",
    "spotifyurl": "https://open.spotify.com/artist/4csQIMQm6vI2A2SCVDuM2z",
    "legacy": [-79.3831843,43.653226],
    "name": "Hayden"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c27c32f4cf554b48bd75a1b4ce749209.webp",
    "location": "Greenville, Bond County, Illinois, United States",
    "spotifyurl": "https://open.spotify.com/artist/61YE3whKiuRr83j1yOm5M7",
    "legacy": [-89.41313559999999,38.8922687],
    "name": "Augustana"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/31aff3effd614aff88b73eafc86582e2.webp",
    "location": "Ipswich, Essex County, Massachusetts, United States",
    "spotifyurl": "https://open.spotify.com/artist/6t9IqIePOaGmN4dsL5qQgS",
    "legacy": [-70.8411558,42.6791832],
    "name": "Melissa Ferrick"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/797f9175202d44b7954686e8e14ef56b.webp",
    "location": "Danville, Virginia, United States",
    "spotifyurl": "https://open.spotify.com/artist/6N9hyojoLChEhlsS8vYnyr",
    "legacy": [-79.39502279999999,36.5859718],
    "name": "Tony Rice"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/27d4b4b0b6c80fda02a685aaaf56c108.webp",
    "location": "Montclair, Essex County, New Jersey, United States",
    "spotifyurl": "https://open.spotify.com/artist/3AO6RTDA16mg8czQI5Y9K0",
    "legacy": [-74.2090053,40.8259007],
    "name": "Duncan Sheik"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/1abbe3b25eb8bba21195d1db26709b08.webp",
    "location": "Saint Michael, Barbados",
    "spotifyurl": "https://open.spotify.com/artist/5pKCCKE2ajJHZ9KAiaK11H",
    "legacy": [-59.59880889999999,13.1132219],
    "name": "Rihanna"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d251c447e2704fa1ba3e2b36d911d6d5.webp",
    "location": "Saginaw, Saginaw County, Michigan, United States",
    "spotifyurl": "https://open.spotify.com/artist/7guDJrEfX3qb6FEbdPA5qi",
    "legacy": [-83.9508068,43.4194699],
    "name": "Stevie Wonder"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/54bed36869b844dfc48b8a5cd32da030.webp",
    "location": "St. Louis, Missouri, United States",
    "spotifyurl": "https://open.spotify.com/artist/0z4gvV4rjIZ9wHck67ucSV",
    "legacy": [-90.19940419999999,38.6270025],
    "name": "Akon"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/582a059e8a4d3c716bebd96fee0a7423.webp",
    "location": "New London, New London County, Connecticut, United States",
    "spotifyurl": "https://open.spotify.com/artist/27FGXRNruFoOdf1vP8dqcH",
    "legacy": [-72.0995209,41.3556539],
    "name": "Cassie"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/7e5e13b226ec41cc1714569b33c37753.webp",
    "location": "Austin, Travis County, Texas, United States",
    "spotifyurl": "https://open.spotify.com/artist/2gBjLmx6zQnFGQJCAQpRgw",
    "legacy": [-97.7430608,30.267153],
    "name": "Nelly"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/12f3f74c1faa44ef9c4342ff3da01c61.webp",
    "location": "Kingston, Jamaica",
    "spotifyurl": "https://open.spotify.com/artist/3Isy6kedDrgPYoTS1dazA9",
    "legacy": [-76.8099041,18.0178743],
    "name": "Sean Paul"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3d8f23866f7540148c7fe433f70329f5.webp",
    "location": "Lakeland, Polk County, Florida, United States",
    "spotifyurl": "https://open.spotify.com/artist/5NDMothbpdpq2xHqSjrrWn",
    "legacy": [-81.9498042,28.0394654],
    "name": "Faith Evans"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/0d22e9362511461e97300edff0d664e9.webp",
    "location": "Manhattan, New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/19y5MFBH7gohEdGwKM7QsP",
    "legacy": [-73.9712488,40.7830603],
    "name": "Luther Vandross"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/e67e9917995045819a6ce4bd44233395.webp",
    "location": "Slab Fork, Raleigh County, West Virginia, United States",
    "spotifyurl": "https://open.spotify.com/artist/1ThoqLcyIYvZn7iWbj8fsj",
    "legacy": [-81.3314915,37.6870584],
    "name": "Bill Withers"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/e6bb2bd4df5fb9907f3249b86bae2f5f.webp",
    "location": "Philadelphia, Philadelphia County, Pennsylvania, United States",
    "spotifyurl": "https://open.spotify.com/artist/7gSjFKpVmDgC2MMsnN8CYq",
    "legacy": [-75.1652215,39.9525839],
    "name": "Jazmine Sullivan"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/406ba74d4fb135098ba7518aaff5ed27.webp",
    "location": "Chicago, Cook County, Illinois, United States",
    "spotifyurl": "https://open.spotify.com/artist/6mQfAAqZGBzIfrmlZCeaYT",
    "legacy": [-87.6297982,41.8781136],
    "name": "Chaka Khan"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/581aaa102fec41ca9ffba70fa224e01a.webp",
    "location": "Watts, Los Angeles, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/08p7B5OtcUuVblvkQIlBhJ",
    "legacy": [-118.2380432,33.9386361],
    "name": "Tyrese"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/8e47abf188e8463bbc08c0a8bf3d2b6f.webp",
    "location": "Rockingham, Richmond County, North Carolina, United States",
    "spotifyurl": "https://open.spotify.com/artist/1W3FSF1BLpY3hlVIgvenLz",
    "legacy": [-79.7739457,34.9393201],
    "name": "The-Dream"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/1efa35fe09184cbebd642ab4572cb252.webp",
    "location": "Harlem, Manhattan, New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/59wfkuBoNyhDMQGCljbUbA",
    "legacy": [-73.9464769,40.8115504],
    "name": "P. Diddy"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/6c5f68043e840128cdf7fdf3dc27fdcc.webp",
    "location": "San Pedro, Los Angeles, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/360IAlyVv4PCEVjgyMZrxK",
    "legacy": [-118.2922461,33.7360619],
    "name": "Miguel"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b9b181624270b4b42f6bd1020dd1fba9.webp",
    "location": "Lexington, Fayette County, Kentucky, United States",
    "spotifyurl": "https://open.spotify.com/artist/0NIIxcxNHmOoyBx03SfTCD",
    "legacy": [-84.5037164,38.0405837],
    "name": "Tinashe"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/0b6f22567f300e26ba6c0520f0a220c2.webp",
    "location": "Black Mountain, Buncombe County, North Carolina, United States",
    "spotifyurl": "https://open.spotify.com/artist/0W498bDDNlJIrYMKXdpLHA",
    "legacy": [-82.3212302,35.6178951],
    "name": "Roberta Flack"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/48ae094b07894b4997159e4754b273e0.webp",
    "location": "Nutbush, Haywood County, Tennessee, United States",
    "spotifyurl": "https://open.spotify.com/artist/1zuJe6b1roixEKMOtyrEak",
    "legacy": [-89.40812799999999,35.698133],
    "name": "Tina Turner"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5b886145aa0b943e5dade22228dcfc87.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/5oWOx0BBDSMoFB8JDrjQre",
    "legacy": [-118.2436596,34.0522265],
    "name": "Katharine McPhee"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5d32b003dbd741f2c1f04563025ad7e7.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/3rWZHrfrsPBxVy692yAIxF",
    "legacy": [-118.2436596,34.0522265],
    "name": "Willow Smith"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/90ea9300a5bf4f318413e8af9b5b7348.webp",
    "location": "Tulsa, Tulsa County, Oklahoma, United States",
    "spotifyurl": "https://open.spotify.com/artist/4TwHRCIu3Xg9fjS3l7owkp",
    "legacy": [-95.99277500000001,36.1539816],
    "name": "The Gap Band"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/fe2071f909f04a82920be101ce4017dc.webp",
    "location": "San Angelo, Tom Green County, Texas, United States",
    "spotifyurl": "https://open.spotify.com/artist/54kWB5z9SbenPFQXtBDUBK",
    "legacy": [-100.4370375,31.4637723],
    "name": "Paula DeAnda"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ffa1a2c2971f4afc8595157ab3c043f6.webp",
    "location": "Nashville, Davidson County, Tennessee, United States",
    "spotifyurl": "https://open.spotify.com/artist/1f2e3RQf7LHOum8NU61q0R",
    "legacy": [-86.7816016,36.1626638],
    "name": "Kem"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/83fc7a7a913746669e5a4f158ed960d6.webp",
    "location": "Miami, Miami-Dade County, Florida, United States",
    "spotifyurl": "https://open.spotify.com/artist/4PrinKSrmILmo0kERG0Ogn",
    "legacy": [-80.1917902,25.7616798],
    "name": "Trina"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/2f5223dd389e80a87c1023ff1401c8da.webp",
    "location": "Washington, D.C., United States",
    "spotifyurl": "https://open.spotify.com/artist/1U0sIzpRtDkvu1hXXzxh60",
    "legacy": [-77.0368707,38.9071923],
    "name": "Kelela"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/12abfc1f8b36452f99fbce7bdb91c679.webp",
    "location": "Atlanta, Fulton County, Georgia, United States",
    "spotifyurl": "https://open.spotify.com/artist/0TF2NxkJZPQoX1H53rEFM1",
    "legacy": [-84.3879824,33.7489954],
    "name": "Gladys Knight & The Pips"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/9189c7b12a254856acfe01fcbf2e0248.webp",
    "location": "Haywards Heath, West Sussex, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/7o95ZoZt5ZYn31e9z1Hc0a",
    "legacy": [-0.106333,50.999041],
    "name": "Natasha Bedingfield"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/853075ef30a6905d3ecd6c8e28c7b000.webp",
    "location": "Sunderland, Tyne and Wear, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/7sfgqEdoeBTjd8lQsPT3Cy",
    "legacy": [-1.383801,54.906869],
    "name": "Emeli Sand"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5141f5d9f4b2480fa2ce7fe42b920b61.webp",
    "location": "Greenville, Greenville County, South Carolina, United States",
    "spotifyurl": "https://open.spotify.com/artist/49iKbKGqgn8OESkW5WduX0",
    "legacy": [-82.3940104,34.85261759999999],
    "name": "Peabo Bryson"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/cc7fb7f2b6d1cc809f70547c6edaef38.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/3e7awlrlDSwF3iM0WBjGMp",
    "legacy": [-0.1277583,51.5073509],
    "name": "Little Mix"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d1514b7dafd24fd48ed67fe2cd1a60d0.webp",
    "location": "Minot, Ward County, North Dakota, United States",
    "spotifyurl": "https://open.spotify.com/artist/46MmlFKM8ivDsUnGOejvSM",
    "legacy": [-101.2922906,48.2329668],
    "name": "Jonny Craig"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/e80cfd2456aa4f30b469e85c8dd3bcd1.webp",
    "location": "Buff Bay, Portland, Jamaica",
    "spotifyurl": "https://open.spotify.com/artist/3kc5AFnL1TQQdNaMdSW2UO",
    "legacy": [-76.66004149999999,18.2342641],
    "name": "Wayne Wonder"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/1f9edaa0e860ad475a6dc78e35205683.webp",
    "location": "Paddington, Westminster, London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/1XCorAp4vtEceWjPgyiiw6",
    "legacy": [-0.174943,51.515973],
    "name": "Shola Ama"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/30e4542183eb436087c1f37ed09e0c5b.webp",
    "location": "New Orleans, Louisiana, United States",
    "spotifyurl": "https://open.spotify.com/artist/60ciIY5MouLc2Y9n34DJdA",
    "legacy": [-90.0715323,29.95106579999999],
    "name": "Ledisi"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/620c7a5c3d474abfba5b29244256a898.webp",
    "location": "Miami, Miami-Dade County, Florida, United States",
    "spotifyurl": "https://open.spotify.com/artist/6dROiL44pIQZVNZ6Bc0OJO",
    "legacy": [-80.1917902,25.7616798],
    "name": "Pleasure P"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/90548e0fb5a740b7c032c75e0ca64386.webp",
    "location": "Henderson, Vance County, North Carolina, United States",
    "spotifyurl": "https://open.spotify.com/artist/3plJVWt88EqjvtuB4ZDRV3",
    "legacy": [-78.39920099999999,36.3294305],
    "name": "Ben E. King"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/87a5662a09ff40669971f8a0b7cc0503.webp",
    "location": "Ardsley, Westchester County, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/2Hjj68yyUPiC0HKEOigcEp",
    "legacy": [-73.8437452,41.0106531],
    "name": "Jesse McCartney"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/fddd90bbc06b9325503266355960384a.webp",
    "location": "Pereira, Risaralda, Colombia",
    "spotifyurl": "https://open.spotify.com/artist/1U1el3k54VvEUzo3ybLPlM",
    "legacy": [-75.690601,4.8087174],
    "name": "Kali Uchis"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/70f4f21b19274d6482bf4b1748dee636.webp",
    "location": "Detroit, Wayne County, Michigan, United States",
    "spotifyurl": "https://open.spotify.com/artist/6is2U7I1jlI8PjxNZOHIMV",
    "legacy": [-83.0457538,42.331427],
    "name": "DeBarge"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/da7806058e0f45498fe573e130e79518.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/5VJN4jB6PqqEg4kJiAj6Eu",
    "legacy": [-118.2436596,34.0522265],
    "name": "Ren & Angela"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/e29eb99357f282e6e4daa08020908c19.webp",
    "location": "Brooklyn, New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/5GuEFqVXxQsqJtjGqoFWvf",
    "legacy": [-73.9441579,40.6781784],
    "name": "Corbin Bleu"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/e35fa6e01798488482772e1d8fabf603.webp",
    "location": "Muskogee, Muskogee County, Oklahoma, United States",
    "spotifyurl": "https://open.spotify.com/artist/0v2Y5jwtcv8LiWNTRls1KM",
    "legacy": [-95.3696909,35.7478769],
    "name": "Ester Dean"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c9c88af09c4de9ef34ad5554808f2ce0.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/5cj0lLjcoR7YOSnhnX0Po5",
    "legacy": [-118.2436596,34.0522265],
    "name": "Doja Cat"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/7384efa2f679cb3e5ac24cecc871c3e3.webp",
    "location": "Oxnard, Ventura County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/3jK9MiCrA42lLAdMGUZpwa",
    "legacy": [-119.1770516,34.1975048],
    "name": "Anderson .Paak"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/bcbbc3b16a46466d85d014394cac051c.webp",
    "location": "Kyv, Ukraine",
    "spotifyurl": "https://open.spotify.com/artist/4z1OKWLJsbVnqJXYehqHRM",
    "legacy": [30.5234,50.4501],
    "name": "Stereolizza"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5a3c1e86967e4093c0c2bce0917d2256.webp",
    "location": "Seoul, Korea, Republic of",
    "spotifyurl": "https://open.spotify.com/artist/7rlMZAZYtRkjFg4HHhvYeC",
    "legacy": [126.9779692,37.566535],
    "name": "Fly to the Sky"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/377b67b0f02f4fbfa8bc50d2b824445c.webp",
    "location": "Chicago, Cook County, Illinois, United States",
    "spotifyurl": "https://open.spotify.com/artist/4QQgXkCYTt3BlENzhyNETg",
    "legacy": [-87.6297982,41.8781136],
    "name": "Earth, Wind & Fire"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/17d3e3f494a6ff003ec03afd0617b2ce.webp",
    "location": "Muswell Hill, Haringey, London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/0bzfPKdbXL5ezYW2z3UGQj",
    "legacy": [-0.1443015,51.5911816],
    "name": "Michael Kiwanuka"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/7ea59f4ce86ec381ff666e6da4abaac1.webp",
    "location": "Philadelphia, Philadelphia County, Pennsylvania, United States",
    "spotifyurl": "https://open.spotify.com/artist/13mOBl37EYFyZvud2tlq4E",
    "legacy": [-75.1652215,39.9525839],
    "name": "Latif"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b59b813ca74cc0c83bcd7ba2df20065f.webp",
    "location": "Warsaw, Mazowieckie, Poland",
    "spotifyurl": "https://open.spotify.com/artist/3MDEKBsgb6XSMdYHAK4Vdr",
    "legacy": [21.0122287,52.2296756],
    "name": "Natalia Lesz"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/03af17516f39a241629216b7651a392c.webp",
    "location": "Paris, le-de-France, France",
    "spotifyurl": "https://open.spotify.com/artist/15jZ8OLtnGATWHlQkltG7f",
    "legacy": [2.3522219,48.856614],
    "name": "Amel Bent"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/329373005e2ce643ab5728e19ee3731f.webp",
    "location": "Phoenix, Maricopa County, Arizona, United States",
    "spotifyurl": "https://open.spotify.com/artist/5UoVLCWzOKMIJ9iioof9OD",
    "legacy": [-112.0740373,33.4483771],
    "name": "Ce Ce Peniston"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/6eeb395ffbe44f2eb98e9587318ae372.webp",
    "location": "Detroit, Wayne County, Michigan, United States",
    "spotifyurl": "https://open.spotify.com/artist/2W8UTum7bU7ue6m0r14H97",
    "legacy": [-83.0457538,42.331427],
    "name": "The Dramatics"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/1499a34ed6ca27ec1fa0a4662de96653.webp",
    "location": "Oakland, Alameda County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/2kreKea2n96dXjcyAU9j5N",
    "legacy": [-122.2711639,37.8043514],
    "name": "The Pointer Sisters"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/f219c457568245a085b28a69b048120d.webp",
    "location": "Boston, Suffolk County, Massachusetts, United States",
    "spotifyurl": "https://open.spotify.com/artist/1fvz0vd4P0LNMkAysF1ivk",
    "legacy": [-71.0588801,42.3600825],
    "name": "Al B. Sure!"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a02d2c0eef0f4bf3b72a2e3c66e3010c.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/2sgNhTq9930KEF9Hy6xcmR",
    "legacy": [-118.2436596,34.0522265],
    "name": "Sam Salter"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/0e5318e875b8c0d66ac3e1e076fcf6c3.webp",
    "location": "St. Petersburg, Pinellas County, Florida, United States",
    "spotifyurl": "https://open.spotify.com/artist/7rtM2wPKQlFpsm0C4qJlDk",
    "legacy": [-82.64029149999999,27.7676008],
    "name": "Kendra Morris"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/8ab3705177f436b30cdb21f0f8bf59f6.webp",
    "location": "Detroit, Wayne County, Michigan, United States",
    "spotifyurl": "https://open.spotify.com/artist/56oDRnqbIiwx4mymNEv7dS",
    "legacy": [-83.0457538,42.331427],
    "name": "Lizzo"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/0e5318e875b8c0d66ac3e1e076fcf6c3.webp",
    "location": "St. Petersburg, Pinellas County, Florida, United States",
    "spotifyurl": "https://open.spotify.com/artist/7rtM2wPKQlFpsm0C4qJlDk",
    "legacy": [-82.64029149999999,27.7676008],
    "name": "Kendra Morris"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/8ab3705177f436b30cdb21f0f8bf59f6.webp",
    "location": "Detroit, Wayne County, Michigan, United States",
    "spotifyurl": "https://open.spotify.com/artist/56oDRnqbIiwx4mymNEv7dS",
    "legacy": [-83.0457538,42.331427],
    "name": "Lizzo"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/0e5318e875b8c0d66ac3e1e076fcf6c3.webp",
    "location": "St. Petersburg, Pinellas County, Florida, United States",
    "spotifyurl": "https://open.spotify.com/artist/7rtM2wPKQlFpsm0C4qJlDk",
    "legacy": [-82.64029149999999,27.7676008],
    "name": "Kendra Morris"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/8ab3705177f436b30cdb21f0f8bf59f6.webp",
    "location": "Detroit, Wayne County, Michigan, United States",
    "spotifyurl": "https://open.spotify.com/artist/56oDRnqbIiwx4mymNEv7dS",
    "legacy": [-83.0457538,42.331427],
    "name": "Lizzo"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ccac95b95b267d884889e972681230ab.webp",
    "location": "Bridgeport, Fairfield County, Connecticut, United States",
    "spotifyurl": "https://open.spotify.com/artist/17Mb968quDHpjCkIyq30QV",
    "legacy": [-73.1894384,41.1792258],
    "name": "Hatebreed"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/55e925568518eb691ebb631fd331bba0.webp",
    "location": "Salem, Essex County, Massachusetts, United States",
    "spotifyurl": "https://open.spotify.com/artist/7kHzfxMLtVHHb523s43rY1",
    "legacy": [-70.8967155,42.51954],
    "name": "Converge"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/6ff048bfadc3431fa223d441dc98262f.webp",
    "location": "Washington, D.C., United States",
    "spotifyurl": "https://open.spotify.com/artist/1oVj9JmPUPg4SQ2uerV2xc",
    "legacy": [-77.0368707,38.9071923],
    "name": "Bad Brains"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/4788926e19ddad828c15e77653ed5c3c.webp",
    "location": "Buffalo, Erie County, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/0o7WWONtleH6PWLn5GIoCM",
    "legacy": [-78.8783689,42.88644679999999],
    "name": "Every Time I Die"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/34b830cb2bce19dec2dd67ac8073d352.webp",
    "location": "Hattingen, Nordrhein-Westfalen, Germany",
    "spotifyurl": "https://open.spotify.com/artist/1oeo6cC9Fqa2bxxv67qBQL",
    "legacy": [7.1911567,51.4018117],
    "name": "Caliban"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/14a0b32497d293275f06f9f452b89c8b.webp",
    "location": "Burlington, Regional Municipality of Halton, Ontario, Canada",
    "spotifyurl": "https://open.spotify.com/artist/1Tsag5J854qxeOo2apszug",
    "legacy": [-79.7990319,43.3255196],
    "name": "Silverstein"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/778db20519c44a93bc6af1d8a781b3e8.webp",
    "location": "Carmel, Hamilton County, Indiana, United States",
    "spotifyurl": "https://open.spotify.com/artist/7voCqDg5xgF1LZFrmbPS7w",
    "legacy": [-86.1180435,39.978371],
    "name": "Haste the Day"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/e0bc9ea72a894e37a1efaafaf6a33dd3.webp",
    "location": "Anchorage, Alaska, United States",
    "spotifyurl": "https://open.spotify.com/artist/4ijGLY4dzlurDh7jqH3tW7",
    "legacy": [-149.9002778,61.2180556],
    "name": "36 Crazyfists"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/362531505696465cac662f829df3c086.webp",
    "location": "Cleveland, Cuyahoga County, Ohio, United States",
    "spotifyurl": "https://open.spotify.com/artist/0kO2SRhHlmMIeyJHfHy3c9",
    "legacy": [-81.6943605,41.49932],
    "name": "Chimaira"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ca0e8cf8a5f5470cc7da7631dfdc86c3.webp",
    "location": "Houston, Harris County, Texas, United States",
    "spotifyurl": "https://open.spotify.com/artist/6eKzDvHhJgMtcaOrvEXCTv",
    "legacy": [-95.3698028,29.7604267],
    "name": "D.R.I."
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/0834c2c350f26334061c3702362b6b0e.webp",
    "location": "Las Vegas, Clark County, Nevada, United States",
    "spotifyurl": "https://open.spotify.com/artist/5t28BP42x2axFnqOOMg3CM",
    "legacy": [-115.1398296,36.1699412],
    "name": "Five Finger Death Punch"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/e02e14afdc5d4dcbbf1722bd742711df.webp",
    "location": "El Paso, El Paso County, Texas, United States",
    "spotifyurl": "https://open.spotify.com/artist/5E2rtn57BM2WPjwak4kGd5",
    "legacy": [-106.4850217,31.7618778],
    "name": "At the Drive-In"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/21861a14a32dcc87c492420b14c85705.webp",
    "location": "Troy, Oakland County, Michigan, United States",
    "spotifyurl": "https://open.spotify.com/artist/6qO6LhD6FuXK5e2PtfAIMz",
    "legacy": [-83.1497751,42.6064095],
    "name": "We Came As Romans"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/0e19b59c7f4744aa94a8fff310399003.webp",
    "location": "San Diego, San Diego County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/6uZOWljC7E3k7ZjVNKwZyW",
    "legacy": [-117.1610966,32.7157305],
    "name": "The Locust"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/24fd2fa141811a7c2163ba075e8ab0b6.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/4S2yOnmsWW97dT87yVoaSZ",
    "legacy": [-118.2436596,34.0522265],
    "name": "NOFX"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d671dad2dd300c1a007717c019c8678b.webp",
    "location": "Seattle, King County, Washington, United States",
    "spotifyurl": "https://open.spotify.com/artist/6f3a43i1MJZwdjEpV1M0oH",
    "legacy": [-122.3320708,47.6062095],
    "name": "Demon Hunter"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/1f7de670af924db3b58846b9622fb9ce.webp",
    "location": "Victoria, Capital Regional District, British Columbia, Canada",
    "spotifyurl": "https://open.spotify.com/artist/4wDDRTuUAWHiYtrvYsU0kp",
    "legacy": [-123.3656444,48.4284207],
    "name": "NoMeansNo"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d8b88b588fef6f8a220d7818d4bc3a47.webp",
    "location": "Alexandria, Virginia, United States",
    "spotifyurl": "https://open.spotify.com/artist/4raqfuxaWjPjrOQGb6zoa7",
    "legacy": [-77.0469214,38.8048355],
    "name": "Pig Destroyer"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c139dd155ef94210b2b28cdee746b492.webp",
    "location": "Boston, Suffolk County, Massachusetts, United States",
    "spotifyurl": "https://open.spotify.com/artist/1lTEsWeT539Ojf2X1Ba7ba",
    "legacy": [-71.0588801,42.3600825],
    "name": "All Pigs Must Die"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/6a5050f0e09e4aebb53e2baa5c6695fd.webp",
    "location": "Redlands, San Bernardino County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/6fz337dnK6wGTEI94msCBN",
    "legacy": [-117.1825381,34.0555693],
    "name": "xDeathstarx"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/17d924b4535189bbeabf1664eec11c05.webp",
    "location": "Montreal, Montreal, Quebec, Canada",
    "spotifyurl": "https://open.spotify.com/artist/3KjkcT0s7a7JDlzsXffnDo",
    "legacy": [-73.567256,45.5016889],
    "name": "Ion Dissonance"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/efa6a7d6e47a217da180b746e786aa46.webp",
    "location": "Long Island, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/5tGG1slV9pkcydU5eQSIvm",
    "legacy": [-73.13496099999999,40.789142],
    "name": "Stray from the Path"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d62c3e86b9ac4859982a6be6dbecaf8c.webp",
    "location": "Nykping Municipality, Sdermanland, Sweden",
    "spotifyurl": "https://open.spotify.com/artist/5sXeAfuBStpZnoH8FzQD6f",
    "legacy": [17.0286668,58.8547206],
    "name": "Victims"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/150b1f0954b3a04378e3719814e6ffd9.webp",
    "location": "Santa Cruz, Santa Cruz County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/1Yunxnwa5znrQ9Ha7dZeHO",
    "legacy": [-121.9579578,37.0453988],
    "name": "Good Riddance"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/20ffb3d4f49b4f64a3c7e4a4efda2968.webp",
    "location": "Brooklyn, New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/4tXd1KfFcRxGENurl1B6AZ",
    "legacy": [-73.9441579,40.6781784],
    "name": "Merauder"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/789781af5a00fbae057f9cb2a579f725.webp",
    "location": "New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/2AFPWhrVDLjiVNMpbou4jU",
    "legacy": [-74.0059728,40.7127753],
    "name": "Sheer Terror"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d383150868b149f388231097f481d281.webp",
    "location": "Simi Valley, Ventura County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/07ATE522e8aDsEb0JVLYqg",
    "legacy": [-118.781482,34.2694474],
    "name": "Strung Out"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/76e554de6c3048c48ef069d9305445b0.webp",
    "location": "Asbury Park, Monmouth County, New Jersey, United States",
    "spotifyurl": "https://open.spotify.com/artist/2B1L1L34sSDymuBqPeh7fp",
    "legacy": [-74.0120817,40.2203907],
    "name": "Lifetime"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a84dfb67b76056668da68a7503e43946.webp",
    "location": "Sacramento, Sacramento County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/6Ghvu1VvMGScGpOUJBAHNH",
    "legacy": [-121.4943996,38.5815719],
    "name": "Deftones"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b1fe955f08e243da9e2289979a2bf6dd.webp",
    "location": "Santa Rosa, Sonoma County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/2VAHdNi9v1ae2FVJmVNKU7",
    "legacy": [-122.7140548,38.440429],
    "name": "Capitalist Casualties"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/570c70509b5d92da537e7fde9e12ecee.webp",
    "location": "Orlando, Orange County, Florida, United States",
    "spotifyurl": "https://open.spotify.com/artist/3N8Hy6xQnQv1F1XCiyGQqA",
    "legacy": [-81.3792365,28.5383355],
    "name": "Sleeping With Sirens"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/1563b7725bd44b00be211f7fe70e47b5.webp",
    "location": "Rotterdam, Rotterdam, Zuid-Holland, Netherlands",
    "spotifyurl": "https://open.spotify.com/artist/2qU3VmGiG3W2oD88ATVj09",
    "legacy": [4.4777326,51.9244201],
    "name": "Das Oath"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ec9bc316fd1d2a9f27c689d40b5eafc5.webp",
    "location": "Annapolis, Anne Arundel County, Maryland, United States",
    "spotifyurl": "https://open.spotify.com/artist/2mSqzpfJGBqSTIQa3uqDco",
    "legacy": [-76.4921829,38.9784453],
    "name": "Moss Icon"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c0703285f45d442a9095c4a6f1c6dabc.webp",
    "location": "Dudley, Worcester County, Massachusetts, United States",
    "spotifyurl": "https://open.spotify.com/artist/1t5vg6SgMno0PEptG8duTk",
    "legacy": [-71.9276033,42.0433661],
    "name": "No Trigger"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/9cb8bd8240f3439d8b7b39549464d76d.webp",
    "location": "Claremont, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/6nRxfBhqFVf7YBzop6laRH",
    "legacy": [-117.7197785,34.0966764],
    "name": "Man Is the Bastard"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/acba8d275aef475ebc7bcafbcbe58a66.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/7MlyHuGRHi31yYlrttDqgT",
    "legacy": [-118.2436596,34.0522265],
    "name": "The Distillers"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/8ccb3dfae177e20d557920dba778d110.webp",
    "location": "Quincy, Norfolk County, Massachusetts, United States",
    "spotifyurl": "https://open.spotify.com/artist/7w9jdhcgHNdiPeNPUoFSlx",
    "legacy": [-71.0022705,42.2528772],
    "name": "Dropkick Murphys"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3dedc24b690fec287883247da2169c93.webp",
    "location": "Amsterdam, Noord-Holland, Netherlands",
    "spotifyurl": "https://open.spotify.com/artist/2iRqqPkOyIvvb7qFZN1Onz",
    "legacy": [4.9041389,52.3675734],
    "name": "The Prophet"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/6a8fcb949364801e827f671a2bbbd639.webp",
    "location": "Allentown, Lehigh County, Pennsylvania, United States",
    "spotifyurl": "https://open.spotify.com/artist/6FTONkEJQsCSpoDHqaAP1V",
    "legacy": [-75.4714098,40.6022939],
    "name": "Pissed Jeans"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a6462f181bb24f628d0da9adaf45c08f.webp",
    "location": "Tempe, Maricopa County, Arizona, United States",
    "spotifyurl": "https://open.spotify.com/artist/2kfVqdz3lJshqH9GUHhtMr",
    "legacy": [-111.9400054,33.4255104],
    "name": "Psychostick"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/621de9e95d2b419da3262d3e2bf5262a.webp",
    "location": "Houston, Harris County, Texas, United States",
    "spotifyurl": "https://open.spotify.com/artist/4QoXge0z2Tetzg1kxmm5kn",
    "legacy": [-95.3698028,29.7604267],
    "name": "Die Young"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ed6642f6dccc4d6fbf2a6a9bef148ae3.webp",
    "location": "Chicago, Cook County, Illinois, United States",
    "spotifyurl": "https://open.spotify.com/artist/4fJhgb2uzeQZUtUUVqQLX3",
    "legacy": [-87.6297982,41.8781136],
    "name": "Dead To Fall"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/72fe121a9e63e676fe81d04c91181e0f.webp",
    "location": "New Jersey, United States",
    "spotifyurl": "https://open.spotify.com/artist/31v3ZPlt4yuLhmB9fF8Dd0",
    "legacy": [-74.4056612,40.0583238],
    "name": "Neil Perry"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/651060adeafb2159c31973cefcdacd60.webp",
    "location": "Peoria, Peoria County, Illinois, United States",
    "spotifyurl": "https://open.spotify.com/artist/2Pfv2w8a20xzC7Dr7QXRqM",
    "legacy": [-89.5889864,40.6936488],
    "name": "Mudvayne"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/8bddc9a6581b434c802b8f671b5a3c47.webp",
    "location": "Albany, Albany County, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/782HAMHn2gK7WqWZZ7aJ9D",
    "legacy": [-73.7562317,42.6525793],
    "name": "One King Down"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/94587d8787db46d8a0e21cd51fbe7c47.webp",
    "location": "Hamburg, Germany",
    "spotifyurl": "https://open.spotify.com/artist/4CQ5vmPYv3KeiEWoKoJOs5",
    "legacy": [9.9936819,53.5510846],
    "name": "Yacps"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/94587d8787db46d8a0e21cd51fbe7c47.webp",
    "location": "Hamburg, Germany",
    "spotifyurl": "https://open.spotify.com/artist/4CQ5vmPYv3KeiEWoKoJOs5",
    "legacy": [9.9936819,53.5510846],
    "name": "Yacps"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/94587d8787db46d8a0e21cd51fbe7c47.webp",
    "location": "Hamburg, Germany",
    "spotifyurl": "https://open.spotify.com/artist/4CQ5vmPYv3KeiEWoKoJOs5",
    "legacy": [9.9936819,53.5510846],
    "name": "Yacps"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/e5daae707431e9eeb7b6fd850999276d.webp",
    "location": "Reading, Berks County, Pennsylvania, United States",
    "spotifyurl": "https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02",
    "legacy": [-75.9268747,40.3356483],
    "name": "Taylor Swift"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b53342000d4b5b6141cd025ade2a910c.webp",
    "location": "Roswell, Chaves County, New Mexico, United States",
    "spotifyurl": "https://open.spotify.com/artist/7EK1bQADBoqbYXnT4Cqv9w",
    "legacy": [-104.5230242,33.3942655],
    "name": "John Denver"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a3b455fd7e4ce73ad023db2e4018e09f.webp",
    "location": "Lake Charles, Calcasieu Parish, Louisiana, United States",
    "spotifyurl": "https://open.spotify.com/artist/60ht0hWRy1yjUDfNsLuHuP",
    "legacy": [-93.2173758,30.2265949],
    "name": "Lucinda Williams"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/44d19493e4d8a457de5109f9b557aa8b.webp",
    "location": "Pikeville, Pike County, Kentucky, United States",
    "spotifyurl": "https://open.spotify.com/artist/2sxmKe3CUrWnx7eoXMhOlW",
    "legacy": [-82.5187629,37.4792672],
    "name": "Dwight Yoakam"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/6eaceccb8f1a5ff70a68e3eeb768c53b.webp",
    "location": "Glendale, Maricopa County, Arizona, United States",
    "spotifyurl": "https://open.spotify.com/artist/0Xi59sEw38vRvwleSAVqoo",
    "legacy": [-112.1859866,33.5386523],
    "name": "Marty Robbins"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/97dc0cecddc040fda1554f2c127feeb8.webp",
    "location": "Alexandria, Virginia, United States",
    "spotifyurl": "https://open.spotify.com/artist/4Cedjq5BQL3MhapRvDpFED",
    "legacy": [-77.0469214,38.8048355],
    "name": "Neko Case"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b6debcb0134e4078a86c33356f2fa8da.webp",
    "location": "Edmonton, Alberta, Canada",
    "spotifyurl": "https://open.spotify.com/artist/6W1BHDF0T4a4KYcSwzD586",
    "legacy": [-113.4938229,53.5461245],
    "name": "k.d. lang"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/116331d004cf4f0da2aba1ac7bd93deb.webp",
    "location": "El Cerrito, Contra Costa County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/3IYUhFvPQItj6xySrBmZkd",
    "legacy": [-122.310765,37.9161326],
    "name": "Creedence Clearwater Revival"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/4faf8d7d90314f11cf1201bb24c04850.webp",
    "location": "Seminole, Gaines County, Texas, United States",
    "spotifyurl": "https://open.spotify.com/artist/7dmeVSH4lJqxXU7C87dKIB",
    "legacy": [-102.6449101,32.7189926],
    "name": "Tanya Tucker"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/e597b521813457f96ccb815d336830dc.webp",
    "location": "Chicago, Cook County, Illinois, United States",
    "spotifyurl": "https://open.spotify.com/artist/72PnPUc1qv9UjRPaGVZ1jq",
    "legacy": [-87.6297982,41.8781136],
    "name": "The Handsome Family"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/6a7912897b2b4592c5df9471b37ef44b.webp",
    "location": "Vista, San Diego County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/3bcLBxvaI7GsBzGp3WHnwQ",
    "legacy": [-117.2425355,33.2000368],
    "name": "Nickel Creek"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/62393378277542ea97422f550dfee826.webp",
    "location": "Lynn, Essex County, Massachusetts, United States",
    "spotifyurl": "https://open.spotify.com/artist/1r2U8cAvK4omurH0XzwX7C",
    "legacy": [-70.9494938,42.46676300000001],
    "name": "Mike Ness"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c703602f9c7348d2ac06954d0b731278.webp",
    "location": "Oakland, Alameda County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/6OVkHZQP8QoBYqr1ejCGDv",
    "legacy": [-122.2711639,37.8043514],
    "name": "Seasick Steve"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c2f4ab050974fe5dcca80ecad9fca738.webp",
    "location": "Holly Springs, Marshall County, Mississippi, United States",
    "spotifyurl": "https://open.spotify.com/artist/2EcNV0nlF6f6ZDtJJG2vKN",
    "legacy": [-89.44868939999999,34.76759670000001],
    "name": "Charlie Feathers"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/fb7a535c9db6496b82b443a7d110761a.webp",
    "location": "Kansas City, Jackson County, Missouri, United States",
    "spotifyurl": "https://open.spotify.com/artist/1aSIXmBKKrEVIbGLwhedIe",
    "legacy": [-94.5785667,39.0997265],
    "name": "Chely Wright"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/6cbc5e8d0341461f91642332fae8cf2c.webp",
    "location": "Rockne, Bastrop County, Texas, United States",
    "spotifyurl": "https://open.spotify.com/artist/5rTfve7qtpGUq2PVVmyFVS",
    "legacy": [-97.430863,29.995182],
    "name": "Wayne Hancock"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/98f202d2f2434f3a9fde4a5274019e9f.webp",
    "location": "Brixton, Lambeth, London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/25zUD40u8M2kJmdcabBzrz",
    "legacy": [-0.1156148,51.4612794],
    "name": "Alabama 3"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5e6420b083f3447d9dc6775186acff7e.webp",
    "location": "Jacksonville, Duval County, Florida, United States",
    "spotifyurl": "https://open.spotify.com/artist/6ZRkCThyw6syuSOAGT7lY1",
    "legacy": [-81.65565099999999,30.3321838],
    "name": "Van Zant"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/59fe98c3717e416fa1c25daaf574f944.webp",
    "location": "Deep Gap, Watauga County, North Carolina, United States",
    "spotifyurl": "https://open.spotify.com/artist/01N1aZStXA4yGvkz4vRXtJ",
    "legacy": [-81.51548609999999,36.238651],
    "name": "Doc Watson"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/21e67b1304c64e7b8ee7bcb2d36875cd.webp",
    "location": "Biloxi, Harrison County, Mississippi, United States",
    "spotifyurl": "https://open.spotify.com/artist/4K3DSWzghkGUcQOEZG9gpo",
    "legacy": [-88.88530779999999,30.3960318],
    "name": "Chris LeDoux"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3dccebcc4a444ca4b7b991330d902abb.webp",
    "location": "Mount Clemens, Macomb County, Michigan, United States",
    "spotifyurl": "https://open.spotify.com/artist/2DnqqkzzDKm3vAoyHtn8So",
    "legacy": [-82.8779754,42.5972563],
    "name": "Uncle Kracker"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ae8e7f21040fddb08b41be335376c30e.webp",
    "location": "Toronto, Ontario, Canada",
    "spotifyurl": "https://open.spotify.com/artist/3CYSRCHfilgR8DSbkCMp5j",
    "legacy": [-79.3831843,43.653226],
    "name": "Cowboy Junkies"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/1377e2e53c884fc8a26a1ec00f60bcd6.webp",
    "location": "Corsicana, Navarro County, Texas, United States",
    "spotifyurl": "https://open.spotify.com/artist/05FEKb23HHED5ZsWmKo8kz",
    "legacy": [-96.46887269999999,32.0954304],
    "name": "Billy Joe Shaver"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/6c85e46cffb04e9da74f0a9b10501e0d.webp",
    "location": "Albany, Dougherty County, Georgia, United States",
    "spotifyurl": "https://open.spotify.com/artist/1eYhYunlNJlDoQhtYBvPsi",
    "legacy": [-84.15574099999999,31.5785074],
    "name": "Ray Charles"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/61c427fb0a654cf996233504af763085.webp",
    "location": "Toronto, Ontario, Canada",
    "spotifyurl": "https://open.spotify.com/artist/4vpDg7Y7fU982Ds30zawDA",
    "legacy": [-79.3831843,43.653226],
    "name": "The Band"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/da9708ffaae545ae8f3a91c5a76b1049.webp",
    "location": "7 February 1971 (aged 73)",
    "spotifyurl": "https://open.spotify.com/artist/2NwYS5UK1AbaTljDWp4uh0",
    "legacy": [1,1],
    "name": "Dock Boggs"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/118d8421cdce548dacd448383981ffde.webp",
    "location": "Atlanta, Fulton County, Georgia, United States",
    "spotifyurl": "https://open.spotify.com/artist/6G7OerKc3eBO9sVkRNopFC",
    "legacy": [-84.3879824,33.7489954],
    "name": "Cat Power"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/044acceb61fc499d88d98a3bcce6a061.webp",
    "location": "Lockhart, Caldwell County, Texas, United States",
    "spotifyurl": "https://open.spotify.com/artist/6wpI4AEN6UO7ksNN23RGEf",
    "legacy": [-97.6699996,29.8849441],
    "name": "Scott H. Biram"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/70ad753b386b489ebe2c141b6f0801f3.webp",
    "location": "Slaughters, Webster County, Kentucky, United States",
    "spotifyurl": "https://open.spotify.com/artist/2XJzOLYV2mF5K2JfUhJEK0",
    "legacy": [-87.50222389999999,37.4889336],
    "name": "Chris Knight"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/37397cac5efd4e70b5cf2f51d162705b.webp",
    "location": "Elaine, Phillips County, Arkansas, United States",
    "spotifyurl": "https://open.spotify.com/artist/1PWHsS9haruM3AEebZuGs9",
    "legacy": [-90.85205309999999,34.3084371],
    "name": "Levon Helm"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/70d7f00e84a3400fb3dcfaac6657126a.webp",
    "location": "Keiser, Mississippi County, Arkansas, United States",
    "spotifyurl": "https://open.spotify.com/artist/2iSim8CE5BUpVdTGP41l1I",
    "legacy": [-90.09981409999999,35.6745227],
    "name": "Ed Bruce"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/769f23b03143410b8abdcacf753b12a0.webp",
    "location": "Nashville, Davidson County, Tennessee, United States",
    "spotifyurl": "https://open.spotify.com/artist/2wKZKjNTOtH2vjxIsUBZqY",
    "legacy": [-86.7816016,36.1626638],
    "name": "Carlene Carter"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/41db715147084cde8db89ffe6e654265.webp",
    "location": "Duluth, St. Louis County, Minnesota, United States",
    "spotifyurl": "https://open.spotify.com/artist/3GjVVVcFmUgEJEAAsbGkf4",
    "legacy": [-92.1004852,46.78667189999999],
    "name": "Trampled by Turtles"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/deb02d26ab204f808d04cabe4eca3241.webp",
    "location": "Vernon, Wilbarger County, Texas, United States",
    "spotifyurl": "https://open.spotify.com/artist/0JDkhL4rjiPNEp92jAgJnS",
    "legacy": [-99.2650804,34.1545306],
    "name": "Roy Orbison"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3e7e2c4b4046a03b86f1f8b78469837c.webp",
    "location": "McCamey, Upton County, Texas, United States",
    "spotifyurl": "https://open.spotify.com/artist/55yEsJBqyn27JPsw5hHzqi",
    "legacy": [-102.2222058,31.1322516],
    "name": "Dan Seals"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/8f7c769dab6c4bb6a9b560393f545c60.webp",
    "location": "Malvern, Hot Spring County, Arkansas, United States",
    "spotifyurl": "https://open.spotify.com/artist/1TlScGwN8MmIZ7kIYGjSZA",
    "legacy": [-92.81294620000001,34.3623149],
    "name": "Blaze Foley"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a8421b136a97434c4824c5a1e0fb2595.webp",
    "location": "Rossville, Walker County, Georgia, United States",
    "spotifyurl": "https://open.spotify.com/artist/1v3tdpIdBSW14rHUfiEVOv",
    "legacy": [-85.2860676,34.9831309],
    "name": "Lauren Alaina"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b7be969bff754359926c8a0e933f2a42.webp",
    "location": "South Gate, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/3g229vTyhsdwm9SO2p1FPL",
    "legacy": [-118.2120161,33.954737],
    "name": "Lee Greenwood"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/afddbdd827b045c5b4fb1a5b7ebde081.webp",
    "location": "Jackson, Madison County, Tennessee, United States",
    "spotifyurl": "https://open.spotify.com/artist/4QZdOCb3UacKbQ1ybDFAKM",
    "legacy": [-88.81394689999999,35.6145169],
    "name": "Valerie June"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/f6da1768663a47f9942a0380b63a00b9.webp",
    "location": "Zanesville, Muskingum County, Ohio, United States",
    "spotifyurl": "https://open.spotify.com/artist/4Rx72ewRjxlDGiO6wPHpxe",
    "legacy": [-82.0131924,39.9403453],
    "name": "Kim Richey"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/02402eb2432365f740b9cc64afafc624.webp",
    "location": "Claremore, Rogers County, Oklahoma, United States",
    "spotifyurl": "https://open.spotify.com/artist/4nZN9kln8toEzOifhWG2uF",
    "legacy": [-95.61609,36.3125963],
    "name": "Patti Page"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c3873b244da548659d5367ac8802d476.webp",
    "location": "Louisville, Jefferson County, Kentucky, United States",
    "spotifyurl": "https://open.spotify.com/artist/43O3c6wewpzPKwVaGEEtBM",
    "legacy": [-85.7584557,38.2526647],
    "name": "My Morning Jacket"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/8794be37cc514edd9a951e8614ff33af.webp",
    "location": "Fullerton, Orange County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/16nn7kCHPWIB6uK09GQCNI",
    "legacy": [-117.9242123,33.8703645],
    "name": "Social Distortion"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/f06433d4f6ad4f33a11e777d72d148f5.webp",
    "location": "Detroit, Wayne County, Michigan, United States",
    "spotifyurl": "https://open.spotify.com/artist/4FZ3j1oH43e7cukCALsCwf",
    "legacy": [-83.0457538,42.331427],
    "name": "Jack White"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/9dbad338a3244ad5903f7c651cad997b.webp",
    "location": "Huntingdon, Carroll County, Tennessee, United States",
    "spotifyurl": "https://open.spotify.com/artist/2VMEvDcrKKZg96T4QWXIkT",
    "legacy": [-88.4281063,36.0006178],
    "name": "Carl Mann"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b9964d7d2f334efbbb995c505f1714eb.webp",
    "location": "Pictou County, Nova Scotia, Canada",
    "spotifyurl": "https://open.spotify.com/artist/5wGox9x2iVERIeTJIQnFeL",
    "legacy": [-62.6510943,45.5776091],
    "name": "George Canyon"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/7d513b4ab84888e1e9bac66a79b4d55d.webp",
    "location": "Amarillo, Potter County, Texas, United States",
    "spotifyurl": "https://open.spotify.com/artist/5BKzvAPtNXnt0LwzGvKOH3",
    "legacy": [-101.8312969,35.2219971],
    "name": "Aaron Watson"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/6b0c905ec2e240b2aa611993fcb87911.webp",
    "location": "Checotah, McIntosh County, Oklahoma, United States",
    "spotifyurl": "https://open.spotify.com/artist/1fMdO9vLUd6wW4jbMeNiup",
    "legacy": [-95.5230356,35.4700993],
    "name": "Mel McDaniel"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/1f0404568caf4a598fd2b2e40b579f74.webp",
    "location": "San Antonio, Bexar County, Texas, United States",
    "spotifyurl": "https://open.spotify.com/artist/2PL6uHCPVIWjmr6lK2U9pG",
    "legacy": [-98.49362819999999,29.4241219],
    "name": "Doug Sahm"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/f08bb06c5794470ab1df51036bcf74ff.webp",
    "location": "North Carolina, United States",
    "spotifyurl": "https://open.spotify.com/artist/2rTgolMbO5tyXZvD26bO8e",
    "legacy": [-79.01929969999999,35.7595731],
    "name": "Del Reeves"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/88064acb225e42b6bebd14e9f564ad8a.webp",
    "location": "Chicago, Cook County, Illinois, United States",
    "spotifyurl": "https://open.spotify.com/artist/0n5eyZr2XjOLUODPGZrlLB",
    "legacy": [-87.6297982,41.8781136],
    "name": "Steve Goodman"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d229a8719fc3768d24710e667c8ca280.webp",
    "location": "League City, Galveston County, Texas, United States",
    "spotifyurl": "https://open.spotify.com/artist/5iqStkZi6QmG8sgQZQrfGN",
    "legacy": [-95.0949303,29.5074538],
    "name": "Danielle Bradbery"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/951770929e864c13b89dc99fea2e7341.webp",
    "location": "Austin, Travis County, Texas, United States",
    "spotifyurl": "https://open.spotify.com/artist/5aC3wjbpR5fL6qBGlM2u7S",
    "legacy": [-97.7430608,30.267153],
    "name": "The Greencards"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/79297d654eccb0d97618819dc5f8f2a8.webp",
    "location": "Anchorage, Jefferson County, Kentucky, United States",
    "spotifyurl": "https://open.spotify.com/artist/0djV4iaxhNfYWpH60ia85o",
    "legacy": [-85.53301569999999,38.2667373],
    "name": "Joan Osborne"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/9646cbef03524c3dcca29d5b891fc80f.webp",
    "location": "Manhattan, New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/1P9syEkl41IFowWIJN7ZBY",
    "legacy": [-73.9712488,40.7830603],
    "name": "Pete Seeger"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/34d0e655ec4d431cc3b7b61416252508.webp",
    "location": "Olympia, Thurston County, Washington, United States",
    "spotifyurl": "https://open.spotify.com/artist/5MbNzCW3qokGyoo9giHA3V",
    "legacy": [-122.9006951,47.0378741],
    "name": "Earth"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5487962775a1445099e627e6ffc6dd9f.webp",
    "location": "Detroit, Wayne County, Michigan, United States",
    "spotifyurl": "https://open.spotify.com/artist/0I7UnRLIdCD310ZBgeuqh5",
    "legacy": [-83.0457538,42.331427],
    "name": "J.D. Souther"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d1d0e998a0f648aa9b2fc05450975ef9.webp",
    "location": "Paris, le-de-France, France",
    "spotifyurl": "https://open.spotify.com/artist/4KBk9hwqFYtGS3DlZJiCsQ",
    "legacy": [2.3522219,48.856614],
    "name": "Eddy Mitchell"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/14a227bcd8494fd1ba81452deca136ac.webp",
    "location": "Spalding, Greeley County, Nebraska, United States",
    "spotifyurl": "https://open.spotify.com/artist/5v6Ygtdxxvb0DqGoGr0YNd",
    "legacy": [-98.36340399999999,41.6889002],
    "name": "Tompall Glaser"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/62078eb61550505efde56ceb96f50314.webp",
    "location": "Stockholm, Stockholm municipality, Stockholms ln, Sweden",
    "spotifyurl": "https://open.spotify.com/artist/21egYD1eInY6bGFcniCRT1",
    "legacy": [17.9672428,59.31706999999999],
    "name": "First Aid Kit"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/513fc892daec4ceaae2982210df2764d.webp",
    "location": "Waco, McLennan County, Texas, United States",
    "spotifyurl": "https://open.spotify.com/artist/3OftZbLfcqulxWNZMX8zLI",
    "legacy": [-97.1466695,31.549333],
    "name": "Wade Bowen"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b20487777a1b439897c9460dbcc49318.webp",
    "location": "Atlanta, Fulton County, Georgia, United States",
    "spotifyurl": "https://open.spotify.com/artist/4wM29TDTr3HI0qFY3KoSFG",
    "legacy": [-84.3879824,33.7489954],
    "name": "Indigo Girls"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b8483af192754e5fbd07668077a6f850.webp",
    "location": "Nodaway County, Missouri, United States",
    "spotifyurl": "https://open.spotify.com/artist/3dE4AKlTQ3EW6yU6F9LuQT",
    "legacy": [-94.81059549999999,40.2907281],
    "name": "Jerry Wallace"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/1f6124e8c041547dd9cabbec7f4b4224.webp",
    "location": "Big Sandy, Upshur County, Texas, United States",
    "spotifyurl": "https://open.spotify.com/artist/1FGYC9AcBsascq5DSXX1Ie",
    "legacy": [-95.1088328,32.58375210000001],
    "name": "Henry Thomas"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/8a159bdfbde24803ad2a82eed4dc13d0.webp",
    "location": "Graz, Steiermark, Austria",
    "spotifyurl": "https://open.spotify.com/artist/2vVLzxG5XjklI2jcNHZm3K",
    "legacy": [15.439504,47.070714],
    "name": "Jonny Hill"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/9a65a7fcc90945dfa99edac53c87edea.webp",
    "location": "Lancaster, Cos County, New Hampshire, United States",
    "spotifyurl": "https://open.spotify.com/artist/5Nx3gPpU2OFLI80rv7fDX5",
    "legacy": [-71.5692477,44.4889204],
    "name": "GG Allin"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a4feb37e3abc4e46ad9062f98e41ae70.webp",
    "location": "Eden, Rockingham County, North Carolina, United States",
    "spotifyurl": "https://open.spotify.com/artist/7FS3EGuBVCs09Mfs23t2Af",
    "legacy": [-79.7667026,36.4884715],
    "name": "Charlie Poole"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/7e1d2dc45e254340bc88790c76d19df7.webp",
    "location": "Pomona, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/7x83XhcMbOTl1UdYsPTuZM",
    "legacy": [-117.7499909,34.055103],
    "name": "Tom Waits"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/cec601d3c0e94d2ca20863feaf21a357.webp",
    "location": "Belfast, County Down, Northern Ireland, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/23wr9RJZg0PmYvVFyNkQ4j",
    "legacy": [-5.715766700000001,54.32769870000001],
    "name": "Gary Moore"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/15fe26485bc54344bb43d7d05705c46d.webp",
    "location": "Ripley, Surrey, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/6PAt558ZEZl0DmdXlnjMgD",
    "legacy": [-0.49327,51.300173],
    "name": "Eric Clapton"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/15fea98e1b40c8399ffbc44abef4d400.webp",
    "location": "Kutaisi, Imereti, Georgia",
    "spotifyurl": "https://open.spotify.com/artist/5uCXJWo3WoXgqv3T1RlAbh",
    "legacy": [42.7180019,42.2662428],
    "name": "Katie Melua"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/afcf14619ecc44858c207605a89f541c.webp",
    "location": "Dawson, Terrell County, Georgia, United States",
    "spotifyurl": "https://open.spotify.com/artist/60df5JBRRPcnSpsIMxxwQm",
    "legacy": [-84.4465826,31.7735001],
    "name": "Otis Redding"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/f06433d4f6ad4f33a11e777d72d148f5.webp",
    "location": "Detroit, Wayne County, Michigan, United States",
    "spotifyurl": "https://open.spotify.com/artist/4FZ3j1oH43e7cukCALsCwf",
    "legacy": [-83.0457538,42.331427],
    "name": "Jack White"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3c523e0d3b254daea30cd47f52f5dfd5.webp",
    "location": "Macclesfield, Cheshire East, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/2ScuQMRWThcifBRIvNDFDC",
    "legacy": [-2.119287,53.258663],
    "name": "John Mayall"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/9ba4b604462a92b976b7016d662895d9.webp",
    "location": "Washington, D.C., United States",
    "spotifyurl": "https://open.spotify.com/artist/4F7Q5NV6h5TSwCainz8S5A",
    "legacy": [-77.0368707,38.9071923],
    "name": "Duke Ellington"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/bb050373650c4ed9b3075c750b5da764.webp",
    "location": "Mississippi, United States",
    "spotifyurl": "https://open.spotify.com/artist/2zlMeTjA7szCmqcJjBzYXJ",
    "legacy": [-89.3985283,32.3546679],
    "name": "Skip James"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/455629b849b54455817dffb1459a8205.webp",
    "location": "West Bromwich, Sandwell, West Midlands, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/1OwarW4LEHnoep20ixRA0y",
    "legacy": [-1.995159,52.517664],
    "name": "Robert Plant"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/efa88b525abf886684eeaa0b39b1351f.webp",
    "location": "Ellensburg, Kittitas County, Washington, United States",
    "spotifyurl": "https://open.spotify.com/artist/1fpXM23IoNckJ7NDAm8YJQ",
    "legacy": [-120.5478474,46.9965144],
    "name": "Mark Lanegan"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b49376b32796456cbeac49770b5a5e60.webp",
    "location": "Boston, Suffolk County, Massachusetts, United States",
    "spotifyurl": "https://open.spotify.com/artist/5Ws3s6lSP4Un8kQf8CrAta",
    "legacy": [-71.0588801,42.3600825],
    "name": "Susan Tedeschi"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/8f5070bdc8b946b383916db5df53592a.webp",
    "location": "Newcastle upon Tyne, Tyne and Wear, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/3ICflSq6ZgYAIrm2CTkfVP",
    "legacy": [-1.61778,54.978252],
    "name": "The Animals"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/fb9883ec99e646ada2b0c24eabb227fe.webp",
    "location": "Algiers, New Orleans, Louisiana, United States",
    "spotifyurl": "https://open.spotify.com/artist/2WGyRLosdDgGJTLijIPpNC",
    "legacy": [-90.0142486,29.9214314],
    "name": "Memphis Minnie"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/0dfd69869fb547ada07e41ff5b214c25.webp",
    "location": "Kosciusko, Attala County, Mississippi, United States",
    "spotifyurl": "https://open.spotify.com/artist/4NikxGoDm5LGVYAHj0Euoc",
    "legacy": [-89.58757639999999,33.0576295],
    "name": "Charlie Musselwhite"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/2e6b69c9516049c884af514a09f79bf7.webp",
    "location": "Chicago, Cook County, Illinois, United States",
    "spotifyurl": "https://open.spotify.com/artist/6kz7WuPaUa4QVreP27I33i",
    "legacy": [-87.6297982,41.8781136],
    "name": "The Paul Butterfield Blues Band"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/202ba0b775d5a5183834407d00b41144.webp",
    "location": "Lobdell, West Baton Rouge Parish, Louisiana, United States",
    "spotifyurl": "https://open.spotify.com/artist/36hwOoNPgnsKnhoMBYpJrJ",
    "legacy": [-91.2534426,30.494912],
    "name": "Slim Harpo"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/9bbaf0753827488fbfbfae0d8bddf604.webp",
    "location": "Ripley, Lauderdale County, Tennessee, United States",
    "spotifyurl": "https://open.spotify.com/artist/00UuF3fAevVz8L0f1WfiQ6",
    "legacy": [-89.5297973,35.7453552],
    "name": "Sleepy John Estes"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/fe6b4fb54ed64405a80d430ac1259177.webp",
    "location": "Hamlet, Richmond County, North Carolina, United States",
    "spotifyurl": "https://open.spotify.com/artist/2hGh5VOeeqimQFxqXvfCUf",
    "legacy": [-79.6942222,34.8848775],
    "name": "John Coltrane"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/2257f070479545edbb92e8087ffb30b7.webp",
    "location": "Columbus, Muscogee County, Georgia, United States",
    "spotifyurl": "https://open.spotify.com/artist/1ygXiRxKSfb927vhBH1ruH",
    "legacy": [-84.9877094,32.4609764],
    "name": "Ma Rainey"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5b15c64163d64bbbb7e3bd1bff580837.webp",
    "location": "Birmingham, West Midlands, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/3i9hP422d2KMjaupTzBNVS",
    "legacy": [-1.890401,52.48624299999999],
    "name": "The Spencer Davis Group"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/667ccb5a52afc9963e8da1ee7615accf.webp",
    "location": "Newport News, Virginia, United States",
    "spotifyurl": "https://open.spotify.com/artist/49KZvkEWchga5D1uhNo1yd",
    "legacy": [-76.4730122,37.0870821],
    "name": "Blind Blake"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/54d442f14d0044aea331fc59e7169d61.webp",
    "location": "Carencro, Lafayette Parish, Louisiana, United States",
    "spotifyurl": "https://open.spotify.com/artist/4cEwEednPwWCdYT7ZhROZe",
    "legacy": [-92.04900959999999,30.317144],
    "name": "Marc Broussard"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/8649da6fa768911a2bec9430cdebb0ef.webp",
    "location": "Hinds County, Mississippi, United States",
    "spotifyurl": "https://open.spotify.com/artist/6n4r5eMU2ZUiHPPWhFDcHq",
    "legacy": [-90.37483540000001,32.2648353],
    "name": "Tommy Johnson"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ad116b864c154aeabd4ea5f9111afdd7.webp",
    "location": "Portsmouth, Virginia, United States",
    "spotifyurl": "https://open.spotify.com/artist/7Dk3koHTPpEymzuWOWzzny",
    "legacy": [-76.2982742,36.8354258],
    "name": "Deborah Coleman"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/133fc0603cf344f7c4983ce2f1676890.webp",
    "location": "Dubuisson, St. Landry Parish, Louisiana, United States",
    "spotifyurl": "https://open.spotify.com/artist/56tyBq8Ta1BdSTBs0gGhog",
    "legacy": [-92.09428609999999,30.7596398],
    "name": "Lonnie Brooks"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/7b6bb61bc481440aad65d693d699b673.webp",
    "location": "Chicago, Cook County, Illinois, United States",
    "spotifyurl": "https://open.spotify.com/artist/16vIA3JDwbJiQugWKimd2o",
    "legacy": [-87.6297982,41.8781136],
    "name": "Billy Boy Arnold"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/f352ce2113f64a2a87763baa12651a67.webp",
    "location": "Anaheim, Orange County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/3nnQpaTvKb5jCQabZefACI",
    "legacy": [-117.9143012,33.8365932],
    "name": "Jeff Buckley"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/40734b3b0bce4a5d94ef5a7670e1c2ba.webp",
    "location": "Lagos, Lagos, Nigeria",
    "spotifyurl": "https://open.spotify.com/artist/7fkVKWnSaQNFwqrR62vsSo",
    "legacy": [3.3792057,6.5243793],
    "name": "Keziah Jones"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5604d0c33f0a473893f859a0a51c4ccc.webp",
    "location": "New Cross, Lewisham, London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/0c3RL3vVEgfxD6VBv7CGak",
    "legacy": [-0.0336897,51.4769047],
    "name": "Groundhogs"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a475b8d120fad845d0022c94f378645e.webp",
    "location": "3 July 1997 (aged 60)",
    "spotifyurl": "https://open.spotify.com/artist/641QgCXSYTbRm9kigj0ABL",
    "legacy": [1,1],
    "name": "Johnny Copeland"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/66479e2db8da4777afd58fd6b5447de0.webp",
    "location": "Toronto, Ontario, Canada",
    "spotifyurl": "https://open.spotify.com/artist/4SsLXt0cHcVRhHzxXa8Wnx",
    "legacy": [-79.3831843,43.653226],
    "name": "Jeff Healey"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/1905e40de5ae4d80b37a4ed66f234818.webp",
    "location": "Philadelphia, Philadelphia County, Pennsylvania, United States",
    "spotifyurl": "https://open.spotify.com/artist/0QrowybipCKUDnq5y10PD2",
    "legacy": [-75.1652215,39.9525839],
    "name": "Amos Lee"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/dfbda899d8e54e8ebac69e3f2a11a3f5.webp",
    "location": "Okemah, Okfuskee County, Oklahoma, United States",
    "spotifyurl": "https://open.spotify.com/artist/4rAgFKtlTr66ic18YZZyF1",
    "legacy": [-96.30500640000001,35.4325854],
    "name": "Woody Guthrie"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/fc86f5007b52497bb9d1234f690479ec.webp",
    "location": "Izumo, Shimane, Japan",
    "spotifyurl": "https://open.spotify.com/artist/2jakCNqkEhdRND7btwoFOj",
    "legacy": [132.7546943,35.3670442],
    "name": "Mai Yamane"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d56d55ecff50fc816ab13cbc2616a9e5.webp",
    "location": "Vance, Quitman County, Mississippi, United States",
    "spotifyurl": "https://open.spotify.com/artist/5IrMTnoQ7OgoLpFfsisXX2",
    "legacy": [-90.3509258,34.07289],
    "name": "Sunnyland Slim"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d131dad0c5f944fea54d91915bde79c9.webp",
    "location": "Memphis, Shelby County, Tennessee, United States",
    "spotifyurl": "https://open.spotify.com/artist/4ZdfXQkef0hnTSqmhpGarA",
    "legacy": [-90.0489801,35.1495343],
    "name": "Alberta Hunter"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/2f9b20991a001e1198d6d8cc34e4bf9b.webp",
    "location": "Manhattan, New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/3DiDSECUqqY1AuBP8qtaIa",
    "legacy": [-73.9712488,40.7830603],
    "name": "Alicia Keys"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/61c427fb0a654cf996233504af763085.webp",
    "location": "Toronto, Ontario, Canada",
    "spotifyurl": "https://open.spotify.com/artist/4vpDg7Y7fU982Ds30zawDA",
    "legacy": [-79.3831843,43.653226],
    "name": "The Band"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3b5fda87127e4e0aa78327da4a8c24ee.webp",
    "location": "Austin, Travis County, Texas, United States",
    "spotifyurl": "https://open.spotify.com/artist/6kbzJ40luXJ5IKnSpWr7SD",
    "legacy": [-97.7430608,30.267153],
    "name": "Black Joe Lewis & The Honeybears"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/830c43bd43268081cff52d01acd02e26.webp",
    "location": "Burnaby, Metro Vancouver, British Columbia, Canada",
    "spotifyurl": "https://open.spotify.com/artist/1GxkXlMwML1oSg5eLPiAz3",
    "legacy": [-122.9805104,49.2488091],
    "name": "Michael Bubl"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/52137342881743379a046f0cbc95e640.webp",
    "location": "New Orleans, Louisiana, United States",
    "spotifyurl": "https://open.spotify.com/artist/0gxNgUdRvhVgeq4L3gFamF",
    "legacy": [-90.0715323,29.95106579999999],
    "name": "James Booker"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/845ebc5b55dd454b85973e40448f1619.webp",
    "location": "Opelousas, St. Landry Parish, Louisiana, United States",
    "spotifyurl": "https://open.spotify.com/artist/3LzQVHowQWbzJBwBBNRPfY",
    "legacy": [-92.081509,30.5335302],
    "name": "Clifton Chenier"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d756e7f4ffc444368799c6cc74d6ef0d.webp",
    "location": "Greenwood, Leflore County, Mississippi, United States",
    "spotifyurl": "https://open.spotify.com/artist/5WFeN8vtX0TYqv0IYVbWZT",
    "legacy": [-90.1795281,33.5162315],
    "name": "Fenton Robinson"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/06a0a4176e3396808f88e12218a833dc.webp",
    "location": "Toccoa, Stephens County, Georgia, United States",
    "spotifyurl": "https://open.spotify.com/artist/62G2r7t9N2Ad9ILHbg4Eqh",
    "legacy": [-83.3323851,34.5773206],
    "name": "Ida Cox"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/abbe924068c247209040dff980994192.webp",
    "location": "1 October 2005 (aged 55)",
    "spotifyurl": "https://open.spotify.com/artist/4vOjR5xHyCQUkJYxfWsIJs",
    "legacy": [1,1],
    "name": "Paul Pena"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/19b0c70f9ef5468cace1317a3d2f85a4.webp",
    "location": "Shaw, Bolivar County, Mississippi, United States",
    "spotifyurl": "https://open.spotify.com/artist/1TJ9XdOFUqlSduhAVV7YfR",
    "legacy": [-90.7737075,33.6017815],
    "name": "David Honeyboy Edwards"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/49849a539c6a4e9d8f652121cd0a1d65.webp",
    "location": "Newton, Middlesex County, Massachusetts, United States",
    "spotifyurl": "https://open.spotify.com/artist/3CRPAxlzHkDyhbhEQ0qTtM",
    "legacy": [-71.20922139999999,42.3370413],
    "name": "Mark Sandman"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/300a251f7ccbf3bed7d00afffea2ebfe.webp",
    "location": "Clarksdale, Coahoma County, Mississippi, United States",
    "spotifyurl": "https://open.spotify.com/artist/6zxIBQ4sNvQCSkciayJxaS",
    "legacy": [-90.5709323,34.2001086],
    "name": "Willie Brown"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ecd5d6a7414b41e7b4d1424effe8f065.webp",
    "location": "Holmes County, Mississippi, United States",
    "spotifyurl": "https://open.spotify.com/artist/69mMUlfVNVGQsw733rBShc",
    "legacy": [-90.0746767,33.16886600000001],
    "name": "Jimmy Dawkins"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5c9c9c438fa04ecea1e75104daf41431.webp",
    "location": "Boise, Ada County, Idaho, United States",
    "spotifyurl": "https://open.spotify.com/artist/2bNtosg6E8tvmN6wYxPCfu",
    "legacy": [-116.2023137,43.6150186],
    "name": "Curtis Stigers"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/53ce65c7d845422fb52cf6fabfa33fde.webp",
    "location": "Harlem, Manhattan, New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/1aTDTChWWyiJH3SEnYrdVp",
    "legacy": [-73.9464769,40.8115504],
    "name": "Taj Mahal & Toumani Diabate"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/dfa69789313e46cabb928be85e3d6258.webp",
    "location": "Saskatoon, Rural Municipality of Corman Park, Saskatchewan, Canada",
    "spotifyurl": "https://open.spotify.com/artist/4U33udokhmKATsu8UoqUEN",
    "legacy": [-106.6701577,52.157902],
    "name": "The Sheepdogs"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/f57b8492fe3e408fc021bb5fbaa2bee1.webp",
    "location": "Norfolk, Virginia, United States",
    "spotifyurl": "https://open.spotify.com/artist/4jXfFzeP66Zy67HM2mvIIF",
    "legacy": [-76.28587259999999,36.8507689],
    "name": "Bill Evans"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/982e8b1fdba145a1be6d33f603f6024f.webp",
    "location": "Covington, Tipton County, Tennessee, United States",
    "spotifyurl": "https://open.spotify.com/artist/3IKV7o6WPphDB7cCWXaG3E",
    "legacy": [-89.6464641,35.5699659],
    "name": "Isaac Hayes"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/f48b444da69a42d5baf06d2ddb235188.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/6x33CmZWo2Ve4hxYl2Craq",
    "legacy": [-0.1277583,51.5073509],
    "name": "Foghat"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5556faaa0ffc4ba0b1c76d230baf5fd5.webp",
    "location": "Stafford, Staffordshire, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/4eeRviM714mXXeILmKHxh2",
    "legacy": [-2.12066,52.806693],
    "name": "Climax Blues Band"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/1e5e1f4e46f14a6d9d4b60729a4232fe.webp",
    "location": "Lugoff, Kershaw County, South Carolina, United States",
    "spotifyurl": "https://open.spotify.com/artist/2ttm3uT0N1RN7vwKv1pQgh",
    "legacy": [-80.6892486,34.2273712],
    "name": "Brook Benton"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/1831b1c4e251da4f9f2e346995583b86.webp",
    "location": "Walnut Ridge, Lawrence County, Arkansas, United States",
    "spotifyurl": "https://open.spotify.com/artist/7lTZRLYcjbgGHXCA1VCYDT",
    "legacy": [-90.9559534,36.0684035],
    "name": "Washboard Sam"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a8adffc6603a4e94854446aa85c14819.webp",
    "location": "Luton, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/0O9Mz12rueCsrgUqItvvnw",
    "legacy": [-0.4200255,51.8786707],
    "name": "Blodwyn Pig"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/e7ffed60cb5b45eaa0b0766a39fbd21d.webp",
    "location": "Smithville, Lee County, Georgia, United States",
    "spotifyurl": "https://open.spotify.com/artist/1BUnRZrkCS0NoTiXefkW6U",
    "legacy": [-84.2518549,31.9004451],
    "name": "Bessie Jones"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c45f3d28aecc4c4e9d1a7e6e949c402e.webp",
    "location": "East Haddon, Northamptonshire, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/5x9DWz6SpEVu9NgL8aktm2",
    "legacy": [-1.022184,52.30736779999999],
    "name": "Long John Baldry"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/1910a60f4f3941fd9c6b50bba32b62ae.webp",
    "location": "Worcester, Worcester County, Massachusetts, United States",
    "spotifyurl": "https://open.spotify.com/artist/69Mj3u4FTUrpyeGNSIaU6F",
    "legacy": [-71.8022934,42.2625932],
    "name": "The J. Geils Band"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ee8208dcb590415fbc4c4624cc6a0f1b.webp",
    "location": "Sunflower, Sunflower County, Mississippi, United States",
    "spotifyurl": "https://open.spotify.com/artist/7nc1uZa6SAT2mgrvoQfn5A",
    "legacy": [-90.5370327,33.5428954],
    "name": "Matt Guitar Murphy"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/1d37476c09f2445ca7f5eb19cb2c842d.webp",
    "location": "Detroit, Wayne County, Michigan, United States",
    "spotifyurl": "https://open.spotify.com/artist/3RwQ26hR2tJtA8F9p2n7jG",
    "legacy": [-83.0457538,42.331427],
    "name": "The Temptations"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/548638b15644421d78c67436b690e9b0.webp",
    "location": "Houston, Harris County, Texas, United States",
    "spotifyurl": "https://open.spotify.com/artist/1YZEoYFXx4AxVv13OiOPvZ",
    "legacy": [-95.3698028,29.7604267],
    "name": "Devendra Banhart"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/29584bddc25788e1faa03cd0f20e21e1.webp",
    "location": "Broken Arrow, Tulsa County, Oklahoma, United States",
    "spotifyurl": "https://open.spotify.com/artist/6u5mhJXgAKPTj6YVlZSPY9",
    "legacy": [-95.7974526,36.060949],
    "name": "JD McPherson"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/442fab1b44004983bd662a11a04dbd10.webp",
    "location": "Camden, Madison County, Mississippi, United States",
    "spotifyurl": "https://open.spotify.com/artist/1CePnHlc38UfIQovWgyzKP",
    "legacy": [-89.83869229999999,32.7823556],
    "name": "John Primer"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ffc0bffbb4dd44d785e9d53e08bd35e2.webp",
    "location": "Welwyn Garden City, Hertfordshire, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/4tkgLX1wdWoOu2lyeQNYAi",
    "legacy": [-0.208661,51.8031689],
    "name": "Mick Taylor"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/48ae094b07894b4997159e4754b273e0.webp",
    "location": "Nutbush, Haywood County, Tennessee, United States",
    "spotifyurl": "https://open.spotify.com/artist/1zuJe6b1roixEKMOtyrEak",
    "legacy": [-89.40812799999999,35.698133],
    "name": "Tina Turner"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/751f421bac14430eaa394d811dc68b51.webp",
    "location": "Baltimore, Maryland, United States",
    "spotifyurl": "https://open.spotify.com/artist/5P4TApNF9FIFXslKNjkHIO",
    "legacy": [-76.6121893,39.2903848],
    "name": "The Flying Eyes"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b7c3c688d0a741a5a6b44ccb47991900.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/5OKH5D3pnex9U9n7BFLEbe",
    "legacy": [-118.2436596,34.0522265],
    "name": "Marc Ford"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/87003bb8e62f4b84bfc82a3aade76a48.webp",
    "location": "Tombouctou, Mali",
    "spotifyurl": "https://open.spotify.com/artist/3mNygoyrEKLgo6sx0MzwOL",
    "legacy": [-3.0025615,16.7665887],
    "name": "Ali Farka Tour & Toumani Diabat"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c1c30559c208451ca160fad46f2f6d54.webp",
    "location": "Alabama, United States",
    "spotifyurl": "https://open.spotify.com/artist/08gtYmlAOxTdfxZEmsz3E2",
    "legacy": [-86.902298,32.3182314],
    "name": "Kenny Brown"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/87003bb8e62f4b84bfc82a3aade76a48.webp",
    "location": "Tombouctou, Mali",
    "spotifyurl": "https://open.spotify.com/artist/3mNygoyrEKLgo6sx0MzwOL",
    "legacy": [-3.0025615,16.7665887],
    "name": "Ali Farka Tour & Toumani Diabat"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c1c30559c208451ca160fad46f2f6d54.webp",
    "location": "Alabama, United States",
    "spotifyurl": "https://open.spotify.com/artist/08gtYmlAOxTdfxZEmsz3E2",
    "legacy": [-86.902298,32.3182314],
    "name": "Kenny Brown"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/87003bb8e62f4b84bfc82a3aade76a48.webp",
    "location": "Tombouctou, Mali",
    "spotifyurl": "https://open.spotify.com/artist/3mNygoyrEKLgo6sx0MzwOL",
    "legacy": [-3.0025615,16.7665887],
    "name": "Ali Farka Tour & Toumani Diabat"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c1c30559c208451ca160fad46f2f6d54.webp",
    "location": "Alabama, United States",
    "spotifyurl": "https://open.spotify.com/artist/08gtYmlAOxTdfxZEmsz3E2",
    "legacy": [-86.902298,32.3182314],
    "name": "Kenny Brown"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/0675c5fd124c4c269a86f8ba9fc0e32d.webp",
    "location": "Abingdon-on-Thames, Oxfordshire, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/4Z8W4fKeB5YxbusRsdQVPb",
    "legacy": [-1.2879529,51.67078],
    "name": "Radiohead"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/fd3dc6d95c663dd05adfe976dc276053.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/4gzpq5DPGxSnKTe4SA8HAU",
    "legacy": [-0.1277583,51.5073509],
    "name": "Coldplay"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b32e9593c818423db76a85e00bf40ee7.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/2d0hyoQ5ynDBnkvAbJKORj",
    "legacy": [-118.2436596,34.0522265],
    "name": "Rage Against the Machine"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/20d9729683904ee499f6079f0de188d3.webp",
    "location": "Cleveland, Cuyahoga County, Ohio, United States",
    "spotifyurl": "https://open.spotify.com/artist/0X380XXQSNBYuleKzav5UO",
    "legacy": [-81.6943605,41.49932],
    "name": "Nine Inch Nails"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/fa61fd604cb24c3ba4dfeba66ec3777a.webp",
    "location": "Madison, Dane County, Wisconsin, United States",
    "spotifyurl": "https://open.spotify.com/artist/6S0GHTqz5sxK5f9HtLXn9q",
    "legacy": [-89.4012302,43.0730517],
    "name": "Garbage"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a84dfb67b76056668da68a7503e43946.webp",
    "location": "Sacramento, Sacramento County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/6Ghvu1VvMGScGpOUJBAHNH",
    "legacy": [-121.4943996,38.5815719],
    "name": "Deftones"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/53dcfaf699579c3f99fd8b546228463c.webp",
    "location": "Las Vegas, Clark County, Nevada, United States",
    "spotifyurl": "https://open.spotify.com/artist/20JZFwl6HVl6yg8a4H3ZqK",
    "legacy": [-115.1398296,36.1699412],
    "name": "Panic! at the Disco"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/de5bdf5cbc4c46baa74622b887719507.webp",
    "location": "Brighton, Brighton and Hove, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/1GLtl8uqKmnyCWxHmw9tL4",
    "legacy": [-0.137163,50.82253000000001],
    "name": "The Kooks"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/341b0b9406e36d6052b04adb52193bbb.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/04gDigrS5kc9YWfZHwBETP",
    "legacy": [-118.2436596,34.0522265],
    "name": "Maroon 5"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/09feb7c42d4f46dbae2d03eb9e300214.webp",
    "location": "Ontario, Canada",
    "spotifyurl": "https://open.spotify.com/artist/08yf5A2nS4XEeNvabDXqyg",
    "legacy": [-85.323214,51.253775],
    "name": "Billy Talent"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/67c44fbb1eaa431f8ffdee279357490f.webp",
    "location": "Basildon, Essex, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/762310PdDnwsDxAQxzQkfX",
    "legacy": [0.488736,51.57608399999999],
    "name": "Depeche Mode"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/4e0abe14ffd64a6d8c8dc4a7e7ae1036.webp",
    "location": "Beirut, Beyrouth, Lebanon",
    "spotifyurl": "https://open.spotify.com/artist/0BEI7i5sgUuivcfwXLzFmM",
    "legacy": [35.5017767,33.8937913],
    "name": "Serj Tankian"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/7040bed251984c808394d15f93dae935.webp",
    "location": "New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/5BvJzeQpmsdsFp4HGUYUEx",
    "legacy": [-74.0059728,40.7127753],
    "name": "Vampire Weekend"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/8cdd3891a5eb4c7194c56a0246d2d770.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/5PokPZn11xzZXyXSfnvIM3",
    "legacy": [-118.2436596,34.0522265],
    "name": "Lifehouse"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/2eee8161d3b946a68eeafc1912cef517.webp",
    "location": "Springfield, Hampden County, Massachusetts, United States",
    "spotifyurl": "https://open.spotify.com/artist/5KDIH2gF0VpelTqyQS7udb",
    "legacy": [-72.589811,42.1014831],
    "name": "Staind"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a931254b858b446587189b259ae39798.webp",
    "location": "Calgary, Alberta, Canada",
    "spotifyurl": "https://open.spotify.com/artist/5e1BZulIiYWPRm8yogwUYH",
    "legacy": [-114.0718831,51.04473309999999],
    "name": "Tegan and Sara"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d0d46fdca2fa46bba983df73c322a038.webp",
    "location": "Manhattan, New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/5gznATMVO85ZcLTkE9ULU7",
    "legacy": [-73.9712488,40.7830603],
    "name": "Lenny Kravitz"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/33b8dfa04adf49d39979f820baeb05fa.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/78SHxLdtysAXgywQ4vE0Oa",
    "legacy": [-0.1277583,51.5073509],
    "name": "Bush"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d2e7215d67c221732dbbf235a68ad15a.webp",
    "location": "Stockton, San Joaquin County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/3inCNiUr4R6XQ3W43s9Aqi",
    "legacy": [-121.1710389,37.9175935],
    "name": "Pavement"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ba4ea0c5dcd84d1bb8d6a8a9f06d3755.webp",
    "location": "New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/2SVw939fwuqSobLjF8u78b",
    "legacy": [-74.0059728,40.7127753],
    "name": "Gogol Bordello"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a7022916197c43748b4356c9d9d6c6b0.webp",
    "location": "Sankt-Peterburg, Russian Federation",
    "spotifyurl": "https://open.spotify.com/artist/4tKLTMWeWpt6wtd0PUK56R",
    "legacy": [30.3609096,59.9310584],
    "name": "Animal z"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/2de05be536764927b057c1e7fb21f455.webp",
    "location": "Omaha, Douglas County, Nebraska, United States",
    "spotifyurl": "https://open.spotify.com/artist/41Q0HrwWBtuUkJc7C1Rp6K",
    "legacy": [-95.9345034,41.2565369],
    "name": "311"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/e208e5e661e6e0e84f03278a69236802.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/7gP3bB2nilZXLfPHJhMdvc",
    "legacy": [-118.2436596,34.0522265],
    "name": "Foster the People"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/492b4c158362463fa6599106e0905a83.webp",
    "location": "Liverpool, Merseyside, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/1PbBg2aYjWLKRk84zJK15x",
    "legacy": [-2.9915726,53.4083714],
    "name": "Echo & the Bunnymen"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/23d61f1dc4164b6aafb2fddffe540f69.webp",
    "location": "Jacksonville, Duval County, Florida, United States",
    "spotifyurl": "https://open.spotify.com/artist/3zxKH0qp3nBCuPZCZT5Vaf",
    "legacy": [-81.65565099999999,30.3321838],
    "name": "Yellowcard"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ee29ae68f8ba44c0c418a131e3d65cdf.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/5HlXA01kcjssYDT7EoqUJF",
    "legacy": [-0.1277583,51.5073509],
    "name": "Skunk Anansie"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c8dc191e4db24e0cb5a1a36e7d4c61e6.webp",
    "location": "Pomona, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/45lorWzrKLxfKlWpV7r9CN",
    "legacy": [-117.7499909,34.055103],
    "name": "Ben Harper"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/1e64cefcfc321051dfa504a00a4613a3.webp",
    "location": "Omaha, Douglas County, Nebraska, United States",
    "spotifyurl": "https://open.spotify.com/artist/2ApaG60P4r0yhBoDCGD8YG",
    "legacy": [-95.9345034,41.2565369],
    "name": "Elliott Smith"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/816b7dde092a400395115916f237c302.webp",
    "location": "Los Gatos, Santa Clara County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/1UdQqCUR7RwB9YYJONwbdM",
    "legacy": [-121.9623751,37.2358078],
    "name": "Trapt"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ce5ec4c83b534b859d86d2abc81a510b.webp",
    "location": "Amherst, Cumberland County, Nova Scotia, Canada",
    "spotifyurl": "https://open.spotify.com/artist/6CWTBjOJK75cTE8Xv8u1kj",
    "legacy": [-64.2167206,45.816667],
    "name": "Feist"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/48ad57a207704f06b70cc7f8a2ecb652.webp",
    "location": "Staines-upon-Thames, Surrey, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/14Gi3Uph96lpNB3utkoVAD",
    "legacy": [-0.515525,51.43148],
    "name": "Hard-Fi"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/23ff6b966edf41ea943fe2a53a8ede26.webp",
    "location": "Huntington Beach, Orange County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/6GH0NzpthMGxu1mcfAkOde",
    "legacy": [-117.9988026,33.6594835],
    "name": "Hellogoodbye"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/035f6f8be5db47d7a89ac65c9b2c9f70.webp",
    "location": "Brooklyn, New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/57dN52uHvrHOxijzpIgu3E",
    "legacy": [-73.9441579,40.6781784],
    "name": "Ratatat"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/e56ef475b8ed48e782cd422865d203fe.webp",
    "location": "Orlando, Orange County, Florida, United States",
    "spotifyurl": "https://open.spotify.com/artist/4DWX7u8BV0vZIQSpJQQDWU",
    "legacy": [-81.3792365,28.5383355],
    "name": "Alter Bridge"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/f61b8841987d4fc4bd6ec73d5ce2678e.webp",
    "location": "Stockholm, Stockholm municipality, Stockholms ln, Sweden",
    "spotifyurl": "https://open.spotify.com/artist/6u11Qbko2N2hP4lTBYjX86",
    "legacy": [17.9672428,59.31706999999999],
    "name": "Peter Bjorn and John"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/2b861b7d4f784804aa864bb9a63cd7bb.webp",
    "location": "Paddington, Westminster, London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/2BGRfQgtzikz1pzAD0kaEn",
    "legacy": [-0.174943,51.515973],
    "name": "Elvis Costello"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/e3b04fb226f0c22950b2dfe708fc3041.webp",
    "location": "Akron, Summit County, Ohio, United States",
    "spotifyurl": "https://open.spotify.com/artist/0UKfenbZb15sqhfPC6zbt3",
    "legacy": [-81.51900529999999,41.0814447],
    "name": "Devo"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/7d90b33457b541b69c76bf5057b10afc.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/0jJNGWrpjGIHUdTTJiIYeB",
    "legacy": [-118.2436596,34.0522265],
    "name": "The Wallflowers"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/2719b32e3fdb40a5b5703ced8ce1d8c6.webp",
    "location": "Arlington County, Virginia, United States",
    "spotifyurl": "https://open.spotify.com/artist/7w0qj2HiAPIeUcoPogvOZ6",
    "legacy": [-77.09098089999999,38.8816208],
    "name": "Rachael Yamagata"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a207920b14ba43a5adaa82f690329001.webp",
    "location": "Ealing, London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/6J7biCazzYhU3gM9j1wfid",
    "legacy": [-0.3413965,51.5250366],
    "name": "Jamiroquai"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a9f3c0543d064fcda6234c95cbb5bf6f.webp",
    "location": "Brisbane, Queensland, Australia",
    "spotifyurl": "https://open.spotify.com/artist/3NRFinRTEqUCfaTTZmk8ek",
    "legacy": [153.0251235,-27.4697707],
    "name": "Savage Garden"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/939382fa6fac408f1bfb9d90bd27d5cd.webp",
    "location": "Modesto, Stanislaus County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/3W4xM5XYtUp4ifYYPVKVdk",
    "legacy": [-120.9970014,37.6392595],
    "name": "Grandaddy"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/63db05dd1f2d4faf844a04376745669c.webp",
    "location": "Prestwich, Bury, Greater Manchester, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/5fuQrhMRYMtoO9uOlFad4P",
    "legacy": [-2.28064,53.52703899999999],
    "name": "The Fall"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/419614dff1f347a69567f915bc1fcd1b.webp",
    "location": "Kapellen, Antwerpen, Flanders, Belgium",
    "spotifyurl": "https://open.spotify.com/artist/1lO13Grp3I1AsIbcACRWvv",
    "legacy": [4.432400400000001,51.3140004],
    "name": "K's Choice"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/2952fe3f2a2f2f2110220725c2a60333.webp",
    "location": "Wandsworth, London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/3iOvXCl6edW5Um0fXEBRXy",
    "legacy": [-0.1896638,51.45682739999999],
    "name": "The xx"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/6b5bdaa73fc749dfb6e3f0e0cc71149c.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/3kGZSkar6fss8HWhrh4Kvj",
    "legacy": [-0.1277583,51.5073509],
    "name": "Curve"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/db6de1e2d51b4c7f947124d8b7118ede.webp",
    "location": "Newport Beach, Orange County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/4uN3DsfENc7dp0OLO0FEIb",
    "legacy": [-117.9298493,33.6188829],
    "name": "Sugar Ray"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a034decf4b40497caab2e095c907f39c.webp",
    "location": "Memphis, Shelby County, Tennessee, United States",
    "spotifyurl": "https://open.spotify.com/artist/7enBrBojgBJuPPdqTq4Z5F",
    "legacy": [-90.0489801,35.1495343],
    "name": "Citizen Cope"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/38ef7b52fd8d48058ed5d17e27963821.webp",
    "location": "Dereham, Norfolk, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/6cLEWhEKQl6nAvgr60M7zC",
    "legacy": [0.937827,52.68161800000001],
    "name": "Beth Orton"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/56c19a61ddbb0c3cdf3e40a8945b081e.webp",
    "location": "Salford, Salford, Greater Manchester, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/2wvUfjKGoXvcnDHq7GgMOa",
    "legacy": [-2.2901264,53.48752349999999],
    "name": "The Ting Tings"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/bc39c7f97d4f5682ea076551ce480aab.webp",
    "location": "Harrow, London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/5vBKu1igxFo6g1sHADkIdg",
    "legacy": [-0.341995,51.580559],
    "name": "Kate Nash"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/7372a61c4d55428889e443ee366f3813.webp",
    "location": "Stockholm, Stockholm municipality, Stockholms ln, Sweden",
    "spotifyurl": "https://open.spotify.com/artist/4rGrN4XDYhP6dUAZMvcuHr",
    "legacy": [17.9672428,59.31706999999999],
    "name": "Caesars"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/6d2b14768d06470392d5cfa263992181.webp",
    "location": "Jacksonville, Onslow County, North Carolina, United States",
    "spotifyurl": "https://open.spotify.com/artist/2qc41rNTtdLK0tV3mJn2Pm",
    "legacy": [-77.4302414,34.7540524],
    "name": "Ryan Adams"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b01923b599904404ba105ce55ac58a59.webp",
    "location": "Chicago, Cook County, Illinois, United States",
    "spotifyurl": "https://open.spotify.com/artist/1RCoE2Dq19lePKhPzt9vM5",
    "legacy": [-87.6297982,41.8781136],
    "name": "The Hush Sound"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b56a077c0c88d17da6b35be4f2a55cf0.webp",
    "location": "Ulm, Baden-Wrttemberg, Germany",
    "spotifyurl": "https://open.spotify.com/artist/5WvEHnWRNfz9AOLYclfsLM",
    "legacy": [9.987607599999999,48.4010822],
    "name": "Die Happy"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/73c8f562114a3fe8f7968722e579384a.webp",
    "location": "Canberra, Australian Capital Territory, Australia",
    "spotifyurl": "https://open.spotify.com/artist/2ZfogSsOWP4mVfEqfpLXCt",
    "legacy": [149.1300092,-35.2809368],
    "name": "The Church"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/bbb950b261b8a28a04615badc57beb42.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/5LXEAEGrpKQtpyCu2sZuWu",
    "legacy": [-118.2436596,34.0522265],
    "name": "Oingo Boingo"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d50a98097a3e4705a7b4324712d7e796.webp",
    "location": "Stockholm, Stockholm municipality, Stockholms ln, Sweden",
    "spotifyurl": "https://open.spotify.com/artist/7gPBpCNPTXfU4B6GJ17CwL",
    "legacy": [17.9672428,59.31706999999999],
    "name": "Stina Nordenstam"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/60c10f4ab5074f41a0855456e251abc7.webp",
    "location": "Denton, Denton County, Texas, United States",
    "spotifyurl": "https://open.spotify.com/artist/4YsP5zmteLQ7etNjHAOu30",
    "legacy": [-97.13306829999999,33.2148412],
    "name": "Midlake"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/65a4352455bd49d6c9199347be5e3f4f.webp",
    "location": "Birmingham, Jefferson County, Alabama, United States",
    "spotifyurl": "https://open.spotify.com/artist/1ET1wIkDmuCBC80XcTr3Sg",
    "legacy": [-86.8103567,33.5185892],
    "name": "The Pierces"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/4a3155395b6482c3becf4e84a277f62b.webp",
    "location": "Hammersmith, Hammersmith and Fulham, London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/13saZpZnCDWOI9D4IJhp1f",
    "legacy": [-0.223731,51.491187],
    "name": "Lily Allen"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a2745af1a253d6274c4e72dc55c643e3.webp",
    "location": "Eugene, Lane County, Oregon, United States",
    "spotifyurl": "https://open.spotify.com/artist/2NQEwAVHBNcI0tGMLlWwF1",
    "legacy": [-123.0867536,44.0520691],
    "name": "Mat Kearney"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/1c165c0f8a5a42d0989c0388ee456dc3.webp",
    "location": "San Diego, San Diego County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/60NKN6tZYKbkjX1qpFQIqF",
    "legacy": [-117.1610966,32.7157305],
    "name": "Louis XIV"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/6c4af62665fc460ba0996a3f4e07ef4f.webp",
    "location": "Northport, Suffolk County, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/4mYFgEjpQT4IKOrjOUKyXu",
    "legacy": [-73.3431727,40.9009313],
    "name": "Wheatus"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/657e6f8e1da6436f884c49842d90fe29.webp",
    "location": "Bath, Somerset, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/4bthk9UfsYUYdcFyqxmSUU",
    "legacy": [-2.3590167,51.3810641],
    "name": "Tears for Fears"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/640a8ac1ca1e45bc8277d9c3b2a7dec1.webp",
    "location": "Phoenix, Maricopa County, Arizona, United States",
    "spotifyurl": "https://open.spotify.com/artist/4P0eS4QK9qeUhqrapGsJKS",
    "legacy": [-112.0740373,33.4483771],
    "name": "Chester Bennington"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5dcd63b96af846ca8fa1032f55753e6f.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/6sIZakv0uaA3qQmOOPTOQt",
    "legacy": [-0.1277583,51.5073509],
    "name": "Piano Magic"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/1bc299d25ab546e3a874be5dabaaa88e.webp",
    "location": "Helmsley, North Yorkshire, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/0V6iWD05yAOe1C3pJpbMbk",
    "legacy": [-1.0562636,54.24650579999999],
    "name": "One Night Only"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/60fde0852d084ca1a3f0bd14131a0e99.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/6cQ3KWVz7xm7TrML8XxgsW",
    "legacy": [-118.2436596,34.0522265],
    "name": "One Day as a Lion"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/30bb1d35c7eb6e3fb280da5f262b6b9f.webp",
    "location": "Princeton, Mercer County, New Jersey, United States",
    "spotifyurl": "https://open.spotify.com/artist/5gWhlJBlLQGLOgYWO8lwCU",
    "legacy": [-74.6672226,40.3572976],
    "name": "Saves the Day"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/9df63527098c404c9c52f0707e74ce7c.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/4L1GzFX6FhzqZTNyNIGXjQ",
    "legacy": [-0.1277583,51.5073509],
    "name": "Test Icicles"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/dd64c2c0c12c473b8849279e83a78e5a.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/4q3ewBCX7sLwd24euuV69X",
    "legacy": [-0.1277583,51.5073509],
    "name": "ba"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/10c99ce5ef394df49f62b369cce2a278.webp",
    "location": "Sydney, New South Wales, Australia",
    "spotifyurl": "https://open.spotify.com/artist/75jU2q0uEWzSIlqRJtedJV",
    "legacy": [151.2092955,-33.8688197],
    "name": "Sarah Blasko"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/38ba75f35a63cbe0bdee4b2610010a39.webp",
    "location": "Warsaw, Mazowieckie, Poland",
    "spotifyurl": "https://open.spotify.com/artist/7xzK8IR2IApUJqO2jVmmIo",
    "legacy": [21.0122287,52.2296756],
    "name": "The Car Is On Fire"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/10c99ce5ef394df49f62b369cce2a278.webp",
    "location": "Sydney, New South Wales, Australia",
    "spotifyurl": "https://open.spotify.com/artist/75jU2q0uEWzSIlqRJtedJV",
    "legacy": [151.2092955,-33.8688197],
    "name": "Sarah Blasko"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/38ba75f35a63cbe0bdee4b2610010a39.webp",
    "location": "Warsaw, Mazowieckie, Poland",
    "spotifyurl": "https://open.spotify.com/artist/7xzK8IR2IApUJqO2jVmmIo",
    "legacy": [21.0122287,52.2296756],
    "name": "The Car Is On Fire"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/10c99ce5ef394df49f62b369cce2a278.webp",
    "location": "Sydney, New South Wales, Australia",
    "spotifyurl": "https://open.spotify.com/artist/75jU2q0uEWzSIlqRJtedJV",
    "legacy": [151.2092955,-33.8688197],
    "name": "Sarah Blasko"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/38ba75f35a63cbe0bdee4b2610010a39.webp",
    "location": "Warsaw, Mazowieckie, Poland",
    "spotifyurl": "https://open.spotify.com/artist/7xzK8IR2IApUJqO2jVmmIo",
    "legacy": [21.0122287,52.2296756],
    "name": "The Car Is On Fire"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/fab82cfe8d43b5ae140788bf38a63683.webp",
    "location": "Salzburg, Salzburg, Austria",
    "spotifyurl": "https://open.spotify.com/artist/4NJhFmfw43RLBLjQvxDuRS",
    "legacy": [13.05501,47.80949],
    "name": "Wolfgang Amadeus Mozart"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/8bbb93425d8b4db28a2f63c89cdef1cd.webp",
    "location": "Bonn, Nordrhein-Westfalen, Germany",
    "spotifyurl": "https://open.spotify.com/artist/2wOqMjp9TyABvtHdOSOTUS",
    "legacy": [7.0982068,50.73743],
    "name": "Ludwig van Beethoven"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/81085aa10c9a4c6090edee8583b1bc13.webp",
    "location": "Turin, Torino, Piemonte, Italy",
    "spotifyurl": "https://open.spotify.com/artist/2uFUBdaVGtyMqckSeCl0Qj",
    "legacy": [7.686864,45.0703393],
    "name": "Ludovico Einaudi"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ef7cd45a57ed5efcad14cc11bf6377c3.webp",
    "location": "Toronto, Ontario, Canada",
    "spotifyurl": "https://open.spotify.com/artist/0OcclcP5o8VKH2TRqSY2A7",
    "legacy": [-79.3831843,43.653226],
    "name": "Howard Shore"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/0f4479216cce4995c9b3b0262571dfdf.webp",
    "location": "Coventry, West Midlands, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/01xiB0IlXMXy3wrrotgDnU",
    "legacy": [-1.519693,52.406822],
    "name": "Clint Mansell"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/fc7b2febf9c5404dade5db567f19e3bb.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/6cXMpsP9x0SH4kFfMyVezF",
    "legacy": [-118.2436596,34.0522265],
    "name": "Josh Groban"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5c3bd627a6e24f3eae9b6000a0d84af1.webp",
    "location": "Bielsko-Biaa, lskie, Poland",
    "spotifyurl": "https://open.spotify.com/artist/3gGbSXSwHWmrUBIG9IUAau",
    "legacy": [19.0583845,49.8223768],
    "name": "Zbigniew Preisner"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/446a2da1716f489e91b8a4e4a841b556.webp",
    "location": "lskie, Poland",
    "spotifyurl": "https://open.spotify.com/artist/5PIshNx38qyLggwpqRhRRI",
    "legacy": [22.0561488,53.7353775],
    "name": "Henryk Grecki"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ceb98186779949a7baaecd9677ff6286.webp",
    "location": "Fusignano, Ravenna, Emilia-Romagna, Italy",
    "spotifyurl": "https://open.spotify.com/artist/5dmMpIyAVaH6b9FLFgWPrF",
    "legacy": [11.9639564,44.46693],
    "name": "Arcangelo Corelli"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/cce5797eb50d457cb049eb7765417ec7.webp",
    "location": "Tel Aviv, Tel-Aviv, Israel",
    "spotifyurl": "https://open.spotify.com/artist/0hIG9FXgjQxT8fKaYceFbA",
    "legacy": [34.78176759999999,32.0852999],
    "name": "Itzhak Perlman"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/2c2c5be38b2c40f7923c9174876ec748.webp",
    "location": "Lviv, L'vivs'ka Oblast', Ukraine",
    "spotifyurl": "https://open.spotify.com/artist/6McH9ZlRL24gW6Bt4fpqad",
    "legacy": [24.029717,49.839683],
    "name": "Wojciech Kilar"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/db6b860fa39848caa05c7edc6f33855e.webp",
    "location": "Cologne, Nordrhein-Westfalen, Germany",
    "spotifyurl": "https://open.spotify.com/artist/4OihBPCQzR4GfbzqOY69Xm",
    "legacy": [6.9602786,50.937531],
    "name": "Jacques Offenbach"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/814930a2ed54490a8290a69ce6df66cb.webp",
    "location": "Konin, Wielkopolskie, Poland",
    "spotifyurl": "https://open.spotify.com/artist/6ajp0mepNWwjGZ9ivlqqaT",
    "legacy": [18.251073,52.2230334],
    "name": "Jan A.P. Kaczmarek"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/240d3c8872fa4d97a2640300a8ee49a3.webp",
    "location": "Lawrence, Essex County, Massachusetts, United States",
    "spotifyurl": "https://open.spotify.com/artist/2LmyJyCF5V1eQyvHgJNbTn",
    "legacy": [-71.1631137,42.7070354],
    "name": "Leonard Bernstein"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/817cfa7f856e499da03bab9423d0e485.webp",
    "location": "Bak, Azerbaijan",
    "spotifyurl": "https://open.spotify.com/artist/50hiYMhi0g77BOkkQ4zebB",
    "legacy": [49.8670924,40.40926169999999],
    "name": "Mstislav Rostropovich"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/cfa6d670195c4811800723799a7ccf28.webp",
    "location": "York, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/7ctAOUlIAs7yuMODWE2Fyz",
    "legacy": [-1.0872979,53.95996510000001],
    "name": "John Barry"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/bb0dd58d90eb4aedca4b145d53d4c2c8.webp",
    "location": "Danbury, Fairfield County, Connecticut, United States",
    "spotifyurl": "https://open.spotify.com/artist/73s17iW5LTtXRMVoofi9sU",
    "legacy": [-73.4540111,41.394817],
    "name": "Charles Ives"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/059ccfb757704c019069697dbfd3912f.webp",
    "location": "Novgorodskaya oblast', Russian Federation",
    "spotifyurl": "null",
    "legacy": [32.566519,58.2427552],
    "name": "  "
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/7b03e72530e941cec17bb55a1a8f281c.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/3PfJE6ebCbCHeuqO4BfNeA",
    "legacy": [-0.1277583,51.5073509],
    "name": "London Philharmonic Orchestra"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ea5c8cdabd7a488d938b72eadda1a2e7.webp",
    "location": "Moskva, Russian Federation",
    "spotifyurl": "https://open.spotify.com/artist/71kYWgqr6eHLOZj6u3JTuJ",
    "legacy": [37.6172999,55.755826],
    "name": "Evgeny Kissin"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/66643268fc6143afb9847aad44912786.webp",
    "location": "Shenyang, Liaoning, China",
    "spotifyurl": "https://open.spotify.com/artist/1YZhNFBxkEB5UKTgMDvot4",
    "legacy": [123.431472,41.805699],
    "name": "Lang Lang"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b021f2fdb01e5c7257aadbd4dd65cc4e.webp",
    "location": "La Spezia, La Spezia, Liguria, Italy",
    "spotifyurl": "https://open.spotify.com/artist/1jn3OKI59KA2OJEwkUfaI6",
    "legacy": [9.824082599999999,44.1024504],
    "name": "Giacinto Scelsi"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5007daf5b0684c2f970303170059bc58.webp",
    "location": "Mar del Plata, Buenos Aires, Argentina",
    "spotifyurl": "https://open.spotify.com/artist/7dsugSamBB7enWE2IrlbFg",
    "legacy": [-57.5426106,-38.0054771],
    "name": "Astor Piazzolla"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/30bc445b0e1c45b0868a66e6971d0ba1.webp",
    "location": "Napoli, Napoli, Campania, Italy",
    "spotifyurl": "https://open.spotify.com/artist/2uB3KPGd1ZUGRsox7N1iH5",
    "legacy": [14.26812,40.8517983],
    "name": "Enrico Caruso"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/0b75ebc744c447a4a756d38cb8f90771.webp",
    "location": "Brno, Brno-venkov, Jihomoravsk kraj, Czech Republic",
    "spotifyurl": "https://open.spotify.com/artist/3PvnWE1kf8UcjQnlFUhD5B",
    "legacy": [16.6068371,49.1950602],
    "name": "Magdalena Koen"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/385734d80f614693b59d728b739e53e8.webp",
    "location": "Soest, Utrecht, Netherlands",
    "spotifyurl": "https://open.spotify.com/artist/00hfOKuZEhvKKNXmVdb1We",
    "legacy": [5.299196999999999,52.1763515],
    "name": "Janine Jansen"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/440a15566da67430da56f1ef87f7fbdc.webp",
    "location": "Barcelona, Barcelona, Catalunya, Spain",
    "spotifyurl": "https://open.spotify.com/artist/1oSgjdbgLYULVmEBojPRw8",
    "legacy": [2.1734035,41.3850639],
    "name": "Fernando Sor"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/98e3db654d2f41328e3d1ac1a52d9955.webp",
    "location": "Mons, Hainaut, Wallonie, Belgium",
    "spotifyurl": "https://open.spotify.com/artist/66hSfMemmixjY58p7KcTV6",
    "legacy": [3.956659,50.4542408],
    "name": "Orlande de Lassus"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a704bec18f6e4905c9861aeff53a0adc.webp",
    "location": "Glendale, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/7mCsyzq823cXJ5puxUN3aJ",
    "legacy": [-118.255075,34.1425078],
    "name": "John Debney"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/f623b2b3cd1044bcae9025db1f0a0ebc.webp",
    "location": "Beirut, Beyrouth, Lebanon",
    "spotifyurl": "https://open.spotify.com/artist/6quKdQHmx2x7FBJwLhmpmB",
    "legacy": [35.5017767,33.8937913],
    "name": "Gabriel Yared"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/1662f4eebaa042b0c2a6223e769dbb8f.webp",
    "location": "New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/5bUj39bg0zEbRzjUEISMG9",
    "legacy": [-74.0059728,40.7127753],
    "name": "Bernard Herrmann"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/db7b2c0fb5964127c1ec0872978fc575.webp",
    "location": "Hamburg, Germany",
    "spotifyurl": "https://open.spotify.com/artist/5gqhueRUZEa7VDnQt4HODp",
    "legacy": [9.9936819,53.5510846],
    "name": "Nils Frahm"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/6790e981fc114849932434a0f26d00da.webp",
    "location": "Lyon, Rhne, Auvergne-Rhne-Alpes, France",
    "spotifyurl": "https://open.spotify.com/artist/6iyQYs37mRXLW04Z9NOnNT",
    "legacy": [4.835659,45.764043],
    "name": "Maurice Jarre"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/854a1458ca084033ebecf0c6685a983f.webp",
    "location": "Sofia, Sofia-Grad, Bulgaria",
    "spotifyurl": "https://open.spotify.com/artist/2fxWL96h0S44PhEa9e6mtm",
    "legacy": [23.3218675,42.6977082],
    "name": "Alexis Weissenberg"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/80840d810ba34748c7cf6b3ee8fe0fe4.webp",
    "location": "Mannheim, Baden-Wrttemberg, Germany",
    "spotifyurl": "https://open.spotify.com/artist/07GFs4QjIiUspOwYP24qP5",
    "legacy": [8.466039499999999,49.4874592],
    "name": "Carl Stamitz"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/fa9dcb5ac4d046dcacde9f7a80bb310c.webp",
    "location": "Genoa, Genova, Liguria, Italy",
    "spotifyurl": "https://open.spotify.com/artist/39FC9x5PaTNYHp5hwlaY4q",
    "legacy": [8.946256,44.4056499],
    "name": "Niccol Paganini"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5318cb5efd9b46aca88406a1ab433857.webp",
    "location": "Pesaro, Pesaro e Urbino, Marche, Italy",
    "spotifyurl": "https://open.spotify.com/artist/2RWHmppBK4tjdqxtuesmZI",
    "legacy": [12.9155494,43.9124756],
    "name": "Renata Tebaldi"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d6c1b03946111d9fa26fe00f7d683e52.webp",
    "location": "Dorset, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/1qIRoGEKXINqrCx5N1engi",
    "legacy": [-2.3444786,50.7487635],
    "name": "John Eliot Gardiner"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b836a3f19ec2471b958b3671a37965c8.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/0qlhpgr87PEG89Jd5iRpxe",
    "legacy": [-0.1277583,51.5073509],
    "name": "John Rutter"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/eb6674abfeb74e25b2c30158edf05d23.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/09KZU0NsS7jRa5p0SflmGY",
    "legacy": [-0.1277583,51.5073509],
    "name": "Philharmonia Orchestra"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/f3845def981b45bc9918fc0165622a03.webp",
    "location": "Athens, Attiki, Greece",
    "spotifyurl": "https://open.spotify.com/artist/3gOdqjhBRr5vxK85vY7on0",
    "legacy": [23.7215764,37.9982945],
    "name": "Vassilis Tsabropoulos"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ae318c6872494b5298466e4fc15035f8.webp",
    "location": "Engels, Saratovskaya oblast', Russian Federation",
    "spotifyurl": "null",
    "legacy": [46.1251358,51.4867682],
    "name": "  "
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/936a582359734a1cb40ae7742a717a29.webp",
    "location": "Toronto, Ontario, Canada",
    "spotifyurl": "https://open.spotify.com/artist/51LdwFHCk1yoK1jELZ4VOu",
    "legacy": [-79.3831843,43.653226],
    "name": "Canadian Brass"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/daaf008967879325a4b6df3d83ecb706.webp",
    "location": "Tournai, Hainaut, Wallonie, Belgium",
    "spotifyurl": "https://open.spotify.com/artist/1vGyX3JUgCfVuPDOqlUA6m",
    "legacy": [3.3879338,50.6056475],
    "name": "Pierre de La Rue"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a0028edba7b54e619a01eb0a1da9687f.webp",
    "location": "Phoenix, Maricopa County, Arizona, United States",
    "spotifyurl": "https://open.spotify.com/artist/0XfkH3kgVTy5EYdv0DzDCQ",
    "legacy": [-112.0740373,33.4483771],
    "name": "William Joseph"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/aaa44017f84c4c2e9775809937d19250.webp",
    "location": "New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/35pZsti1RSA5Zv98jAm8kX",
    "legacy": [-74.0059728,40.7127753],
    "name": "Orpheus Chamber Orchestra"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d75d87d28caa430791aca939642eeaba.webp",
    "location": "Philadelphia, Philadelphia County, Pennsylvania, United States",
    "spotifyurl": "https://open.spotify.com/artist/1s4OwCgHh16FZOkmmNLWeO",
    "legacy": [-75.1652215,39.9525839],
    "name": "Milton Babbitt"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/e150fecce90746348bbe7b9f329c53bb.webp",
    "location": "Bergen, Noord-Holland, Netherlands",
    "spotifyurl": "https://open.spotify.com/artist/0aU7GVdY5SUzQ0dBObFK57",
    "legacy": [4.706394599999999,52.6749368],
    "name": "Simeon ten Holt"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/9b75a800587d4f1aa5ac7c5087c1ed4a.webp",
    "location": "Angers, Maine-et-Loire, Pays-de-la-Loire, France",
    "spotifyurl": "https://open.spotify.com/artist/3A5qNDgaeTFBD5pDxSvlJ0",
    "legacy": [-0.5518257,47.47116159999999],
    "name": "Henri Dutilleux"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d04041d7ad074d31cd13c3106f006834.webp",
    "location": "Votkinsk, Udmurtskaya Respublika, Russian Federation",
    "spotifyurl": "null",
    "legacy": [54.0163889,57.0495186],
    "name": "Piotr Czajkowski"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a7705c709f034e4a88b09191ff63e527.webp",
    "location": "Praha, Czech Republic",
    "spotifyurl": "https://open.spotify.com/artist/2oQJQUIpJFFnfKvHJA0xBu",
    "legacy": [14.4378005,50.0755381],
    "name": "The City of Prague Philharmonic Orchestra"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a77c28c8a35b47569d2ba2d5cede4296.webp",
    "location": "Praha, Czech Republic",
    "spotifyurl": "https://open.spotify.com/artist/6wEimu9Okp11rTY8nbbTtR",
    "legacy": [14.4378005,50.0755381],
    "name": "Josef Mysliveek"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/896a0017c49541e5aa6ad155ac5d6ad0.webp",
    "location": "Nizhny Novgorod, Nizhegorodskaya oblast', Russian Federation",
    "spotifyurl": "https://open.spotify.com/artist/2V5Fnwup32wFPAtMi2vmXq",
    "legacy": [44.0058793,56.3268684],
    "name": "Mily Balakirev"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/57a0261485ed64664fc22da6cce7bd5a.webp",
    "location": "Birmingham, West Midlands, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/0gDsjq3Se2YgMBdiJ88j06",
    "legacy": [-1.890401,52.48624299999999],
    "name": "Jocelyn Pook"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/7bc29e0ad209479a98a7735fde9b4ad5.webp",
    "location": "Paris, le-de-France, France",
    "spotifyurl": "https://open.spotify.com/artist/7xIMuJn0d0eB31U6pVcFJj",
    "legacy": [2.3522219,48.856614],
    "name": "Saint-Preux"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/7201febe597f4e9f86b5396e02ad9d3e.webp",
    "location": "Moskva, Russian Federation",
    "spotifyurl": "https://open.spotify.com/artist/66FKyV4BpyUu5AyRpEaTb2",
    "legacy": [37.6172999,55.755826],
    "name": "Stanislav Bunin"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/2bc45bb19b4618b33f82af927f2e57dc.webp",
    "location": "Stockholm, Stockholm municipality, Stockholms ln, Sweden",
    "spotifyurl": "https://open.spotify.com/artist/4pFlv4QVInj7bAo0MqHpwW",
    "legacy": [17.9672428,59.31706999999999],
    "name": "Anne Sofie von Otter"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/21596692017e186e5d7c0dd4e548b078.webp",
    "location": "Ghent, Oost-Vlaanderen, Flanders, Belgium",
    "spotifyurl": "https://open.spotify.com/artist/0e7j7UZLXvRC62EozoSTc5",
    "legacy": [3.7174243,51.0543422],
    "name": "Jacob Obrecht"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ad005d3bc7624199b49ca372849b9f88.webp",
    "location": "Reading, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/562Od3CffWedyz2BbeYWVn",
    "legacy": [-0.9781303,51.4542645],
    "name": "Mike Oldfield"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/f1a00d3e3423462f8636ab4e08d58538.webp",
    "location": "Trenton, Mercer County, New Jersey, United States",
    "spotifyurl": "https://open.spotify.com/artist/00iJnnUu476m1HX16e3por",
    "legacy": [-74.759717,40.2205824],
    "name": "George Antheil"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/34ed0772df904ac483cd02fb5c994496.webp",
    "location": "La Flche, Sarthe, Pays-de-la-Loire, France",
    "spotifyurl": "https://open.spotify.com/artist/1M9AXZkNPdOd1IPEsQsXnT",
    "legacy": [-0.07464599999999999,47.69589],
    "name": "Leo Delibes"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/474d37f1754a43cfabe7cd1245de4805.webp",
    "location": "Venice, Venezia, Veneto, Italy",
    "spotifyurl": "https://open.spotify.com/artist/0FSmB8Kk0WSSi3pphae5w7",
    "legacy": [12.3155151,45.4408474],
    "name": "Barbara Strozzi"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b00c839714b745ffc52435e160d5d20c.webp",
    "location": "elazowa Wola, Mazowieckie, Poland",
    "spotifyurl": "https://open.spotify.com/artist/1QoKB19XVwnNwlKDjyYYe8",
    "legacy": [20.324861,52.2573815],
    "name": "Henryk Szeryng"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/cf098de7ea1a420386b1bd8eb74ed7ed.webp",
    "location": "Zahl, Bqaa, Lebanon",
    "spotifyurl": "https://open.spotify.com/artist/4BtYfxhqobUWOXZzqMabBO",
    "legacy": [35.90195190000001,33.8462557],
    "name": "Isabel Bayrakdarian"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b4c1b77a452e48949db1a1b69ece4144.webp",
    "location": "Napoli, Napoli, Campania, Italy",
    "spotifyurl": "https://open.spotify.com/artist/7silW8RiEOoLBgAg5JBCL1",
    "legacy": [14.26812,40.8517983],
    "name": "Riccardo Muti"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/8854085de4dc4f65a22ff3a1720ca383.webp",
    "location": "London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/4ZtqSJYEh407LR6NM5hNcS",
    "legacy": [-0.1277583,51.5073509],
    "name": "G4"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/77ce497f6f41482f9581b208ee383d62.webp",
    "location": "Praha, Czech Republic",
    "spotifyurl": "null",
    "legacy": [14.4378005,50.0755381],
    "name": "Antonn Rejcha"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/f689f82e42f003700ed09d88693e2c9f.webp",
    "location": "Bryansk, Bryanskaya oblast', Russian Federation",
    "spotifyurl": "https://open.spotify.com/artist/6DLkqUf81qiaGPUYEep6Gb",
    "legacy": [34.41611,53.2635306],
    "name": "Tatiana Nikolayeva"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/2e33b3f62d1149a6a5d3be11a044539c.webp",
    "location": "Kielce, witokrzyskie, Poland",
    "spotifyurl": "https://open.spotify.com/artist/20S1emwKpVkaPnwRNigLeb",
    "legacy": [20.6285676,50.8660773],
    "name": "Jelonek"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/fbb105ed1b4a4d6f983d7ec74fd4c4f2.webp",
    "location": "Krasnoyarsk, Krasnoyarskiy kray, Russian Federation",
    "spotifyurl": "https://open.spotify.com/artist/5P6p90HYfFxo4GTmHJjeNe",
    "legacy": [92.8932476,56.01528339999999],
    "name": "Dmitri Hvorostovsky"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/20d2f6a23ffd4b41cb575870283ccb23.webp",
    "location": "Amsterdam, Noord-Holland, Netherlands",
    "spotifyurl": "https://open.spotify.com/artist/0630rYsw1mCdNfl8E3qqm2",
    "legacy": [4.9041389,52.3675734],
    "name": "Reinbert de Leeuw"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/72a7b595559448eab797f3bccc0b7176.webp",
    "location": "Mlad Boleslav, Stedoesk kraj, Czech Republic",
    "spotifyurl": "null",
    "legacy": [14.9175561,50.42228189999999],
    "name": "Ji Antonn Benda"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/438369fd9b334699b7845b9dc12036cf.webp",
    "location": "Paris, le-de-France, France",
    "spotifyurl": "https://open.spotify.com/artist/2ryY5UTorD1MXmnOcC7jCi",
    "legacy": [2.3522219,48.856614],
    "name": "Lili Boulanger"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/89522b51df11940c83d2412bdb84ed94.webp",
    "location": "Aizputes novads, Latvia",
    "spotifyurl": "https://open.spotify.com/artist/5pDXC7kLwFougTLVv2KFNJ",
    "legacy": [21.605305,56.715739],
    "name": "Pteris Vasks"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/89522b51df11940c83d2412bdb84ed94.webp",
    "location": "Aizputes novads, Latvia",
    "spotifyurl": "https://open.spotify.com/artist/5pDXC7kLwFougTLVv2KFNJ",
    "legacy": [21.605305,56.715739],
    "name": "Pteris Vasks"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/89522b51df11940c83d2412bdb84ed94.webp",
    "location": "Aizputes novads, Latvia",
    "spotifyurl": "https://open.spotify.com/artist/5pDXC7kLwFougTLVv2KFNJ",
    "legacy": [21.605305,56.715739],
    "name": "Pteris Vasks"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/8070006ae491d3153c35d10510652f0e.webp",
    "location": "St. Joseph, Buchanan County, Missouri, United States",
    "spotifyurl": "https://open.spotify.com/artist/7dGJo4pcD2V6oG8kP0tJRR",
    "legacy": [-94.84668099999999,39.7674578],
    "name": "Eminem"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/f16677242b24bd85ef316ed7c3281c74.webp",
    "location": "Atlanta, Fulton County, Georgia, United States",
    "spotifyurl": "https://open.spotify.com/artist/5K4W6rqBFWDnAN6FQUkS6x",
    "legacy": [-84.3879824,33.7489954],
    "name": "Kanye West"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b108ea51552702e03ae2fc49a60b5fee.webp",
    "location": "St. Albans, Queens, New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/09hVIj6vWgoCDtT03h8ZCa",
    "legacy": [-73.76436880000001,40.6895283],
    "name": "A Tribe Called Quest"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/75cec74cba4b45bbae43a847d3c4d4ed.webp",
    "location": "Mount Vernon, Westchester County, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/1HwM5zlC5qNWhJtM00yXzG",
    "legacy": [-73.8370786,40.9125992],
    "name": "DMX"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/902480e7a14140e6abf34985d45ce912.webp",
    "location": "New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/0AuW7OCyKfFrsMbtHrYgIV",
    "legacy": [-74.0059728,40.7127753],
    "name": "House of Pain"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d7bbdae79997413f8852d2081334605e.webp",
    "location": "Queensbridge, Queens, New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/6O2zJ0tId7g07yzHtX0yap",
    "legacy": [-73.9456723,40.7556711],
    "name": "Mobb Deep"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d74840ede3264fe1a02f1bd6ef6b0e10.webp",
    "location": "Compton, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/7B4hKK0S9QYnaoqa9OuwgX",
    "legacy": [-118.2200712,33.8958492],
    "name": "Eazy-E"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ee7c40e941544b79a4f2ecc4986fdca9.webp",
    "location": "Brownsville, Brooklyn, New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/4iCwCMnqsNZ6atvRiADgtn",
    "legacy": [-73.9125304,40.665214],
    "name": "RZA"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/4e1a2003cc914c5da513347fa496e217.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/7yk35uHNQclPXFGFoTU44w",
    "legacy": [-118.2436596,34.0522265],
    "name": "The Pharcyde"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/39cf6304e34746db9d399e9d3e6d200c.webp",
    "location": "Valley Stream, Nassau County, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/14ZxDAK6ITtZZqPdiWrvSn",
    "legacy": [-73.70846449999999,40.6642699],
    "name": "Everlast"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/f7bebfabcdee44f8a37d21bad9b9eaea.webp",
    "location": "The Bronx, New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/3ScY9CQxNLQei8Umvpx5g6",
    "legacy": [-73.8648268,40.8447819],
    "name": "Fat Joe"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/7dd6d3dfffcf4317992707e29a3837f5.webp",
    "location": "Virginia Beach, Virginia, United States",
    "spotifyurl": "https://open.spotify.com/artist/2J257euzcjnDLipsyJH3F2",
    "legacy": [-75.97798499999999,36.8529263],
    "name": "Clipse"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/aedac6150e594296a26958ca4f7ec5b3.webp",
    "location": "Wyandanch, Babylon, Suffolk County, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/3PyWEKLWI0vHPmoNrIX0QE",
    "legacy": [-73.360398,40.7539878],
    "name": "Rakim"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/179aabcd6d7fb711d50dca451294072b.webp",
    "location": "Atlanta, Fulton County, Georgia, United States",
    "spotifyurl": "https://open.spotify.com/artist/0701LAQrkY5Il5vt06uNnC",
    "legacy": [-84.3879824,33.7489954],
    "name": "Trouble"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/8f46518813a3475ba2bd6389ebe051e7.webp",
    "location": "Newark, Essex County, New Jersey, United States",
    "spotifyurl": "https://open.spotify.com/artist/0eGh2jSWPBX5GuqIHoZJZG",
    "legacy": [-74.1723667,40.735657],
    "name": "Ice-T"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/46f350f53ccb4095877664bdf24f2b7b.webp",
    "location": "Brownsville, Brooklyn, New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/1BH45DVSTeGBvcYXNCd67g",
    "legacy": [-73.9125304,40.665214],
    "name": "M.O.P."
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b39a628d4ee24f6a86c50bbc945f0d7a.webp",
    "location": "Placentia, Orange County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/0jx4hPtb5enLdBDdHKuSgf",
    "legacy": [-117.8627548,33.8710729],
    "name": "Kottonmouth Kings"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b2e4f5a2cd8e46b38487d28ba39acafd.webp",
    "location": "Queens, New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/5DKuVtlpDH0agZQUFDy8O7",
    "legacy": [-73.7948516,40.7282239],
    "name": "Pharoahe Monch"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3b9cd94c7f2043209ea8f2e7a3bfbb2a.webp",
    "location": "Mount Vernon, Westchester County, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/3BeQqzKdlARoOd6y30kCO2",
    "legacy": [-73.8370786,40.9125992],
    "name": "Pete Rock & C.L. Smooth"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/9e6a25073c6f4d1e8ff3f787224ced30.webp",
    "location": "Brooklyn, New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/0ClpuCq8RAV6Np5bVpgfyN",
    "legacy": [-73.9441579,40.6781784],
    "name": "El-P"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/daebdc29bb2c41bbba5703130b2b695a.webp",
    "location": "Clarksdale, Coahoma County, Mississippi, United States",
    "spotifyurl": "https://open.spotify.com/artist/1Oa0bMld0A3u5OTYfMzp5h",
    "legacy": [-90.5709323,34.2001086],
    "name": "Nate Dogg"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/f7f867e316184774848563de6f42ecd6.webp",
    "location": "Bridgetown, Saint Michael, Barbados",
    "spotifyurl": "https://open.spotify.com/artist/5hQCwevTf03u1rECrRMeop",
    "legacy": [-59.61317409999999,13.1059816],
    "name": "Grandmaster Flash"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/fa089c07b1b94f25a2f676f2b034a4d7.webp",
    "location": "Harlem, Manhattan, New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/3FjTqZ6SZYSYQMzY03O4RG",
    "legacy": [-73.9464769,40.8115504],
    "name": "Cannibal Ox"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b8b7cca18bfb483c8fada3e997a8331b.webp",
    "location": "Jackson, Hinds County, Mississippi, United States",
    "spotifyurl": "https://open.spotify.com/artist/7jFaoqWPhYLrKzjzlpXmUO",
    "legacy": [-90.1848103,32.2987573],
    "name": "David Banner"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/9ef5d58a7a2941009fbbd64357e86c77.webp",
    "location": "Houston, Harris County, Texas, United States",
    "spotifyurl": "https://open.spotify.com/artist/0st5vgzw9XkH5ALJiUM1lE",
    "legacy": [-95.3698028,29.7604267],
    "name": "Slim Thug"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/29672ebd22d940e8b846693699d60955.webp",
    "location": "Minden, Nordrhein-Westfalen, Germany",
    "spotifyurl": "https://open.spotify.com/artist/7JvxCo2bUzfYeReYFYizQ9",
    "legacy": [8.894920599999999,52.2964919],
    "name": "Curse"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/790f5b55e415ae648668f578551f224d.webp",
    "location": "East Los Angeles, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/0Ph64AJnzKQwXj4y7bWi2U",
    "legacy": [-118.1669736,34.0224417],
    "name": "Delinquent Habits"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/82cbbbc5f1334ad9a5eda365d6f388be.webp",
    "location": "New Orleans, Louisiana, United States",
    "spotifyurl": "https://open.spotify.com/artist/3LIJJJkO7R5RasRwt7xIn5",
    "legacy": [-90.0715323,29.95106579999999],
    "name": "Mystikal"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/002aceacffe64919bbb8862578a03250.webp",
    "location": "Montreal, Montreal, Quebec, Canada",
    "spotifyurl": "https://open.spotify.com/artist/3EYPt9DCZZsU663A4ovpOr",
    "legacy": [-73.567256,45.5016889],
    "name": "Ortega Cartel"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/fb2500373ccbaa1b30c0a692fb5c11c9.webp",
    "location": "Malvern, Worcestershire, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/4m4SfDVbF5wxrwEjDKgi4k",
    "legacy": [-2.3199774,52.1366184],
    "name": "Cher Lloyd"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/613468c8e2084794b9ba986a44470407.webp",
    "location": "Kingston, Jamaica",
    "spotifyurl": "https://open.spotify.com/artist/2lQvoGjN6jJfsAkaywtgrB",
    "legacy": [-76.8099041,18.0178743],
    "name": "Canibus"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/2aa6739293170bb83b3fbd1d6a41a687.webp",
    "location": "Meridian, Lauderdale County, Mississippi, United States",
    "spotifyurl": "https://open.spotify.com/artist/0CKa42Jqrc9fSFbDjePaXP",
    "legacy": [-88.703656,32.3643098],
    "name": "Big K.R.I.T."
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/67784c75cb394b1087c8902ca2798b5c.webp",
    "location": "Nuevo Len, Mexico",
    "spotifyurl": "https://open.spotify.com/artist/628gUkswCfCS1hIOOHmIpK",
    "legacy": [-99.99619469999999,25.592172],
    "name": "Control Machete"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/15603d70ad8eed068e8d7fe47074f151.webp",
    "location": "Rio de Janeiro, Rio de Janeiro, Brazil",
    "spotifyurl": "https://open.spotify.com/artist/5BWqFYIPTnFx3OPWOoJvmD",
    "legacy": [-43.1728965,-22.9068467],
    "name": "Gabriel O Pensador"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b9ecd5b967f849358b1efb09d48cf0ca.webp",
    "location": "Queens, New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/4trFlc6c04qfpnCGvlqFCV",
    "legacy": [-73.7948516,40.7282239],
    "name": "Organized Konfusion"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/e5492044b2ad9f471fd7fb5a07d22356.webp",
    "location": "Chicago, Cook County, Illinois, United States",
    "spotifyurl": "https://open.spotify.com/artist/3HiuzBlSW7pGDXlSFMhO2g",
    "legacy": [-87.6297982,41.8781136],
    "name": "Young Dolph"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b34c401e30cc444ca906bcac9bdb2381.webp",
    "location": "Texas, United States",
    "spotifyurl": "https://open.spotify.com/artist/7LnaAXbDVIL75IVPnndf7w",
    "legacy": [-99.9018131,31.9685988],
    "name": "Jamie Foxx"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/e627e40948844a36abe571d4841f7ab0.webp",
    "location": "New Orleans, Louisiana, United States",
    "spotifyurl": "https://open.spotify.com/artist/7zICaxnDB9ZprDSiFpvbbW",
    "legacy": [-90.0715323,29.95106579999999],
    "name": "Master P"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c4bb918828f04a7dcac93f250b3fc6f2.webp",
    "location": "Englewood, Bergen County, New Jersey, United States",
    "spotifyurl": "https://open.spotify.com/artist/7zliF6Q946WznVk3ZMYhZX",
    "legacy": [-73.9726381,40.8928771],
    "name": "The Sugarhill Gang"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/653c541e457f46678bea2f0792609f81.webp",
    "location": "King of Prussia, Upper Merion Township, Montgomery County, Pennsylvania, United States",
    "spotifyurl": "https://open.spotify.com/artist/6nDLku5uL3ou60kvCGZorh",
    "legacy": [-75.3835525,40.1012856],
    "name": "Bloodhound Gang"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ddf700142f274278b335a202017883ba.webp",
    "location": "Brooklyn, New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/4jWzNq3sdzSpqn7BnzvIKn",
    "legacy": [-73.9441579,40.6781784],
    "name": "Memphis Bleek"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/048fa5144cc64f6591fcf98ed044a116.webp",
    "location": "Compton, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/4XqfpACObRB5AsBcUYjL8X",
    "legacy": [-118.2200712,33.8958492],
    "name": "MC Eiht"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/23dbd2080a1be03f3179bf81e72cee46.webp",
    "location": "Melbourne, Victoria, Australia",
    "spotifyurl": "https://open.spotify.com/artist/2w0Dmj9GV9ZrokNRcnRwav",
    "legacy": [144.9630576,-37.8136276],
    "name": "Deez Nuts"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/fb1a67beb2fc58f6248ce70948c7aed2.webp",
    "location": "Chicago, Cook County, Illinois, United States",
    "spotifyurl": "https://open.spotify.com/artist/1anyVhU62p31KFi8MEzkbf",
    "legacy": [-87.6297982,41.8781136],
    "name": "Chance the Rapper"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/7b261091bd654676935ea18f44bb5247.webp",
    "location": "Amsterdam, Noord-Holland, Netherlands",
    "spotifyurl": "https://open.spotify.com/artist/0DD1CBUI4ypYSqvKUyjNoO",
    "legacy": [4.9041389,52.3675734],
    "name": "Pete Philly & Perquisite"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/fa1a77a8b48e442cc48de02129581e59.webp",
    "location": "New Orleans, Louisiana, United States",
    "spotifyurl": "https://open.spotify.com/artist/0TkqXdyWLsssJH7okthMPQ",
    "legacy": [-90.0715323,29.95106579999999],
    "name": "Jay Electronica"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/72488307806f4b43936d9f206f5f6e24.webp",
    "location": "Chicago, Cook County, Illinois, United States",
    "spotifyurl": "https://open.spotify.com/artist/1ZJlXFkFDBsjSuYyjVcMkk",
    "legacy": [-87.6297982,41.8781136],
    "name": "Chali 2na"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ceae6960473c449ac4c1a79c674ece8c.webp",
    "location": "Marseille, Bouches-du-Rhne, Provence-Alpes-Cte-d'Azur, France",
    "spotifyurl": "https://open.spotify.com/artist/4ddg7PH5OuSossiSBWgueu",
    "legacy": [5.36978,43.296482],
    "name": "Akhenaton"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/968f16c313a94e59b956fd88bd240eae.webp",
    "location": "Swarzdz, Wielkopolskie, Poland",
    "spotifyurl": "https://open.spotify.com/artist/55kuVC6HGa93VKbeMVOHNE",
    "legacy": [17.0855511,52.41253709999999],
    "name": "Nagy Atak Spawacza"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/9074c6e5d1e781dad0dbbb44cdaeb044.webp",
    "location": "Columbus, Franklin County, Ohio, United States",
    "spotifyurl": "https://open.spotify.com/artist/3YQKmKGau1PzlVlkL1iodx",
    "legacy": [-82.99879419999999,39.9611755],
    "name": "twenty one pilots"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/eaaccaa196c96055cc90ccd08e24518b.webp",
    "location": "Long Beach, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/68kEuyFKyqrdQQLLsmiatm",
    "legacy": [-118.1937395,33.7700504],
    "name": "Vince Staples"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/4edc8f8e196dd22e2dfe795c95f64a02.webp",
    "location": "New Orleans, Louisiana, United States",
    "spotifyurl": "https://open.spotify.com/artist/1Xfmvd48oOhEWkscWyEbh9",
    "legacy": [-90.0715323,29.95106579999999],
    "name": "Lloyd"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/676483e3de2a45688b01e42fa7aa4208.webp",
    "location": "Hackney, London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/0oJM3iJjMdzgsd4z5VHQvw",
    "legacy": [-0.07243759999999999,51.573445],
    "name": "Professor Green"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/84c4c353dd014dd9aa5ed93cc2a6d2f7.webp",
    "location": "Port Arthur, Jefferson County, Texas, United States",
    "spotifyurl": "https://open.spotify.com/artist/7v9bFXCdSMA2o3gS4nvp0F",
    "legacy": [-93.93994699999999,29.8849504],
    "name": "Pimp C"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/458cfd88a6c041e2befc4195f7656be4.webp",
    "location": "Atlanta, Fulton County, Georgia, United States",
    "spotifyurl": "https://open.spotify.com/artist/3ZooCJzNMTLpmJaIRUEorI",
    "legacy": [-84.3879824,33.7489954],
    "name": "Young Dro"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/98a8d358ae0e436aa4e9b8785eef2f3f.webp",
    "location": "Oakland, Alameda County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/0ndMofuAPmTktjONZv20JL",
    "legacy": [-122.2711639,37.8043514],
    "name": "Yukmouth"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/907be348895accdde0daeb4728adcf78.webp",
    "location": "Hacienda Heights, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/3r17AfJCCUqC9Lf0OAc73G",
    "legacy": [-117.9686755,33.9930677],
    "name": "Fergie"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d1eabe4770d84ff19b0156915a61f6e7.webp",
    "location": "Atlanta, Fulton County, Georgia, United States",
    "spotifyurl": "https://open.spotify.com/artist/4AllEJE7mVkhhyUV6DjqPz",
    "legacy": [-84.3879824,33.7489954],
    "name": "D4L"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/82a2583053cc6f3021feb86a4d359ac8.webp",
    "location": "Lublin, Lubelskie, Poland",
    "spotifyurl": "https://open.spotify.com/artist/5qgCrzMzASs1YpEMSp7tGt",
    "legacy": [22.5684463,51.2464536],
    "name": "Rasmentalism"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/e6a41db8d0d848d59e77867ad865ee14.webp",
    "location": "Torrejn de Ardoz, Comunidad de Madrid, Spain",
    "spotifyurl": "https://open.spotify.com/artist/3m1an5fzquhCtk4UnhmLmc",
    "legacy": [-3.4754967,40.4567552],
    "name": "El Chojin"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5622520e524b369fc3d63d8f6876b95e.webp",
    "location": "Seoul, Korea, Republic of",
    "spotifyurl": "https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02",
    "legacy": [126.9779692,37.566535],
    "name": "Tablo"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/705945d2809c432ab878da1b0802d575.webp",
    "location": "Brooklyn, New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/20apXQGKM00jJTvYfyKwlb",
    "legacy": [-73.9441579,40.6781784],
    "name": "Maino"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/8d679fe71c1b443ac4bb15fc6bb29cf7.webp",
    "location": "Jerez de la Frontera, Cdiz, Andaluca, Spain",
    "spotifyurl": "https://open.spotify.com/artist/3Ces1OJeGOVGcUB0wPaPXJ",
    "legacy": [-6.126074399999999,36.6850064],
    "name": "Mala Rodrguez"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/9adc65f4743df62de844613768902f53.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/5HJ2kX5UTwN4Ns8fB5Rn1I",
    "legacy": [-118.2436596,34.0522265],
    "name": "clipping."
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/25e95453348b4c7f8bc694fa8b0eb195.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/51FyBBOW464toW099BsW8z",
    "legacy": [-118.2436596,34.0522265],
    "name": "Tha Eastsidaz"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d418ed151b0a476fb28fa891d62dcb79.webp",
    "location": "Lille, Nord, Hauts-de-France, France",
    "spotifyurl": "https://open.spotify.com/artist/40JMTpVRUw90SrN4pFA6Mz",
    "legacy": [3.057256,50.62925],
    "name": "Ana Tijoux"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a3a82a6fef3842968da81dc4eb9546fa.webp",
    "location": "Detroit, Wayne County, Michigan, United States",
    "spotifyurl": "https://open.spotify.com/artist/72zigmOdJbIsz0iIRhCBvp",
    "legacy": [-83.0457538,42.331427],
    "name": "Illa J"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5af27736e7e442cc8ad23ae2c2cf345d.webp",
    "location": "The Bronx, New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/5QhsLryFrDbj9IZ38UmMyn",
    "legacy": [-73.8648268,40.8447819],
    "name": "Nice & Smooth"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a3a82a6fef3842968da81dc4eb9546fa.webp",
    "location": "Detroit, Wayne County, Michigan, United States",
    "spotifyurl": "https://open.spotify.com/artist/72zigmOdJbIsz0iIRhCBvp",
    "legacy": [-83.0457538,42.331427],
    "name": "Illa J"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5af27736e7e442cc8ad23ae2c2cf345d.webp",
    "location": "The Bronx, New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/5QhsLryFrDbj9IZ38UmMyn",
    "legacy": [-73.8648268,40.8447819],
    "name": "Nice & Smooth"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a3a82a6fef3842968da81dc4eb9546fa.webp",
    "location": "Detroit, Wayne County, Michigan, United States",
    "spotifyurl": "https://open.spotify.com/artist/72zigmOdJbIsz0iIRhCBvp",
    "legacy": [-83.0457538,42.331427],
    "name": "Illa J"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5af27736e7e442cc8ad23ae2c2cf345d.webp",
    "location": "The Bronx, New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/5QhsLryFrDbj9IZ38UmMyn",
    "legacy": [-73.8648268,40.8447819],
    "name": "Nice & Smooth"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c26604c48dca97a66f1298b4b2cf95e6.webp",
    "location": "Reading, Berks County, Pennsylvania, United States",
    "spotifyurl": "https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02",
    "legacy": [-75.9268747,40.3356483],
    "name": "Taylor Swift"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b53342000d4b5b6141cd025ade2a910c.webp",
    "location": "Roswell, Chaves County, New Mexico, United States",
    "spotifyurl": "https://open.spotify.com/artist/7EK1bQADBoqbYXnT4Cqv9w",
    "legacy": [-104.5230242,33.3942655],
    "name": "John Denver"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a3b455fd7e4ce73ad023db2e4018e09f.webp",
    "location": "Lake Charles, Calcasieu Parish, Louisiana, United States",
    "spotifyurl": "https://open.spotify.com/artist/60ht0hWRy1yjUDfNsLuHuP",
    "legacy": [-93.2173758,30.2265949],
    "name": "Lucinda Williams"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/44d19493e4d8a457de5109f9b557aa8b.webp",
    "location": "Pikeville, Pike County, Kentucky, United States",
    "spotifyurl": "https://open.spotify.com/artist/2sxmKe3CUrWnx7eoXMhOlW",
    "legacy": [-82.5187629,37.4792672],
    "name": "Dwight Yoakam"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/6eaceccb8f1a5ff70a68e3eeb768c53b.webp",
    "location": "Glendale, Maricopa County, Arizona, United States",
    "spotifyurl": "https://open.spotify.com/artist/0Xi59sEw38vRvwleSAVqoo",
    "legacy": [-112.1859866,33.5386523],
    "name": "Marty Robbins"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/97dc0cecddc040fda1554f2c127feeb8.webp",
    "location": "Alexandria, Virginia, United States",
    "spotifyurl": "https://open.spotify.com/artist/4Cedjq5BQL3MhapRvDpFED",
    "legacy": [-77.0469214,38.8048355],
    "name": "Neko Case"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b6debcb0134e4078a86c33356f2fa8da.webp",
    "location": "Edmonton, Alberta, Canada",
    "spotifyurl": "https://open.spotify.com/artist/6W1BHDF0T4a4KYcSwzD586",
    "legacy": [-113.4938229,53.5461245],
    "name": "k.d. lang"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/116331d004cf4f0da2aba1ac7bd93deb.webp",
    "location": "El Cerrito, Contra Costa County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/3IYUhFvPQItj6xySrBmZkd",
    "legacy": [-122.310765,37.9161326],
    "name": "Creedence Clearwater Revival"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/4faf8d7d90314f11cf1201bb24c04850.webp",
    "location": "Seminole, Gaines County, Texas, United States",
    "spotifyurl": "https://open.spotify.com/artist/7dmeVSH4lJqxXU7C87dKIB",
    "legacy": [-102.6449101,32.7189926],
    "name": "Tanya Tucker"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/6a7912897b2b4592c5df9471b37ef44b.webp",
    "location": "Vista, San Diego County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/3bcLBxvaI7GsBzGp3WHnwQ",
    "legacy": [-117.2425355,33.2000368],
    "name": "Nickel Creek"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/e597b521813457f96ccb815d336830dc.webp",
    "location": "Chicago, Cook County, Illinois, United States",
    "spotifyurl": "https://open.spotify.com/artist/72PnPUc1qv9UjRPaGVZ1jq",
    "legacy": [-87.6297982,41.8781136],
    "name": "The Handsome Family"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/62393378277542ea97422f550dfee826.webp",
    "location": "Lynn, Essex County, Massachusetts, United States",
    "spotifyurl": "https://open.spotify.com/artist/1r2U8cAvK4omurH0XzwX7C",
    "legacy": [-70.9494938,42.46676300000001],
    "name": "Mike Ness"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c703602f9c7348d2ac06954d0b731278.webp",
    "location": "Oakland, Alameda County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/6OVkHZQP8QoBYqr1ejCGDv",
    "legacy": [-122.2711639,37.8043514],
    "name": "Seasick Steve"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c2f4ab050974fe5dcca80ecad9fca738.webp",
    "location": "Holly Springs, Marshall County, Mississippi, United States",
    "spotifyurl": "https://open.spotify.com/artist/2EcNV0nlF6f6ZDtJJG2vKN",
    "legacy": [-89.44868939999999,34.76759670000001],
    "name": "Charlie Feathers"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/fb7a535c9db6496b82b443a7d110761a.webp",
    "location": "Kansas City, Jackson County, Missouri, United States",
    "spotifyurl": "https://open.spotify.com/artist/1aSIXmBKKrEVIbGLwhedIe",
    "legacy": [-94.5785667,39.0997265],
    "name": "Chely Wright"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/6cbc5e8d0341461f91642332fae8cf2c.webp",
    "location": "Rockne, Bastrop County, Texas, United States",
    "spotifyurl": "https://open.spotify.com/artist/5rTfve7qtpGUq2PVVmyFVS",
    "legacy": [-97.430863,29.995182],
    "name": "Wayne Hancock"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/98f202d2f2434f3a9fde4a5274019e9f.webp",
    "location": "Brixton, Lambeth, London, England, United Kingdom",
    "spotifyurl": "https://open.spotify.com/artist/25zUD40u8M2kJmdcabBzrz",
    "legacy": [-0.1156148,51.4612794],
    "name": "Alabama 3"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5e6420b083f3447d9dc6775186acff7e.webp",
    "location": "Jacksonville, Duval County, Florida, United States",
    "spotifyurl": "https://open.spotify.com/artist/6ZRkCThyw6syuSOAGT7lY1",
    "legacy": [-81.65565099999999,30.3321838],
    "name": "Van Zant"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/59fe98c3717e416fa1c25daaf574f944.webp",
    "location": "Deep Gap, Watauga County, North Carolina, United States",
    "spotifyurl": "https://open.spotify.com/artist/01N1aZStXA4yGvkz4vRXtJ",
    "legacy": [-81.51548609999999,36.238651],
    "name": "Doc Watson"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/21e67b1304c64e7b8ee7bcb2d36875cd.webp",
    "location": "Biloxi, Harrison County, Mississippi, United States",
    "spotifyurl": "https://open.spotify.com/artist/4K3DSWzghkGUcQOEZG9gpo",
    "legacy": [-88.88530779999999,30.3960318],
    "name": "Chris LeDoux"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3dccebcc4a444ca4b7b991330d902abb.webp",
    "location": "Mount Clemens, Macomb County, Michigan, United States",
    "spotifyurl": "https://open.spotify.com/artist/2DnqqkzzDKm3vAoyHtn8So",
    "legacy": [-82.8779754,42.5972563],
    "name": "Uncle Kracker"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ae8e7f21040fddb08b41be335376c30e.webp",
    "location": "Toronto, Ontario, Canada",
    "spotifyurl": "https://open.spotify.com/artist/3CYSRCHfilgR8DSbkCMp5j",
    "legacy": [-79.3831843,43.653226],
    "name": "Cowboy Junkies"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/1377e2e53c884fc8a26a1ec00f60bcd6.webp",
    "location": "Corsicana, Navarro County, Texas, United States",
    "spotifyurl": "https://open.spotify.com/artist/05FEKb23HHED5ZsWmKo8kz",
    "legacy": [-96.46887269999999,32.0954304],
    "name": "Billy Joe Shaver"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/6c85e46cffb04e9da74f0a9b10501e0d.webp",
    "location": "Albany, Dougherty County, Georgia, United States",
    "spotifyurl": "https://open.spotify.com/artist/1eYhYunlNJlDoQhtYBvPsi",
    "legacy": [-84.15574099999999,31.5785074],
    "name": "Ray Charles"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/61c427fb0a654cf996233504af763085.webp",
    "location": "Toronto, Ontario, Canada",
    "spotifyurl": "https://open.spotify.com/artist/4vpDg7Y7fU982Ds30zawDA",
    "legacy": [-79.3831843,43.653226],
    "name": "The Band"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/da9708ffaae545ae8f3a91c5a76b1049.webp",
    "location": "7 February 1971 (aged 73)",
    "spotifyurl": "https://open.spotify.com/artist/2NwYS5UK1AbaTljDWp4uh0",
    "legacy": [1,1],
    "name": "Dock Boggs"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/118d8421cdce548dacd448383981ffde.webp",
    "location": "Atlanta, Fulton County, Georgia, United States",
    "spotifyurl": "https://open.spotify.com/artist/6G7OerKc3eBO9sVkRNopFC",
    "legacy": [-84.3879824,33.7489954],
    "name": "Cat Power"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/044acceb61fc499d88d98a3bcce6a061.webp",
    "location": "Lockhart, Caldwell County, Texas, United States",
    "spotifyurl": "https://open.spotify.com/artist/6wpI4AEN6UO7ksNN23RGEf",
    "legacy": [-97.6699996,29.8849441],
    "name": "Scott H. Biram"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/70ad753b386b489ebe2c141b6f0801f3.webp",
    "location": "Slaughters, Webster County, Kentucky, United States",
    "spotifyurl": "https://open.spotify.com/artist/2XJzOLYV2mF5K2JfUhJEK0",
    "legacy": [-87.50222389999999,37.4889336],
    "name": "Chris Knight"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/37397cac5efd4e70b5cf2f51d162705b.webp",
    "location": "Elaine, Phillips County, Arkansas, United States",
    "spotifyurl": "https://open.spotify.com/artist/1PWHsS9haruM3AEebZuGs9",
    "legacy": [-90.85205309999999,34.3084371],
    "name": "Levon Helm"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/70d7f00e84a3400fb3dcfaac6657126a.webp",
    "location": "Keiser, Mississippi County, Arkansas, United States",
    "spotifyurl": "https://open.spotify.com/artist/2iSim8CE5BUpVdTGP41l1I",
    "legacy": [-90.09981409999999,35.6745227],
    "name": "Ed Bruce"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/769f23b03143410b8abdcacf753b12a0.webp",
    "location": "Nashville, Davidson County, Tennessee, United States",
    "spotifyurl": "https://open.spotify.com/artist/2wKZKjNTOtH2vjxIsUBZqY",
    "legacy": [-86.7816016,36.1626638],
    "name": "Carlene Carter"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/41db715147084cde8db89ffe6e654265.webp",
    "location": "Duluth, St. Louis County, Minnesota, United States",
    "spotifyurl": "https://open.spotify.com/artist/3GjVVVcFmUgEJEAAsbGkf4",
    "legacy": [-92.1004852,46.78667189999999],
    "name": "Trampled by Turtles"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/deb02d26ab204f808d04cabe4eca3241.webp",
    "location": "Vernon, Wilbarger County, Texas, United States",
    "spotifyurl": "https://open.spotify.com/artist/0JDkhL4rjiPNEp92jAgJnS",
    "legacy": [-99.2650804,34.1545306],
    "name": "Roy Orbison"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3e7e2c4b4046a03b86f1f8b78469837c.webp",
    "location": "McCamey, Upton County, Texas, United States",
    "spotifyurl": "https://open.spotify.com/artist/55yEsJBqyn27JPsw5hHzqi",
    "legacy": [-102.2222058,31.1322516],
    "name": "Dan Seals"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/8f7c769dab6c4bb6a9b560393f545c60.webp",
    "location": "Malvern, Hot Spring County, Arkansas, United States",
    "spotifyurl": "https://open.spotify.com/artist/1TlScGwN8MmIZ7kIYGjSZA",
    "legacy": [-92.81294620000001,34.3623149],
    "name": "Blaze Foley"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a8421b136a97434c4824c5a1e0fb2595.webp",
    "location": "Rossville, Walker County, Georgia, United States",
    "spotifyurl": "https://open.spotify.com/artist/1v3tdpIdBSW14rHUfiEVOv",
    "legacy": [-85.2860676,34.9831309],
    "name": "Lauren Alaina"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b7be969bff754359926c8a0e933f2a42.webp",
    "location": "South Gate, Los Angeles County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/3g229vTyhsdwm9SO2p1FPL",
    "legacy": [-118.2120161,33.954737],
    "name": "Lee Greenwood"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/afddbdd827b045c5b4fb1a5b7ebde081.webp",
    "location": "Jackson, Madison County, Tennessee, United States",
    "spotifyurl": "https://open.spotify.com/artist/4QZdOCb3UacKbQ1ybDFAKM",
    "legacy": [-88.81394689999999,35.6145169],
    "name": "Valerie June"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/f6da1768663a47f9942a0380b63a00b9.webp",
    "location": "Zanesville, Muskingum County, Ohio, United States",
    "spotifyurl": "https://open.spotify.com/artist/4Rx72ewRjxlDGiO6wPHpxe",
    "legacy": [-82.0131924,39.9403453],
    "name": "Kim Richey"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/02402eb2432365f740b9cc64afafc624.webp",
    "location": "Claremore, Rogers County, Oklahoma, United States",
    "spotifyurl": "https://open.spotify.com/artist/4nZN9kln8toEzOifhWG2uF",
    "legacy": [-95.61609,36.3125963],
    "name": "Patti Page"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c3873b244da548659d5367ac8802d476.webp",
    "location": "Louisville, Jefferson County, Kentucky, United States",
    "spotifyurl": "https://open.spotify.com/artist/43O3c6wewpzPKwVaGEEtBM",
    "legacy": [-85.7584557,38.2526647],
    "name": "My Morning Jacket"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/8794be37cc514edd9a951e8614ff33af.webp",
    "location": "Fullerton, Orange County, California, United States",
    "spotifyurl": "https://open.spotify.com/artist/16nn7kCHPWIB6uK09GQCNI",
    "legacy": [-117.9242123,33.8703645],
    "name": "Social Distortion"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/f06433d4f6ad4f33a11e777d72d148f5.webp",
    "location": "Detroit, Wayne County, Michigan, United States",
    "spotifyurl": "https://open.spotify.com/artist/4FZ3j1oH43e7cukCALsCwf",
    "legacy": [-83.0457538,42.331427],
    "name": "Jack White"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/9dbad338a3244ad5903f7c651cad997b.webp",
    "location": "Huntingdon, Carroll County, Tennessee, United States",
    "spotifyurl": "https://open.spotify.com/artist/2VMEvDcrKKZg96T4QWXIkT",
    "legacy": [-88.4281063,36.0006178],
    "name": "Carl Mann"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b9964d7d2f334efbbb995c505f1714eb.webp",
    "location": "Pictou County, Nova Scotia, Canada",
    "spotifyurl": "https://open.spotify.com/artist/5wGox9x2iVERIeTJIQnFeL",
    "legacy": [-62.6510943,45.5776091],
    "name": "George Canyon"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/7d513b4ab84888e1e9bac66a79b4d55d.webp",
    "location": "Amarillo, Potter County, Texas, United States",
    "spotifyurl": "https://open.spotify.com/artist/5BKzvAPtNXnt0LwzGvKOH3",
    "legacy": [-101.8312969,35.2219971],
    "name": "Aaron Watson"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/6b0c905ec2e240b2aa611993fcb87911.webp",
    "location": "Checotah, McIntosh County, Oklahoma, United States",
    "spotifyurl": "https://open.spotify.com/artist/1fMdO9vLUd6wW4jbMeNiup",
    "legacy": [-95.5230356,35.4700993],
    "name": "Mel McDaniel"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/1f0404568caf4a598fd2b2e40b579f74.webp",
    "location": "San Antonio, Bexar County, Texas, United States",
    "spotifyurl": "https://open.spotify.com/artist/2PL6uHCPVIWjmr6lK2U9pG",
    "legacy": [-98.49362819999999,29.4241219],
    "name": "Doug Sahm"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/f08bb06c5794470ab1df51036bcf74ff.webp",
    "location": "North Carolina, United States",
    "spotifyurl": "https://open.spotify.com/artist/2rTgolMbO5tyXZvD26bO8e",
    "legacy": [-79.01929969999999,35.7595731],
    "name": "Del Reeves"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/88064acb225e42b6bebd14e9f564ad8a.webp",
    "location": "Chicago, Cook County, Illinois, United States",
    "spotifyurl": "https://open.spotify.com/artist/0n5eyZr2XjOLUODPGZrlLB",
    "legacy": [-87.6297982,41.8781136],
    "name": "Steve Goodman"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d229a8719fc3768d24710e667c8ca280.webp",
    "location": "League City, Galveston County, Texas, United States",
    "spotifyurl": "https://open.spotify.com/artist/5iqStkZi6QmG8sgQZQrfGN",
    "legacy": [-95.0949303,29.5074538],
    "name": "Danielle Bradbery"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/9646cbef03524c3dcca29d5b891fc80f.webp",
    "location": "Manhattan, New York, New York, United States",
    "spotifyurl": "https://open.spotify.com/artist/1P9syEkl41IFowWIJN7ZBY",
    "legacy": [-73.9712488,40.7830603],
    "name": "Pete Seeger"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/951770929e864c13b89dc99fea2e7341.webp",
    "location": "Austin, Travis County, Texas, United States",
    "spotifyurl": "https://open.spotify.com/artist/5aC3wjbpR5fL6qBGlM2u7S",
    "legacy": [-97.7430608,30.267153],
    "name": "The Greencards"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/79297d654eccb0d97618819dc5f8f2a8.webp",
    "location": "Anchorage, Jefferson County, Kentucky, United States",
    "spotifyurl": "https://open.spotify.com/artist/0djV4iaxhNfYWpH60ia85o",
    "legacy": [-85.53301569999999,38.2667373],
    "name": "Joan Osborne"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/34d0e655ec4d431cc3b7b61416252508.webp",
    "location": "Olympia, Thurston County, Washington, United States",
    "spotifyurl": "https://open.spotify.com/artist/5MbNzCW3qokGyoo9giHA3V",
    "legacy": [-122.9006951,47.0378741],
    "name": "Earth"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5487962775a1445099e627e6ffc6dd9f.webp",
    "location": "Detroit, Wayne County, Michigan, United States",
    "spotifyurl": "https://open.spotify.com/artist/0I7UnRLIdCD310ZBgeuqh5",
    "legacy": [-83.0457538,42.331427],
    "name": "J.D. Souther"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d1d0e998a0f648aa9b2fc05450975ef9.webp",
    "location": "Paris, le-de-France, France",
    "spotifyurl": "https://open.spotify.com/artist/4KBk9hwqFYtGS3DlZJiCsQ",
    "legacy": [2.3522219,48.856614],
    "name": "Eddy Mitchell"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/14a227bcd8494fd1ba81452deca136ac.webp",
    "location": "Spalding, Greeley County, Nebraska, United States",
    "spotifyurl": "https://open.spotify.com/artist/5v6Ygtdxxvb0DqGoGr0YNd",
    "legacy": [-98.36340399999999,41.6889002],
    "name": "Tompall Glaser"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/62078eb61550505efde56ceb96f50314.webp",
    "location": "Stockholm, Stockholm municipality, Stockholms ln, Sweden",
    "spotifyurl": "https://open.spotify.com/artist/21egYD1eInY6bGFcniCRT1",
    "legacy": [17.9672428,59.31706999999999],
    "name": "First Aid Kit"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/513fc892daec4ceaae2982210df2764d.webp",
    "location": "Waco, McLennan County, Texas, United States",
    "spotifyurl": "https://open.spotify.com/artist/3OftZbLfcqulxWNZMX8zLI",
    "legacy": [-97.1466695,31.549333],
    "name": "Wade Bowen"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b20487777a1b439897c9460dbcc49318.webp",
    "location": "Atlanta, Fulton County, Georgia, United States",
    "spotifyurl": "https://open.spotify.com/artist/4wM29TDTr3HI0qFY3KoSFG",
    "legacy": [-84.3879824,33.7489954],
    "name": "Indigo Girls"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b8483af192754e5fbd07668077a6f850.webp",
    "location": "Nodaway County, Missouri, United States",
    "spotifyurl": "https://open.spotify.com/artist/3dE4AKlTQ3EW6yU6F9LuQT",
    "legacy": [-94.81059549999999,40.2907281],
    "name": "Jerry Wallace"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/1f6124e8c041547dd9cabbec7f4b4224.webp",
    "location": "Big Sandy, Upshur County, Texas, United States",
    "spotifyurl": "https://open.spotify.com/artist/1FGYC9AcBsascq5DSXX1Ie",
    "legacy": [-95.1088328,32.58375210000001],
    "name": "Henry Thomas"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/9a65a7fcc90945dfa99edac53c87edea.webp",
    "location": "Lancaster, Cos County, New Hampshire, United States",
    "spotifyurl": "https://open.spotify.com/artist/5Nx3gPpU2OFLI80rv7fDX5",
    "legacy": [-71.5692477,44.4889204],
    "name": "GG Allin"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/8a159bdfbde24803ad2a82eed4dc13d0.webp",
    "location": "Graz, Steiermark, Austria",
    "spotifyurl": "https://open.spotify.com/artist/2vVLzxG5XjklI2jcNHZm3K",
    "legacy": [15.439504,47.070714],
    "name": "Jonny Hill"
},

  

  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a4feb37e3abc4e46ad9062f98e41ae70.webp",
    "location": "Eden, Rockingham County, North Carolina, United States",
    "spotifyurl": "https://open.spotify.com/artist/7FS3EGuBVCs09Mfs23t2Af",
    "legacy": [-79.7667026,36.4884715],
    "name": "Charlie Poole"
}

]

  
;  //maybe use fs (file system) to import(read) the list of artist name value pairs

//you need to replace seed if already created

function seedinit(){

Artist.collection.insertMany(artistSeed, {ordered: false,}).then(data => {console.log(data.result.n+" records inserted")
process.exit(0);}).catch(err => {console.log(err);
process.exit(1)});

}

seedinit()

// function dupremove(){

//   Artist.collection.updateMany

// }