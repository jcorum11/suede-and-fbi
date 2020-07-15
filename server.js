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

app.get("/api/departments", (req, res) => {
    connection.promise().query(`SELECT * FROM departments`)
        .then(([rows, fields]) => {
            res.json({
                message: "success",
                data: rows
            })
        })
        .catch(console.log)
});

// Default response
app.use((req, res) => {
    res.status(404).end();
});

// run server (used event listener to make sure server goes live after it connects to the database)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});