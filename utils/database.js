const mysql=require('mysql2');

const pool=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"Soumya*123",
    database:"shop"
})

module.exports=pool.promise();

