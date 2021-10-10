var express = require('express');
var router = express.Router();
var db=require('../database');//chèn model database vào đế kết nối db
// var User = require('../models/user');


/* GET users listing. */
router.get('/listusers', function(req, res, next) {
  let query = `select * from users`;
  db.query(query, (err, d) => {
      if (err) {throw err;}
      console.log(d);
      res.header("Access-Control-Allow-Origin", "*");
      res.send({users: d});
  });
});

router.post('/signup', (req, res) => {
  let gmail = req.body.gmail;
  let password = req.body.password;

  const bcrypt = require("bcrypt");        
  var salt = bcrypt.genSaltSync(10);
  var pass_mahoa = bcrypt.hashSync(password, salt);

  let user_info ={gmail: gmail, password: pass_mahoa};  
  let sql = 'INSERT INTO `users` SET ?';
  db.query(sql, user_info, (err, result)=>{
    if (err) {throw err;}
    res.send({message: 'success'})
  });
});

router.post('/signin', async(req, res, next) => {
  let gmail = req.body.gmail;
  let password = req.body.password;
  let query = `select * from users where gmail = '${gmail}'`;
  db.query(query, (err, row) => {
    if (err) {throw err;}

    if(row.length < 0) {res.send({message: 'user not found'});}

    let user = row[0];
    let pass_fromdb = user.password;        
        const bcrypt = require("bcrypt");        
        var kq = bcrypt.compareSync(password, pass_fromdb);
        if (kq){ 
            res.send({message: 'success'});              
        }   
        else {
            res.send({message: 'error'}); 
        }
  });
});

router.post('/detail', (req, res)=>{
  let gmail = req.body.gmail;
  let query = `select * from users where gmail = '${gmail}'`;
  db.query(query, (err,result)=>{
    if(err) {throw err};
    if(result.length < 0){res.send({message: "user not found!"});}

    let user = result[0];
    res.send({user: user});
  })
})

router.post('/edit', (req, res) => {
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let birthday = req.body.birthday;

  let user_info = {firstName: firstName, lastName: lastName, birthday: birthday};
  let query = 'update users set ?';
  db.query(query, user_info, (err, result) => {
    if (err) {throw err;}
    res.send({message: 'success'});
  })


})
module.exports = router;
