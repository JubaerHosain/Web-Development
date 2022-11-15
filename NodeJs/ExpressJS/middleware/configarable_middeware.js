const express = require("express");
const app = express();

const loggerWrapper = (options) => {
    return function (req, res, next) {
        if (options.log) {
            console.log(`${new Date().toLocaleString()} -> ${req.method} -> ${req.originalUrl} -> ${req.ip}`);
        } else {
            throw new Error("This is Error");
        }
        next();
    }
}

// must be give these 4 parameters
const errorHandlingMiddleware = (error, req, res, next) => {
    console.log(error.message);
    res.status(500).end("Server side error");
};


// configarable middleware
// we can pass data in loggerWrapper class
app.use(loggerWrapper({log: true}));


app.use(errorHandlingMiddleware);

app.get("/about", (req, res) => {
    res.send("I am About");
    res.end();
});

app.listen(3000, () => {
    console.log("listening on port " + 3000);
});