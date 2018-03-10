
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

var app = express();

const route = require('./route/routes');

mongoose.connect('mongodb://localhost:27017/shoppinglist');



// middle ware

app.use(cors());

app.use(bodyParser.json());

mongoose.connection.on('connected',()=>{
  console.log('MongoDb is connected at @27017');
})

// route navigate all the crud operation
app.use('/api',route);

// err in mongoose

mongoose.connection.on('error',(err)=>{
    console.log(err);
})

var PORT = 3000;

//some kind of response from the server
app.get('/',(req,res)=>{
    res.send('foobar');
});


app.listen(PORT,()=>{

console.log("server has been started at port:" +PORT);
});