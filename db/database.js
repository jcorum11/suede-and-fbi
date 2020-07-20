const mysql = require("mysql2");

const connection = mysql.createConnection({
    user: "root",
    database: "employees", 
    password: "password"
});

connection.connect(function (err) {
    if (err) {
        console.error(err.stack);
    }

    console.log('database connected as id ' + connection.threadId);
});

// connection.query('SELECT * FROM employees', (error, results, fields) => {
//     if (error) throw error;
//     console.log(results[0].employees);
// });

module.exports = connection;
