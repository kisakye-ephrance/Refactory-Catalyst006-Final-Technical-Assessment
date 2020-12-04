const express = require('express');

const router = express.Router();

path = require('path');

const bodyParser = require('body-parser');

//require the model
const Patient  = require('../models/patients');


//registering patient
router.get('/registerpatient',(req,res)=>{
    res.render("registrationform")
});

//save data to the database
router.post('/registerpatient', async(req,res)=>{
    try{
        const patient = new Patient(req.body);
        await patient.save(() => {
            console.log('save success');
            res.redirect('/registerpatient');
        })
    }
    catch(err) {
        res.status(400).send('Sorry! Something went wrong.')
        console.log(err)
    }   
});

//exporting router
module.exports = router;