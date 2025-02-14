// STEP-1: IMPORT MySQL2 PACKAGE
// import mysql2 -> allow node.js application to interact with MySQL database
const mysql = require('mysql2'); // an npm package that provides an asynchronous API for working with MySQL databases

// Database Connection URL 
// createConnection is a method from the mysql2 package that establishes a new connection to the database
const dbconnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "assignment2",
});

// STEP-2: ESTABLISH CONNECTION WITH MySQL
// connect is a method that attempts to establish a connection to the database with the parameters provided in createConnection.
// err is callback function Parameter. ARROW OPERATOR.
dbconnection.connect((err)=>{
    if (err) throw err; // if error-> stopping execution and showing the error.
    console.log('Connected to MySQL database'); // If no error occurs, it prints "Connected to MySQL database" to the console
});

// STEP-3: EXPORT MODULE dbconnection because we need it in other JS file 
module.exports = dbconnection; // makes the dbconnection object available to other JavaScript files in the Node.js application

// to run in terminal 
// npm install mysql2
// verify installation -> npm list mysql2 
// run -> node 01_dbconnection.js