const express = require("express");
var bodyParser = require('body-parser');

var app = express(); 
app.use(express.static("public"));
var multer  = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
  }
})
 
var upload = multer({ storage: storage })
 
/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
 
app.post('/', upload.single('file-to-upload'),function(req, res) {
  res.send("File upload sucessfully.");
});

app.listen("1234",function(){
    console.log("server started....")
})