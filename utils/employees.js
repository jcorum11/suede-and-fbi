const connection = require("../db/database");

const getEmployees = () => {
    const sql = `SELECT e.*, CONCAT(m.first_name, " ", m.last_name) AS manager_name,
    roles.title, roles.salary, roles.department_id, departments.name AS department
    FROM employees e
    LEFT JOIN roles
    ON e.role_id = roles.id
    LEFT JOIN departments
    ON roles.department_id = departments.id
    INNER JOIN employees m
    ON e.manager_id = m.id`;
    connection.query(sql, (error, result, fields) => {
        if (error) throw error;

        console.table(result);
    });
}

const postEmployees = body => {
    const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
    const params = [body.firstName, body.lastName, body.roleId, body.managerId];
    connection.query(sql, params, function(error, result, fields) {
        if (error) throw error

        console.table(result);
    });
}

const putEmployees = body => {
    const sql = `UPDATE employees SET role_id = ? WHERE id = ?`;
    const params = [body.roleId, body.employeeId];
    connection.query(sql, params, function(error, result, fields) {
        if (error) throw error

        console.log({
            message: "success", 
            data: body, 
            id: this.lastID
        });
    });
}

module.exports = {
    getEmployees, 
    postEmployees, 
    putEmployees
};