const express = require("express");
const app = express();

app.set("view engin", "ejs");

app.get("/user", (req, res) => {
    res.cookie("name", "Md. Jubaer Hosain", {
        option: "options"
    });

    // send to the client, client have to redirect
    res.location("/redirect_link");

    res.end();
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
})