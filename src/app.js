'use strict';

var express = require('express');
var posts = require('./mock/posts.json');

var app = express();

app.use('/static', express.static(__dirname + '/public'));

app.set('view engine', 'pug');
app.set('views', __dirname + '/templates');


app.get('/', function(req, res){
  console.log("Home Route");
  res.render('index');
});

app.get('/blog/:title?', function(req, res){
  console.log("Blog Route");
  var title = req.params.title;
  if (title === undefined){
    res.status(503);
    res.send("This Page is under construction");
  } else {
    var post = posts[title] || {};
    res.render('post', { post: post });
  }
});

app.listen(3002, function(){
  console.log("The frontend server is running on port 3002!");
}); //Listens on Port 3000
