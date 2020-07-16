const express = require("express");
const router = express.Router();
const connection = require("../../db/database");

router.get("/all-employees", (req, res) => {
    connection.promise().query(`SELECT e.*, CONCAT(m.first_name, " ", m.last_name) AS manager_name,
    roles.title, roles.salary, roles.department_id, departments.name AS department
    FROM employees e
    LEFT JOIN roles
    ON e.role_id = roles.id
    LEFT JOIN departments
    ON roles.department_id = departments.id
    INNER JOIN employees m
    ON e.manager_id = m.id`)
        .then(([rows, fields]) => {
            res.json({
                message: "success",
                data: rows
            });
        })
});

router.post("/employee", ({body}, res) => {
    const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
    const params = [body.first_name, body.last_name, body.role_id, body.manager_id];
    connection.query(sql, params, function(error, result, fields) {
        if (error) {
            res.status(400).json({error});
            return;
        }

        res.json({
            message: "success", 
            data: body, 
            id: this.lastID
        });
    });
});

router.put("/employee/:id", (req, res) => {
    const sql = `UPDATE employees SET role_id = ? WHERE id = ?`;
    const params = [req.body.role_id, req.params.id];
    connection.query(sql, params, function(error, result, fields) {
        if (error) {
            res.status(400).json({error: error.message});
            return;
        }

        res.json({
            message: "success", 
            data: req.body, 
            id: this.lastID
        });
    });
});

module.exports = router;