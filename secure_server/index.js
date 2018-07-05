const express = require('express')
var path = require('path')
var https = require('https')
var fs = require('fs')
const app = express()

//define the key and cert
var certOptions = {
    key: fs.readFileSync(path.resolve('key.pem')),
    cert: fs.readFileSync(path.resolve('cert.pem'))
}

//point at the button sample directory
app.use(express.static(path.join(__dirname, '../secure_spacebrew_button')));

//start the server
var server = https.createServer(certOptions, app).listen(9001)