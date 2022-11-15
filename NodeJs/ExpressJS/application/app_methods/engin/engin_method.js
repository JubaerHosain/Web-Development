const express = require("express");

var app = express();

app.set("view engin", "ejs");

// automatically search in views folder

app.route("/events")
    .get((req, res) => {
        console.log("GET");
        res.render("html.ejs");
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
