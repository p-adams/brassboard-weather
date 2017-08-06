const express = require('express')
const bodyParser= require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient


app.use(bodyParser.urlencoded({extended: true}))

let db
MongoClient.connect('mongodb://paadams:tareem@ds023418.mlab.com:23418/brassboard-weather-users', (err, database) => {
   if (err) return console.log(err)
    db = database
    app.listen(3000, () => {
    console.log('listening on 3000')
  })
})


app.get('/', (req, res) => {
  res.send('Hello World')
})
