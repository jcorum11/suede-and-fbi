const connection = require("../db/database");

const getDepartments = () => {
    connection.execute(`SELECT * FROM departments`, function(error, rows, fields) {
        if (error) throw error;
        console.table(rows);
    })
};

const postDepartments = body => {
    const sql = `INSERT INTO departments (name) 
        VALUES (?)`;
    const params = body.name;
    connection.query(sql, params, function (error, results, fields) {
        if (error) throw error;
        console.log({
            message: "success",
            data: body.name
        });
    });
}

module.exports = {
    getDepartments, 
    postDepartments
};