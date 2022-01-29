var exp = require('express');
var app = exp();
var path=require("path");
var fs=require("fs");

app.use(express.static(path.join(__dirname,'public')));

app.listen(8081, function () {
	console.log("Server Started on 8081");
});

app.get('/', function (req, res) {
   res.sendFile(path.join(___dirname + '/index.html'));
});

app.all('*', function (req, res) {
	res.send('Sorry, Invalid URL');
});