var mysql=require('mysql');
 var connection=mysql.createPool({

  host     : 'localhost',
  user     : 'Basavaraj',
  password : 'Basu@480478143',
  database : 'DR_Planning'

});
 module.exports=connection;
