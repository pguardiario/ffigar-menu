const fs = require('fs')
const csvWriter = require('csv-write-stream')
const csv = require('csvtojson')

const writer = csvWriter()
let outputFile

const save = (item, fn = "output.csv") => {
  if(!outputFile){
    outputFile = fn
    writer.pipe(fs.createWriteStream(fn))
  }
  writer.write(item)
}

const _visited = new Set()
const visited = (str) => {
  if(_visited.has(str)) return true
  _visited.add(str)
  return false
}

const load = f => csv().fromFile(f)


module.exports = {save, visited, load}