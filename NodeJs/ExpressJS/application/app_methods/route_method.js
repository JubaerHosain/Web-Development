const express = require("express");

var app = express();

// app.route("/events")
//     .all(function (req, res, next) {
//         // runs for all HTTP verbs first
//         // think of it as route specific middleware!
//         next();
//     })
//     .get(function (req, res, next) {
//         console.log("GET");
//         res.send("Hi I am GET");
//     })
//     .post(function (req, res, next) {
//         console.log("POST");
//         res.send("Hi I am POST");
//         // maybe add a new event...
//     })
//     .put(function (req, res, next) {
//         console.log("PUT");
//         res.send("Hi I am PUT");
//         // maybe add a new event...
//     });

app.route("/events")
    .get((req, res) => {
        console.log("GET");
        res.send("Hi I am GET");
    })
    .post((req, res) => {
        console.log("POST");
        res.send("Hi I am POST");
    })
    .put((req, res) => {
        console.log("PUT");
        res.send("Hi I am PUT");
    });

app.listen(3000, () => {
    console.log(`Listening on port number: ${3000}`);
});
