var express = require('express');
var path = require('path');
var app= express();
// var mongoose = require('mongoose');
// var mongodb = require('mongodb');
// var uriUtil = require('mongodb-uri');

app.set("view engine", 'ejs');
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

//david 1218
//여기서 DB에서 정보를 긁어와서 아래 /호출시 같이 뿌려줘..
var data = {count:1,
            welcome: {welcomeTextMain: 'Welcome', welcomeText:'환영한다.<br> 그림을 엽서로 보내볼래?'},
            popularImages: [
              {desc:"번 이미지 설명이야 p", author:"윤승현p", imagepath: "background.png"},
              {desc:"번 이미지 설명인데 p", author:"황일하p", imagepath: "background.png" },
              {desc:"번 이미지 설명일껄 p", author:"윤지원p", imagepath: "background.png"}
            ],
            newImages: [
              {desc:"번 이미지 설명이야 n", author:"윤승현n", imagepath: "background.png"},
              {desc:"번 이미지 설명인데 n", author:"황일하n", imagepath: "background.png"},
              {desc:"번 이미지 설명일껄 n", author:"윤지원n", imagepath: "background.png"}
            ]
            };

 app.get('/', function (req,res) {
//   res.send('Hello World!');
    res.render('main.ejs',data);
 });

app.listen(80, function () {
  console.log('Server On!');
});
