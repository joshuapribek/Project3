const mongoose = require("mongoose");
const fs = require('fs');

const Artist = require("../models/artist");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/artist"
  );
  
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
            "location": "Paris, ile-de-France, France",
            "name": "Daft Punk",
            "legacy": [2.3522219,48.856614]
        },
  
          
          
          {
            "location": "Braintree, Essex, England, United Kingdom",
            "name": "The Prodigy",
            "legacy": [0.5509269,51.880087]
        },
  
          
          
          {
            "location": "Basildon, Essex, England, United Kingdom",
            "name": "Depeche Mode",
            "legacy": [0.488736,51.57608399999999]
        },
  
          
          
          {
            "location": "Bristol, England, United Kingdom",
            "name": "Massive Attack",
            "legacy": [-2.58791,51.454513]
        },
  
          
          
          {
            "location": "Reykjavik, Hofuoborgarsvaeoio, Iceland",
            "name": "Bjork",
            "legacy": [-21.9265493,64.1420229]
        },
  
          
          
          {
            "location": "Harlem, Manhattan, New York, New York, United States",
            "name": "Moby",
            "legacy": [-73.9464769,40.8115504]
        },
  
          
          
          {
            "location": "Abingdon-on-Thames, Oxfordshire, England, United Kingdom",
            "name": "Radiohead",
            "legacy": [-1.2879529,51.67078]
        },
  
          
          
          {
            "location": "Manchester, Greater Manchester, England, United Kingdom",
            "name": "The Chemical Brothers",
            "legacy": [-2.2426305,53.4807593]
        },
  
          
          
          {
            "location": "Essex, England, United Kingdom",
            "name": "Gorillaz",
            "legacy": [0.4856781,51.57424469999999]
        },
  
          
          
          {
            "location": "Tromso, Troms, Norway",
            "name": "Royksopp",
            "legacy": [18.9553239,69.6492047]
        },
  
          
          
          {
            "location": "Limerick, County Limerick, Munster, Ireland",
            "name": "Aphex Twin",
            "legacy": [-8.6267343,52.6638367]
        },
  
          
          
          {
            "location": "Bristol, England, United Kingdom",
            "name": "Portishead",
            "legacy": [-2.58791,51.454513]
        },
  
          
          
          {
            "location": "Middletown, Middlesex County, Connecticut, United States",
            "name": "MGMT",
            "legacy": [-72.6506488,41.5623209]
        },
  
          
          
          {
            "location": "Toronto, Ontario, Canada",
            "name": "Crystal Castles",
            "legacy": [-79.3831843,43.653226]
        },
  
          
          
          {
            "location": "Edinburgh, Scotland, United Kingdom",
            "name": "Boards of Canada",
            "legacy": [-3.188267,55.953252]
        },
  
          
          
          {
            "location": "Dusseldorf, Nordrhein-Westfalen, Germany",
            "name": "Kraftwerk",
            "legacy": [6.7734556,51.2277411]
        },
  
          
          
          {
            "location": "Bromley, London, England, United Kingdom",
            "name": "Fatboy Slim",
            "legacy": [0.013156,51.406025]
        },
  
          
          
          {
            "location": "Bath, Somerset, England, United Kingdom",
            "name": "Goldfrapp",
            "legacy": [-2.3590167,51.3810641]
        },
  
          
          
          {
            "location": "Stockholm, Stockholm municipality, Stockholms lan, Sweden",
            "name": "The Knife",
            "legacy": [17.9672428,59.31706999999999]
        },
  
          
          
          {
            "location": "Cleveland, Cuyahoga County, Ohio, United States",
            "name": "Nine Inch Nails",
            "legacy": [-81.6943605,41.49932]
        },
  
          
          
          {
            "location": "Los Angeles, Los Angeles County, California, United States",
            "name": "Red Hot Chili Peppers",
            "legacy": [-118.2436596,34.0522265]
        },
  
          
          
          {
            "location": "Liverpool, Merseyside, England, United Kingdom",
            "name": "The Beatles",
            "legacy": [-2.9915726,53.4083714]
        },
  
          
          
          {
            "location": "Miami, Miami-Dade County, Florida, United States",
            "name": "Muse",
            "legacy": [-80.1917902,25.7616798]
        },
  
          
          
          {
            "location": "London, England, United Kingdom",
            "name": "Coldplay",
            "legacy": [-0.1277583,51.5073509]
        },
  
          
          
          {
            "location": "Abingdon-on-Thames, Oxfordshire, England, United Kingdom",
            "name": "Radiohead",
            "legacy": [-1.2879529,51.67078]
        },
  
          
          
          {
            "location": "Seattle, King County, Washington, United States",
            "name": "Foo Fighters",
            "legacy": [-122.3320708,47.6062095]
        },
  
          
          
          {
            "location": "Agoura Hills, Los Angeles County, California, United States",
            "name": "Linkin Park",
            "legacy": [-118.7616764,34.1533395]
        },
  
          
          
          {
            "location": "London, England, United Kingdom",
            "name": "Led Zeppelin",
            "legacy": [-0.1277583,51.5073509]
        },
  
          
          
          {
            "location": "London, England, United Kingdom",
            "name": "Queen",
            "legacy": [-0.1277583,51.5073509]
        },
  
          
          
          {
            "location": "London, England, United Kingdom",
            "name": "Pink Floyd",
            "legacy": [-0.1277583,51.5073509]
        },
  
          
          
          {
            "location": "Las Vegas, Clark County, Nevada, United States",
            "name": "The Killers",
            "legacy": [-115.1398296,36.1699412]
        },
  
          
          
          {
            "location": "Detroit, Wayne County, Michigan, United States",
            "name": "The White Stripes",
            "legacy": [-83.0457538,42.331427]
        },
  
          
          
          {
            "location": "London, England, United Kingdom",
            "name": "The Rolling Stones",
            "legacy": [-0.1277583,51.5073509]
        },
  
          
          
          {
            "location": "Berkeley, Alameda County, California, United States",
            "name": "Green Day",
            "legacy": [-122.273042,37.8715226]
        },
  
          
          
          {
            "location": "Los Angeles, Los Angeles County, California, United States",
            "name": "Guns N' Roses",
            "legacy": [-118.2436596,34.0522265]
        },
  
          
          
          {
            "location": "Los Angeles, Los Angeles County, California, United States",
            "name": "The Doors",
            "legacy": [-118.2436596,34.0522265]
        },
  
          
          
          {
            "location": "Glendale, Los Angeles County, California, United States",
            "name": "System of a Down",
            "legacy": [-118.255075,34.1425078]
        },
  
          
          
          {
            "location": "Sydney, New South Wales, Australia",
            "name": "AC/DC",
            "legacy": [151.2092955,-33.8688197]
        },
  
          
          
          {
            "location": "St. Joseph, Buchanan County, Missouri, United States",
            "name": "Eminem",
            "legacy": [-94.84668099999999,39.7674578]
        },
  
          
          
          {
            "location": "Atlanta, Fulton County, Georgia, United States",
            "name": "Kanye West",
            "legacy": [-84.3879824,33.7489954]
        },
  
          
          
          {
            "location": "Essex, England, United Kingdom",
            "name": "Gorillaz",
            "legacy": [0.4856781,51.57424469999999]
        },
  
          
          
          {
            "location": "New York, New York, United States",
            "name": "Beastie Boys",
            "legacy": [-74.0059728,40.7127753]
        },
  
          
          
          {
            "location": "Los Angeles, Los Angeles County, California, United States",
            "name": "Black Eyed Peas",
            "legacy": [-118.2436596,34.0522265]
        },
  
          
          
          {
            "location": "East Point, Fulton County, Georgia, United States",
            "name": "OutKast",
            "legacy": [-84.43937240000001,33.6795531]
        },
  
          
          
          {
            "location": "Philadelphia, Philadelphia County, Pennsylvania, United States",
            "name": "The Roots",
            "legacy": [-75.1652215,39.9525839]
        },
  
          
          
          {
            "location": "South Gate, Los Angeles County, California, United States",
            "name": "Cypress Hill",
            "legacy": [-118.2120161,33.954737]
        },
  
          
          
          {
            "location": "Brooklyn, New York, New York, United States",
            "name": "Nas",
            "legacy": [-73.9441579,40.6781784]
        },
  
          
          
          {
            "location": "East Harlem, Manhattan, New York, New York, United States",
            "name": "2Pac",
            "legacy": [-73.93892129999999,40.7957399]
        },
  
          
          
          {
            "location": "St. Albans, Queens, New York, New York, United States",
            "name": "A Tribe Called Quest",
            "legacy": [-73.76436880000001,40.6895283]
        },
  
          
          
          {
            "location": "Long Beach, Los Angeles County, California, United States",
            "name": "Snoop Dogg",
            "legacy": [-118.1937395,33.7700504]
        },
  
          
          
          {
            "location": "San Jose, Santa Clara County, California, United States",
            "name": "DJ Shadow",
            "legacy": [-121.8863286,37.3382082]
        },
  
          
          
          {
            "location": "Compton, Los Angeles County, California, United States",
            "name": "Dr. Dre",
            "legacy": [-118.2200712,33.8958492]
        },
  
          
          
          {
            "location": "Chicago, Cook County, Illinois, United States",
            "name": "Common",
            "legacy": [-87.6297982,41.8781136]
        },
  
          
          
          {
            "location": "Brooklyn, New York, New York, United States",
            "name": "Mos Def",
            "legacy": [-73.9441579,40.6781784]
        },
  
          
          
          {
            "location": "Saint Michael, Barbados",
            "name": "Rihanna",
            "legacy": [-59.59880889999999,13.1132219]
        },
  
          
          
          {
            "location": "High Green, Sheffield, South Yorkshire, England, United Kingdom",
            "name": "Arctic Monkeys",
            "legacy": [-1.494032,53.474144]
        },
  
          
          
          {
            "location": "Abingdon-on-Thames, Oxfordshire, England, United Kingdom",
            "name": "Radiohead",
            "legacy": [-1.2879529,51.67078]
        },
  
          
          
          {
            "location": "Las Vegas, Clark County, Nevada, United States",
            "name": "The Killers",
            "legacy": [-115.1398296,36.1699412]
        },
  
          
          
          {
            "location": "Bellingham, Whatcom County, Washington, United States",
            "name": "Death Cab for Cutie",
            "legacy": [-122.4786854,48.7519112]
        },
  
          
          
          {
            "location": "Glasgow, Scotland, United Kingdom",
            "name": "Franz Ferdinand",
            "legacy": [-4.251806,55.864237]
        },
  
          
          
          {
            "location": "London, England, United Kingdom",
            "name": "Coldplay",
            "legacy": [-0.1277583,51.5073509]
        },
  
          
          
          {
            "location": "Reading, England, United Kingdom",
            "name": "Bloc Party",
            "legacy": [-0.9781303,51.4542645]
        },
  
          
          
          {
            "location": "Miami, Miami-Dade County, Florida, United States",
            "name": "Muse",
            "legacy": [-80.1917902,25.7616798]
        },
  
          
          
          {
            "location": "New York, New York, United States",
            "name": "The Strokes",
            "legacy": [-74.0059728,40.7127753]
        },
  
          
          
          {
            "location": "Brighton, Brighton and Hove, England, United Kingdom",
            "name": "The Kooks",
            "legacy": [-0.137163,50.82253000000001]
        },
  
          
          
          {
            "location": "Albuquerque, Bernalillo County, New Mexico, United States",
            "name": "The Shins",
            "legacy": [-106.650422,35.0843859]
        },
  
          
          
          {
            "location": "New York, New York, United States",
            "name": "Yeah Yeah Yeahs",
            "legacy": [-74.0059728,40.7127753]
        },
  
          
          
          {
            "location": "Detroit, Wayne County, Michigan, United States",
            "name": "The White Stripes",
            "legacy": [-83.0457538,42.331427]
        },
  
          
          
          {
            "location": "Issaquah, King County, Washington, United States",
            "name": "Modest Mouse",
            "legacy": [-122.0326191,47.5301011]
        },
  
          
          
          {
            "location": "Nashville, Davidson County, Tennessee, United States",
            "name": "Kings of Leon",
            "legacy": [-86.7816016,36.1626638]
        },
  
          
          
          {
            "location": "Los Angeles, Los Angeles County, California, United States",
            "name": "The Postal Service",
            "legacy": [-118.2436596,34.0522265]
        },
  
          
          
          {
            "location": "Omaha, Douglas County, Nebraska, United States",
            "name": "Bright Eyes",
            "legacy": [-95.9345034,41.2565369]
        },
  
          
          
          {
            "location": "Dundee, Scotland, United Kingdom",
            "name": "Snow Patrol",
            "legacy": [-2.970721,56.462018]
        },
  
          
          
          {
            "location": "Middletown, Middlesex County, Connecticut, United States",
            "name": "MGMT",
            "legacy": [-72.6506488,41.5623209]
        },
  
          
          
          {
            "location": "Alton, Madison County, Illinois, United States",
            "name": "Miles Davis",
            "legacy": [-90.1842764,38.8906038]
        },
  
          
          
          {
            "location": "Hamlet, Richmond County, North Carolina, United States",
            "name": "John Coltrane",
            "legacy": [-79.6942222,34.8848775]
        },
  
          
          
          {
            "location": "Bedford Stuyvesant, Brooklyn, New York, New York, United States",
            "name": "Norah Jones",
            "legacy": [-73.9417735,40.6872176]
        },
  
          
          
          {
            "location": "Southgate, Enfield, London, England, United Kingdom",
            "name": "Amy Winehouse",
            "legacy": [-0.1240456,51.62476119999999]
        },
  
          
          
          {
            "location": "Hoboken, Hudson County, New Jersey, United States",
            "name": "Frank Sinatra",
            "legacy": [-74.0323626,40.7439905]
        },
  
          
          
          {
            "location": "New Orleans, Louisiana, United States",
            "name": "Louis Armstrong",
            "legacy": [-90.0715323,29.95106579999999]
        },
  
          
          
          {
            "location": "Tryon, Polk County, North Carolina, United States",
            "name": "Nina Simone",
            "legacy": [-82.2384479,35.2081694]
        },
  
          
          
          {
            "location": "Newport News, Virginia, United States",
            "name": "Ella Fitzgerald",
            "legacy": [-76.4730122,37.0870821]
        },
  
          
          
          {
            "location": "Philadelphia, Philadelphia County, Pennsylvania, United States",
            "name": "Billie Holiday",
            "legacy": [-75.1652215,39.9525839]
        },
  
          
          
          {
            "location": "Chicago, Cook County, Illinois, United States",
            "name": "Herbie Hancock",
            "legacy": [-87.6297982,41.8781136]
        },
  
          
          
          {
            "location": "Rocky Mount, Edgecombe County, North Carolina, United States",
            "name": "Thelonious Monk",
            "legacy": [-77.7905339,35.9382103]
        },
  
          
          
          {
            "location": "Albany, Dougherty County, Georgia, United States",
            "name": "Ray Charles",
            "legacy": [-84.15574099999999,31.5785074]
        },
  
          
          
          {
            "location": "Nogales, Santa Cruz County, Arizona, United States",
            "name": "Charles Mingus",
            "legacy": [-110.9342532,31.3403775]
        },
  
          
          
          {
            "location": "Nanaimo, Regional District of Nanaimo, British Columbia, Canada",
            "name": "Diana Krall",
            "legacy": [-123.9400717,49.165895]
        },
  
          
          
          {
            "location": "Washington, D.C., United States",
            "name": "Duke Ellington",
            "legacy": [-77.0368707,38.9071923]
        },
  
          
          
          {
            "location": "London, England, United Kingdom",
            "name": "The Cinematic Orchestra",
            "legacy": [-0.1277583,51.5073509]
        },
  
          
          
          {
            "location": "Burnaby, Metro Vancouver, British Columbia, Canada",
            "name": "Michael Bublé",
            "legacy": [-122.9805104,49.2488091]
        },
  
          
          
          {
            "location": "Rochford, Essex, England, United Kingdom",
            "name": "Jamie Cullum",
            "legacy": [0.706515,51.582071]
        },
  
          
          
          {
            "location": "Kutaisi, Imereti, Georgia",
            "name": "Katie Melua",
            "legacy": [42.7180019,42.2662428]
        },
  
          
          
          {
            "location": "Montgomery, Montgomery County, Alabama, United States",
            "name": "Nat King Cole",
            "legacy": [-86.3077368,32.3792233]
        },
  
          
          
          {
            "location": "Kingston, Jamaica",
            "name": "Bob Marley & The Wailers",
            "legacy": [-76.8099041,18.0178743]
        },
  
          
          
          {
            "location": "West Chester, Chester County, Pennsylvania, United States",
            "name": "Matisyahu",
            "legacy": [-75.6054882,39.9606643]
        },
  
          
          
          {
            "location": "Paris, ile-de-France, France",
            "name": "Manu Chao",
            "legacy": [2.3522219,48.856614]
        },
  
          
          
          {
            "location": "Osnabruck, Niedersachsen, Germany",
            "name": "Gentleman",
            "legacy": [8.0471788,52.2799112]
        },
  
          
          
          {
            "location": "Mission Viejo, California United States",
            "name": "Peter Tosh",
            "legacy": [-117.6581562,33.5968913]
        },
  
          
          
          {
            "location": "Kingston, Jamaica",
            "name": "Damian Marley",
            "legacy": [-76.8099041,18.0178743]
        },
  
          
          
          {
            "location": "Paris, ile-de-France, France",
            "name": "Daft Punk",
            "legacy": [-1.890401,52.48624299999999]
        },
  
          
          
          {
            "location": "Braintree, Essex, England, United Kingdom",
            "name": "The Prodigy",
            "legacy": [-77.0368707,38.9071923]
        },
  
          
          
          {
            "location": "Basildon, Essex, England, United Kingdom",
            "name": "Depeche Mode",
            "legacy": [-77.19905899999999,18.43001]
        },
  
          
          
          {
            "location": "Bristol, England, United Kingdom",
            "name": "Massive Attack",
            "legacy": [-76.8099041,18.0178743]
        },
  
          
          
          {
            "location": "Reykjavik, Hofuoborgarsvaeoio, Iceland",
            "name": "Bjork",
            "legacy": [-77.79126,18.448151]
        },
  
          
          
          {
            "location": "Harlem, Manhattan, New York, New York, United States",
            "name": "Moby",
            "legacy": [-76.8437247,18.0287171]
        },
  
          
          
          {
            "location": "Abingdon-on-Thames, Oxfordshire, England, United Kingdom",
            "name": "Radiohead",
            "legacy": [-76.8099041,18.0178743]
        },
  
          
          
          {
            "location": "Manchester, Greater Manchester, England, United Kingdom",
            "name": "The Chemical Brothers",
            "legacy": [6.6883728,50.8747592]
        },
  
          
          
          {
            "location": "Essex, England, United Kingdom",
            "name": "Gorillaz",
            "legacy": [-76.8099041,18.0178743]
        },
  
          
          
          {
            "location": "Tromso, Troms, Norway",
            "name": "Royksopp",
            "legacy": [-2.9915726,53.4083714]
        },
  
          
          
          {
            "location": "Limerick, County Limerick, Munster, Ireland",
            "name": "Aphex Twin",
            "legacy": [-1.494032,53.474144]
        },
  
          
          
          {
            "location": "Bristol, England, United Kingdom",
            "name": "Portishead",
            "legacy": [-0.1277583,51.5073509]
        },
  
          
          
          {
            "location": "Middletown, Middlesex County, Connecticut, United States",
            "name": "MGMT",
            "legacy": [-0.137163,50.82253000000001]
        },
  
          
          
          {
            "location": "Toronto, Ontario, Canada",
            "name": "Crystal Castles",
            "legacy": [-0.1277583,51.5073509]
        },
  
          
          
          {
            "location": "Edinburgh, Scotland, United Kingdom",
            "name": "Boards of Canada",
            "legacy": [-1.2879529,51.67078]
        },
  
          
          
          {
            "location": "Dusseldorf, Nordrhein-Westfalen, Germany",
            "name": "Kraftwerk",
            "legacy": [-0.1277583,51.5073509]
        },
  
          
          
          {
            "location": "Bromley, London, England, United Kingdom",
            "name": "Fatboy Slim",
            "legacy": [-0.1277583,51.5073509]
        },
  
          
          
          {
            "location": "Bath, Somerset, England, United Kingdom",
            "name": "Goldfrapp",
            "legacy": [-0.1277583,51.5073509]
        },
  
          
          
          {
            "location": "Stockholm, Stockholm municipality, Stockholms lan, Sweden",
            "name": "The Knife",
            "legacy": [-1.1397592,52.6368778]
        },
  
          
          
          {
            "location": "Cleveland, Cuyahoga County, Ohio, United States",
            "name": "Nine Inch Nails",
            "legacy": [-0.1240456,51.62476119999999]
        },
  
          
          
          {
            "location": "Los Angeles, Los Angeles County, California, United States",
            "name": "Red Hot Chili Peppers",
            "legacy": [-80.1917902,25.7616798]
        },
  
          
          
          {
            "location": "Liverpool, Merseyside, England, United Kingdom",
            "name": "The Beatles",
            "legacy": [-0.9781303,51.4542645]
        },
  
          
          
          {
            "location": "Miami, Miami-Dade County, Florida, United States",
            "name": "Muse",
            "legacy": [-0.223731,51.491187]
        },
  
          
          
          {
            "location": "London, England, United Kingdom",
            "name": "Coldplay",
            "legacy": [0.483679,50.917405]
        },
  
          
          
          {
            "location": "Abingdon-on-Thames, Oxfordshire, England, United Kingdom",
            "name": "Radiohead",
            "legacy": [-0.1277583,51.5073509]
        },
  
          
          
          {
            "location": "Seattle, King County, Washington, United States",
            "name": "Foo Fighters",
            "legacy": [-0.1277583,51.5073509]
        },
  
          
          
          {
            "location": "Agoura Hills, Los Angeles County, California, United States",
            "name": "Linkin Park",
            "legacy": [-2.9915726,53.4083714]
        },
  
          
          
          {
            "location": "London, England, United Kingdom",
            "name": "Led Zeppelin",
            "legacy": [-0.1277583,51.5073509]
        },
  
          
          
          {
            "location": "London, England, United Kingdom",
            "name": "Queen",
            "legacy": [-0.1277583,51.5073509]
        },
  
          
          
          {
            "location": "London, England, United Kingdom",
            "name": "Pink Floyd",
            "legacy": [-122.273042,37.8715226]
        },
  
          
          
          {
            "location": "Las Vegas, Clark County, Nevada, United States",
            "name": "The Killers",
            "legacy": [-74.0059728,40.7127753]
        },
  
          
          
          {
            "location": "Detroit, Wayne County, Michigan, United States",
            "name": "The White Stripes",
            "legacy": [-117.9988026,33.6594835]
        },
  
          
          
          {
            "location": "London, England, United Kingdom",
            "name": "The Rolling Stones",
            "legacy": [-0.1277583,51.5073509]
        },
  
          
          
          {
            "location": "Berkeley, Alameda County, California, United States",
            "name": "Green Day",
            "legacy": [-118.2436596,34.0522265]
        },
  
          
          
          {
            "location": "Los Angeles, Los Angeles County, California, United States",
            "name": "Guns N' Roses",
            "legacy": [-117.0358646,32.9628232]
        },
  
          
          
          {
            "location": "Los Angeles, Los Angeles County, California, United States",
            "name": "The Doors",
            "legacy": [-118.2436596,34.0522265]
        },
  
          
          
          {
            "location": "Glendale, Los Angeles County, California, United States",
            "name": "System of a Down",
            "legacy": [-122.4194155,37.7749295]
        },
  
          
          
          {
            "location": "Sydney, New South Wales, Australia",
            "name": "AC/DC",
            "legacy": [-87.6297982,41.8781136]
        },
  
          
          
          {
            "location": "St. Joseph, Buchanan County, Missouri, United States",
            "name": "Eminem",
            "legacy": [-74.08319709999999,40.8823215]
        },
  
          
          
          {
            "location": "Atlanta, Fulton County, Georgia, United States",
            "name": "Kanye West",
            "legacy": [-79.0203732,43.8508553]
        },
  
          
          
          {
            "location": "Essex, England, United Kingdom",
            "name": "Gorillaz",
            "legacy": [-85.323214,51.253775]
        },
  
          
          
          {
            "location": "New York, New York, United States",
            "name": "Beastie Boys",
            "legacy": [-85.323214,51.253775]
        },
  
          
          
          {
            "location": "Los Angeles, Los Angeles County, California, United States",
            "name": "Black Eyed Peas",
            "legacy": [-85.323214,51.253775]
        },
  
          
          
          {
            "location": "East Point, Fulton County, Georgia, United States",
            "name": "OutKast",
            "legacy": [-86.24839209999999,43.2341813]
        },
  
          
          
          {
            "location": "Philadelphia, Philadelphia County, Pennsylvania, United States",
            "name": "The Roots",
            "legacy": [-74.1723667,40.735657]
        },
  
          
          
          {
            "location": "South Gate, Los Angeles County, California, United States",
            "name": "Cypress Hill",
            "legacy": [-85.323214,51.253775]
        },
  
          
          
          {
            "location": "Brooklyn, New York, New York, United States",
            "name": "Nas",
            "legacy": [-85.323214,51.253775]
        },
  
          
          
          {
            "location": "East Harlem, Manhattan, New York, New York, United States",
            "name": "2Pac",
            "legacy": [-118.2436596,34.0522265]
        },
  
          
          
          {
            "location": "St. Albans, Queens, New York, New York, United States",
            "name": "A Tribe Called Quest",
            "legacy": [0.488736,51.57608399999999]
        },
  
          
          
          {
            "location": "Long Beach, Los Angeles County, California, United States",
            "name": "Snoop Dogg",
            "legacy": [-0.1872275,51.1091401]
        },
  
          
          
          {
            "location": "San Jose, Santa Clara County, California, United States",
            "name": "DJ Shadow",
            "legacy": [-0.1277583,51.5073509]
        },
  
          
          
          {
            "location": "Compton, Los Angeles County, California, United States",
            "name": "Dr. Dre",
            "legacy": [-2.2426305,53.4807593]
        },
  
          
          
          {
            "location": "Chicago, Cook County, Illinois, United States",
            "name": "Common",
            "legacy": [-118.2436596,34.0522265]
        },
  
          
          
          {
            "location": "Brooklyn, New York, New York, United States",
            "name": "Mos Def",
            "legacy": [-87.3371523,41.6020403]
        },
  
          
          
          {
            "location": "Saint Michael, Barbados",
            "name": "Rihanna",
            "legacy": [-2.2901264,53.48752349999999]
        },
  
          
          
          {
            "location": "High Green, Sheffield, South Yorkshire, England, United Kingdom",
            "name": "Arctic Monkeys",
            "legacy": [-0.1156148,51.4612794]
        },
  
          
          
          {
            "location": "Abingdon-on-Thames, Oxfordshire, England, United Kingdom",
            "name": "Radiohead",
            "legacy": [-2.2901264,53.48752349999999]
        },
  
          
          
          {
            "location": "Las Vegas, Clark County, Nevada, United States",
            "name": "The Killers",
            "legacy": [-1.890401,52.48624299999999]
        },
  
          
          
          {
            "location": "Bellingham, Whatcom County, Washington, United States",
            "name": "Death Cab for Cutie",
            "legacy": [-83.8888647,43.5944677]
        },
  
          
          
          {
            "location": "Glasgow, Scotland, United Kingdom",
            "name": "Franz Ferdinand",
            "legacy": [-0.1277583,51.5073509]
        },
  
          
          
          {
            "location": "London, England, United Kingdom",
            "name": "Coldplay",
            "legacy": [-71.0588801,42.3600825]
        },
  
          
          
          {
            "location": "Reading, England, United Kingdom",
            "name": "Bloc Party",
            "legacy": [-74.360846,40.45940210000001]
        },
  
          
          
          {
            "location": "Miami, Miami-Dade County, Florida, United States",
            "name": "Muse",
            "legacy": [-74.0059728,40.7127753]
        },
  
          
          
          {
            "location": "New York, New York, United States",
            "name": "The Strokes",
            "legacy": [-0.0231099,51.4807988]
        },
  
          
          
          {
            "location": "Brighton, Brighton and Hove, England, United Kingdom",
            "name": "The Kooks",
            "legacy": [9.732010400000002,52.3758916]
        },
  
          
          
          {
            "location": "Albuquerque, Bernalillo County, New Mexico, United States",
            "name": "The Shins",
            "legacy": [-2.3590167,51.3810641]
        },
  
          
          
          {
            "location": "New York, New York, United States",
            "name": "Yeah Yeah Yeahs",
            "legacy": [-0.170037,51.4869429]
        },
  
          
          
          {
            "location": "Detroit, Wayne County, Michigan, United States",
            "name": "The White Stripes",
            "legacy": [-0.1277583,51.5073509]
        },
  
          
          
          {
            "location": "Issaquah, King County, Washington, United States",
            "name": "Modest Mouse",
            "legacy": [2.3522219,48.856614]
        },
  
          
          
          {
            "location": "Nashville, Davidson County, Tennessee, United States",
            "name": "Kings of Leon",
            "legacy": [-73.9712488,40.7830603]
        },
  
          
          
          {
            "location": "Los Angeles, Los Angeles County, California, United States",
            "name": "The Postal Service",
            "legacy": [-83.8888647,43.5944677]
        },
  
          
          
          {
            "location": "Omaha, Douglas County, Nebraska, United States",
            "name": "Bright Eyes",
            "legacy": [0.5509269,51.880087]
        },
  
          
          
          {
            "location": "Dundee, Scotland, United Kingdom",
            "name": "Snow Patrol",
            "legacy": [-87.3371523,41.6020403]
        },
  
          
          
          {
            "location": "Middletown, Middlesex County, Connecticut, United States",
            "name": "MGMT",
            "legacy": [-2.2426305,53.4807593]
        },
  
          
          
          {
            "location": "Alton, Madison County, Illinois, United States",
            "name": "Miles Davis",
            "legacy": [-59.59880889999999,13.1132219]
        },
  
          
          
          {
            "location": "Hamlet, Richmond County, North Carolina, United States",
            "name": "John Coltrane",
            "legacy": [2.3522219,48.856614]
        },
  
          
          
          {
            "location": "Bedford Stuyvesant, Brooklyn, New York, New York, United States",
            "name": "Norah Jones",
            "legacy": [0.013156,51.406025]
        },
  
          
          
          {
            "location": "Southgate, Enfield, London, England, United Kingdom",
            "name": "Amy Winehouse",
            "legacy": [-90.4531535,31.2437872]
        },
  
          
          
          {
            "location": "Hoboken, Hudson County, New Jersey, United States",
            "name": "Frank Sinatra",
            "legacy": [144.9630576,-37.8136276]
        },
  
          
          
          {
            "location": "New Orleans, Louisiana, United States",
            "name": "Louis Armstrong",
            "legacy": [-0.3413965,51.5250366]
        },
  
          
          
          {
            "location": "Tryon, Polk County, North Carolina, United States",
            "name": "Nina Simone",
            "legacy": [-0.1277583,51.5073509]
        },
  
          
          
          {
            "location": "Newport News, Virginia, United States",
            "name": "Ella Fitzgerald",
            "legacy": [-90.0489801,35.1495343]
        },
  
          
          
          {
            "location": "Philadelphia, Philadelphia County, Pennsylvania, United States",
            "name": "Billie Holiday",
            "legacy": [-0.1156148,51.4612794]
        },
  
          
          
          {
            "location": "Chicago, Cook County, Illinois, United States",
            "name": "Herbie Hancock",
            "legacy": [-74.1502007,40.5795317]
        },
  
          
          
          {
            "location": "Rocky Mount, Edgecombe County, North Carolina, United States",
            "name": "Thelonious Monk",
            "legacy": [7.0982068,50.73743]
        },
  
          
          
          {
            "location": "Albany, Dougherty County, Georgia, United States",
            "name": "Ray Charles",
            "legacy": [-2.3590167,51.3810641]
        },
  
          
          
          {
            "location": "Nogales, Santa Cruz County, Arizona, United States",
            "name": "Charles Mingus",
            "legacy": [-157.9225549,21.5918615]
        },
  
          
          
          {
            "location": "Nanaimo, Regional District of Nanaimo, British Columbia, Canada",
            "name": "Diana Krall",
            "legacy": [-6.538458899999999,53.339897]
        },
  
          
          
          {
            "location": "Washington, D.C., United States",
            "name": "Duke Ellington",
            "legacy": [-81.3498211,34.1659795]
        },
  
          
          
          {
            "location": "London, England, United Kingdom",
            "name": "The Cinematic Orchestra",
            "legacy": [-77.3733139,37.6087561]
        },
  
          
          
          {
            "location": "Burnaby, Metro Vancouver, British Columbia, Canada",
            "name": "Michael Bublé",
            "legacy": [-73.1894384,41.1792258]
        },
  
          
          
          {
            "location": "Rochford, Essex, England, United Kingdom",
            "name": "Jamie Cullum",
            "legacy": [5.3220544,60.39126279999999]
        },
  
          
          
          {
            "location": "Kutaisi, Imereti, Georgia",
            "name": "Katie Melua",
            "legacy": [-95.9345034,41.2565369]
        },
  
          
          
          {
            "location": "Montgomery, Montgomery County, Alabama, United States",
            "name": "Nat King Cole",
            "legacy": [11.97456,57.70887]
        },
  
          
          
          {
            "location": "Kingston, Jamaica",
            "name": "Bob Marley & The Wailers",
            "legacy": [96.173526,16.840939]
        },
  
          
          
          {
            "location": "West Chester, Chester County, Pennsylvania, United States",
            "name": "Matisyahu",
            "legacy": [-79.2468626,43.1593745]
        },
  
          
          
          {
            "location": "Paris, ile-de-France, France",
            "name": "Manu Chao",
            "legacy": [-73.8207618,40.724707]
        },
  
          
          
          {
            "location": "Osnabruck, Niedersachsen, Germany",
            "name": "Gentleman",
            "legacy": [-91.4984941,44.811349]
        },
  
          
          
          {
            "location": "Mission Viejo, California United States",
            "name": "Peter Tosh",
            "legacy": [-1.6644823,51.24144889999999]
        },
  
          
          
          {
            "location": "Paris, ile-de-France, France",
            "name": "Daft Punk",
            "legacy": [-117.7499909,34.055103]
        },
  
          
          
          {
            "location": "Braintree, Essex, England, United Kingdom",
            "name": "The Prodigy",
            "legacy": [-4.228494,55.904185]
        },
  
          
          
          {
            "location": "Basildon, Essex, England, United Kingdom",
            "name": "Depeche Mode",
            "legacy": [-99.133208,19.4326077]
        },
  
          
          
          {
            "location": "Bristol, England, United Kingdom",
            "name": "Massive Attack",
            "legacy": [-0.1277583,51.5073509]
        },
  
          
          
          {
            "location": "Reykjavik, Hofuoborgarsvaeoio, Iceland",
            "name": "Bjork",
            "legacy": [-118.7797571,34.0259216]
        },
  
          
          
          {
            "location": "Harlem, Manhattan, New York, New York, United States",
            "name": "Moby",
            "legacy": [-0.1498955,51.5188746]
        },
  
          
          
          {
            "location": "Abingdon-on-Thames, Oxfordshire, England, United Kingdom",
            "name": "Radiohead",
            "legacy": [-59.59880889999999,13.1132219]
        },
  
          
          
          {
            "location": "Manchester, Greater Manchester, England, United Kingdom",
            "name": "The Chemical Brothers",
            "legacy": [-73.9712488,40.7830603]
        },
  
          
          
          {
            "location": "Essex, England, United Kingdom",
            "name": "Gorillaz",
            "legacy": [-90.0489801,35.1495343]
        },
  
          
          
          {
            "location": "Tromso, Troms, Norway",
            "name": "Royksopp",
            "legacy": [-118.2436596,34.0522265]
        },
  
          
          
          {
            "location": "Limerick, County Limerick, Munster, Ireland",
            "name": "Aphex Twin",
            "legacy": [-73.425676,40.8681539]
        },
  
          
          
          {
            "location": "Bristol, England, United Kingdom",
            "name": "Portishead",
            "legacy": [-96.79698789999999,32.7766642]
        },
  
          
          
          {
            "location": "Middletown, Middlesex County, Connecticut, United States",
            "name": "MGMT",
            "legacy": [-74.1502007,40.5795317]
        },
  
          
          
          {
            "location": "Toronto, Ontario, Canada",
            "name": "Crystal Castles",
            "legacy": [-84.3879824,33.7489954]
        },
  
          
          
          {
            "location": "Edinburgh, Scotland, United Kingdom",
            "name": "Boards of Canada",
            "legacy": [-95.3698028,29.7604267]
        },
  
          
          
          {
            "location": "Dusseldorf, Nordrhein-Westfalen, Germany",
            "name": "Kraftwerk",
            "legacy": [-92.8343294,33.5845581]
        },
  
          
          
          {
            "location": "Bromley, London, England, United Kingdom",
            "name": "Fatboy Slim",
            "legacy": [-97.7430608,30.267153]
        },
  
          
          
          {
            "location": "Bath, Somerset, England, United Kingdom",
            "name": "Goldfrapp",
            "legacy": [-73.9441579,40.6781784]
        },
  
          
          
          {
            "location": "Stockholm, Stockholm municipality, Stockholms lan, Sweden",
            "name": "The Knife",
            "legacy": [-73.8648268,40.8447819]
        },
  
          
          
          {
            "location": "Cleveland, Cuyahoga County, Ohio, United States",
            "name": "Nine Inch Nails",
            "legacy": [-73.8648268,40.8447819]
        },
  
          
          
          {
            "location": "Los Angeles, Los Angeles County, California, United States",
            "name": "Red Hot Chili Peppers",
            "legacy": [-76.28587259999999,36.8507689]
        },
  
          
          
          {
            "location": "Liverpool, Merseyside, England, United Kingdom",
            "name": "The Beatles",
            "legacy": [-118.2436596,34.0522265]
        },
  
          
          
          {
            "location": "Miami, Miami-Dade County, Florida, United States",
            "name": "Muse",
            "legacy": [-117.9686755,33.9930677]
        },
  
          
          
          {
            "location": "London, England, United Kingdom",
            "name": "Coldplay",
            "legacy": [-83.8088171,39.9242266]
        },
  
          
          
          {
            "location": "Abingdon-on-Thames, Oxfordshire, England, United Kingdom",
            "name": "Radiohead",
            "legacy": [-96.79698789999999,32.7766642]
        },
  
          
          
          {
            "location": "Seattle, King County, Washington, United States",
            "name": "Foo Fighters",
            "legacy": [-73.1894384,41.1792258]
        },
  
          
          
          {
            "location": "Agoura Hills, Los Angeles County, California, United States",
            "name": "Linkin Park",
            "legacy": [-87.6297982,41.8781136]
        },
  
          
          
          {
            "location": "London, England, United Kingdom",
            "name": "Led Zeppelin",
            "legacy": [-97.13837439999999,49.895136]
        },
  
          
          
          {
            "location": "London, England, United Kingdom",
            "name": "Queen",
            "legacy": [-3.576945,51.504286]
        },
  
          
          
          {
            "location": "London, England, United Kingdom",
            "name": "Pink Floyd",
            "legacy": [-83.0457538,42.331427]
        },
  
          
          
          {
            "location": "Las Vegas, Clark County, Nevada, United States",
            "name": "The Killers",
            "legacy": [-73.7948516,40.7282239]
        },
  
          
          
          {
            "location": "Detroit, Wayne County, Michigan, United States",
            "name": "The White Stripes",
            "legacy": [-74.0059728,40.7127753]
        },
  
          
          
          {
            "location": "London, England, United Kingdom",
            "name": "The Rolling Stones",
            "legacy": [-118.2436596,34.0522265]
        },
  
          
          
          {
            "location": "Berkeley, Alameda County, California, United States",
            "name": "Green Day",
            "legacy": [-118.3995194,33.8622366]
        },
  
          
          
          {
            "location": "Los Angeles, Los Angeles County, California, United States",
            "name": "Guns N' Roses",
            "legacy": [-77.0368707,38.9071923]
        },
  
          
          
          {
            "location": "Los Angeles, Los Angeles County, California, United States",
            "name": "The Doors",
            "legacy": [-74.4818698,40.83959220000001]
        },
  
          
          
          {
            "location": "Glendale, Los Angeles County, California, United States",
            "name": "System of a Down",
            "legacy": [-82.14009229999999,29.1871986]
        },
  
          
          
          {
            "location": "Sydney, New South Wales, Australia",
            "name": "AC/DC",
            "legacy": [20.2630354,63.8258471]
        },
  
          
          
          {
            "location": "St. Joseph, Buchanan County, Missouri, United States",
            "name": "Eminem",
            "legacy": [-74.0059728,40.7127753]
        },
  
          
          
          {
            "location": "Atlanta, Fulton County, Georgia, United States",
            "name": "Kanye West",
            "legacy": [-117.9988026,33.6594835]
        },
  
          
          
          {
            "location": "Essex, England, United Kingdom",
            "name": "Gorillaz",
            "legacy": [-117.1610966,32.7157305]
        },
  
          
          
          {
            "location": "New York, New York, United States",
            "name": "Beastie Boys",
            "legacy": [-117.8132571,33.88850350000001]
        },
  
          
          
          {
            "location": "Los Angeles, Los Angeles County, California, United States",
            "name": "Black Eyed Peas",
            "legacy": [-1.470085,53.38112899999999]
        },
  
          
          
          {
            "location": "East Point, Fulton County, Georgia, United States",
            "name": "OutKast",
            "legacy": [-84.7477136,33.7514966]
        },
  
          
          
          {
            "location": "Philadelphia, Philadelphia County, Pennsylvania, United States",
            "name": "The Roots",
            "legacy": [-82.14009229999999,29.1871986]
        },
  
          
          
          {
            "location": "South Gate, Los Angeles County, California, United States",
            "name": "Cypress Hill",
            "legacy": [-75.9268747,40.3356483]
        },
  
          
          
          {
            "location": "Brooklyn, New York, New York, United States",
            "name": "Nas",
            "legacy": [-97.07395849999999,31.8827464]
        },
  
          
          
          {
            "location": "East Harlem, Manhattan, New York, New York, United States",
            "name": "2Pac",
            "legacy": [-83.03636329999999,42.3149367]
        },
  
          
          
          {
            "location": "St. Albans, Queens, New York, New York, United States",
            "name": "A Tribe Called Quest",
            "legacy": [-95.3696909,35.7478769]
        },
  
          
          
          {
            "location": "Long Beach, Los Angeles County, California, United States",
            "name": "Snoop Dogg",
            "legacy": [-96.79698789999999,32.7766642]
        },
  
          
          
          {
            "location": "San Jose, Santa Clara County, California, United States",
            "name": "DJ Shadow",
            "legacy": [-86.84802979999999,31.578494]
        },
  
          
          
          {
            "location": "Compton, Los Angeles County, California, United States",
            "name": "Dr. Dre",
            "legacy": [-83.3923823,35.7973158]
        },
  
          
          
          {
            "location": "Chicago, Cook County, Illinois, United States",
            "name": "Common",
            "legacy": [-118.2436596,34.0522265]
        },
  
          
          
          {
            "location": "Brooklyn, New York, New York, United States",
            "name": "Mos Def",
            "legacy": [-82.99879419999999,39.9611755]
        },
  
          
          
          {
            "location": "Saint Michael, Barbados",
            "name": "Rihanna",
            "legacy": [-80.75420539999999,39.9478531]
        },
  
          
          
          {
            "location": "High Green, Sheffield, South Yorkshire, England, United Kingdom",
            "name": "Arctic Monkeys",
            "legacy": [-91.49317359999999,32.4576421]
        },
  
          
          
          {
            "location": "Abingdon-on-Thames, Oxfordshire, England, United Kingdom",
            "name": "Radiohead",
            "legacy": [-95.99277500000001,36.1539816]
        },
  
          
          
          {
            "location": "Las Vegas, Clark County, Nevada, United States",
            "name": "The Killers",
            "legacy": [-90.1848103,32.2987573]
        },
  
          
          
          {
            "location": "Bellingham, Whatcom County, Washington, United States",
            "name": "Death Cab for Cutie",
            "legacy": [174.3165604,-35.7274938]
        },
  
          
          
          {
            "location": "Glasgow, Scotland, United Kingdom",
            "name": "Franz Ferdinand",
            "legacy": [-84.79965729999999,33.3806716]
        },
  
          
          
          {
            "location": "London, England, United Kingdom",
            "name": "Coldplay",
            "legacy": [-86.8103567,33.5185892]
        },
  
          
          
          {
            "location": "Reading, England, United Kingdom",
            "name": "Bloc Party",
            "legacy": [-90.1848103,32.2987573]
        },
  
          
          
          {
            "location": "Miami, Miami-Dade County, Florida, United States",
            "name": "Muse",
            "legacy": [-83.9207392,35.9606384]
        },
  
          
          
          {
            "location": "New York, New York, United States",
            "name": "The Strokes",
            "legacy": [-78.1633341,39.1856597]
        },
  
          
          
          {
            "location": "Brighton, Brighton and Hove, England, United Kingdom",
            "name": "The Kooks",
            "legacy": [-97.48670279999999,35.3395079]
        },
  
          
          
          {
            "location": "Albuquerque, Bernalillo County, New Mexico, United States",
            "name": "The Shins",
            "legacy": [-117.7499909,34.055103]
        },
  
          
          
          {
            "location": "New York, New York, United States",
            "name": "Yeah Yeah Yeahs",
            "legacy": [-0.49327,51.300173]
        },
  
          
          
          {
            "location": "Detroit, Wayne County, Michigan, United States",
            "name": "The White Stripes",
            "legacy": [-122.3320708,47.6062095]
        },
  
          
          
          {
            "location": "Issaquah, King County, Washington, United States",
            "name": "Modest Mouse",
            "legacy": [-90.3650851,33.4717867]
        },
  
          
          
          {
            "location": "Nashville, Davidson County, Tennessee, United States",
            "name": "Kings of Leon",
            "legacy": [-0.1277583,51.5073509]
        },
  
          
          
          {
            "location": "Los Angeles, Los Angeles County, California, United States",
            "name": "The Postal Service",
            "legacy": [-93.93994699999999,29.8849504]
        },
  
          
          
          {
            "location": "Omaha, Douglas County, Nebraska, United States",
            "name": "Bright Eyes",
            "legacy": [-90.6393702,34.1960298]
        },
  
          
          
          {
            "location": "Dundee, Scotland, United Kingdom",
            "name": "Snow Patrol",
            "legacy": [-91.02032240000001,32.8494351]
        },
  
          
          
          {
            "location": "Middletown, Middlesex County, Connecticut, United States",
            "name": "MGMT",
            "legacy": [-84.15574099999999,31.5785074]
        },
  
          
          
          {
            "location": "Alton, Madison County, Illinois, United States",
            "name": "Miles Davis",
            "legacy": [-73.9417735,40.6872176]
        },
  
          
          
          {
            "location": "Hamlet, Richmond County, North Carolina, United States",
            "name": "John Coltrane",
            "legacy": [-81.51900529999999,41.0814447]
        },
  
          
          
          {
            "location": "Bedford Stuyvesant, Brooklyn, New York, New York, United States",
            "name": "Norah Jones",
            "legacy": [-82.2384479,35.2081694]
        },
  
          
          
          {
            "location": "Southgate, Enfield, London, England, United Kingdom",
            "name": "Amy Winehouse",
            "legacy": [-96.79698789999999,32.7766642]
        },
  
          
          
          {
            "location": "Hoboken, Hudson County, New Jersey, United States",
            "name": "Frank Sinatra",
            "legacy": [-75.1652215,39.9525839]
        },
  
          
          
          {
            "location": "New Orleans, Louisiana, United States",
            "name": "Louis Armstrong",
            "legacy": [-90.0715323,29.95106579999999]
        },
  
          
          
          {
            "location": "Tryon, Polk County, North Carolina, United States",
            "name": "Nina Simone",
            "legacy": [-88.62087989999999,33.6603954]
        },
  
          
          
          {
            "location": "Newport News, Virginia, United States",
            "name": "Ella Fitzgerald",
            "legacy": [-117.6581562,33.5968913]
        },
  
          
          
          {
            "location": "Philadelphia, Philadelphia County, Pennsylvania, United States",
            "name": "Billie Holiday",
            "legacy": [-91.70484019999999,30.9335146]
        },
  
          
          
          {
            "location": "Chicago, Cook County, Illinois, United States",
            "name": "Herbie Hancock",
            "legacy": [-0.1277583,51.5073509]
        },
  
          
          
          {
            "location": "Rocky Mount, Edgecombe County, North Carolina, United States",
            "name": "Thelonious Monk",
            "legacy": [-0.0231099,51.4807988]
        },
  
          
          
          {
            "location": "Albany, Dougherty County, Georgia, United States",
            "name": "Ray Charles",
            "legacy": [-1.2879529,51.67078]
        },
  
          
          
          {
            "location": "Nogales, Santa Cruz County, Arizona, United States",
            "name": "Charles Mingus",
            "legacy": [-0.1277583,51.5073509]
        },
  
          
          
          {
            "location": "Nanaimo, Regional District of Nanaimo, British Columbia, Canada",
            "name": "Diana Krall",
            "legacy": [-80.1917902,25.7616798]
        },
  
          
          
          {
            "location": "Washington, D.C., United States",
            "name": "Duke Ellington",
            "legacy": [-118.2436596,34.0522265]
        },
  
          
          
          {
            "location": "London, England, United Kingdom",
            "name": "The Cinematic Orchestra",
            "legacy": [0.4856781,51.57424469999999]
        },
  
          
          
          {
            "location": "Burnaby, Metro Vancouver, British Columbia, Canada",
            "name": "Michael Bublé",
            "legacy": [-118.7616764,34.1533395]
        },
  
          
          
          {
            "location": "Rochford, Essex, England, United Kingdom",
            "name": "Jamie Cullum",
            "legacy": [-21.9265493,64.1420229]
        },
  
          
          
          {
            "location": "Kutaisi, Imereti, Georgia",
            "name": "Katie Melua",
            "legacy": [-115.1398296,36.1699412]
        },
  
          
          
          {
            "location": "Montgomery, Montgomery County, Alabama, United States",
            "name": "Nat King Cole",
            "legacy": [-118.255075,34.1425078]
        },
  
          
          
          {
            "location": "Kingston, Jamaica",
            "name": "Bob Marley & The Wailers",
            "legacy": [-83.0457538,42.331427]
        },
  
          
          
          {
            "location": "West Chester, Chester County, Pennsylvania, United States",
            "name": "Matisyahu",
            "legacy": [-0.1872275,51.1091401]
        },
  
          
          
          {
            "location": "Paris, ile-de-France, France",
            "name": "Manu Chao",
            "legacy": [-1.494032,53.474144]
        },
  
          
          
          {
            "location": "Osnabruck, Niedersachsen, Germany",
            "name": "Gentleman",
            "legacy": [-4.251806,55.864237]
        },
  
          
          
          {
            "location": "Mission Viejo, California United States",
            "name": "Peter Tosh",
            "legacy": [-87.6297982,41.8781136]
        }
  
      ];  //maybe use fs (file system) to import(read) the list of artist name value pairs

//you need to replace seed if already created



Artist.collection.insertMany(artistSeed).then(data => {console.log(data.result.n+" records inserted")
process.exit(0);}).catch(err => {console.log(err);
process.exit(1)});