const express = require("express");
const app = express();

const logger = (req, res, next) => {
    console.log(`${new Date().toLocaleString()} -> ${req.method} -> ${req.originalUrl} -> ${req.ip}`);

    // parameters are considered as error
    // no parameters means there is no error
    next();
}

// app level middleware
app.use(logger);

app.get("/about", (req, res) => {
    res.send("I am App");
    res.end();
});

app.listen(3000, () => {
    console.log("listening on port " + 3000);
});