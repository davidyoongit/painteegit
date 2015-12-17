var express = require('express');
var path = require('path');
var app= express();
// var mongoose = require('mongoose');
// var mongodb = require('mongodb');
// var uriUtil = require('mongodb-uri');

app.use(express.static(path.join(__dirname + '/public')));

// var mongoUri = "mongodb://david:davidyoon@ds043714.mongolab.com:43714/paintee";
// var mongooseUri = uriUtil.formatMongoose(mongoUri);
// var options = { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000, auto_reconnect: true } },
//                 replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } };
// mongoose.connect(mongooseUri,options);
//
// var conn = mongoose.connection;
// conn.once("open", function () {
//   console.log("DB connected!");
// });
// conn.once("error", function(err){
//   console.log("online DB error:",err);
// });

 app.get('/', function (req,res) {
//   res.send('Hello World!');
 });

app.listen(3000, function () {
  console.log('Server On!');
});
