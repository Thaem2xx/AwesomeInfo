const express = require('express');
var app = express();
const port = 8080;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
let apiRoutes = require("./api-routes/test")

// Use Api routes in the App
app.use('/api', apiRoutes)

//database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/restAPI',{ useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('connection successful');
});

app.get('/', (req, res) => res.send('Hello World!'));
