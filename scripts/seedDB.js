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

const artistSeed = 

[     
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/9fd718d4c80e4ac89107c6c0bb908440.webp",
    "location": "Paris, le-de-France, France",
    "name": "Daft Punk",
    "legacy": [2.3522219,48.856614]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/cacaf8e507ab4f90cf676c4bdb618ff3.webp",
    "location": "Braintree, Essex, England, United Kingdom",
    "name": "The Prodigy",
    "legacy": [0.5509269,51.880087]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/67c44fbb1eaa431f8ffdee279357490f.webp",
    "location": "Basildon, Essex, England, United Kingdom",
    "name": "Depeche Mode",
    "legacy": [0.488736,51.57608399999999]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/99fd77dfe23cf89f696f45b6f30333e6.webp",
    "location": "Bristol, England, United Kingdom",
    "name": "Massive Attack",
    "legacy": [-2.58791,51.454513]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/6093d29f92bb013db7437e87aa43f1dc.webp",
    "location": "Reykjavk, Hfuborgarsvi, Iceland",
    "name": "Bjork",
    "legacy": [-21.6131425,64.1846369]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/f34e2cc8525641b899b6057ecf6b9c20.webp",
    "location": "Harlem, Manhattan, New York, New York, United States",
    "name": "Moby",
    "legacy": [-73.9464769,40.8115504]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3ff0a87ba080bbff8109b240477dd195.webp",
    "location": "Abingdon-on-Thames, Oxfordshire, England, United Kingdom",
    "name": "Radiohead",
    "legacy": [-1.2879529,51.67078]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5ed377de32edf19aecf582a57cbbef36.webp",
    "location": "Manchester, Greater Manchester, England, United Kingdom",
    "name": "The Chemical Brothers",
    "legacy": [-2.2426305,53.4807593]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b51126b92d06d711b9c6641fff9fef92.webp",
    "location": "Essex, England, United Kingdom",
    "name": "Gorillaz",
    "legacy": [0.4856781,51.57424469999999]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/89a034a9ed8bb05c24f5c9b20bcfa7f3.webp",
    "location": "Troms, Troms, Norway",
    "name": "Ryksopp",
    "legacy": [18.7819365,69.81782419999999]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/75c4fb8c899e4247c2e3a0ec72422fa8.webp",
    "location": "Limerick, County Limerick, Munster, Ireland",
    "name": "Aphex Twin",
    "legacy": [-8.6267343,52.6638367]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a367d3ef173f40ec85f87ec6d5e7580f.webp",
    "location": "Bristol, England, United Kingdom",
    "name": "Portishead",
    "legacy": [-2.58791,51.454513]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/be62578c6e6245f2a8cf49f5a33d8b06.webp",
    "location": "Middletown, Middlesex County, Connecticut, United States",
    "name": "MGMT",
    "legacy": [-72.6506488,41.5623209]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d2a6c7edb5ce0f50e0b28169f16e94c8.webp",
    "location": "Toronto, Ontario, Canada",
    "name": "Crystal Castles",
    "legacy": [-79.3831843,43.653226]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a5b0881de5c249a8c96eb142a83b2291.webp",
    "location": "Edinburgh, Scotland, United Kingdom",
    "name": "Boards of Canada",
    "legacy": [-3.188267,55.953252]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/11e94802f74642a489b4e95acc849bb1.webp",
    "location": "Dsseldorf, Nordrhein-Westfalen, Germany",
    "name": "Kraftwerk",
    "legacy": [6.7734556,51.2277411]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a11e258c2ecb9ae7db13839c6c9b18b8.webp",
    "location": "Bromley, London, England, United Kingdom",
    "name": "Fatboy Slim",
    "legacy": [0.013156,51.406025]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/23f88e6cab864c5caff20e1fa01e2259.webp",
    "location": "Bath, Somerset, England, United Kingdom",
    "name": "Goldfrapp",
    "legacy": [-2.3590167,51.3810641]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/99a15ad057a848e98521305ff2fa5a82.webp",
    "location": "Stockholm, Stockholm municipality, Stockholms ln, Sweden",
    "name": "The Knife",
    "legacy": [17.9672428,59.31706999999999]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/20d9729683904ee499f6079f0de188d3.webp",
    "location": "Cleveland, Cuyahoga County, Ohio, United States",
    "name": "Nine Inch Nails",
    "legacy": [-81.6943605,41.49932]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3470ef43864b410f8ca294c1905ada94.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "name": "Red Hot Chili Peppers",
    "legacy": [-118.2436596,34.0522265]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/398b96868ddd81accf78dfaa65e09527.webp",
    "location": "Liverpool, Merseyside, England, United Kingdom",
    "name": "The Beatles",
    "legacy": [-2.9915726,53.4083714]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/30bdc0dce0dc498cb3bc05980a3d3276.webp",
    "location": "Teignmouth, Devon, England, United Kingdom",
    "name": "Muse",
    "legacy": [-3.496688,50.54703300000001]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/fd3dc6d95c663dd05adfe976dc276053.webp",
    "location": "London, England, United Kingdom",
    "name": "Coldplay",
    "legacy": [-0.1277583,51.5073509]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3ff0a87ba080bbff8109b240477dd195.webp",
    "location": "Abingdon-on-Thames, Oxfordshire, England, United Kingdom",
    "name": "Radiohead",
    "legacy": [-1.2879529,51.67078]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/27dcfc0e01b2745c5b0a59d8523d9710.webp",
    "location": "Seattle, King County, Washington, United States",
    "name": "Foo Fighters",
    "legacy": [-122.3320708,47.6062095]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/602d46973bf92a0a05f14193aa0129a9.webp",
    "location": "Dublin, County Dublin, Leinster, Ireland",
    "name": "U2",
    "legacy": [-6.2603097,53.3498053]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/0dbfcde2cb52401ca54fd7e80187cc27.webp",
    "location": "Agoura Hills, Los Angeles County, California, United States",
    "name": "Linkin Park",
    "legacy": [-118.7616764,34.1533395]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ab216abc7e274d1eaa9f73aa13e7e5c9.webp",
    "location": "London, England, United Kingdom",
    "name": "Led Zeppelin",
    "legacy": [-0.1277583,51.5073509]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/de74336cde5f4066f382dc25d8e3e3db.webp",
    "location": "London, England, United Kingdom",
    "name": "Queen",
    "legacy": [-0.1277583,51.5073509]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ec607a2794aa4b21a05f76b1702e4f16.webp",
    "location": "London, England, United Kingdom",
    "name": "Pink Floyd",
    "legacy": [-0.1277583,51.5073509]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/07c068d8d56c81fd727a386e483df970.webp",
    "location": "Las Vegas, Clark County, Nevada, United States",
    "name": "The Killers",
    "legacy": [-115.1398296,36.1699412]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/9f67a736539bcf7d3ae6e25152c9fae0.webp",
    "location": "Detroit, Wayne County, Michigan, United States",
    "name": "The White Stripes",
    "legacy": [-83.0457538,42.331427]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/dea723a5667447c7b579a7afef909e40.webp",
    "location": "London, England, United Kingdom",
    "name": "The Rolling Stones",
    "legacy": [-0.1277583,51.5073509]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d3b70e8f10224e5308913683b85b21e0.webp",
    "location": "Berkeley, Alameda County, California, United States",
    "name": "Green Day",
    "legacy": [-122.273042,37.8715226]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/7d102ebcf4184bb1ae2b851efcbceb30.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "name": "Guns N' Roses",
    "legacy": [-118.2436596,34.0522265]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/18646fb33974400ba421af23caea2be5.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "name": "The Doors",
    "legacy": [-118.2436596,34.0522265]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/05d78b59cf1242f09fab2176c8bf07df.webp",
    "location": "Glendale, Los Angeles County, California, United States",
    "name": "System of a Down",
    "legacy": [-118.255075,34.1425078]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/68a5f976043041ed28eec7978b31b373.webp",
    "location": "Sydney, New South Wales, Australia",
    "name": "AC/DC",
    "legacy": [151.2092955,-33.8688197]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/eff4af321ab641338b563fbc4bf99508.webp",
    "location": "St. Joseph, Buchanan County, Missouri, United States",
    "name": "Eminem",
    "legacy": [-94.84668099999999,39.7674578]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/f16677242b24bd85ef316ed7c3281c74.webp",
    "location": "Atlanta, Fulton County, Georgia, United States",
    "name": "Kanye West",
    "legacy": [-84.3879824,33.7489954]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b51126b92d06d711b9c6641fff9fef92.webp",
    "location": "Essex, England, United Kingdom",
    "name": "Gorillaz",
    "legacy": [0.4856781,51.57424469999999]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/926854c69a29feccc2b40a8026e6ccf2.webp",
    "location": "New York, New York, United States",
    "name": "Beastie Boys",
    "legacy": [-74.0059728,40.7127753]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b9ecb285aa6bd500d6423b9b4a9d7e78.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "name": "Black Eyed Peas",
    "legacy": [-118.2436596,34.0522265]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/e52dac407e6f4afc814d43efb836044d.webp",
    "location": "East Point, Fulton County, Georgia, United States",
    "name": "OutKast",
    "legacy": [-84.43937240000001,33.6795531]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/794901abbf7c49b0a51e905985507592.webp",
    "location": "Philadelphia, Philadelphia County, Pennsylvania, United States",
    "name": "The Roots",
    "legacy": [-75.1652215,39.9525839]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5743442ef66d4b7baa92fd3d1c5777e9.webp",
    "location": "South Gate, Los Angeles County, California, United States",
    "name": "Cypress Hill",
    "legacy": [-118.2120161,33.954737]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/8afc018dc6734428a3d84a493f26f7da.webp",
    "location": "Brooklyn, New York, New York, United States",
    "name": "Nas",
    "legacy": [-73.9441579,40.6781784]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d5fd9502e7ea46079ab13bc69633368b.webp",
    "location": "East Harlem, Manhattan, New York, New York, United States",
    "name": "2Pac",
    "legacy": [-73.93892129999999,40.7957399]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b108ea51552702e03ae2fc49a60b5fee.webp",
    "location": "St. Albans, Queens, New York, New York, United States",
    "name": "A Tribe Called Quest",
    "legacy": [-73.76436880000001,40.6895283]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/61c6585a3d6242319263b4583d3f75c9.webp",
    "location": "Long Beach, Los Angeles County, California, United States",
    "name": "Snoop Dogg",
    "legacy": [-118.1937395,33.7700504]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3bc12697cfbc41bda51c3756f959efab.webp",
    "location": "San Jose, Santa Clara County, California, United States",
    "name": "DJ Shadow",
    "legacy": [-121.8863286,37.3382082]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a2f54205d4024292bc501d30954315bb.webp",
    "location": "Compton, Los Angeles County, California, United States",
    "name": "Dr. Dre",
    "legacy": [-118.2200712,33.8958492]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/04b98d7ca0304deb84ff7fd7115325c7.webp",
    "location": "Chicago, Cook County, Illinois, United States",
    "name": "Common",
    "legacy": [-87.6297982,41.8781136]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/4eb9093c21d882883e6c7e5838b15a23.webp",
    "location": "Brooklyn, New York, New York, United States",
    "name": "Mos Def",
    "legacy": [-73.9441579,40.6781784]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/1abbe3b25eb8bba21195d1db26709b08.webp",
    "location": "Saint Michael, Barbados",
    "name": "Rihanna",
    "legacy": [-59.59880889999999,13.1132219]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c825233e09af4641a5ce7b6ece883aae.webp",
    "location": "High Green, Sheffield, South Yorkshire, England, United Kingdom",
    "name": "Arctic Monkeys",
    "legacy": [-1.494032,53.474144]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3ff0a87ba080bbff8109b240477dd195.webp",
    "location": "Abingdon-on-Thames, Oxfordshire, England, United Kingdom",
    "name": "Radiohead",
    "legacy": [-1.2879529,51.67078]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/07c068d8d56c81fd727a386e483df970.webp",
    "location": "Las Vegas, Clark County, Nevada, United States",
    "name": "The Killers",
    "legacy": [-115.1398296,36.1699412]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d845a978fecb4b3f9d84037588241e6a.webp",
    "location": "Bellingham, Whatcom County, Washington, United States",
    "name": "Death Cab for Cutie",
    "legacy": [-122.4786854,48.7519112]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/39ed61491137c5a43a2ffb67bbf01894.webp",
    "location": "Glasgow, Scotland, United Kingdom",
    "name": "Franz Ferdinand",
    "legacy": [-4.251806,55.864237]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/fd3dc6d95c663dd05adfe976dc276053.webp",
    "location": "London, England, United Kingdom",
    "name": "Coldplay",
    "legacy": [-0.1277583,51.5073509]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/697500d18da74c598bedf983f4933207.webp",
    "location": "Reading, England, United Kingdom",
    "name": "Bloc Party",
    "legacy": [-0.9781303,51.4542645]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/30bdc0dce0dc498cb3bc05980a3d3276.webp",
    "location": "Teignmouth, Devon, England, United Kingdom",
    "name": "Muse",
    "legacy": [-3.496688,50.54703300000001]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/304587494c2a6243c74188aecf931891.webp",
    "location": "New York, New York, United States",
    "name": "The Strokes",
    "legacy": [-74.0059728,40.7127753]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/de5bdf5cbc4c46baa74622b887719507.webp",
    "location": "Brighton, Brighton and Hove, England, United Kingdom",
    "name": "The Kooks",
    "legacy": [-0.137163,50.82253000000001]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c7866680f9dc4b59820babee13db2559.webp",
    "location": "Albuquerque, Bernalillo County, New Mexico, United States",
    "name": "The Shins",
    "legacy": [-106.650422,35.0843859]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c0617e4ebdc84d8dcd3c80aa5799eed4.webp",
    "location": "New York, New York, United States",
    "name": "Yeah Yeah Yeahs",
    "legacy": [-74.0059728,40.7127753]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/9f67a736539bcf7d3ae6e25152c9fae0.webp",
    "location": "Detroit, Wayne County, Michigan, United States",
    "name": "The White Stripes",
    "legacy": [-83.0457538,42.331427]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ead6dc59b17d42c5b9e35e187924c690.webp",
    "location": "Issaquah, King County, Washington, United States",
    "name": "Modest Mouse",
    "legacy": [-122.0326191,47.5301011]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/0694baa5af95b430016c440553dba169.webp",
    "location": "Nashville, Davidson County, Tennessee, United States",
    "name": "Kings of Leon",
    "legacy": [-86.7816016,36.1626638]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/04c140c3d9844b4dcb9c9a93e0f23448.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "name": "The Postal Service",
    "legacy": [-118.2436596,34.0522265]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/2c7b4e08bf08486b96235bbf57cc9293.webp",
    "location": "Omaha, Douglas County, Nebraska, United States",
    "name": "Bright Eyes",
    "legacy": [-95.9345034,41.2565369]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3c572d468104a02c21844c5bf61581b1.webp",
    "location": "Dundee, Scotland, United Kingdom",
    "name": "Snow Patrol",
    "legacy": [-2.970721,56.462018]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/be62578c6e6245f2a8cf49f5a33d8b06.webp",
    "location": "Middletown, Middlesex County, Connecticut, United States",
    "name": "MGMT",
    "legacy": [-72.6506488,41.5623209]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/77be9d4f51949813088eba8d87db8235.webp",
    "location": "Alton, Madison County, Illinois, United States",
    "name": "Miles Davis",
    "legacy": [-90.1842764,38.8906038]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/fe6b4fb54ed64405a80d430ac1259177.webp",
    "location": "Hamlet, Richmond County, North Carolina, United States",
    "name": "John Coltrane",
    "legacy": [-79.6942222,34.8848775]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d40f4e5072094383aa56c6828ea8f43a.webp",
    "location": "BedfordStuyvesant, Brooklyn, New York, New York, United States",
    "name": "Norah Jones",
    "legacy": [-73.9417735,40.6872176]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/4ce48b72eafea595436782e19e36ab55.webp",
    "location": "Southgate, Enfield, London, England, United Kingdom",
    "name": "Amy Winehouse",
    "legacy": [-0.1240456,51.62476119999999]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/4564e19373d64252833bd8aff73b9a2e.webp",
    "location": "Hoboken, Hudson County, New Jersey, United States",
    "name": "Frank Sinatra",
    "legacy": [-74.0323626,40.7439905]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/59b2c835ffff448f87499e062303260e.webp",
    "location": "New Orleans, Louisiana, United States",
    "name": "Louis Armstrong",
    "legacy": [-90.0715323,29.95106579999999]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d00e2307c59046c7be15bb0d8e122619.webp",
    "location": "Tryon, Polk County, North Carolina, United States",
    "name": "Nina Simone",
    "legacy": [-82.2384479,35.2081694]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/17d89fcb5ede04e2d2eb447e5bd80bb1.webp",
    "location": "Newport News, Virginia, United States",
    "name": "Ella Fitzgerald",
    "legacy": [-76.4730122,37.0870821]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/bcb3ea5aed914dc9b5e604aeeb2fd78f.webp",
    "location": "Philadelphia, Philadelphia County, Pennsylvania, United States",
    "name": "Billie Holiday",
    "legacy": [-75.1652215,39.9525839]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/f06878dcc27f4346b173e5d1612285ee.webp",
    "location": "Chicago, Cook County, Illinois, United States",
    "name": "Herbie Hancock",
    "legacy": [-87.6297982,41.8781136]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/36e94b2a5333416c9ae556cec5d6f4b3.webp",
    "location": "Rocky Mount, Edgecombe County, North Carolina, United States",
    "name": "Thelonious Monk",
    "legacy": [-77.7905339,35.9382103]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/6c85e46cffb04e9da74f0a9b10501e0d.webp",
    "location": "Albany, Dougherty County, Georgia, United States",
    "name": "Ray Charles",
    "legacy": [-84.15574099999999,31.5785074]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/f8935acde81f5ff722deaa0fd6e28b94.webp",
    "location": "Nogales, Santa Cruz County, Arizona, United States",
    "name": "Charles Mingus",
    "legacy": [-110.9342532,31.3403775]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/fc089452e95b49de9465b180791d026c.webp",
    "location": "Nanaimo, Regional District of Nanaimo, British Columbia, Canada",
    "name": "Diana Krall",
    "legacy": [-123.9400717,49.165895]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/9ba4b604462a92b976b7016d662895d9.webp",
    "location": "Washington, D.C., United States",
    "name": "Duke Ellington",
    "legacy": [-77.0368707,38.9071923]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/65bc438bf96449f8a53e939d0805f822.webp",
    "location": "London, England, United Kingdom",
    "name": "The Cinematic Orchestra",
    "legacy": [-0.1277583,51.5073509]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/830c43bd43268081cff52d01acd02e26.webp",
    "location": "Burnaby, Metro Vancouver, British Columbia, Canada",
    "name": "Michael Bubl",
    "legacy": [-122.9805104,49.2488091]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b85772ab0b694748ae8637db3a07ada2.webp",
    "location": "Rochford, Essex, England, United Kingdom",
    "name": "Jamie Cullum",
    "legacy": [0.706515,51.582071]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/15fea98e1b40c8399ffbc44abef4d400.webp",
    "location": "Kutaisi, Imereti, Georgia",
    "name": "Katie Melua",
    "legacy": [42.7180019,42.2662428]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ca90d06de8944093b8bf59516f801603.webp",
    "location": "Montgomery, Montgomery County, Alabama, United States",
    "name": "Nat King Cole",
    "legacy": [-86.3077368,32.3792233]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/efeac1ff21d0ce3337a4f86982543cf4.webp",
    "location": "Kingston, Jamaica",
    "name": "Bob Marley & The Wailers",
    "legacy": [-76.8099041,18.0178743]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/631c2ce313d447e18358e1a268e0b5c5.webp",
    "location": "West Chester, Chester County, Pennsylvania, United States",
    "name": "Matisyahu",
    "legacy": [-75.6054882,39.9606643]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/41a4440a21184c1fbc590101df9ea758.webp",
    "location": "Paris, le-de-France, France",
    "name": "Manu Chao",
    "legacy": [2.3522219,48.856614]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b323c40a990e423e9c622a18fd7ed18a.webp",
    "location": "Osnabrck, Niedersachsen, Germany",
    "name": "Gentleman",
    "legacy": [8.0471788,52.2799112]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/9fd718d4c80e4ac89107c6c0bb908440.webp",
    "location": "Paris, le-de-France, France",
    "name": "Daft Punk",
    "legacy": [2.3522219,48.856614]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/cacaf8e507ab4f90cf676c4bdb618ff3.webp",
    "location": "Braintree, Essex, England, United Kingdom",
    "name": "The Prodigy",
    "legacy": [0.5509269,51.880087]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/67c44fbb1eaa431f8ffdee279357490f.webp",
    "location": "Basildon, Essex, England, United Kingdom",
    "name": "Depeche Mode",
    "legacy": [0.488736,51.57608399999999]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/99fd77dfe23cf89f696f45b6f30333e6.webp",
    "location": "Bristol, England, United Kingdom",
    "name": "Massive Attack",
    "legacy": [-2.58791,51.454513]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/6093d29f92bb013db7437e87aa43f1dc.webp",
    "location": "Reykjavk, Hfuborgarsvi, Iceland",
    "name": "Bjork",
    "legacy": [-21.6131425,64.1846369]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/f34e2cc8525641b899b6057ecf6b9c20.webp",
    "location": "Harlem, Manhattan, New York, New York, United States",
    "name": "Moby",
    "legacy": [-73.9464769,40.8115504]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3ff0a87ba080bbff8109b240477dd195.webp",
    "location": "Abingdon-on-Thames, Oxfordshire, England, United Kingdom",
    "name": "Radiohead",
    "legacy": [-1.2879529,51.67078]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5ed377de32edf19aecf582a57cbbef36.webp",
    "location": "Manchester, Greater Manchester, England, United Kingdom",
    "name": "The Chemical Brothers",
    "legacy": [-2.2426305,53.4807593]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b51126b92d06d711b9c6641fff9fef92.webp",
    "location": "Essex, England, United Kingdom",
    "name": "Gorillaz",
    "legacy": [0.4856781,51.57424469999999]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/89a034a9ed8bb05c24f5c9b20bcfa7f3.webp",
    "location": "Troms, Troms, Norway",
    "name": "Ryksopp",
    "legacy": [18.7819365,69.81782419999999]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/75c4fb8c899e4247c2e3a0ec72422fa8.webp",
    "location": "Limerick, County Limerick, Munster, Ireland",
    "name": "Aphex Twin",
    "legacy": [-8.6267343,52.6638367]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a367d3ef173f40ec85f87ec6d5e7580f.webp",
    "location": "Bristol, England, United Kingdom",
    "name": "Portishead",
    "legacy": [-2.58791,51.454513]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/be62578c6e6245f2a8cf49f5a33d8b06.webp",
    "location": "Middletown, Middlesex County, Connecticut, United States",
    "name": "MGMT",
    "legacy": [-72.6506488,41.5623209]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d2a6c7edb5ce0f50e0b28169f16e94c8.webp",
    "location": "Toronto, Ontario, Canada",
    "name": "Crystal Castles",
    "legacy": [-79.3831843,43.653226]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a5b0881de5c249a8c96eb142a83b2291.webp",
    "location": "Edinburgh, Scotland, United Kingdom",
    "name": "Boards of Canada",
    "legacy": [-3.188267,55.953252]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/11e94802f74642a489b4e95acc849bb1.webp",
    "location": "Dsseldorf, Nordrhein-Westfalen, Germany",
    "name": "Kraftwerk",
    "legacy": [6.7734556,51.2277411]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a11e258c2ecb9ae7db13839c6c9b18b8.webp",
    "location": "Bromley, London, England, United Kingdom",
    "name": "Fatboy Slim",
    "legacy": [0.013156,51.406025]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/23f88e6cab864c5caff20e1fa01e2259.webp",
    "location": "Bath, Somerset, England, United Kingdom",
    "name": "Goldfrapp",
    "legacy": [-2.3590167,51.3810641]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/99a15ad057a848e98521305ff2fa5a82.webp",
    "location": "Stockholm, Stockholm municipality, Stockholms ln, Sweden",
    "name": "The Knife",
    "legacy": [17.9672428,59.31706999999999]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/20d9729683904ee499f6079f0de188d3.webp",
    "location": "Cleveland, Cuyahoga County, Ohio, United States",
    "name": "Nine Inch Nails",
    "legacy": [-81.6943605,41.49932]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3470ef43864b410f8ca294c1905ada94.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "name": "Red Hot Chili Peppers",
    "legacy": [-118.2436596,34.0522265]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/398b96868ddd81accf78dfaa65e09527.webp",
    "location": "Liverpool, Merseyside, England, United Kingdom",
    "name": "The Beatles",
    "legacy": [-2.9915726,53.4083714]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/30bdc0dce0dc498cb3bc05980a3d3276.webp",
    "location": "Teignmouth, Devon, England, United Kingdom",
    "name": "Muse",
    "legacy": [-3.496688,50.54703300000001]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/fd3dc6d95c663dd05adfe976dc276053.webp",
    "location": "London, England, United Kingdom",
    "name": "Coldplay",
    "legacy": [-0.1277583,51.5073509]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3ff0a87ba080bbff8109b240477dd195.webp",
    "location": "Abingdon-on-Thames, Oxfordshire, England, United Kingdom",
    "name": "Radiohead",
    "legacy": [-1.2879529,51.67078]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/27dcfc0e01b2745c5b0a59d8523d9710.webp",
    "location": "Seattle, King County, Washington, United States",
    "name": "Foo Fighters",
    "legacy": [-122.3320708,47.6062095]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/602d46973bf92a0a05f14193aa0129a9.webp",
    "location": "Dublin, County Dublin, Leinster, Ireland",
    "name": "U2",
    "legacy": [-6.2603097,53.3498053]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/0dbfcde2cb52401ca54fd7e80187cc27.webp",
    "location": "Agoura Hills, Los Angeles County, California, United States",
    "name": "Linkin Park",
    "legacy": [-118.7616764,34.1533395]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ab216abc7e274d1eaa9f73aa13e7e5c9.webp",
    "location": "London, England, United Kingdom",
    "name": "Led Zeppelin",
    "legacy": [-0.1277583,51.5073509]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/de74336cde5f4066f382dc25d8e3e3db.webp",
    "location": "London, England, United Kingdom",
    "name": "Queen",
    "legacy": [-0.1277583,51.5073509]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ec607a2794aa4b21a05f76b1702e4f16.webp",
    "location": "London, England, United Kingdom",
    "name": "Pink Floyd",
    "legacy": [-0.1277583,51.5073509]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/07c068d8d56c81fd727a386e483df970.webp",
    "location": "Las Vegas, Clark County, Nevada, United States",
    "name": "The Killers",
    "legacy": [-115.1398296,36.1699412]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/9f67a736539bcf7d3ae6e25152c9fae0.webp",
    "location": "Detroit, Wayne County, Michigan, United States",
    "name": "The White Stripes",
    "legacy": [-83.0457538,42.331427]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/dea723a5667447c7b579a7afef909e40.webp",
    "location": "London, England, United Kingdom",
    "name": "The Rolling Stones",
    "legacy": [-0.1277583,51.5073509]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d3b70e8f10224e5308913683b85b21e0.webp",
    "location": "Berkeley, Alameda County, California, United States",
    "name": "Green Day",
    "legacy": [-122.273042,37.8715226]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/7d102ebcf4184bb1ae2b851efcbceb30.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "name": "Guns N' Roses",
    "legacy": [-118.2436596,34.0522265]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/18646fb33974400ba421af23caea2be5.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "name": "The Doors",
    "legacy": [-118.2436596,34.0522265]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/05d78b59cf1242f09fab2176c8bf07df.webp",
    "location": "Glendale, Los Angeles County, California, United States",
    "name": "System of a Down",
    "legacy": [-118.255075,34.1425078]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/68a5f976043041ed28eec7978b31b373.webp",
    "location": "Sydney, New South Wales, Australia",
    "name": "AC/DC",
    "legacy": [151.2092955,-33.8688197]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/eff4af321ab641338b563fbc4bf99508.webp",
    "location": "St. Joseph, Buchanan County, Missouri, United States",
    "name": "Eminem",
    "legacy": [-94.84668099999999,39.7674578]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/f16677242b24bd85ef316ed7c3281c74.webp",
    "location": "Atlanta, Fulton County, Georgia, United States",
    "name": "Kanye West",
    "legacy": [-84.3879824,33.7489954]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b51126b92d06d711b9c6641fff9fef92.webp",
    "location": "Essex, England, United Kingdom",
    "name": "Gorillaz",
    "legacy": [0.4856781,51.57424469999999]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/926854c69a29feccc2b40a8026e6ccf2.webp",
    "location": "New York, New York, United States",
    "name": "Beastie Boys",
    "legacy": [-74.0059728,40.7127753]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b9ecb285aa6bd500d6423b9b4a9d7e78.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "name": "Black Eyed Peas",
    "legacy": [-118.2436596,34.0522265]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/e52dac407e6f4afc814d43efb836044d.webp",
    "location": "East Point, Fulton County, Georgia, United States",
    "name": "OutKast",
    "legacy": [-84.43937240000001,33.6795531]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/794901abbf7c49b0a51e905985507592.webp",
    "location": "Philadelphia, Philadelphia County, Pennsylvania, United States",
    "name": "The Roots",
    "legacy": [-75.1652215,39.9525839]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5743442ef66d4b7baa92fd3d1c5777e9.webp",
    "location": "South Gate, Los Angeles County, California, United States",
    "name": "Cypress Hill",
    "legacy": [-118.2120161,33.954737]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/8afc018dc6734428a3d84a493f26f7da.webp",
    "location": "Brooklyn, New York, New York, United States",
    "name": "Nas",
    "legacy": [-73.9441579,40.6781784]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d5fd9502e7ea46079ab13bc69633368b.webp",
    "location": "East Harlem, Manhattan, New York, New York, United States",
    "name": "2Pac",
    "legacy": [-73.93892129999999,40.7957399]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b108ea51552702e03ae2fc49a60b5fee.webp",
    "location": "St. Albans, Queens, New York, New York, United States",
    "name": "A Tribe Called Quest",
    "legacy": [-73.76436880000001,40.6895283]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/61c6585a3d6242319263b4583d3f75c9.webp",
    "location": "Long Beach, Los Angeles County, California, United States",
    "name": "Snoop Dogg",
    "legacy": [-118.1937395,33.7700504]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3bc12697cfbc41bda51c3756f959efab.webp",
    "location": "San Jose, Santa Clara County, California, United States",
    "name": "DJ Shadow",
    "legacy": [-121.8863286,37.3382082]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a2f54205d4024292bc501d30954315bb.webp",
    "location": "Compton, Los Angeles County, California, United States",
    "name": "Dr. Dre",
    "legacy": [-118.2200712,33.8958492]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/04b98d7ca0304deb84ff7fd7115325c7.webp",
    "location": "Chicago, Cook County, Illinois, United States",
    "name": "Common",
    "legacy": [-87.6297982,41.8781136]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/4eb9093c21d882883e6c7e5838b15a23.webp",
    "location": "Brooklyn, New York, New York, United States",
    "name": "Mos Def",
    "legacy": [-73.9441579,40.6781784]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/1abbe3b25eb8bba21195d1db26709b08.webp",
    "location": "Saint Michael, Barbados",
    "name": "Rihanna",
    "legacy": [-59.59880889999999,13.1132219]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c825233e09af4641a5ce7b6ece883aae.webp",
    "location": "High Green, Sheffield, South Yorkshire, England, United Kingdom",
    "name": "Arctic Monkeys",
    "legacy": [-1.494032,53.474144]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3ff0a87ba080bbff8109b240477dd195.webp",
    "location": "Abingdon-on-Thames, Oxfordshire, England, United Kingdom",
    "name": "Radiohead",
    "legacy": [-1.2879529,51.67078]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/07c068d8d56c81fd727a386e483df970.webp",
    "location": "Las Vegas, Clark County, Nevada, United States",
    "name": "The Killers",
    "legacy": [-115.1398296,36.1699412]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d845a978fecb4b3f9d84037588241e6a.webp",
    "location": "Bellingham, Whatcom County, Washington, United States",
    "name": "Death Cab for Cutie",
    "legacy": [-122.4786854,48.7519112]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/39ed61491137c5a43a2ffb67bbf01894.webp",
    "location": "Glasgow, Scotland, United Kingdom",
    "name": "Franz Ferdinand",
    "legacy": [-4.251806,55.864237]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/fd3dc6d95c663dd05adfe976dc276053.webp",
    "location": "London, England, United Kingdom",
    "name": "Coldplay",
    "legacy": [-0.1277583,51.5073509]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/697500d18da74c598bedf983f4933207.webp",
    "location": "Reading, England, United Kingdom",
    "name": "Bloc Party",
    "legacy": [-0.9781303,51.4542645]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/30bdc0dce0dc498cb3bc05980a3d3276.webp",
    "location": "Teignmouth, Devon, England, United Kingdom",
    "name": "Muse",
    "legacy": [-3.496688,50.54703300000001]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/304587494c2a6243c74188aecf931891.webp",
    "location": "New York, New York, United States",
    "name": "The Strokes",
    "legacy": [-74.0059728,40.7127753]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/de5bdf5cbc4c46baa74622b887719507.webp",
    "location": "Brighton, Brighton and Hove, England, United Kingdom",
    "name": "The Kooks",
    "legacy": [-0.137163,50.82253000000001]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c7866680f9dc4b59820babee13db2559.webp",
    "location": "Albuquerque, Bernalillo County, New Mexico, United States",
    "name": "The Shins",
    "legacy": [-106.650422,35.0843859]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c0617e4ebdc84d8dcd3c80aa5799eed4.webp",
    "location": "New York, New York, United States",
    "name": "Yeah Yeah Yeahs",
    "legacy": [-74.0059728,40.7127753]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/9f67a736539bcf7d3ae6e25152c9fae0.webp",
    "location": "Detroit, Wayne County, Michigan, United States",
    "name": "The White Stripes",
    "legacy": [-83.0457538,42.331427]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ead6dc59b17d42c5b9e35e187924c690.webp",
    "location": "Issaquah, King County, Washington, United States",
    "name": "Modest Mouse",
    "legacy": [-122.0326191,47.5301011]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/0694baa5af95b430016c440553dba169.webp",
    "location": "Nashville, Davidson County, Tennessee, United States",
    "name": "Kings of Leon",
    "legacy": [-86.7816016,36.1626638]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/04c140c3d9844b4dcb9c9a93e0f23448.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "name": "The Postal Service",
    "legacy": [-118.2436596,34.0522265]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/2c7b4e08bf08486b96235bbf57cc9293.webp",
    "location": "Omaha, Douglas County, Nebraska, United States",
    "name": "Bright Eyes",
    "legacy": [-95.9345034,41.2565369]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3c572d468104a02c21844c5bf61581b1.webp",
    "location": "Dundee, Scotland, United Kingdom",
    "name": "Snow Patrol",
    "legacy": [-2.970721,56.462018]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/be62578c6e6245f2a8cf49f5a33d8b06.webp",
    "location": "Middletown, Middlesex County, Connecticut, United States",
    "name": "MGMT",
    "legacy": [-72.6506488,41.5623209]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/77be9d4f51949813088eba8d87db8235.webp",
    "location": "Alton, Madison County, Illinois, United States",
    "name": "Miles Davis",
    "legacy": [-90.1842764,38.8906038]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/fe6b4fb54ed64405a80d430ac1259177.webp",
    "location": "Hamlet, Richmond County, North Carolina, United States",
    "name": "John Coltrane",
    "legacy": [-79.6942222,34.8848775]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d40f4e5072094383aa56c6828ea8f43a.webp",
    "location": "BedfordStuyvesant, Brooklyn, New York, New York, United States",
    "name": "Norah Jones",
    "legacy": [-73.9417735,40.6872176]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/4ce48b72eafea595436782e19e36ab55.webp",
    "location": "Southgate, Enfield, London, England, United Kingdom",
    "name": "Amy Winehouse",
    "legacy": [-0.1240456,51.62476119999999]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/4564e19373d64252833bd8aff73b9a2e.webp",
    "location": "Hoboken, Hudson County, New Jersey, United States",
    "name": "Frank Sinatra",
    "legacy": [-74.0323626,40.7439905]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/59b2c835ffff448f87499e062303260e.webp",
    "location": "New Orleans, Louisiana, United States",
    "name": "Louis Armstrong",
    "legacy": [-90.0715323,29.95106579999999]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d00e2307c59046c7be15bb0d8e122619.webp",
    "location": "Tryon, Polk County, North Carolina, United States",
    "name": "Nina Simone",
    "legacy": [-82.2384479,35.2081694]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/17d89fcb5ede04e2d2eb447e5bd80bb1.webp",
    "location": "Newport News, Virginia, United States",
    "name": "Ella Fitzgerald",
    "legacy": [-76.4730122,37.0870821]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/bcb3ea5aed914dc9b5e604aeeb2fd78f.webp",
    "location": "Philadelphia, Philadelphia County, Pennsylvania, United States",
    "name": "Billie Holiday",
    "legacy": [-75.1652215,39.9525839]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/f06878dcc27f4346b173e5d1612285ee.webp",
    "location": "Chicago, Cook County, Illinois, United States",
    "name": "Herbie Hancock",
    "legacy": [-87.6297982,41.8781136]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/36e94b2a5333416c9ae556cec5d6f4b3.webp",
    "location": "Rocky Mount, Edgecombe County, North Carolina, United States",
    "name": "Thelonious Monk",
    "legacy": [-77.7905339,35.9382103]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/6c85e46cffb04e9da74f0a9b10501e0d.webp",
    "location": "Albany, Dougherty County, Georgia, United States",
    "name": "Ray Charles",
    "legacy": [-84.15574099999999,31.5785074]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/f8935acde81f5ff722deaa0fd6e28b94.webp",
    "location": "Nogales, Santa Cruz County, Arizona, United States",
    "name": "Charles Mingus",
    "legacy": [-110.9342532,31.3403775]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/fc089452e95b49de9465b180791d026c.webp",
    "location": "Nanaimo, Regional District of Nanaimo, British Columbia, Canada",
    "name": "Diana Krall",
    "legacy": [-123.9400717,49.165895]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/9ba4b604462a92b976b7016d662895d9.webp",
    "location": "Washington, D.C., United States",
    "name": "Duke Ellington",
    "legacy": [-77.0368707,38.9071923]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/65bc438bf96449f8a53e939d0805f822.webp",
    "location": "London, England, United Kingdom",
    "name": "The Cinematic Orchestra",
    "legacy": [-0.1277583,51.5073509]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/830c43bd43268081cff52d01acd02e26.webp",
    "location": "Burnaby, Metro Vancouver, British Columbia, Canada",
    "name": "Michael Bubl",
    "legacy": [-122.9805104,49.2488091]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b85772ab0b694748ae8637db3a07ada2.webp",
    "location": "Rochford, Essex, England, United Kingdom",
    "name": "Jamie Cullum",
    "legacy": [0.706515,51.582071]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/15fea98e1b40c8399ffbc44abef4d400.webp",
    "location": "Kutaisi, Imereti, Georgia",
    "name": "Katie Melua",
    "legacy": [42.7180019,42.2662428]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ca90d06de8944093b8bf59516f801603.webp",
    "location": "Montgomery, Montgomery County, Alabama, United States",
    "name": "Nat King Cole",
    "legacy": [-86.3077368,32.3792233]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/efeac1ff21d0ce3337a4f86982543cf4.webp",
    "location": "Kingston, Jamaica",
    "name": "Bob Marley & The Wailers",
    "legacy": [-76.8099041,18.0178743]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/631c2ce313d447e18358e1a268e0b5c5.webp",
    "location": "West Chester, Chester County, Pennsylvania, United States",
    "name": "Matisyahu",
    "legacy": [-75.6054882,39.9606643]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/41a4440a21184c1fbc590101df9ea758.webp",
    "location": "Paris, le-de-France, France",
    "name": "Manu Chao",
    "legacy": [2.3522219,48.856614]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b323c40a990e423e9c622a18fd7ed18a.webp",
    "location": "Osnabrck, Niedersachsen, Germany",
    "name": "Gentleman",
    "legacy": [8.0471788,52.2799112]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/9fd718d4c80e4ac89107c6c0bb908440.webp",
    "location": "Paris, le-de-France, France",
    "name": "Daft Punk",
    "legacy": [-76.8099041,18.0178743]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/cacaf8e507ab4f90cf676c4bdb618ff3.webp",
    "location": "Braintree, Essex, England, United Kingdom",
    "name": "The Prodigy",
    "legacy": [13.404954,52.52000659999999]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/67c44fbb1eaa431f8ffdee279357490f.webp",
    "location": "Basildon, Essex, England, United Kingdom",
    "name": "Depeche Mode",
    "legacy": [-1.890401,52.48624299999999]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/99fd77dfe23cf89f696f45b6f30333e6.webp",
    "location": "Bristol, England, United Kingdom",
    "name": "Massive Attack",
    "legacy": [-77.0368707,38.9071923]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/6093d29f92bb013db7437e87aa43f1dc.webp",
    "location": "Reykjavk, Hfuborgarsvi, Iceland",
    "name": "Bjork",
    "legacy": [-77.19739969999999,18.4329473]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/f34e2cc8525641b899b6057ecf6b9c20.webp",
    "location": "Harlem, Manhattan, New York, New York, United States",
    "name": "Moby",
    "legacy": [-76.8099041,18.0178743]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3ff0a87ba080bbff8109b240477dd195.webp",
    "location": "Abingdon-on-Thames, Oxfordshire, England, United Kingdom",
    "name": "Radiohead",
    "legacy": [-77.79126,18.448151]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5ed377de32edf19aecf582a57cbbef36.webp",
    "location": "Manchester, Greater Manchester, England, United Kingdom",
    "name": "The Chemical Brothers",
    "legacy": [-76.8437247,18.0287171]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b51126b92d06d711b9c6641fff9fef92.webp",
    "location": "Essex, England, United Kingdom",
    "name": "Gorillaz",
    "legacy": [-76.8099041,18.0178743]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/89a034a9ed8bb05c24f5c9b20bcfa7f3.webp",
    "location": "Troms, Troms, Norway",
    "name": "Ryksopp",
    "legacy": [6.6883728,50.8747592]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/75c4fb8c899e4247c2e3a0ec72422fa8.webp",
    "location": "Limerick, County Limerick, Munster, Ireland",
    "name": "Aphex Twin",
    "legacy": [-76.8099041,18.0178743]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a367d3ef173f40ec85f87ec6d5e7580f.webp",
    "location": "Bristol, England, United Kingdom",
    "name": "Portishead",
    "legacy": [-2.9915726,53.4083714]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/be62578c6e6245f2a8cf49f5a33d8b06.webp",
    "location": "Middletown, Middlesex County, Connecticut, United States",
    "name": "MGMT",
    "legacy": [-1.494032,53.474144]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d2a6c7edb5ce0f50e0b28169f16e94c8.webp",
    "location": "Toronto, Ontario, Canada",
    "name": "Crystal Castles",
    "legacy": [-0.1277583,51.5073509]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a5b0881de5c249a8c96eb142a83b2291.webp",
    "location": "Edinburgh, Scotland, United Kingdom",
    "name": "Boards of Canada",
    "legacy": [-0.137163,50.82253000000001]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/11e94802f74642a489b4e95acc849bb1.webp",
    "location": "Dsseldorf, Nordrhein-Westfalen, Germany",
    "name": "Kraftwerk",
    "legacy": [-1.2879529,51.67078]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a11e258c2ecb9ae7db13839c6c9b18b8.webp",
    "location": "Bromley, London, England, United Kingdom",
    "name": "Fatboy Slim",
    "legacy": [-0.1277583,51.5073509]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/23f88e6cab864c5caff20e1fa01e2259.webp",
    "location": "Bath, Somerset, England, United Kingdom",
    "name": "Goldfrapp",
    "legacy": [-0.1277583,51.5073509]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/99a15ad057a848e98521305ff2fa5a82.webp",
    "location": "Stockholm, Stockholm municipality, Stockholms ln, Sweden",
    "name": "The Knife",
    "legacy": [-0.1277583,51.5073509]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/20d9729683904ee499f6079f0de188d3.webp",
    "location": "Cleveland, Cuyahoga County, Ohio, United States",
    "name": "Nine Inch Nails",
    "legacy": [-1.1397592,52.6368778]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3470ef43864b410f8ca294c1905ada94.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "name": "Red Hot Chili Peppers",
    "legacy": [-0.1240456,51.62476119999999]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/398b96868ddd81accf78dfaa65e09527.webp",
    "location": "Liverpool, Merseyside, England, United Kingdom",
    "name": "The Beatles",
    "legacy": [-3.496688,50.54703300000001]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/30bdc0dce0dc498cb3bc05980a3d3276.webp",
    "location": "Teignmouth, Devon, England, United Kingdom",
    "name": "Muse",
    "legacy": [-0.9781303,51.4542645]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/fd3dc6d95c663dd05adfe976dc276053.webp",
    "location": "London, England, United Kingdom",
    "name": "Coldplay",
    "legacy": [-0.223731,51.491187]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3ff0a87ba080bbff8109b240477dd195.webp",
    "location": "Abingdon-on-Thames, Oxfordshire, England, United Kingdom",
    "name": "Radiohead",
    "legacy": [0.483679,50.917405]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/27dcfc0e01b2745c5b0a59d8523d9710.webp",
    "location": "Seattle, King County, Washington, United States",
    "name": "Foo Fighters",
    "legacy": [-0.1277583,51.5073509]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/602d46973bf92a0a05f14193aa0129a9.webp",
    "location": "Dublin, County Dublin, Leinster, Ireland",
    "name": "U2",
    "legacy": [-2.9915726,53.4083714]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/0dbfcde2cb52401ca54fd7e80187cc27.webp",
    "location": "Agoura Hills, Los Angeles County, California, United States",
    "name": "Linkin Park",
    "legacy": [-0.1277583,51.5073509]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ab216abc7e274d1eaa9f73aa13e7e5c9.webp",
    "location": "London, England, United Kingdom",
    "name": "Led Zeppelin",
    "legacy": [-0.1277583,51.5073509]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/de74336cde5f4066f382dc25d8e3e3db.webp",
    "location": "London, England, United Kingdom",
    "name": "Queen",
    "legacy": [-122.273042,37.8715226]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ec607a2794aa4b21a05f76b1702e4f16.webp",
    "location": "London, England, United Kingdom",
    "name": "Pink Floyd",
    "legacy": [-74.0059728,40.7127753]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/07c068d8d56c81fd727a386e483df970.webp",
    "location": "Las Vegas, Clark County, Nevada, United States",
    "name": "The Killers",
    "legacy": [-117.9988026,33.6594835]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/9f67a736539bcf7d3ae6e25152c9fae0.webp",
    "location": "Detroit, Wayne County, Michigan, United States",
    "name": "The White Stripes",
    "legacy": [-0.1277583,51.5073509]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/dea723a5667447c7b579a7afef909e40.webp",
    "location": "London, England, United Kingdom",
    "name": "The Rolling Stones",
    "legacy": [-118.2436596,34.0522265]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d3b70e8f10224e5308913683b85b21e0.webp",
    "location": "Berkeley, Alameda County, California, United States",
    "name": "Green Day",
    "legacy": [-117.0358646,32.9628232]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/7d102ebcf4184bb1ae2b851efcbceb30.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "name": "Guns N' Roses",
    "legacy": [-118.2436596,34.0522265]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/18646fb33974400ba421af23caea2be5.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "name": "The Doors",
    "legacy": [-122.4194155,37.7749295]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/05d78b59cf1242f09fab2176c8bf07df.webp",
    "location": "Glendale, Los Angeles County, California, United States",
    "name": "System of a Down",
    "legacy": [-87.6297982,41.8781136]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/68a5f976043041ed28eec7978b31b373.webp",
    "location": "Sydney, New South Wales, Australia",
    "name": "AC/DC",
    "legacy": [-74.08319709999999,40.8823215]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/eff4af321ab641338b563fbc4bf99508.webp",
    "location": "St. Joseph, Buchanan County, Missouri, United States",
    "name": "Eminem",
    "legacy": [-79.0203732,43.8508553]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/f16677242b24bd85ef316ed7c3281c74.webp",
    "location": "Atlanta, Fulton County, Georgia, United States",
    "name": "Kanye West",
    "legacy": [-122.2977557,37.886704]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b51126b92d06d711b9c6641fff9fef92.webp",
    "location": "Essex, England, United Kingdom",
    "name": "Gorillaz",
    "legacy": [-79.9958864,40.44062479999999]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/926854c69a29feccc2b40a8026e6ccf2.webp",
    "location": "New York, New York, United States",
    "name": "Beastie Boys",
    "legacy": [-71.0022705,42.2528772]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b9ecb285aa6bd500d6423b9b4a9d7e78.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "name": "Black Eyed Peas",
    "legacy": [-86.24839209999999,43.2341813]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/e52dac407e6f4afc814d43efb836044d.webp",
    "location": "East Point, Fulton County, Georgia, United States",
    "name": "OutKast",
    "legacy": [-74.1723667,40.735657]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/794901abbf7c49b0a51e905985507592.webp",
    "location": "Philadelphia, Philadelphia County, Pennsylvania, United States",
    "name": "The Roots",
    "legacy": [-85.323214,51.253775]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5743442ef66d4b7baa92fd3d1c5777e9.webp",
    "location": "South Gate, Los Angeles County, California, United States",
    "name": "Cypress Hill",
    "legacy": [-87.7228384,42.0722513]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/8afc018dc6734428a3d84a493f26f7da.webp",
    "location": "Brooklyn, New York, New York, United States",
    "name": "Nas",
    "legacy": [-118.2436596,34.0522265]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d5fd9502e7ea46079ab13bc69633368b.webp",
    "location": "East Harlem, Manhattan, New York, New York, United States",
    "name": "2Pac",
    "legacy": [0.488736,51.57608399999999]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b108ea51552702e03ae2fc49a60b5fee.webp",
    "location": "St. Albans, Queens, New York, New York, United States",
    "name": "A Tribe Called Quest",
    "legacy": [-0.1872275,51.1091401]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/61c6585a3d6242319263b4583d3f75c9.webp",
    "location": "Long Beach, Los Angeles County, California, United States",
    "name": "Snoop Dogg",
    "legacy": [-0.1277583,51.5073509]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3bc12697cfbc41bda51c3756f959efab.webp",
    "location": "San Jose, Santa Clara County, California, United States",
    "name": "DJ Shadow",
    "legacy": [-2.2426305,53.4807593]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a2f54205d4024292bc501d30954315bb.webp",
    "location": "Compton, Los Angeles County, California, United States",
    "name": "Dr. Dre",
    "legacy": [-118.2436596,34.0522265]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/04b98d7ca0304deb84ff7fd7115325c7.webp",
    "location": "Chicago, Cook County, Illinois, United States",
    "name": "Common",
    "legacy": [-87.3371523,41.6020403]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/4eb9093c21d882883e6c7e5838b15a23.webp",
    "location": "Brooklyn, New York, New York, United States",
    "name": "Mos Def",
    "legacy": [-2.2901264,53.48752349999999]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/1abbe3b25eb8bba21195d1db26709b08.webp",
    "location": "Saint Michael, Barbados",
    "name": "Rihanna",
    "legacy": [-0.1156148,51.4612794]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c825233e09af4641a5ce7b6ece883aae.webp",
    "location": "High Green, Sheffield, South Yorkshire, England, United Kingdom",
    "name": "Arctic Monkeys",
    "legacy": [-2.2901264,53.48752349999999]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3ff0a87ba080bbff8109b240477dd195.webp",
    "location": "Abingdon-on-Thames, Oxfordshire, England, United Kingdom",
    "name": "Radiohead",
    "legacy": [-1.890401,52.48624299999999]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/07c068d8d56c81fd727a386e483df970.webp",
    "location": "Las Vegas, Clark County, Nevada, United States",
    "name": "The Killers",
    "legacy": [-83.8888647,43.5944677]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d845a978fecb4b3f9d84037588241e6a.webp",
    "location": "Bellingham, Whatcom County, Washington, United States",
    "name": "Death Cab for Cutie",
    "legacy": [-0.1277583,51.5073509]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/39ed61491137c5a43a2ffb67bbf01894.webp",
    "location": "Glasgow, Scotland, United Kingdom",
    "name": "Franz Ferdinand",
    "legacy": [-71.0588801,42.3600825]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/fd3dc6d95c663dd05adfe976dc276053.webp",
    "location": "London, England, United Kingdom",
    "name": "Coldplay",
    "legacy": [-74.360846,40.45940210000001]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/697500d18da74c598bedf983f4933207.webp",
    "location": "Reading, England, United Kingdom",
    "name": "Bloc Party",
    "legacy": [-74.0059728,40.7127753]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/30bdc0dce0dc498cb3bc05980a3d3276.webp",
    "location": "Teignmouth, Devon, England, United Kingdom",
    "name": "Muse",
    "legacy": [-0.0231099,51.4807988]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/304587494c2a6243c74188aecf931891.webp",
    "location": "New York, New York, United States",
    "name": "The Strokes",
    "legacy": [9.732010400000002,52.3758916]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/de5bdf5cbc4c46baa74622b887719507.webp",
    "location": "Brighton, Brighton and Hove, England, United Kingdom",
    "name": "The Kooks",
    "legacy": [-2.3590167,51.3810641]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c7866680f9dc4b59820babee13db2559.webp",
    "location": "Albuquerque, Bernalillo County, New Mexico, United States",
    "name": "The Shins",
    "legacy": [-0.170037,51.4869429]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c0617e4ebdc84d8dcd3c80aa5799eed4.webp",
    "location": "New York, New York, United States",
    "name": "Yeah Yeah Yeahs",
    "legacy": [-0.1277583,51.5073509]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/9f67a736539bcf7d3ae6e25152c9fae0.webp",
    "location": "Detroit, Wayne County, Michigan, United States",
    "name": "The White Stripes",
    "legacy": [2.3522219,48.856614]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ead6dc59b17d42c5b9e35e187924c690.webp",
    "location": "Issaquah, King County, Washington, United States",
    "name": "Modest Mouse",
    "legacy": [-73.9712488,40.7830603]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/0694baa5af95b430016c440553dba169.webp",
    "location": "Nashville, Davidson County, Tennessee, United States",
    "name": "Kings of Leon",
    "legacy": [-83.8888647,43.5944677]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/04c140c3d9844b4dcb9c9a93e0f23448.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "name": "The Postal Service",
    "legacy": [0.5509269,51.880087]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/2c7b4e08bf08486b96235bbf57cc9293.webp",
    "location": "Omaha, Douglas County, Nebraska, United States",
    "name": "Bright Eyes",
    "legacy": [-87.3371523,41.6020403]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3c572d468104a02c21844c5bf61581b1.webp",
    "location": "Dundee, Scotland, United Kingdom",
    "name": "Snow Patrol",
    "legacy": [-2.2426305,53.4807593]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/be62578c6e6245f2a8cf49f5a33d8b06.webp",
    "location": "Middletown, Middlesex County, Connecticut, United States",
    "name": "MGMT",
    "legacy": [-59.59880889999999,13.1132219]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/77be9d4f51949813088eba8d87db8235.webp",
    "location": "Alton, Madison County, Illinois, United States",
    "name": "Miles Davis",
    "legacy": [2.3522219,48.856614]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/fe6b4fb54ed64405a80d430ac1259177.webp",
    "location": "Hamlet, Richmond County, North Carolina, United States",
    "name": "John Coltrane",
    "legacy": [0.013156,51.406025]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d40f4e5072094383aa56c6828ea8f43a.webp",
    "location": "BedfordStuyvesant, Brooklyn, New York, New York, United States",
    "name": "Norah Jones",
    "legacy": [-90.4531535,31.2437872]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/4ce48b72eafea595436782e19e36ab55.webp",
    "location": "Southgate, Enfield, London, England, United Kingdom",
    "name": "Amy Winehouse",
    "legacy": [144.9630576,-37.8136276]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/4564e19373d64252833bd8aff73b9a2e.webp",
    "location": "Hoboken, Hudson County, New Jersey, United States",
    "name": "Frank Sinatra",
    "legacy": [-0.3413965,51.5250366]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/59b2c835ffff448f87499e062303260e.webp",
    "location": "New Orleans, Louisiana, United States",
    "name": "Louis Armstrong",
    "legacy": [-0.1277583,51.5073509]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d00e2307c59046c7be15bb0d8e122619.webp",
    "location": "Tryon, Polk County, North Carolina, United States",
    "name": "Nina Simone",
    "legacy": [-90.0489801,35.1495343]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/17d89fcb5ede04e2d2eb447e5bd80bb1.webp",
    "location": "Newport News, Virginia, United States",
    "name": "Ella Fitzgerald",
    "legacy": [-0.1156148,51.4612794]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/bcb3ea5aed914dc9b5e604aeeb2fd78f.webp",
    "location": "Philadelphia, Philadelphia County, Pennsylvania, United States",
    "name": "Billie Holiday",
    "legacy": [-74.1502007,40.5795317]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/f06878dcc27f4346b173e5d1612285ee.webp",
    "location": "Chicago, Cook County, Illinois, United States",
    "name": "Herbie Hancock",
    "legacy": [7.0982068,50.73743]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/36e94b2a5333416c9ae556cec5d6f4b3.webp",
    "location": "Rocky Mount, Edgecombe County, North Carolina, United States",
    "name": "Thelonious Monk",
    "legacy": [-2.3590167,51.3810641]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/6c85e46cffb04e9da74f0a9b10501e0d.webp",
    "location": "Albany, Dougherty County, Georgia, United States",
    "name": "Ray Charles",
    "legacy": [-157.9225549,21.5918615]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/f8935acde81f5ff722deaa0fd6e28b94.webp",
    "location": "Nogales, Santa Cruz County, Arizona, United States",
    "name": "Charles Mingus",
    "legacy": [-6.538458899999999,53.339897]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/fc089452e95b49de9465b180791d026c.webp",
    "location": "Nanaimo, Regional District of Nanaimo, British Columbia, Canada",
    "name": "Diana Krall",
    "legacy": [-81.3498211,34.1659795]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/9ba4b604462a92b976b7016d662895d9.webp",
    "location": "Washington, D.C., United States",
    "name": "Duke Ellington",
    "legacy": [-77.3733139,37.6087561]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/65bc438bf96449f8a53e939d0805f822.webp",
    "location": "London, England, United Kingdom",
    "name": "The Cinematic Orchestra",
    "legacy": [-73.1894384,41.1792258]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/830c43bd43268081cff52d01acd02e26.webp",
    "location": "Burnaby, Metro Vancouver, British Columbia, Canada",
    "name": "Michael Bubl",
    "legacy": [5.3220544,60.39126279999999]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b85772ab0b694748ae8637db3a07ada2.webp",
    "location": "Rochford, Essex, England, United Kingdom",
    "name": "Jamie Cullum",
    "legacy": [-95.9345034,41.2565369]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/15fea98e1b40c8399ffbc44abef4d400.webp",
    "location": "Kutaisi, Imereti, Georgia",
    "name": "Katie Melua",
    "legacy": [11.97456,57.70887]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ca90d06de8944093b8bf59516f801603.webp",
    "location": "Montgomery, Montgomery County, Alabama, United States",
    "name": "Nat King Cole",
    "legacy": [96.173526,16.840939]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/efeac1ff21d0ce3337a4f86982543cf4.webp",
    "location": "Kingston, Jamaica",
    "name": "Bob Marley & The Wailers",
    "legacy": [-79.2468626,43.1593745]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/631c2ce313d447e18358e1a268e0b5c5.webp",
    "location": "West Chester, Chester County, Pennsylvania, United States",
    "name": "Matisyahu",
    "legacy": [-73.8207618,40.724707]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/41a4440a21184c1fbc590101df9ea758.webp",
    "location": "Paris, le-de-France, France",
    "name": "Manu Chao",
    "legacy": [-91.4984941,44.811349]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b323c40a990e423e9c622a18fd7ed18a.webp",
    "location": "Osnabrck, Niedersachsen, Germany",
    "name": "Gentleman",
    "legacy": [-1.6644823,51.24144889999999]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/9fd718d4c80e4ac89107c6c0bb908440.webp",
    "location": "Paris, le-de-France, France",
    "name": "Daft Punk",
    "legacy": [2.3522219,48.856614]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/cacaf8e507ab4f90cf676c4bdb618ff3.webp",
    "location": "Braintree, Essex, England, United Kingdom",
    "name": "The Prodigy",
    "legacy": [0.5509269,51.880087]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/67c44fbb1eaa431f8ffdee279357490f.webp",
    "location": "Basildon, Essex, England, United Kingdom",
    "name": "Depeche Mode",
    "legacy": [0.488736,51.57608399999999]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/99fd77dfe23cf89f696f45b6f30333e6.webp",
    "location": "Bristol, England, United Kingdom",
    "name": "Massive Attack",
    "legacy": [-2.58791,51.454513]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/6093d29f92bb013db7437e87aa43f1dc.webp",
    "location": "Reykjavk, Hfuborgarsvi, Iceland",
    "name": "Bjork",
    "legacy": [-21.6131425,64.1846369]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/f34e2cc8525641b899b6057ecf6b9c20.webp",
    "location": "Harlem, Manhattan, New York, New York, United States",
    "name": "Moby",
    "legacy": [-73.9464769,40.8115504]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3ff0a87ba080bbff8109b240477dd195.webp",
    "location": "Abingdon-on-Thames, Oxfordshire, England, United Kingdom",
    "name": "Radiohead",
    "legacy": [-1.2879529,51.67078]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5ed377de32edf19aecf582a57cbbef36.webp",
    "location": "Manchester, Greater Manchester, England, United Kingdom",
    "name": "The Chemical Brothers",
    "legacy": [-2.2426305,53.4807593]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b51126b92d06d711b9c6641fff9fef92.webp",
    "location": "Essex, England, United Kingdom",
    "name": "Gorillaz",
    "legacy": [0.4856781,51.57424469999999]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/89a034a9ed8bb05c24f5c9b20bcfa7f3.webp",
    "location": "Troms, Troms, Norway",
    "name": "Ryksopp",
    "legacy": [18.7819365,69.81782419999999]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/75c4fb8c899e4247c2e3a0ec72422fa8.webp",
    "location": "Limerick, County Limerick, Munster, Ireland",
    "name": "Aphex Twin",
    "legacy": [-8.6267343,52.6638367]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a367d3ef173f40ec85f87ec6d5e7580f.webp",
    "location": "Bristol, England, United Kingdom",
    "name": "Portishead",
    "legacy": [-2.58791,51.454513]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/be62578c6e6245f2a8cf49f5a33d8b06.webp",
    "location": "Middletown, Middlesex County, Connecticut, United States",
    "name": "MGMT",
    "legacy": [-72.6506488,41.5623209]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d2a6c7edb5ce0f50e0b28169f16e94c8.webp",
    "location": "Toronto, Ontario, Canada",
    "name": "Crystal Castles",
    "legacy": [-79.3831843,43.653226]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a5b0881de5c249a8c96eb142a83b2291.webp",
    "location": "Edinburgh, Scotland, United Kingdom",
    "name": "Boards of Canada",
    "legacy": [-3.188267,55.953252]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/11e94802f74642a489b4e95acc849bb1.webp",
    "location": "Dsseldorf, Nordrhein-Westfalen, Germany",
    "name": "Kraftwerk",
    "legacy": [6.7734556,51.2277411]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a11e258c2ecb9ae7db13839c6c9b18b8.webp",
    "location": "Bromley, London, England, United Kingdom",
    "name": "Fatboy Slim",
    "legacy": [0.013156,51.406025]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/23f88e6cab864c5caff20e1fa01e2259.webp",
    "location": "Bath, Somerset, England, United Kingdom",
    "name": "Goldfrapp",
    "legacy": [-2.3590167,51.3810641]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/99a15ad057a848e98521305ff2fa5a82.webp",
    "location": "Stockholm, Stockholm municipality, Stockholms ln, Sweden",
    "name": "The Knife",
    "legacy": [17.9672428,59.31706999999999]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/20d9729683904ee499f6079f0de188d3.webp",
    "location": "Cleveland, Cuyahoga County, Ohio, United States",
    "name": "Nine Inch Nails",
    "legacy": [-81.6943605,41.49932]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3470ef43864b410f8ca294c1905ada94.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "name": "Red Hot Chili Peppers",
    "legacy": [-118.2436596,34.0522265]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/398b96868ddd81accf78dfaa65e09527.webp",
    "location": "Liverpool, Merseyside, England, United Kingdom",
    "name": "The Beatles",
    "legacy": [-2.9915726,53.4083714]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/30bdc0dce0dc498cb3bc05980a3d3276.webp",
    "location": "Teignmouth, Devon, England, United Kingdom",
    "name": "Muse",
    "legacy": [-3.496688,50.54703300000001]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/fd3dc6d95c663dd05adfe976dc276053.webp",
    "location": "London, England, United Kingdom",
    "name": "Coldplay",
    "legacy": [-0.1277583,51.5073509]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3ff0a87ba080bbff8109b240477dd195.webp",
    "location": "Abingdon-on-Thames, Oxfordshire, England, United Kingdom",
    "name": "Radiohead",
    "legacy": [-1.2879529,51.67078]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/27dcfc0e01b2745c5b0a59d8523d9710.webp",
    "location": "Seattle, King County, Washington, United States",
    "name": "Foo Fighters",
    "legacy": [-122.3320708,47.6062095]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/602d46973bf92a0a05f14193aa0129a9.webp",
    "location": "Dublin, County Dublin, Leinster, Ireland",
    "name": "U2",
    "legacy": [-6.2603097,53.3498053]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/0dbfcde2cb52401ca54fd7e80187cc27.webp",
    "location": "Agoura Hills, Los Angeles County, California, United States",
    "name": "Linkin Park",
    "legacy": [-118.7616764,34.1533395]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ab216abc7e274d1eaa9f73aa13e7e5c9.webp",
    "location": "London, England, United Kingdom",
    "name": "Led Zeppelin",
    "legacy": [-0.1277583,51.5073509]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/de74336cde5f4066f382dc25d8e3e3db.webp",
    "location": "London, England, United Kingdom",
    "name": "Queen",
    "legacy": [-0.1277583,51.5073509]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ec607a2794aa4b21a05f76b1702e4f16.webp",
    "location": "London, England, United Kingdom",
    "name": "Pink Floyd",
    "legacy": [-0.1277583,51.5073509]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/07c068d8d56c81fd727a386e483df970.webp",
    "location": "Las Vegas, Clark County, Nevada, United States",
    "name": "The Killers",
    "legacy": [-115.1398296,36.1699412]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/9f67a736539bcf7d3ae6e25152c9fae0.webp",
    "location": "Detroit, Wayne County, Michigan, United States",
    "name": "The White Stripes",
    "legacy": [-83.0457538,42.331427]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/dea723a5667447c7b579a7afef909e40.webp",
    "location": "London, England, United Kingdom",
    "name": "The Rolling Stones",
    "legacy": [-0.1277583,51.5073509]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d3b70e8f10224e5308913683b85b21e0.webp",
    "location": "Berkeley, Alameda County, California, United States",
    "name": "Green Day",
    "legacy": [-122.273042,37.8715226]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/7d102ebcf4184bb1ae2b851efcbceb30.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "name": "Guns N' Roses",
    "legacy": [-118.2436596,34.0522265]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/18646fb33974400ba421af23caea2be5.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "name": "The Doors",
    "legacy": [-118.2436596,34.0522265]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/05d78b59cf1242f09fab2176c8bf07df.webp",
    "location": "Glendale, Los Angeles County, California, United States",
    "name": "System of a Down",
    "legacy": [-118.255075,34.1425078]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/68a5f976043041ed28eec7978b31b373.webp",
    "location": "Sydney, New South Wales, Australia",
    "name": "AC/DC",
    "legacy": [151.2092955,-33.8688197]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/eff4af321ab641338b563fbc4bf99508.webp",
    "location": "St. Joseph, Buchanan County, Missouri, United States",
    "name": "Eminem",
    "legacy": [-94.84668099999999,39.7674578]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/f16677242b24bd85ef316ed7c3281c74.webp",
    "location": "Atlanta, Fulton County, Georgia, United States",
    "name": "Kanye West",
    "legacy": [-84.3879824,33.7489954]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b51126b92d06d711b9c6641fff9fef92.webp",
    "location": "Essex, England, United Kingdom",
    "name": "Gorillaz",
    "legacy": [0.4856781,51.57424469999999]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/926854c69a29feccc2b40a8026e6ccf2.webp",
    "location": "New York, New York, United States",
    "name": "Beastie Boys",
    "legacy": [-74.0059728,40.7127753]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b9ecb285aa6bd500d6423b9b4a9d7e78.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "name": "Black Eyed Peas",
    "legacy": [-118.2436596,34.0522265]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/e52dac407e6f4afc814d43efb836044d.webp",
    "location": "East Point, Fulton County, Georgia, United States",
    "name": "OutKast",
    "legacy": [-84.43937240000001,33.6795531]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/794901abbf7c49b0a51e905985507592.webp",
    "location": "Philadelphia, Philadelphia County, Pennsylvania, United States",
    "name": "The Roots",
    "legacy": [-75.1652215,39.9525839]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/5743442ef66d4b7baa92fd3d1c5777e9.webp",
    "location": "South Gate, Los Angeles County, California, United States",
    "name": "Cypress Hill",
    "legacy": [-118.2120161,33.954737]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/8afc018dc6734428a3d84a493f26f7da.webp",
    "location": "Brooklyn, New York, New York, United States",
    "name": "Nas",
    "legacy": [-73.9441579,40.6781784]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d5fd9502e7ea46079ab13bc69633368b.webp",
    "location": "East Harlem, Manhattan, New York, New York, United States",
    "name": "2Pac",
    "legacy": [-73.93892129999999,40.7957399]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b108ea51552702e03ae2fc49a60b5fee.webp",
    "location": "St. Albans, Queens, New York, New York, United States",
    "name": "A Tribe Called Quest",
    "legacy": [-73.76436880000001,40.6895283]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/61c6585a3d6242319263b4583d3f75c9.webp",
    "location": "Long Beach, Los Angeles County, California, United States",
    "name": "Snoop Dogg",
    "legacy": [-118.1937395,33.7700504]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3bc12697cfbc41bda51c3756f959efab.webp",
    "location": "San Jose, Santa Clara County, California, United States",
    "name": "DJ Shadow",
    "legacy": [-121.8863286,37.3382082]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/a2f54205d4024292bc501d30954315bb.webp",
    "location": "Compton, Los Angeles County, California, United States",
    "name": "Dr. Dre",
    "legacy": [-118.2200712,33.8958492]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/04b98d7ca0304deb84ff7fd7115325c7.webp",
    "location": "Chicago, Cook County, Illinois, United States",
    "name": "Common",
    "legacy": [-87.6297982,41.8781136]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/4eb9093c21d882883e6c7e5838b15a23.webp",
    "location": "Brooklyn, New York, New York, United States",
    "name": "Mos Def",
    "legacy": [-73.9441579,40.6781784]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/1abbe3b25eb8bba21195d1db26709b08.webp",
    "location": "Saint Michael, Barbados",
    "name": "Rihanna",
    "legacy": [-59.59880889999999,13.1132219]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c825233e09af4641a5ce7b6ece883aae.webp",
    "location": "High Green, Sheffield, South Yorkshire, England, United Kingdom",
    "name": "Arctic Monkeys",
    "legacy": [-1.494032,53.474144]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3ff0a87ba080bbff8109b240477dd195.webp",
    "location": "Abingdon-on-Thames, Oxfordshire, England, United Kingdom",
    "name": "Radiohead",
    "legacy": [-1.2879529,51.67078]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/07c068d8d56c81fd727a386e483df970.webp",
    "location": "Las Vegas, Clark County, Nevada, United States",
    "name": "The Killers",
    "legacy": [-115.1398296,36.1699412]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d845a978fecb4b3f9d84037588241e6a.webp",
    "location": "Bellingham, Whatcom County, Washington, United States",
    "name": "Death Cab for Cutie",
    "legacy": [-122.4786854,48.7519112]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/39ed61491137c5a43a2ffb67bbf01894.webp",
    "location": "Glasgow, Scotland, United Kingdom",
    "name": "Franz Ferdinand",
    "legacy": [-4.251806,55.864237]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/fd3dc6d95c663dd05adfe976dc276053.webp",
    "location": "London, England, United Kingdom",
    "name": "Coldplay",
    "legacy": [-0.1277583,51.5073509]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/697500d18da74c598bedf983f4933207.webp",
    "location": "Reading, England, United Kingdom",
    "name": "Bloc Party",
    "legacy": [-0.9781303,51.4542645]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/30bdc0dce0dc498cb3bc05980a3d3276.webp",
    "location": "Teignmouth, Devon, England, United Kingdom",
    "name": "Muse",
    "legacy": [-3.496688,50.54703300000001]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/304587494c2a6243c74188aecf931891.webp",
    "location": "New York, New York, United States",
    "name": "The Strokes",
    "legacy": [-74.0059728,40.7127753]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/de5bdf5cbc4c46baa74622b887719507.webp",
    "location": "Brighton, Brighton and Hove, England, United Kingdom",
    "name": "The Kooks",
    "legacy": [-0.137163,50.82253000000001]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c7866680f9dc4b59820babee13db2559.webp",
    "location": "Albuquerque, Bernalillo County, New Mexico, United States",
    "name": "The Shins",
    "legacy": [-106.650422,35.0843859]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/c0617e4ebdc84d8dcd3c80aa5799eed4.webp",
    "location": "New York, New York, United States",
    "name": "Yeah Yeah Yeahs",
    "legacy": [-74.0059728,40.7127753]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/9f67a736539bcf7d3ae6e25152c9fae0.webp",
    "location": "Detroit, Wayne County, Michigan, United States",
    "name": "The White Stripes",
    "legacy": [-83.0457538,42.331427]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ead6dc59b17d42c5b9e35e187924c690.webp",
    "location": "Issaquah, King County, Washington, United States",
    "name": "Modest Mouse",
    "legacy": [-122.0326191,47.5301011]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/0694baa5af95b430016c440553dba169.webp",
    "location": "Nashville, Davidson County, Tennessee, United States",
    "name": "Kings of Leon",
    "legacy": [-86.7816016,36.1626638]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/04c140c3d9844b4dcb9c9a93e0f23448.webp",
    "location": "Los Angeles, Los Angeles County, California, United States",
    "name": "The Postal Service",
    "legacy": [-118.2436596,34.0522265]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/2c7b4e08bf08486b96235bbf57cc9293.webp",
    "location": "Omaha, Douglas County, Nebraska, United States",
    "name": "Bright Eyes",
    "legacy": [-95.9345034,41.2565369]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/3c572d468104a02c21844c5bf61581b1.webp",
    "location": "Dundee, Scotland, United Kingdom",
    "name": "Snow Patrol",
    "legacy": [-2.970721,56.462018]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/be62578c6e6245f2a8cf49f5a33d8b06.webp",
    "location": "Middletown, Middlesex County, Connecticut, United States",
    "name": "MGMT",
    "legacy": [-72.6506488,41.5623209]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/77be9d4f51949813088eba8d87db8235.webp",
    "location": "Alton, Madison County, Illinois, United States",
    "name": "Miles Davis",
    "legacy": [-90.1842764,38.8906038]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/fe6b4fb54ed64405a80d430ac1259177.webp",
    "location": "Hamlet, Richmond County, North Carolina, United States",
    "name": "John Coltrane",
    "legacy": [-79.6942222,34.8848775]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d40f4e5072094383aa56c6828ea8f43a.webp",
    "location": "BedfordStuyvesant, Brooklyn, New York, New York, United States",
    "name": "Norah Jones",
    "legacy": [-73.9417735,40.6872176]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/4ce48b72eafea595436782e19e36ab55.webp",
    "location": "Southgate, Enfield, London, England, United Kingdom",
    "name": "Amy Winehouse",
    "legacy": [-0.1240456,51.62476119999999]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/4564e19373d64252833bd8aff73b9a2e.webp",
    "location": "Hoboken, Hudson County, New Jersey, United States",
    "name": "Frank Sinatra",
    "legacy": [-74.0323626,40.7439905]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/59b2c835ffff448f87499e062303260e.webp",
    "location": "New Orleans, Louisiana, United States",
    "name": "Louis Armstrong",
    "legacy": [-90.0715323,29.95106579999999]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/d00e2307c59046c7be15bb0d8e122619.webp",
    "location": "Tryon, Polk County, North Carolina, United States",
    "name": "Nina Simone",
    "legacy": [-82.2384479,35.2081694]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/17d89fcb5ede04e2d2eb447e5bd80bb1.webp",
    "location": "Newport News, Virginia, United States",
    "name": "Ella Fitzgerald",
    "legacy": [-76.4730122,37.0870821]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/bcb3ea5aed914dc9b5e604aeeb2fd78f.webp",
    "location": "Philadelphia, Philadelphia County, Pennsylvania, United States",
    "name": "Billie Holiday",
    "legacy": [-75.1652215,39.9525839]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/f06878dcc27f4346b173e5d1612285ee.webp",
    "location": "Chicago, Cook County, Illinois, United States",
    "name": "Herbie Hancock",
    "legacy": [-87.6297982,41.8781136]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/36e94b2a5333416c9ae556cec5d6f4b3.webp",
    "location": "Rocky Mount, Edgecombe County, North Carolina, United States",
    "name": "Thelonious Monk",
    "legacy": [-77.7905339,35.9382103]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/6c85e46cffb04e9da74f0a9b10501e0d.webp",
    "location": "Albany, Dougherty County, Georgia, United States",
    "name": "Ray Charles",
    "legacy": [-84.15574099999999,31.5785074]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/f8935acde81f5ff722deaa0fd6e28b94.webp",
    "location": "Nogales, Santa Cruz County, Arizona, United States",
    "name": "Charles Mingus",
    "legacy": [-110.9342532,31.3403775]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/fc089452e95b49de9465b180791d026c.webp",
    "location": "Nanaimo, Regional District of Nanaimo, British Columbia, Canada",
    "name": "Diana Krall",
    "legacy": [-123.9400717,49.165895]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/9ba4b604462a92b976b7016d662895d9.webp",
    "location": "Washington, D.C., United States",
    "name": "Duke Ellington",
    "legacy": [-77.0368707,38.9071923]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/65bc438bf96449f8a53e939d0805f822.webp",
    "location": "London, England, United Kingdom",
    "name": "The Cinematic Orchestra",
    "legacy": [-0.1277583,51.5073509]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/830c43bd43268081cff52d01acd02e26.webp",
    "location": "Burnaby, Metro Vancouver, British Columbia, Canada",
    "name": "Michael Bubl",
    "legacy": [-122.9805104,49.2488091]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b85772ab0b694748ae8637db3a07ada2.webp",
    "location": "Rochford, Essex, England, United Kingdom",
    "name": "Jamie Cullum",
    "legacy": [0.706515,51.582071]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/15fea98e1b40c8399ffbc44abef4d400.webp",
    "location": "Kutaisi, Imereti, Georgia",
    "name": "Katie Melua",
    "legacy": [42.7180019,42.2662428]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/ca90d06de8944093b8bf59516f801603.webp",
    "location": "Montgomery, Montgomery County, Alabama, United States",
    "name": "Nat King Cole",
    "legacy": [-86.3077368,32.3792233]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/efeac1ff21d0ce3337a4f86982543cf4.webp",
    "location": "Kingston, Jamaica",
    "name": "Bob Marley & The Wailers",
    "legacy": [-76.8099041,18.0178743]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/631c2ce313d447e18358e1a268e0b5c5.webp",
    "location": "West Chester, Chester County, Pennsylvania, United States",
    "name": "Matisyahu",
    "legacy": [-75.6054882,39.9606643]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/41a4440a21184c1fbc590101df9ea758.webp",
    "location": "Paris, le-de-France, France",
    "name": "Manu Chao",
    "legacy": [2.3522219,48.856614]
},

  
  
  {
    "image" : "https://lastfm.freetls.fastly.net/i/u/ar0/b323c40a990e423e9c622a18fd7ed18a.webp",
    "location": "Osnabrck, Niedersachsen, Germany",
    "name": "Gentleman",
    "legacy": [8.0471788,52.2799112]
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