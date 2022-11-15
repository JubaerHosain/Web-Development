const express = require("express");
const app = express();
app.set("view engin", "ejs");

app.get("/user", (req, res) => {
    console.log(res.headersSent);
    res.render("user.ejs", {
        name: "Bangladesh",
    });
    console.log(res.headersSent);

    // res.send("Hi i am local");
});


app.listen(3000, () => {
    console.log("Listening on port 3000");
})