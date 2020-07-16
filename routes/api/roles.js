const express = require("express");
const router = express.Router();
const connection = require("../../db/database");

router.get("/all-roles", (req, res) => {
    connection.promise().query(`SELECT roles.*, departments.name AS department_name
     FROM roles
     LEFT JOIN departments
     ON roles.department_id = departments.id`)
        .then(([rows, fields]) => {
            res.json({
                message: "success",
                data: rows
            });
        })
        .catch(console.log)
});

router.post("/role", ({body}, res) => {
    const sql = `INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)`;
    const params = [body.title, body.salary, body.department_id]
    connection.query(sql, params, function(error, results, fields) {
        if (error) {
            res.json({error});
            return;
        }

        res.json({
            message: "success", 
            data: body, 
            id: this.lastID
        });
    });
});

module.exports = router;