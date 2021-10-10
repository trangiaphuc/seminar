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

router.post('/bmirecords', (req, res) => {
    let userId = req.body.userId;
    let query = `select * from bmi where userId = '${userId}'`;
    db.query(query, (err, result) => {
        if (err) {throw err;}
        if(result.length < 0) {res.send({message: 'Invalid User'});}
        else{
            res.send({bmiRecords: result});
        }
    });
});

router.post('/addbmi', (req, res) =>{
    let userId = req.body.userId;
    let height = req.body.height;
    let weight = req.body.weight;

    let bmiRecord = {userId: userId, height: height, weight: weight};
    let query = 'insert bmi set ?';
    db.query(query, bmiRecord, (err, result) => {
        if (err) {throw err;}
        else{res.send({message: "success"});}
    })
})

module.exports = router;