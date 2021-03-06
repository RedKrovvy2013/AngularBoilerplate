const express = require('express')
const path = require('path')

var app = express()

app.use(express.static(path.join(__dirname, '../client/public')))

app.get('*', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../client/public/index.html'))
})

const port = process.argv[2] ? process.argv[2] : 8080
const server = app.listen(port, function() {})
