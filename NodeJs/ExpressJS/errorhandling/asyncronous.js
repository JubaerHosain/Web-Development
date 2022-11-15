const express = require("express");
const app = express();

const fs = require("fs");

// sycronous error are handled automatically by express or our custom error handler
// asyncronous error should be handled inside (error, data) errorBack function, not handled by express

// file not exists
app.get("/", (req, res, next) => {
    // fs.readFile("file.js", (error, data) => {
    
    // });

    fs.readFileSync("file.js", (error, data) => {
        // send error to the default error handler
        if(error) {
            next(error);
        } else {
            // do something
        }
    });
});

// custom error handler
// use as last middleware in the code
app.use((error, req, res, next) => {
    console.log(error.message);
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