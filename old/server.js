var express = require('express');
var app = express();
var path = require('path');


app.get('/', function(req, res) {
 //res.send('Hello Express');
 res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000, function() {
 console.log("Server is running at 3000 port!");
});