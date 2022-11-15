const express = require("express");
const app = express();

const logger = (req, res, next) => {
    console.log(`${new Date().toLocaleString()} -> ${req.method} -> ${req.originalUrl} -> ${req.ip}`);

    // parameters are considered as error
    // no parameters means there is no error
    // next();

    throw new Error("This is Error");
}

// must be give these 4 parameters
const errorHandlingMiddleware = (error, req, res, next) => {
    console.log(error.message);
    res.status(500).end("Server side error");
};

app.use(logger);
app.use(errorHandlingMiddleware);

app.get("/about", (req, res) => {
    res.send("I am About");
    res.end();
});

app.listen(3000, () => {
    console.log("listening on port " + 3000);
});