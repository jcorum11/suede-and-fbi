const express = require("express");
const connection = require("./db/database");

const PORT = process.env.PORT || 3001;
const app = express();

// middleware
app.use(express.urlencoded({
    extended: false
}));

app.use(express.json());

//api routes

app.get("/api/all-departments", (req, res) => {
    connection.promise().query(`SELECT * FROM departments`)
        .then(([rows, fields]) => {
            res.json({
                message: "success",
                data: rows
            });
        })
        .catch(console.log)
});

app.get("/api/all-roles", (req, res) => {
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

app.get("/api/all-employees", (req, res) => {
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

// Default response
app.use((req, res) => {
    res.status(404).end();
});

// run server (used event listener to make sure server goes live after it connects to the database)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});