var express = require('express');

var app = express.createServer(express.logger());

var fs=require('fs');
var buf=require('buf')
//var txt=fs.readFileSync('index.html',encoding='utf8');
var txt=fs.readFileSync('index.html');
var txt2=buf.toString('utf8');

app.get('/', function(request, response) {
  response.send(txt2);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
