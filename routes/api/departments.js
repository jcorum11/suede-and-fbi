const express = require("express");
const router = express.Router();
const connection = require("../../db/database");

router.get("/all-departments", (req, res) => {
    connection.promise().query(`SELECT * FROM departments`)
        .then(([rows, fields]) => {
            res.json({
                message: "success",
                data: rows
            });
        })
        .catch(console.log)
});

router.post("/department", ({
    body
}, res) => {
    const sql = `INSERT INTO departments (name) 
        VALUES (?)`;
    const params = body.name;
    connection.query(sql, params, function (error, results, fields) {
        if (error) throw error;
        res.json({
            message: "success",
            data: body,
            id: this.lastID
        });
    });
});

module.exports = router;