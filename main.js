import Handlebars from 'handlebars';
import { readFileSync, readdirSync, writeFileSync } from 'fs';
//let version2 = readFileSync('./data/version2.json').toString()

let jsondata = ""

readdirSync('./data', function(err, files){
  if (err) {return console.log('Unable to scan directory: ' + err);}
  
  files.forEach(function (file) {
    jsondata.concat(JSON.stringify({
      "1.20" : JSON.parse(readFileSync(`./data/${file}.json`).toString()),
    }));
  })
})

let source = readFileSync('./index.hbs')
var template = Handlebars.compile(`${source}`)
var result = template({data: JSON.stringify({jsondata})})

console.log(result)
writeFileSync('./index.html', result)
