const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.DB_PASSWORD,
  database: process.DB_DATABASE
});
connection.connect((err) => {
if (err){console.log ("errore nella connesione DB")}

else{
  console.log('Connesso al MySQL!');
}
});
module.exports = connection;