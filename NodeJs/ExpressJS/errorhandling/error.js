const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("99");
});

app.use((req, res, next) => {
    // any parameter in next means error
    next("path not found");
});

// custom error handler
// use as last middleware in the code
app.use((error, req, res, next) => {
    console.log(error);
    res.status(500).send("Server side error");
});

/*
    invisible error handling middleware at the end
    (error, req, res, next) => {

    }
*/

app.listen(3000, () => {
    console.log("listening on port " + 3000);
});