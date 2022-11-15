const express = require("express");
const app = express();

/*
    invisible error handling middleware
    (error, req, res, next) => {

    }
*/

app.get("/", (req, res, next) => {
    for (let i = 1; i <= 9; i++) {
        if (i === 7) {
            next("there was an error");
        } else {
            res.write(i.toString());
        }
    }
    res.end();
});

app.use((req, res, next) => {
    // any parameter in next means error
    next("path not found");
});

// custom error handler
// use as last middleware in the code
app.use((error, req, res, next) => {
    console.log(res.headersSent);
    if(res.headersSent) {
        next(error);
    } else {
        console.log(error);
        res.status(500).send("Server side error");
    }
});

/* 
    invisible error middleware at the end
    (error, req, res, next) => {

    }
*/


app.listen(3000, () => {
    console.log("listening on port " + 3000);
});