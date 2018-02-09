const express = require("express");
const app = express();
const http = require("http")
const multer = require("multer");
const path = require("path");
 app.use(express.static("public"));

// app.use(express.static(path.join(__dirname, "public")));
//  app.use(express.static(path.join(__dirname, 'public')));
var storage = multer.diskStorage({
    destination:'./red',
    filename: function (req, file, cb) {
    cb(null, file.originalname.replace(path.extname(file.originalname), "") + '-' + Date.now() + path.extname(file.originalname))
      }
    })
console.log("folder is create");
var upload = multer({ storage: storage })

app.post('/adminload', upload.single('file'), function(req,res,next){
    console.log('Uploade Successful ', req.file, req.body);
});
var server = app.listen(1234,function(){
    console.log("server start now...")
})



