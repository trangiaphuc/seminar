var express = require('express');
var router = express.Router();
var db=require('../database');//chèn model database vào đế kết nối db
// var User = require('../models/user');

router.get('/', (req, res) => {
    let query = `select * from bmi`;
    db.query(query, (err, result) => {
        if (err) {throw err;}
        res.send({bmiRecords : result});
    });
});


router.get("/bmirecords", (req, res) => {
    let weightMin = parseInt(req.query.weightMin, 10);
    let weightMax = parseInt(req.query.weightMax, 10);

    let query = ``;

    if(isNaN(weightMax) && !isNaN(weightMin))
        {query = `select * from bmi where weight > ${weightMin}`;}
    else if(isNaN(weightMin) && !isNaN(weightMax))
        {query = `select * from bmi where weight < ${weightMax}`;}
    else if(!isNaN(weightMax) && !isNaN(weightMax)) 
        {query = `select * from bmi where weight between ${weightMin} and ${weightMax}`;}
    else query = `select * from bmi order by recordId desc`;
    db.query(query, (err, result) => {
        if(err)  throw(err);

        if(result.length < 0) {res.send({hasFilter: false});}
        else {res.send({hasFilter: true, bmiRecords: result});} 

    })
});

router.post('/addbmi', (req, res) =>{
    let height = req.body.height;
    let weight = req.body.weight;

    let bmiRecord = {height: height, weight: weight};
    let query = 'insert bmi set ?';
    db.query(query, bmiRecord, (err, result) => {
        if (err) {throw err;}
        else{res.send({added: true});}
    })
})

module.exports = router;