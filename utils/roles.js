const connection = require("../db/database");
const cTable = require("console.table");

const getRoles = () => {
    connection.promise().query(`SELECT roles.*, departments.name AS department_name
     FROM roles
     LEFT JOIN departments
     ON roles.department_id = departments.id`)
        .then(([rows, fields]) => {
            console.table(rows)
        })
        .catch(console.log)
}

const postRoles = body => {
    const sql = `INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)`;
    const params = [body.title, body.salary, body.departmentId]
    connection.query(sql, params, function (error, results, fields) {
        if (error) throw error

        return {
            message: "success",
            data: body,
            id: this.lastID
        };
    });
}

module.exports = {
    getRoles,
    postRoles
}