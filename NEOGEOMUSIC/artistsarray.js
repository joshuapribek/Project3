const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })

const fs = require('fs')

var artistdata = require('./genre.json')

console.log(artistdata)

// delete initial //

async function doStuff(url){

for(var i = 0; i < artistdata.length; i++) {

    var itemid = artistdata[i]["genre"];
    var url = 'https://www.last.fm/tag/' + itemid + '/artists' 
console.log(url)

 await nightmare
    .goto(url)
    .wait()
    .evaluate(() => {

      const select = document.querySelector('.col-main');

     



      var link = Array.from(select.querySelectorAll('a.link-block-target')).map(a => a.href);



    return link
})
.then(function(link){





        fs.appendFileSync('testOutput.json', JSON.stringify(link));
    console.log('Done!');
  })
  .catch(function(err){
    console.log(err);
  })


} }  
// var urlarray = []
// urlarray.push(url)
// console.log(url)

doStuff()











