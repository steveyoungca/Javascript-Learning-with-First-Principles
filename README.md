# Javascript-Learning-with-First-Principles

https://www.w3schools.com/js/js_whereto.asp

Setup web server and npm

https://www.dotnettricks.com/learn/nodejs/setting-up-vs-code-for-nodejs-development

### Install Express Package
Let's install express package to create a web server using express. Use save option for adding express as production dependencies.

npm install express --save
"dependencies": {
 "express": "^4.14.0"
 }
### Create Http Server using Express
Let's create server.js file for creating a simple express server and write the code for express server as given below:

var express = require('express');
var app = express();

app.get('/', function(req, res) {
 res.send('Hello Express');
});

app.listen(3000, function() {
 console.log("Server is running at 3000 port!");
});
### Running Http Server
Let's run http server by running following command using vs code integrated terminal.


Let's make a request to express server using browser as given below:


