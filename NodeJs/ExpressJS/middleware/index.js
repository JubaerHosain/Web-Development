/*
    Type of middleware:
    1. Application level
    2. Router level
    3. Error-handling middleware
    4. Built-in middleware
    5. Third party
*/

const express = require("express");
const app = express();

// middleware 1
const m1 = (req, res, next) => {
    console.log("I am logging....1");
    next();
}

// middleware 2
const m2 = (req, res, next) => {
    console.log("I am logging....2");
    next();
}
app.use(m1);
app.use(m2);

app.get("/about", (req, res) => {
    res.send("I am App");
});

app.listen(3000, () => {
    console.log("listening on port " + 3000);
});