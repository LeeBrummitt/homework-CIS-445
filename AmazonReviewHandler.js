var express = require('express');
var app = express();
var port = 3030;
var request = require('request');
var url = require('url');


app.get('/', function(request, response) {  response.sendfile(__dirname + "/index.html");});  //index.html is a seperate file

app.listen(8080);

app.get('/server/review/:reviewid', function(req, response) {
    
    var reviewid = req.params.reviewid;
    
    options = {
        protocol: "https:",    
        host: 'localhost',    
        pathname: '/reviews.json',
        query: { review_id: reviewid}  
    }
      
    var amazonUrl = url.format(options);
      
    response.sendfile(__dirname + "/test1.json");
      
});