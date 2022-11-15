const express = require("express");
const app = express();

app.get("/", (req, res) => {
    if (req.accepts("html")) {
        res.render("filename");
    } else if (req.accepts("json")) {
        res.send("json");
    }
    res.end("ended");
});

app.get("/user/:id", (req, res) => {
    console.log(req.accepts("html"));
    console.log(req.get("Content-Type"));
    console.log(req.get("Host"));

    console.log("params: ", req.params);
    console.log("query: ", req.query);

    res.send("Hi i am methods");
});


app.listen(3000, () => {
    console.log("Listening on port 3000");
})