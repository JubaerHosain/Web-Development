const express = require("express");
const app = express();

app.set("view engin", "ejs");

app.get("/redirect", (req, res) => {
    res.send("redirected text");
    res.end();
});

app.get("/user", (req, res) => {
    // get, set header
    res.set("Custom", "Jubaer");
    console.log(res.get("Custom"));

    res.end();
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
})