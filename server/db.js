const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost', 
  user: 'root',      
  password: '', // Default password is empty
  database: 'yuke_pilates'
});

// open the MySQL connection
connection.connect(error => {
  if (error) {
      console.error('Error connecting to the database: ', error);
      return;
  };
  console.log("Successfully connected to the database.");
});

module.exports = connection;
