const express = require("express");
const app = express();
app.set("view engin", "ejs");

app.get("/user", (req, res) => {
    // ends res with data
    // res.send("Hi i am local");

    // res end without data
    // res.end();

    // res.json({
    //     name: "Bangladesh",
    //     age: 50,
    // });

    // res.status(400);

    // // must end whit blank parameter
    // res.end();

    res.sendStatus(400);
});


app.listen(3000, () => {
    console.log("Listening on port 3000");
})