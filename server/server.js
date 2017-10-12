require('./config/config')

const bodyParser = require('body-parser')
const express = require('express')
var mongoose = require('mongoose')
const path = require('path')

const {isClientOnly} = require('./util/util')

var app = express()

app.use(bodyParser.json()) //converts sent JSON to JS obj literal

if(!isClientOnly()) {
    //so little db code, we don't need a separate file for it!
    mongoose.Promise = global.Promise
    mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})
}

app.use(express.static(path.join(__dirname, '../client/public')))

const port = process.env.PORT
const server = app.listen(port, function() {})
