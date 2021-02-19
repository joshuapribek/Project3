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

const artistSeed = [

	{
		"location": "Paris, ile-de-France, France",
		"name": "Daft Punk",
		"coords": {
			"lat": 48.856614,
			"lng": 2.3522219
		}
	},
	{
		"location": "Braintree, Essex, England, United Kingdom",
		"name": "The Prodigy",
		"coords": {
			"lat": 51.880087,
			"lng": 0.5509269
		}
	},
	{
		"location": "Basildon, Essex, England, United Kingdom",
		"name": "Depeche Mode",
		"coords": {
			"lat": 51.57608399999999,
			"lng": 0.488736
		}
	},
	{
		"location": "Bristol, England, United Kingdom",
		"name": "Massive Attack",
		"coords": {
			"lat": 51.454513,
			"lng": -2.58791
		}
	},
	{
		"location": "Reykjavik, Hofuoborgarsvaeoio, Iceland",
		"name": "Bjork",
		"coords": {
			"lat": 64.1420229,
			"lng": -21.9265493
		}
	},
	{
		"location": "Harlem, Manhattan, New York, New York, United States",
		"name": "Moby",
		"coords": {
			"lat": 40.8115504,
			"lng": -73.9464769
		}
	},
	{
		"location": "Abingdon-on-Thames, Oxfordshire, England, United Kingdom",
		"name": "Radiohead",
		"coords": {
			"lat": 51.67078,
			"lng": -1.2879529
		}
	},
	{
		"location": "Manchester, Greater Manchester, England, United Kingdom",
		"name": "The Chemical Brothers",
		"coords": {
			"lat": 53.4807593,
			"lng": -2.2426305
		}
	},
	{
		"location": "Essex, England, United Kingdom",
		"name": "Gorillaz",
		"coords": {
			"lat": 51.57424469999999,
			"lng": 0.4856781
		}
	},
	{
		"location": "Tromso, Troms, Norway",
		"name": "Royksopp",
		"coords": {
			"lat": 69.6492047,
			"lng": 18.9553239
		}
	},
	{
		"location": "Limerick, County Limerick, Munster, Ireland",
		"name": "Aphex Twin",
		"coords": {
			"lat": 52.6638367,
			"lng": -8.6267343
		}
	},
	{
		"location": "Bristol, England, United Kingdom",
		"name": "Portishead",
		"coords": {
			"lat": 51.454513,
			"lng": -2.58791
		}
	},
	{
		"location": "Middletown, Middlesex County, Connecticut, United States",
		"name": "MGMT",
		"coords": {
			"lat": 41.5623209,
			"lng": -72.6506488
		}
	},
	{
		"location": "Toronto, Ontario, Canada",
		"name": "Crystal Castles",
		"coords": {
			"lat": 43.653226,
			"lng": -79.3831843
		}
	},
	{
		"location": "Edinburgh, Scotland, United Kingdom",
		"name": "Boards of Canada",
		"coords": {
			"lat": 55.953252,
			"lng": -3.188267
		}
	},
	{
		"location": "Dusseldorf, Nordrhein-Westfalen, Germany",
		"name": "Kraftwerk",
		"coords": {
			"lat": 51.2277411,
			"lng": 6.7734556
		}
	},
	{
		"location": "Bromley, London, England, United Kingdom",
		"name": "Fatboy Slim",
		"coords": {
			"lat": 51.406025,
			"lng": 0.013156
		}
	},
	{
		"location": "Bath, Somerset, England, United Kingdom",
		"name": "Goldfrapp",
		"coords": {
			"lat": 51.3810641,
			"lng": -2.3590167
		}
	},
	{
		"location": "Stockholm, Stockholm municipality, Stockholms lan, Sweden",
		"name": "The Knife",
		"coords": {
			"lat": 59.31706999999999,
			"lng": 17.9672428
		}
	},
	{
		"location": "Cleveland, Cuyahoga County, Ohio, United States",
		"name": "Nine Inch Nails",
		"coords": {
			"lat": 41.49932,
			"lng": -81.6943605
		}
	},
	{
		"location": "Los Angeles, Los Angeles County, California, United States",
		"name": "Red Hot Chili Peppers",
		"coords": {
			"lat": 34.0522265,
			"lng": -118.2436596
		}
	},
	{
		"location": "Liverpool, Merseyside, England, United Kingdom",
		"name": "The Beatles",
		"coords": {
			"lat": 53.4083714,
			"lng": -2.9915726
		}
	},
	{
		"location": "Miami, Miami-Dade County, Florida, United States",
		"name": "Muse",
		"coords": {
			"lat": 25.7616798,
			"lng": -80.1917902
		}
	},
	{
		"location": "London, England, United Kingdom",
		"name": "Coldplay",
		"coords": {
			"lat": 51.5073509,
			"lng": -0.1277583
		}
	},
	{
		"location": "Abingdon-on-Thames, Oxfordshire, England, United Kingdom",
		"name": "Radiohead",
		"coords": {
			"lat": 51.67078,
			"lng": -1.2879529
		}
	},
	{
		"location": "Seattle, King County, Washington, United States",
		"name": "Foo Fighters",
		"coords": {
			"lat": 47.6062095,
			"lng": -122.3320708
		}
	},
	{
		"location": "Agoura Hills, Los Angeles County, California, United States",
		"name": "Linkin Park",
		"coords": {
			"lat": 34.1533395,
			"lng": -118.7616764
		}
	},
	{
		"location": "London, England, United Kingdom",
		"name": "Led Zeppelin",
		"coords": {
			"lat": 51.5073509,
			"lng": -0.1277583
		}
	},
	{
		"location": "London, England, United Kingdom",
		"name": "Queen",
		"coords": {
			"lat": 51.5073509,
			"lng": -0.1277583
		}
	},
	{
		"location": "London, England, United Kingdom",
		"name": "Pink Floyd",
		"coords": {
			"lat": 51.5073509,
			"lng": -0.1277583
		}
	},
	{
		"location": "Las Vegas, Clark County, Nevada, United States",
		"name": "The Killers",
		"coords": {
			"lat": 36.1699412,
			"lng": -115.1398296
		}
	},
	{
		"location": "Detroit, Wayne County, Michigan, United States",
		"name": "The White Stripes",
		"coords": {
			"lat": 42.331427,
			"lng": -83.0457538
		}
	},
	{
		"location": "London, England, United Kingdom",
		"name": "The Rolling Stones",
		"coords": {
			"lat": 51.5073509,
			"lng": -0.1277583
		}
	},
	{
		"location": "Berkeley, Alameda County, California, United States",
		"name": "Green Day",
		"coords": {
			"lat": 37.8715226,
			"lng": -122.273042
		}
	},
	{
		"location": "Los Angeles, Los Angeles County, California, United States",
		"name": "Guns N' Roses",
		"coords": {
			"lat": 34.0522265,
			"lng": -118.2436596
		}
	},
	{
		"location": "Los Angeles, Los Angeles County, California, United States",
		"name": "The Doors",
		"coords": {
			"lat": 34.0522265,
			"lng": -118.2436596
		}
	},
	{
		"location": "Glendale, Los Angeles County, California, United States",
		"name": "System of a Down",
		"coords": {
			"lat": 34.1425078,
			"lng": -118.255075
		}
	},
	{
		"location": "Sydney, New South Wales, Australia",
		"name": "AC/DC",
		"coords": {
			"lat": -33.8688197,
			"lng": 151.2092955
		}
	},
	{
		"location": "St. Joseph, Buchanan County, Missouri, United States",
		"name": "Eminem",
		"coords": {
			"lat": 39.7674578,
			"lng": -94.84668099999999
		}
	},
	{
		"location": "Atlanta, Fulton County, Georgia, United States",
		"name": "Kanye West",
		"coords": {
			"lat": 33.7489954,
			"lng": -84.3879824
		}
	},
	{
		"location": "Essex, England, United Kingdom",
		"name": "Gorillaz",
		"coords": {
			"lat": 51.57424469999999,
			"lng": 0.4856781
		}
	},
	{
		"location": "New York, New York, United States",
		"name": "Beastie Boys",
		"coords": {
			"lat": 40.7127753,
			"lng": -74.0059728
		}
	},
	{
		"location": "Los Angeles, Los Angeles County, California, United States",
		"name": "Black Eyed Peas",
		"coords": {
			"lat": 34.0522265,
			"lng": -118.2436596
		}
	},
	{
		"location": "East Point, Fulton County, Georgia, United States",
		"name": "OutKast",
		"coords": {
			"lat": 33.6795531,
			"lng": -84.43937240000001
		}
	},
	{
		"location": "Philadelphia, Philadelphia County, Pennsylvania, United States",
		"name": "The Roots",
		"coords": {
			"lat": 39.9525839,
			"lng": -75.1652215
		}
	},
	{
		"location": "South Gate, Los Angeles County, California, United States",
		"name": "Cypress Hill",
		"coords": {
			"lat": 33.954737,
			"lng": -118.2120161
		}
	},
	{
		"location": "Brooklyn, New York, New York, United States",
		"name": "Nas",
		"coords": {
			"lat": 40.6781784,
			"lng": -73.9441579
		}
	},
	{
		"location": "East Harlem, Manhattan, New York, New York, United States",
		"name": "2Pac",
		"coords": {
			"lat": 40.7957399,
			"lng": -73.93892129999999
		}
	},
	{
		"location": "St. Albans, Queens, New York, New York, United States",
		"name": "A Tribe Called Quest",
		"coords": {
			"lat": 40.6895283,
			"lng": -73.76436880000001
		}
	},
	{
		"location": "Long Beach, Los Angeles County, California, United States",
		"name": "Snoop Dogg",
		"coords": {
			"lat": 33.7700504,
			"lng": -118.1937395
		}
	},
	{
		"location": "San Jose, Santa Clara County, California, United States",
		"name": "DJ Shadow",
		"coords": {
			"lat": 37.3382082,
			"lng": -121.8863286
		}
	},
	{
		"location": "Compton, Los Angeles County, California, United States",
		"name": "Dr. Dre",
		"coords": {
			"lat": 33.8958492,
			"lng": -118.2200712
		}
	},
	{
		"location": "Chicago, Cook County, Illinois, United States",
		"name": "Common",
		"coords": {
			"lat": 41.8781136,
			"lng": -87.6297982
		}
	},
	{
		"location": "Brooklyn, New York, New York, United States",
		"name": "Mos Def",
		"coords": {
			"lat": 40.6781784,
			"lng": -73.9441579
		}
	},
	{
		"location": "Saint Michael, Barbados",
		"name": "Rihanna",
		"coords": {
			"lat": 13.1132219,
			"lng": -59.59880889999999
		}
	},
	{
		"location": "High Green, Sheffield, South Yorkshire, England, United Kingdom",
		"name": "Arctic Monkeys",
		"coords": {
			"lat": 53.474144,
			"lng": -1.494032
		}
	},
	{
		"location": "Abingdon-on-Thames, Oxfordshire, England, United Kingdom",
		"name": "Radiohead",
		"coords": {
			"lat": 51.67078,
			"lng": -1.2879529
		}
	},
	{
		"location": "Las Vegas, Clark County, Nevada, United States",
		"name": "The Killers",
		"coords": {
			"lat": 36.1699412,
			"lng": -115.1398296
		}
	},
	{
		"location": "Bellingham, Whatcom County, Washington, United States",
		"name": "Death Cab for Cutie",
		"coords": {
			"lat": 48.7519112,
			"lng": -122.4786854
		}
	},
	{
		"location": "Glasgow, Scotland, United Kingdom",
		"name": "Franz Ferdinand",
		"coords": {
			"lat": 55.864237,
			"lng": -4.251806
		}
	},
	{
		"location": "London, England, United Kingdom",
		"name": "Coldplay",
		"coords": {
			"lat": 51.5073509,
			"lng": -0.1277583
		}
	},
	{
		"location": "Reading, England, United Kingdom",
		"name": "Bloc Party",
		"coords": {
			"lat": 51.4542645,
			"lng": -0.9781303
		}
	},
	{
		"location": "Miami, Miami-Dade County, Florida, United States",
		"name": "Muse",
		"coords": {
			"lat": 25.7616798,
			"lng": -80.1917902
		}
	},
	{
		"location": "New York, New York, United States",
		"name": "The Strokes",
		"coords": {
			"lat": 40.7127753,
			"lng": -74.0059728
		}
	},
	{
		"location": "Brighton, Brighton and Hove, England, United Kingdom",
		"name": "The Kooks",
		"coords": {
			"lat": 50.82253000000001,
			"lng": -0.137163
		}
	},
	{
		"location": "Albuquerque, Bernalillo County, New Mexico, United States",
		"name": "The Shins",
		"coords": {
			"lat": 35.0843859,
			"lng": -106.650422
		}
	},
	{
		"location": "New York, New York, United States",
		"name": "Yeah Yeah Yeahs",
		"coords": {
			"lat": 40.7127753,
			"lng": -74.0059728
		}
	},
	{
		"location": "Detroit, Wayne County, Michigan, United States",
		"name": "The White Stripes",
		"coords": {
			"lat": 42.331427,
			"lng": -83.0457538
		}
	},
	{
		"location": "Issaquah, King County, Washington, United States",
		"name": "Modest Mouse",
		"coords": {
			"lat": 47.5301011,
			"lng": -122.0326191
		}
	},
	{
		"location": "Nashville, Davidson County, Tennessee, United States",
		"name": "Kings of Leon",
		"coords": {
			"lat": 36.1626638,
			"lng": -86.7816016
		}
	},
	{
		"location": "Los Angeles, Los Angeles County, California, United States",
		"name": "The Postal Service",
		"coords": {
			"lat": 34.0522265,
			"lng": -118.2436596
		}
	},
	{
		"location": "Omaha, Douglas County, Nebraska, United States",
		"name": "Bright Eyes",
		"coords": {
			"lat": 41.2565369,
			"lng": -95.9345034
		}
	},
	{
		"location": "Dundee, Scotland, United Kingdom",
		"name": "Snow Patrol",
		"coords": {
			"lat": 56.462018,
			"lng": -2.970721
		}
	},
	{
		"location": "Middletown, Middlesex County, Connecticut, United States",
		"name": "MGMT",
		"coords": {
			"lat": 41.5623209,
			"lng": -72.6506488
		}
	},
	{
		"location": "Alton, Madison County, Illinois, United States",
		"name": "Miles Davis",
		"coords": {
			"lat": 38.8906038,
			"lng": -90.1842764
		}
	},
	{
		"location": "Hamlet, Richmond County, North Carolina, United States",
		"name": "John Coltrane",
		"coords": {
			"lat": 34.8848775,
			"lng": -79.6942222
		}
	},
	{
		"location": "Bedford Stuyvesant, Brooklyn, New York, New York, United States",
		"name": "Norah Jones",
		"coords": {
			"lat": 40.6872176,
			"lng": -73.9417735
		}
	},
	{
		"location": "Southgate, Enfield, London, England, United Kingdom",
		"name": "Amy Winehouse",
		"coords": {
			"lat": 51.62476119999999,
			"lng": -0.1240456
		}
	},
	{
		"location": "Hoboken, Hudson County, New Jersey, United States",
		"name": "Frank Sinatra",
		"coords": {
			"lat": 40.7439905,
			"lng": -74.0323626
		}
	},
	{
		"location": "New Orleans, Louisiana, United States",
		"name": "Louis Armstrong",
		"coords": {
			"lat": 29.95106579999999,
			"lng": -90.0715323
		}
	},
	{
		"location": "Tryon, Polk County, North Carolina, United States",
		"name": "Nina Simone",
		"coords": {
			"lat": 35.2081694,
			"lng": -82.2384479
		}
	},
	{
		"location": "Newport News, Virginia, United States",
		"name": "Ella Fitzgerald",
		"coords": {
			"lat": 37.0870821,
			"lng": -76.4730122
		}
	},
	{
		"location": "Philadelphia, Philadelphia County, Pennsylvania, United States",
		"name": "Billie Holiday",
		"coords": {
			"lat": 39.9525839,
			"lng": -75.1652215
		}
	},
	{
		"location": "Chicago, Cook County, Illinois, United States",
		"name": "Herbie Hancock",
		"coords": {
			"lat": 41.8781136,
			"lng": -87.6297982
		}
	},
	{
		"location": "Rocky Mount, Edgecombe County, North Carolina, United States",
		"name": "Thelonious Monk",
		"coords": {
			"lat": 35.9382103,
			"lng": -77.7905339
		}
	},
	{
		"location": "Albany, Dougherty County, Georgia, United States",
		"name": "Ray Charles",
		"coords": {
			"lat": 31.5785074,
			"lng": -84.15574099999999
		}
	},
	{
		"location": "Nogales, Santa Cruz County, Arizona, United States",
		"name": "Charles Mingus",
		"coords": {
			"lat": 31.3403775,
			"lng": -110.9342532
		}
	},
	{
		"location": "Nanaimo, Regional District of Nanaimo, British Columbia, Canada",
		"name": "Diana Krall",
		"coords": {
			"lat": 49.165895,
			"lng": -123.9400717
		}
	},
	{
		"location": "Washington, D.C., United States",
		"name": "Duke Ellington",
		"coords": {
			"lat": 38.9071923,
			"lng": -77.0368707
		}
	},
	{
		"location": "London, England, United Kingdom",
		"name": "The Cinematic Orchestra",
		"coords": {
			"lat": 51.5073509,
			"lng": -0.1277583
		}
	},
	{
		"location": "Burnaby, Metro Vancouver, British Columbia, Canada",
		"name": "Michael Bublé",
		"coords": {
			"lat": 49.2488091,
			"lng": -122.9805104
		}
	},
	{
		"location": "Rochford, Essex, England, United Kingdom",
		"name": "Jamie Cullum",
		"coords": {
			"lat": 51.582071,
			"lng": 0.706515
		}
	},
	{
		"location": "Kutaisi, Imereti, Georgia",
		"name": "Katie Melua",
		"coords": {
			"lat": 42.2662428,
			"lng": 42.7180019
		}
	},
	{
		"location": "Montgomery, Montgomery County, Alabama, United States",
		"name": "Nat King Cole",
		"coords": {
			"lat": 32.3792233,
			"lng": -86.3077368
		}
	},
	{
		"location": "Kingston, Jamaica",
		"name": "Bob Marley & The Wailers",
		"coords": {
			"lat": 18.0178743,
			"lng": -76.8099041
		}
	},
	{
		"location": "West Chester, Chester County, Pennsylvania, United States",
		"name": "Matisyahu",
		"coords": {
			"lat": 39.9606643,
			"lng": -75.6054882
		}
	},
	{
		"location": "Paris, ile-de-France, France",
		"name": "Manu Chao",
		"coords": {
			"lat": 48.856614,
			"lng": 2.3522219
		}
	},
	{
		"location": "Osnabruck, Niedersachsen, Germany",
		"name": "Gentleman",
		"coords": {
			"lat": 52.2799112,
			"lng": 8.0471788
		}
	},
	{
		"location": "Mission Viejo, California United States",
		"name": "Peter Tosh",
		"coords": {
			"lat": 33.5968913,
			"lng": -117.6581562
		}
	},
	{
		"location": "Kingston, Jamaica",
		"name": "Damian Marley",
		"coords": {
			"lat": 18.0178743,
			"lng": -76.8099041
		}
	},
	{
		"location": "Paris, ile-de-France, France",
		"name": "Daft Punk",
		"coords": {
			"lat": 52.48624299999999,
			"lng": -1.890401
		}
	},
	{
		"location": "Braintree, Essex, England, United Kingdom",
		"name": "The Prodigy",
		"coords": {
			"lat": 38.9071923,
			"lng": -77.0368707
		}
	},
	{
		"location": "Basildon, Essex, England, United Kingdom",
		"name": "Depeche Mode",
		"coords": {
			"lat": 18.43001,
			"lng": -77.19905899999999
		}
	},
	{
		"location": "Bristol, England, United Kingdom",
		"name": "Massive Attack",
		"coords": {
			"lat": 18.0178743,
			"lng": -76.8099041
		}
	},
	{
		"location": "Reykjavik, Hofuoborgarsvaeoio, Iceland",
		"name": "Bjork",
		"coords": {
			"lat": 18.448151,
			"lng": -77.79126
		}
	},
	{
		"location": "Harlem, Manhattan, New York, New York, United States",
		"name": "Moby",
		"coords": {
			"lat": 18.0287171,
			"lng": -76.8437247
		}
	},
	{
		"location": "Abingdon-on-Thames, Oxfordshire, England, United Kingdom",
		"name": "Radiohead",
		"coords": {
			"lat": 18.0178743,
			"lng": -76.8099041
		}
	},
	{
		"location": "Manchester, Greater Manchester, England, United Kingdom",
		"name": "The Chemical Brothers",
		"coords": {
			"lat": 50.8747592,
			"lng": 6.6883728
		}
	},
	{
		"location": "Essex, England, United Kingdom",
		"name": "Gorillaz",
		"coords": {
			"lat": 18.0178743,
			"lng": -76.8099041
		}
	},
	{
		"location": "Tromso, Troms, Norway",
		"name": "Royksopp",
		"coords": {
			"lat": 53.4083714,
			"lng": -2.9915726
		}
	},
	{
		"location": "Limerick, County Limerick, Munster, Ireland",
		"name": "Aphex Twin",
		"coords": {
			"lat": 53.474144,
			"lng": -1.494032
		}
	},
	{
		"location": "Bristol, England, United Kingdom",
		"name": "Portishead",
		"coords": {
			"lat": 51.5073509,
			"lng": -0.1277583
		}
	},
	{
		"location": "Middletown, Middlesex County, Connecticut, United States",
		"name": "MGMT",
		"coords": {
			"lat": 50.82253000000001,
			"lng": -0.137163
		}
	},
	{
		"location": "Toronto, Ontario, Canada",
		"name": "Crystal Castles",
		"coords": {
			"lat": 51.5073509,
			"lng": -0.1277583
		}
	},
	{
		"location": "Edinburgh, Scotland, United Kingdom",
		"name": "Boards of Canada",
		"coords": {
			"lat": 51.67078,
			"lng": -1.2879529
		}
	},
	{
		"location": "Dusseldorf, Nordrhein-Westfalen, Germany",
		"name": "Kraftwerk",
		"coords": {
			"lat": 51.5073509,
			"lng": -0.1277583
		}
	},
	{
		"location": "Bromley, London, England, United Kingdom",
		"name": "Fatboy Slim",
		"coords": {
			"lat": 51.5073509,
			"lng": -0.1277583
		}
	},
	{
		"location": "Bath, Somerset, England, United Kingdom",
		"name": "Goldfrapp",
		"coords": {
			"lat": 51.5073509,
			"lng": -0.1277583
		}
	},
	{
		"location": "Stockholm, Stockholm municipality, Stockholms lan, Sweden",
		"name": "The Knife",
		"coords": {
			"lat": 52.6368778,
			"lng": -1.1397592
		}
	},
	{
		"location": "Cleveland, Cuyahoga County, Ohio, United States",
		"name": "Nine Inch Nails",
		"coords": {
			"lat": 51.62476119999999,
			"lng": -0.1240456
		}
	},
	{
		"location": "Los Angeles, Los Angeles County, California, United States",
		"name": "Red Hot Chili Peppers",
		"coords": {
			"lat": 25.7616798,
			"lng": -80.1917902
		}
	},
	{
		"location": "Liverpool, Merseyside, England, United Kingdom",
		"name": "The Beatles",
		"coords": {
			"lat": 51.4542645,
			"lng": -0.9781303
		}
	},
	{
		"location": "Miami, Miami-Dade County, Florida, United States",
		"name": "Muse",
		"coords": {
			"lat": 51.491187,
			"lng": -0.223731
		}
	},
	{
		"location": "London, England, United Kingdom",
		"name": "Coldplay",
		"coords": {
			"lat": 50.917405,
			"lng": 0.483679
		}
	},
	{
		"location": "Abingdon-on-Thames, Oxfordshire, England, United Kingdom",
		"name": "Radiohead",
		"coords": {
			"lat": 51.5073509,
			"lng": -0.1277583
		}
	},
	{
		"location": "Seattle, King County, Washington, United States",
		"name": "Foo Fighters",
		"coords": {
			"lat": 51.5073509,
			"lng": -0.1277583
		}
	},
	{
		"location": "Agoura Hills, Los Angeles County, California, United States",
		"name": "Linkin Park",
		"coords": {
			"lat": 53.4083714,
			"lng": -2.9915726
		}
	},
	{
		"location": "London, England, United Kingdom",
		"name": "Led Zeppelin",
		"coords": {
			"lat": 51.5073509,
			"lng": -0.1277583
		}
	},
	{
		"location": "London, England, United Kingdom",
		"name": "Queen",
		"coords": {
			"lat": 51.5073509,
			"lng": -0.1277583
		}
	},
	{
		"location": "London, England, United Kingdom",
		"name": "Pink Floyd",
		"coords": {
			"lat": 37.8715226,
			"lng": -122.273042
		}
	},
	{
		"location": "Las Vegas, Clark County, Nevada, United States",
		"name": "The Killers",
		"coords": {
			"lat": 40.7127753,
			"lng": -74.0059728
		}
	},
	{
		"location": "Detroit, Wayne County, Michigan, United States",
		"name": "The White Stripes",
		"coords": {
			"lat": 33.6594835,
			"lng": -117.9988026
		}
	},
	{
		"location": "London, England, United Kingdom",
		"name": "The Rolling Stones",
		"coords": {
			"lat": 51.5073509,
			"lng": -0.1277583
		}
	},
	{
		"location": "Berkeley, Alameda County, California, United States",
		"name": "Green Day",
		"coords": {
			"lat": 34.0522265,
			"lng": -118.2436596
		}
	},
	{
		"location": "Los Angeles, Los Angeles County, California, United States",
		"name": "Guns N' Roses",
		"coords": {
			"lat": 32.9628232,
			"lng": -117.0358646
		}
	},
	{
		"location": "Los Angeles, Los Angeles County, California, United States",
		"name": "The Doors",
		"coords": {
			"lat": 34.0522265,
			"lng": -118.2436596
		}
	},
	{
		"location": "Glendale, Los Angeles County, California, United States",
		"name": "System of a Down",
		"coords": {
			"lat": 37.7749295,
			"lng": -122.4194155
		}
	},
	{
		"location": "Sydney, New South Wales, Australia",
		"name": "AC/DC",
		"coords": {
			"lat": 41.8781136,
			"lng": -87.6297982
		}
	},
	{
		"location": "St. Joseph, Buchanan County, Missouri, United States",
		"name": "Eminem",
		"coords": {
			"lat": 40.8823215,
			"lng": -74.08319709999999
		}
	},
	{
		"location": "Atlanta, Fulton County, Georgia, United States",
		"name": "Kanye West",
		"coords": {
			"lat": 43.8508553,
			"lng": -79.0203732
		}
	},
	{
		"location": "Essex, England, United Kingdom",
		"name": "Gorillaz",
		"coords": {
			"lat": 51.253775,
			"lng": -85.323214
		}
	},
	{
		"location": "New York, New York, United States",
		"name": "Beastie Boys",
		"coords": {
			"lat": 51.253775,
			"lng": -85.323214
		}
	},
	{
		"location": "Los Angeles, Los Angeles County, California, United States",
		"name": "Black Eyed Peas",
		"coords": {
			"lat": 51.253775,
			"lng": -85.323214
		}
	},
	{
		"location": "East Point, Fulton County, Georgia, United States",
		"name": "OutKast",
		"coords": {
			"lat": 43.2341813,
			"lng": -86.24839209999999
		}
	},
	{
		"location": "Philadelphia, Philadelphia County, Pennsylvania, United States",
		"name": "The Roots",
		"coords": {
			"lat": 40.735657,
			"lng": -74.1723667
		}
	},
	{
		"location": "South Gate, Los Angeles County, California, United States",
		"name": "Cypress Hill",
		"coords": {
			"lat": 51.253775,
			"lng": -85.323214
		}
	},
	{
		"location": "Brooklyn, New York, New York, United States",
		"name": "Nas",
		"coords": {
			"lat": 51.253775,
			"lng": -85.323214
		}
	},
	{
		"location": "East Harlem, Manhattan, New York, New York, United States",
		"name": "2Pac",
		"coords": {
			"lat": 34.0522265,
			"lng": -118.2436596
		}
	},
	{
		"location": "St. Albans, Queens, New York, New York, United States",
		"name": "A Tribe Called Quest",
		"coords": {
			"lat": 51.57608399999999,
			"lng": 0.488736
		}
	},
	{
		"location": "Long Beach, Los Angeles County, California, United States",
		"name": "Snoop Dogg",
		"coords": {
			"lat": 51.1091401,
			"lng": -0.1872275
		}
	},
	{
		"location": "San Jose, Santa Clara County, California, United States",
		"name": "DJ Shadow",
		"coords": {
			"lat": 51.5073509,
			"lng": -0.1277583
		}
	},
	{
		"location": "Compton, Los Angeles County, California, United States",
		"name": "Dr. Dre",
		"coords": {
			"lat": 53.4807593,
			"lng": -2.2426305
		}
	},
	{
		"location": "Chicago, Cook County, Illinois, United States",
		"name": "Common",
		"coords": {
			"lat": 34.0522265,
			"lng": -118.2436596
		}
	},
	{
		"location": "Brooklyn, New York, New York, United States",
		"name": "Mos Def",
		"coords": {
			"lat": 41.6020403,
			"lng": -87.3371523
		}
	},
	{
		"location": "Saint Michael, Barbados",
		"name": "Rihanna",
		"coords": {
			"lat": 53.48752349999999,
			"lng": -2.2901264
		}
	},
	{
		"location": "High Green, Sheffield, South Yorkshire, England, United Kingdom",
		"name": "Arctic Monkeys",
		"coords": {
			"lat": 51.4612794,
			"lng": -0.1156148
		}
	},
	{
		"location": "Abingdon-on-Thames, Oxfordshire, England, United Kingdom",
		"name": "Radiohead",
		"coords": {
			"lat": 53.48752349999999,
			"lng": -2.2901264
		}
	},
	{
		"location": "Las Vegas, Clark County, Nevada, United States",
		"name": "The Killers",
		"coords": {
			"lat": 52.48624299999999,
			"lng": -1.890401
		}
	},
	{
		"location": "Bellingham, Whatcom County, Washington, United States",
		"name": "Death Cab for Cutie",
		"coords": {
			"lat": 43.5944677,
			"lng": -83.8888647
		}
	},
	{
		"location": "Glasgow, Scotland, United Kingdom",
		"name": "Franz Ferdinand",
		"coords": {
			"lat": 51.5073509,
			"lng": -0.1277583
		}
	},
	{
		"location": "London, England, United Kingdom",
		"name": "Coldplay",
		"coords": {
			"lat": 42.3600825,
			"lng": -71.0588801
		}
	},
	{
		"location": "Reading, England, United Kingdom",
		"name": "Bloc Party",
		"coords": {
			"lat": 40.45940210000001,
			"lng": -74.360846
		}
	},
	{
		"location": "Miami, Miami-Dade County, Florida, United States",
		"name": "Muse",
		"coords": {
			"lat": 40.7127753,
			"lng": -74.0059728
		}
	},
	{
		"location": "New York, New York, United States",
		"name": "The Strokes",
		"coords": {
			"lat": 51.4807988,
			"lng": -0.0231099
		}
	},
	{
		"location": "Brighton, Brighton and Hove, England, United Kingdom",
		"name": "The Kooks",
		"coords": {
			"lat": 52.3758916,
			"lng": 9.732010400000002
		}
	},
	{
		"location": "Albuquerque, Bernalillo County, New Mexico, United States",
		"name": "The Shins",
		"coords": {
			"lat": 51.3810641,
			"lng": -2.3590167
		}
	},
	{
		"location": "New York, New York, United States",
		"name": "Yeah Yeah Yeahs",
		"coords": {
			"lat": 51.4869429,
			"lng": -0.170037
		}
	},
	{
		"location": "Detroit, Wayne County, Michigan, United States",
		"name": "The White Stripes",
		"coords": {
			"lat": 51.5073509,
			"lng": -0.1277583
		}
	},
	{
		"location": "Issaquah, King County, Washington, United States",
		"name": "Modest Mouse",
		"coords": {
			"lat": 48.856614,
			"lng": 2.3522219
		}
	},
	{
		"location": "Nashville, Davidson County, Tennessee, United States",
		"name": "Kings of Leon",
		"coords": {
			"lat": 40.7830603,
			"lng": -73.9712488
		}
	},
	{
		"location": "Los Angeles, Los Angeles County, California, United States",
		"name": "The Postal Service",
		"coords": {
			"lat": 43.5944677,
			"lng": -83.8888647
		}
	},
	{
		"location": "Omaha, Douglas County, Nebraska, United States",
		"name": "Bright Eyes",
		"coords": {
			"lat": 51.880087,
			"lng": 0.5509269
		}
	},
	{
		"location": "Dundee, Scotland, United Kingdom",
		"name": "Snow Patrol",
		"coords": {
			"lat": 41.6020403,
			"lng": -87.3371523
		}
	},
	{
		"location": "Middletown, Middlesex County, Connecticut, United States",
		"name": "MGMT",
		"coords": {
			"lat": 53.4807593,
			"lng": -2.2426305
		}
	},
	{
		"location": "Alton, Madison County, Illinois, United States",
		"name": "Miles Davis",
		"coords": {
			"lat": 13.1132219,
			"lng": -59.59880889999999
		}
	},
	{
		"location": "Hamlet, Richmond County, North Carolina, United States",
		"name": "John Coltrane",
		"coords": {
			"lat": 48.856614,
			"lng": 2.3522219
		}
	},
	{
		"location": "Bedford Stuyvesant, Brooklyn, New York, New York, United States",
		"name": "Norah Jones",
		"coords": {
			"lat": 51.406025,
			"lng": 0.013156
		}
	},
	{
		"location": "Southgate, Enfield, London, England, United Kingdom",
		"name": "Amy Winehouse",
		"coords": {
			"lat": 31.2437872,
			"lng": -90.4531535
		}
	},
	{
		"location": "Hoboken, Hudson County, New Jersey, United States",
		"name": "Frank Sinatra",
		"coords": {
			"lat": -37.8136276,
			"lng": 144.9630576
		}
	},
	{
		"location": "New Orleans, Louisiana, United States",
		"name": "Louis Armstrong",
		"coords": {
			"lat": 51.5250366,
			"lng": -0.3413965
		}
	},
	{
		"location": "Tryon, Polk County, North Carolina, United States",
		"name": "Nina Simone",
		"coords": {
			"lat": 51.5073509,
			"lng": -0.1277583
		}
	},
	{
		"location": "Newport News, Virginia, United States",
		"name": "Ella Fitzgerald",
		"coords": {
			"lat": 35.1495343,
			"lng": -90.0489801
		}
	},
	{
		"location": "Philadelphia, Philadelphia County, Pennsylvania, United States",
		"name": "Billie Holiday",
		"coords": {
			"lat": 51.4612794,
			"lng": -0.1156148
		}
	},
	{
		"location": "Chicago, Cook County, Illinois, United States",
		"name": "Herbie Hancock",
		"coords": {
			"lat": 40.5795317,
			"lng": -74.1502007
		}
	},
	{
		"location": "Rocky Mount, Edgecombe County, North Carolina, United States",
		"name": "Thelonious Monk",
		"coords": {
			"lat": 50.73743,
			"lng": 7.0982068
		}
	},
	{
		"location": "Albany, Dougherty County, Georgia, United States",
		"name": "Ray Charles",
		"coords": {
			"lat": 51.3810641,
			"lng": -2.3590167
		}
	},
	{
		"location": "Nogales, Santa Cruz County, Arizona, United States",
		"name": "Charles Mingus",
		"coords": {
			"lat": 21.5918615,
			"lng": -157.9225549
		}
	},
	{
		"location": "Nanaimo, Regional District of Nanaimo, British Columbia, Canada",
		"name": "Diana Krall",
		"coords": {
			"lat": 53.339897,
			"lng": -6.538458899999999
		}
	},
	{
		"location": "Washington, D.C., United States",
		"name": "Duke Ellington",
		"coords": {
			"lat": 34.1659795,
			"lng": -81.3498211
		}
	},
	{
		"location": "London, England, United Kingdom",
		"name": "The Cinematic Orchestra",
		"coords": {
			"lat": 37.6087561,
			"lng": -77.3733139
		}
	},
	{
		"location": "Burnaby, Metro Vancouver, British Columbia, Canada",
		"name": "Michael Bublé",
		"coords": {
			"lat": 41.1792258,
			"lng": -73.1894384
		}
	},
	{
		"location": "Rochford, Essex, England, United Kingdom",
		"name": "Jamie Cullum",
		"coords": {
			"lat": 60.39126279999999,
			"lng": 5.3220544
		}
	},
	{
		"location": "Kutaisi, Imereti, Georgia",
		"name": "Katie Melua",
		"coords": {
			"lat": 41.2565369,
			"lng": -95.9345034
		}
	},
	{
		"location": "Montgomery, Montgomery County, Alabama, United States",
		"name": "Nat King Cole",
		"coords": {
			"lat": 57.70887,
			"lng": 11.97456
		}
	},
	{
		"location": "Kingston, Jamaica",
		"name": "Bob Marley & The Wailers",
		"coords": {
			"lat": 16.840939,
			"lng": 96.173526
		}
	},
	{
		"location": "West Chester, Chester County, Pennsylvania, United States",
		"name": "Matisyahu",
		"coords": {
			"lat": 43.1593745,
			"lng": -79.2468626
		}
	},
	{
		"location": "Paris, ile-de-France, France",
		"name": "Manu Chao",
		"coords": {
			"lat": 40.724707,
			"lng": -73.8207618
		}
	},
	{
		"location": "Osnabruck, Niedersachsen, Germany",
		"name": "Gentleman",
		"coords": {
			"lat": 44.811349,
			"lng": -91.4984941
		}
	},
	{
		"location": "Mission Viejo, California United States",
		"name": "Peter Tosh",
		"coords": {
			"lat": 51.24144889999999,
			"lng": -1.6644823
		}
	},
	{
		"location": "Paris, ile-de-France, France",
		"name": "Daft Punk",
		"coords": {
			"lat": 34.055103,
			"lng": -117.7499909
		}
	},
	{
		"location": "Braintree, Essex, England, United Kingdom",
		"name": "The Prodigy",
		"coords": {
			"lat": 55.904185,
			"lng": -4.228494
		}
	},
	{
		"location": "Basildon, Essex, England, United Kingdom",
		"name": "Depeche Mode",
		"coords": {
			"lat": 19.4326077,
			"lng": -99.133208
		}
	},
	{
		"location": "Bristol, England, United Kingdom",
		"name": "Massive Attack",
		"coords": {
			"lat": 51.5073509,
			"lng": -0.1277583
		}
	},
	{
		"location": "Reykjavik, Hofuoborgarsvaeoio, Iceland",
		"name": "Bjork",
		"coords": {
			"lat": 34.0259216,
			"lng": -118.7797571
		}
	},
	{
		"location": "Harlem, Manhattan, New York, New York, United States",
		"name": "Moby",
		"coords": {
			"lat": 51.5188746,
			"lng": -0.1498955
		}
	},
	{
		"location": "Abingdon-on-Thames, Oxfordshire, England, United Kingdom",
		"name": "Radiohead",
		"coords": {
			"lat": 13.1132219,
			"lng": -59.59880889999999
		}
	},
	{
		"location": "Manchester, Greater Manchester, England, United Kingdom",
		"name": "The Chemical Brothers",
		"coords": {
			"lat": 40.7830603,
			"lng": -73.9712488
		}
	},
	{
		"location": "Essex, England, United Kingdom",
		"name": "Gorillaz",
		"coords": {
			"lat": 35.1495343,
			"lng": -90.0489801
		}
	},
	{
		"location": "Tromso, Troms, Norway",
		"name": "Royksopp",
		"coords": {
			"lat": 34.0522265,
			"lng": -118.2436596
		}
	},
	{
		"location": "Limerick, County Limerick, Munster, Ireland",
		"name": "Aphex Twin",
		"coords": {
			"lat": 40.8681539,
			"lng": -73.425676
		}
	},
	{
		"location": "Bristol, England, United Kingdom",
		"name": "Portishead",
		"coords": {
			"lat": 32.7766642,
			"lng": -96.79698789999999
		}
	},
	{
		"location": "Middletown, Middlesex County, Connecticut, United States",
		"name": "MGMT",
		"coords": {
			"lat": 40.5795317,
			"lng": -74.1502007
		}
	},
	{
		"location": "Toronto, Ontario, Canada",
		"name": "Crystal Castles",
		"coords": {
			"lat": 33.7489954,
			"lng": -84.3879824
		}
	},
	{
		"location": "Edinburgh, Scotland, United Kingdom",
		"name": "Boards of Canada",
		"coords": {
			"lat": 29.7604267,
			"lng": -95.3698028
		}
	},
	{
		"location": "Dusseldorf, Nordrhein-Westfalen, Germany",
		"name": "Kraftwerk",
		"coords": {
			"lat": 33.5845581,
			"lng": -92.8343294
		}
	},
	{
		"location": "Bromley, London, England, United Kingdom",
		"name": "Fatboy Slim",
		"coords": {
			"lat": 30.267153,
			"lng": -97.7430608
		}
	},
	{
		"location": "Bath, Somerset, England, United Kingdom",
		"name": "Goldfrapp",
		"coords": {
			"lat": 40.6781784,
			"lng": -73.9441579
		}
	},
	{
		"location": "Stockholm, Stockholm municipality, Stockholms lan, Sweden",
		"name": "The Knife",
		"coords": {
			"lat": 40.8447819,
			"lng": -73.8648268
		}
	},
	{
		"location": "Cleveland, Cuyahoga County, Ohio, United States",
		"name": "Nine Inch Nails",
		"coords": {
			"lat": 40.8447819,
			"lng": -73.8648268
		}
	},
	{
		"location": "Los Angeles, Los Angeles County, California, United States",
		"name": "Red Hot Chili Peppers",
		"coords": {
			"lat": 36.8507689,
			"lng": -76.28587259999999
		}
	},
	{
		"location": "Liverpool, Merseyside, England, United Kingdom",
		"name": "The Beatles",
		"coords": {
			"lat": 34.0522265,
			"lng": -118.2436596
		}
	},
	{
		"location": "Miami, Miami-Dade County, Florida, United States",
		"name": "Muse",
		"coords": {
			"lat": 33.9930677,
			"lng": -117.9686755
		}
	},
	{
		"location": "London, England, United Kingdom",
		"name": "Coldplay",
		"coords": {
			"lat": 39.9242266,
			"lng": -83.8088171
		}
	},
	{
		"location": "Abingdon-on-Thames, Oxfordshire, England, United Kingdom",
		"name": "Radiohead",
		"coords": {
			"lat": 32.7766642,
			"lng": -96.79698789999999
		}
	},
	{
		"location": "Seattle, King County, Washington, United States",
		"name": "Foo Fighters",
		"coords": {
			"lat": 41.1792258,
			"lng": -73.1894384
		}
	},
	{
		"location": "Agoura Hills, Los Angeles County, California, United States",
		"name": "Linkin Park",
		"coords": {
			"lat": 41.8781136,
			"lng": -87.6297982
		}
	},
	{
		"location": "London, England, United Kingdom",
		"name": "Led Zeppelin",
		"coords": {
			"lat": 49.895136,
			"lng": -97.13837439999999
		}
	},
	{
		"location": "London, England, United Kingdom",
		"name": "Queen",
		"coords": {
			"lat": 51.504286,
			"lng": -3.576945
		}
	},
	{
		"location": "London, England, United Kingdom",
		"name": "Pink Floyd",
		"coords": {
			"lat": 42.331427,
			"lng": -83.0457538
		}
	},
	{
		"location": "Las Vegas, Clark County, Nevada, United States",
		"name": "The Killers",
		"coords": {
			"lat": 40.7282239,
			"lng": -73.7948516
		}
	},
	{
		"location": "Detroit, Wayne County, Michigan, United States",
		"name": "The White Stripes",
		"coords": {
			"lat": 40.7127753,
			"lng": -74.0059728
		}
	},
	{
		"location": "London, England, United Kingdom",
		"name": "The Rolling Stones",
		"coords": {
			"lat": 34.0522265,
			"lng": -118.2436596
		}
	},
	{
		"location": "Berkeley, Alameda County, California, United States",
		"name": "Green Day",
		"coords": {
			"lat": 33.8622366,
			"lng": -118.3995194
		}
	},
	{
		"location": "Los Angeles, Los Angeles County, California, United States",
		"name": "Guns N' Roses",
		"coords": {
			"lat": 38.9071923,
			"lng": -77.0368707
		}
	},
	{
		"location": "Los Angeles, Los Angeles County, California, United States",
		"name": "The Doors",
		"coords": {
			"lat": 40.83959220000001,
			"lng": -74.4818698
		}
	},
	{
		"location": "Glendale, Los Angeles County, California, United States",
		"name": "System of a Down",
		"coords": {
			"lat": 29.1871986,
			"lng": -82.14009229999999
		}
	},
	{
		"location": "Sydney, New South Wales, Australia",
		"name": "AC/DC",
		"coords": {
			"lat": 63.8258471,
			"lng": 20.2630354
		}
	},
	{
		"location": "St. Joseph, Buchanan County, Missouri, United States",
		"name": "Eminem",
		"coords": {
			"lat": 40.7127753,
			"lng": -74.0059728
		}
	},
	{
		"location": "Atlanta, Fulton County, Georgia, United States",
		"name": "Kanye West",
		"coords": {
			"lat": 33.6594835,
			"lng": -117.9988026
		}
	},
	{
		"location": "Essex, England, United Kingdom",
		"name": "Gorillaz",
		"coords": {
			"lat": 32.7157305,
			"lng": -117.1610966
		}
	},
	{
		"location": "New York, New York, United States",
		"name": "Beastie Boys",
		"coords": {
			"lat": 33.88850350000001,
			"lng": -117.8132571
		}
	},
	{
		"location": "Los Angeles, Los Angeles County, California, United States",
		"name": "Black Eyed Peas",
		"coords": {
			"lat": 53.38112899999999,
			"lng": -1.470085
		}
	},
	{
		"location": "East Point, Fulton County, Georgia, United States",
		"name": "OutKast",
		"coords": {
			"lat": 33.7514966,
			"lng": -84.7477136
		}
	},
	{
		"location": "Philadelphia, Philadelphia County, Pennsylvania, United States",
		"name": "The Roots",
		"coords": {
			"lat": 29.1871986,
			"lng": -82.14009229999999
		}
	},
	{
		"location": "South Gate, Los Angeles County, California, United States",
		"name": "Cypress Hill",
		"coords": {
			"lat": 40.3356483,
			"lng": -75.9268747
		}
	},
	{
		"location": "Brooklyn, New York, New York, United States",
		"name": "Nas",
		"coords": {
			"lat": 31.8827464,
			"lng": -97.07395849999999
		}
	},
	{
		"location": "East Harlem, Manhattan, New York, New York, United States",
		"name": "2Pac",
		"coords": {
			"lat": 42.3149367,
			"lng": -83.03636329999999
		}
	},
	{
		"location": "St. Albans, Queens, New York, New York, United States",
		"name": "A Tribe Called Quest",
		"coords": {
			"lat": 35.7478769,
			"lng": -95.3696909
		}
	},
	{
		"location": "Long Beach, Los Angeles County, California, United States",
		"name": "Snoop Dogg",
		"coords": {
			"lat": 32.7766642,
			"lng": -96.79698789999999
		}
	},
	{
		"location": "San Jose, Santa Clara County, California, United States",
		"name": "DJ Shadow",
		"coords": {
			"lat": 31.578494,
			"lng": -86.84802979999999
		}
	},
	{
		"location": "Compton, Los Angeles County, California, United States",
		"name": "Dr. Dre",
		"coords": {
			"lat": 35.7973158,
			"lng": -83.3923823
		}
	},
	{
		"location": "Chicago, Cook County, Illinois, United States",
		"name": "Common",
		"coords": {
			"lat": 34.0522265,
			"lng": -118.2436596
		}
	},
	{
		"location": "Brooklyn, New York, New York, United States",
		"name": "Mos Def",
		"coords": {
			"lat": 39.9611755,
			"lng": -82.99879419999999
		}
	},
	{
		"location": "Saint Michael, Barbados",
		"name": "Rihanna",
		"coords": {
			"lat": 39.9478531,
			"lng": -80.75420539999999
		}
	},
	{
		"location": "High Green, Sheffield, South Yorkshire, England, United Kingdom",
		"name": "Arctic Monkeys",
		"coords": {
			"lat": 32.4576421,
			"lng": -91.49317359999999
		}
	},
	{
		"location": "Abingdon-on-Thames, Oxfordshire, England, United Kingdom",
		"name": "Radiohead",
		"coords": {
			"lat": 36.1539816,
			"lng": -95.99277500000001
		}
	},
	{
		"location": "Las Vegas, Clark County, Nevada, United States",
		"name": "The Killers",
		"coords": {
			"lat": 32.2987573,
			"lng": -90.1848103
		}
	},
	{
		"location": "Bellingham, Whatcom County, Washington, United States",
		"name": "Death Cab for Cutie",
		"coords": {
			"lat": -35.7274938,
			"lng": 174.3165604
		}
	},
	{
		"location": "Glasgow, Scotland, United Kingdom",
		"name": "Franz Ferdinand",
		"coords": {
			"lat": 33.3806716,
			"lng": -84.79965729999999
		}
	},
	{
		"location": "London, England, United Kingdom",
		"name": "Coldplay",
		"coords": {
			"lat": 33.5185892,
			"lng": -86.8103567
		}
	},
	{
		"location": "Reading, England, United Kingdom",
		"name": "Bloc Party",
		"coords": {
			"lat": 32.2987573,
			"lng": -90.1848103
		}
	},
	{
		"location": "Miami, Miami-Dade County, Florida, United States",
		"name": "Muse",
		"coords": {
			"lat": 35.9606384,
			"lng": -83.9207392
		}
	},
	{
		"location": "New York, New York, United States",
		"name": "The Strokes",
		"coords": {
			"lat": 39.1856597,
			"lng": -78.1633341
		}
	},
	{
		"location": "Brighton, Brighton and Hove, England, United Kingdom",
		"name": "The Kooks",
		"coords": {
			"lat": 35.3395079,
			"lng": -97.48670279999999
		}
	},
	{
		"location": "Albuquerque, Bernalillo County, New Mexico, United States",
		"name": "The Shins",
		"coords": {
			"lat": 34.055103,
			"lng": -117.7499909
		}
	},
	{
		"location": "New York, New York, United States",
		"name": "Yeah Yeah Yeahs",
		"coords": {
			"lat": 51.300173,
			"lng": -0.49327
		}
	},
	{
		"location": "Detroit, Wayne County, Michigan, United States",
		"name": "The White Stripes",
		"coords": {
			"lat": 47.6062095,
			"lng": -122.3320708
		}
	},
	{
		"location": "Issaquah, King County, Washington, United States",
		"name": "Modest Mouse",
		"coords": {
			"lat": 33.4717867,
			"lng": -90.3650851
		}
	},
	{
		"location": "Nashville, Davidson County, Tennessee, United States",
		"name": "Kings of Leon",
		"coords": {
			"lat": 51.5073509,
			"lng": -0.1277583
		}
	},
	{
		"location": "Los Angeles, Los Angeles County, California, United States",
		"name": "The Postal Service",
		"coords": {
			"lat": 29.8849504,
			"lng": -93.93994699999999
		}
	},
	{
		"location": "Omaha, Douglas County, Nebraska, United States",
		"name": "Bright Eyes",
		"coords": {
			"lat": 34.1960298,
			"lng": -90.6393702
		}
	},
	{
		"location": "Dundee, Scotland, United Kingdom",
		"name": "Snow Patrol",
		"coords": {
			"lat": 32.8494351,
			"lng": -91.02032240000001
		}
	},
	{
		"location": "Middletown, Middlesex County, Connecticut, United States",
		"name": "MGMT",
		"coords": {
			"lat": 31.5785074,
			"lng": -84.15574099999999
		}
	},
	{
		"location": "Alton, Madison County, Illinois, United States",
		"name": "Miles Davis",
		"coords": {
			"lat": 40.6872176,
			"lng": -73.9417735
		}
	},
	{
		"location": "Hamlet, Richmond County, North Carolina, United States",
		"name": "John Coltrane",
		"coords": {
			"lat": 41.0814447,
			"lng": -81.51900529999999
		}
	},
	{
		"location": "Bedford Stuyvesant, Brooklyn, New York, New York, United States",
		"name": "Norah Jones",
		"coords": {
			"lat": 35.2081694,
			"lng": -82.2384479
		}
	},
	{
		"location": "Southgate, Enfield, London, England, United Kingdom",
		"name": "Amy Winehouse",
		"coords": {
			"lat": 32.7766642,
			"lng": -96.79698789999999
		}
	},
	{
		"location": "Hoboken, Hudson County, New Jersey, United States",
		"name": "Frank Sinatra",
		"coords": {
			"lat": 39.9525839,
			"lng": -75.1652215
		}
	},
	{
		"location": "New Orleans, Louisiana, United States",
		"name": "Louis Armstrong",
		"coords": {
			"lat": 29.95106579999999,
			"lng": -90.0715323
		}
	},
	{
		"location": "Tryon, Polk County, North Carolina, United States",
		"name": "Nina Simone",
		"coords": {
			"lat": 33.6603954,
			"lng": -88.62087989999999
		}
	},
	{
		"location": "Newport News, Virginia, United States",
		"name": "Ella Fitzgerald",
		"coords": {
			"lat": 33.5968913,
			"lng": -117.6581562
		}
	},
	{
		"location": "Philadelphia, Philadelphia County, Pennsylvania, United States",
		"name": "Billie Holiday",
		"coords": {
			"lat": 30.9335146,
			"lng": -91.70484019999999
		}
	},
	{
		"location": "Chicago, Cook County, Illinois, United States",
		"name": "Herbie Hancock",
		"coords": {
			"lat": 51.5073509,
			"lng": -0.1277583
		}
	},
	{
		"location": "Rocky Mount, Edgecombe County, North Carolina, United States",
		"name": "Thelonious Monk",
		"coords": {
			"lat": 51.4807988,
			"lng": -0.0231099
		}
	},
	{
		"location": "Albany, Dougherty County, Georgia, United States",
		"name": "Ray Charles",
		"coords": {
			"lat": 51.67078,
			"lng": -1.2879529
		}
	},
	{
		"location": "Nogales, Santa Cruz County, Arizona, United States",
		"name": "Charles Mingus",
		"coords": {
			"lat": 51.5073509,
			"lng": -0.1277583
		}
	},
	{
		"location": "Nanaimo, Regional District of Nanaimo, British Columbia, Canada",
		"name": "Diana Krall",
		"coords": {
			"lat": 25.7616798,
			"lng": -80.1917902
		}
	},
	{
		"location": "Washington, D.C., United States",
		"name": "Duke Ellington",
		"coords": {
			"lat": 34.0522265,
			"lng": -118.2436596
		}
	},
	{
		"location": "London, England, United Kingdom",
		"name": "The Cinematic Orchestra",
		"coords": {
			"lat": 51.57424469999999,
			"lng": 0.4856781
		}
	},
	{
		"location": "Burnaby, Metro Vancouver, British Columbia, Canada",
		"name": "Michael Bublé",
		"coords": {
			"lat": 34.1533395,
			"lng": -118.7616764
		}
	},
	{
		"location": "Rochford, Essex, England, United Kingdom",
		"name": "Jamie Cullum",
		"coords": {
			"lat": 64.1420229,
			"lng": -21.9265493
		}
	},
	{
		"location": "Kutaisi, Imereti, Georgia",
		"name": "Katie Melua",
		"coords": {
			"lat": 36.1699412,
			"lng": -115.1398296
		}
	},
	{
		"location": "Montgomery, Montgomery County, Alabama, United States",
		"name": "Nat King Cole",
		"coords": {
			"lat": 34.1425078,
			"lng": -118.255075
		}
	},
	{
		"location": "Kingston, Jamaica",
		"name": "Bob Marley & The Wailers",
		"coords": {
			"lat": 42.331427,
			"lng": -83.0457538
		}
	},
	{
		"location": "West Chester, Chester County, Pennsylvania, United States",
		"name": "Matisyahu",
		"coords": {
			"lat": 51.1091401,
			"lng": -0.1872275
		}
	},
	{
		"location": "Paris, ile-de-France, France",
		"name": "Manu Chao",
		"coords": {
			"lat": 53.474144,
			"lng": -1.494032
		}
	},
	{
		"location": "Osnabruck, Niedersachsen, Germany",
		"name": "Gentleman",
		"coords": {
			"lat": 55.864237,
			"lng": -4.251806
		}
	},
	{
		"location": "Mission Viejo, California United States",
		"name": "Peter Tosh",
		"coords": {
			"lat": 41.8781136,
			"lng": -87.6297982
		}
	}


];  //maybe use fs (file system) to import(read) the list of artist name value pairs

//you need to replace seed if already created
Artist.collection.insertMany(artistSeed).then(data => {console.log(data.result.n+" records inserted")
process.exit(0);}).catch(err => {console.log(err);
process.exit(1)});