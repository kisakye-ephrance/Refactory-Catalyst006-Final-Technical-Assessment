const express = require('express');
const bodyParser = require('body-parser') ;
const path = require('path');

//require mongoose
const mongoose = require('mongoose');


//require routes
const registrationroutes = require('./routes/registrationroutes');

// //require models
// const Patient = require('./models/patients');

//require env
require('dotenv').config();

//appexpress
const app = express();

//db connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify:false
  });
  

  //logging to show the connection is successful
  mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (err) => {
   console.log(`Connection error: ${err.message}`);
  });

//Configs
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//connecting to static files;
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: true}));

 app.use('/', registrationroutes);

//created a server and have it listen on port 3000
app.listen(5000, ()=> console.log('listening on port 5000'))