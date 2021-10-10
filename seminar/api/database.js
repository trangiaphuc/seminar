var mysql = require('mysql');
var db = mysql.createConnection({
   host: 'localhost', 
   user: 'root', 
   password: '', 
   database: 'seminar'
}); 
db.connect(function(err) {
   if (err) throw err;
   console.log('Database is connected successfully !');
});
module.exports = db; //lệnh exports để xuất (public) ra, cho bên bên ngoài module có thể dùng được db