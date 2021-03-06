const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })

const fs = require('fs')

var artisturl = require('./testoutput2.json')

console.log(artisturl)

// delete initial //

async function doStuff(url){

for(var i = 0; i < artisturl.length; i++) {

    var url = artisturl[i]
console.log(url)

 await nightmare
    .goto(url)
    .wait()
    .evaluate(() => {

var artistname = document.querySelector("#mantle_skin > header > div.header-new-inner.js-link-block > div.header-new-content > h1").textContent

var artistlocation = document.querySelector("#mantle_skin > div:nth-child(3) > div > div.col-main > div.metadata-and-wiki-row.metadata-and-wiki-row--artist.buffer-standard-ignore-hidden.buffer-standard\\@sm > div.metadata-column > dl > dd:nth-child(4)").textContent

const image = document.querySelector(".header-new-background-image").attributes.content.textContent
console.log(image)

// var pictureurl = document.querySelector("#mantle_skin > div:nth-child(3) > div > div.col-main > div.metadata-and-wiki-row.metadata-and-wiki-row--artist.buffer-standard-ignore-hidden.buffer-standard\\@sm > div.wiki-column > div.wiki-block.visible-lg > div > div").textContent




     

var obj = {

  location: artistlocation,

name: artistname,

image: image,

}




return obj
})
.then(function(obj){


console.log()


        fs.appendFileSync('artistloc.json', JSON.stringify(obj));
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











