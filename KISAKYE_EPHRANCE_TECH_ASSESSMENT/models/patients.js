const mongoose = require('mongoose');


//create a schema
const patientSchema= new mongoose.Schema({
    surname: {
        type:String,
        unique:true,
        required: 'Please Enter first name'
    },

    givenname:{
        type:String,
        unique:true,
        required:'please enter user name'
    },

    

    birthdate:{
        type:String,
        required:'enter the date of birth'
    },

    residenceplace:{
        type:String,
        required:'enter residence type'
    },

    job: {
        type:String
    },

    country: {
        type:String
    },

    gender: String,

    category: [{type: String}]

    

  });
  
    
    module.exports = mongoose.model('Patient', patientSchema);