const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })

const fs = require('fs')

var artistdata = require('./genre.json')

console.log(artistdata)

// delete initial //

async function doStuff(url){

for(var i = 0; i < artistdata.length; i++) {


  for(var x = 1; x <= 50; x++) {
    console.log(x);


    var itemid = artistdata[i]["genre"];
    var url = 'https://www.last.fm/tag/' + itemid + '/artists?page=' + x 
console.log(url)

 await nightmare
    .goto(url)
    .wait()
    .evaluate(() => {

        var link =[]

        var one = document.querySelector("#mantle_skin > div:nth-child(3) > div > div.col-main > section > ol > li:nth-child(1) > div > h3 > a").href

        var two = document.querySelector("#mantle_skin > div:nth-child(3) > div > div.col-main > section > ol > li:nth-child(3) > div > h3 > a").href

        var three = document.querySelector("#mantle_skin > div:nth-child(3) > div > div.col-main > section > ol > li:nth-child(4) > div > h3 > a").href

        var four = document.querySelector("#mantle_skin > div:nth-child(3) > div > div.col-main > section > ol > li:nth-child(5) > div > h3 > a").href

        var five = document.querySelector("#mantle_skin > div:nth-child(3) > div > div.col-main > section > ol > li:nth-child(6) > div > h3 > a").href


        link.push(one,two,three,four,five)



    return link
})
.then(function(link){


        fs.appendFileSync('testoutput2.json', JSON.stringify(link));
    console.log('Done!');
  })



  .catch(function(err){
    console.log(err);
  })


} 
}  
}

doStuff()











