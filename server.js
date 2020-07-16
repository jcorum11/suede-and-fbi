const express = require("express");
const apiRoutes = require("./routes/api");

const PORT = process.env.PORT || 3001;
const app = express();

// middleware
app.use(express.urlencoded({
    extended: false
}));

app.use(express.json());

//api routes
app.use("/api", apiRoutes);

// Default response
app.use((req, res) => {
    res.status(404).end();
});

// run server (used event listener to make sure server goes live after it connects to the database)
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});