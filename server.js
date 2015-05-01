var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use(express.static(__dirname + '/public/'));

app.get('/', function(req, res){
  res.sendFile(__dirname + 'public/index.html');
});

http.listen(8080, function(){
  console.log('listening on *:8080');
});
