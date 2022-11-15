const express = require("express");
const app = express();

app.set("view engin", "ejs");

app.get("/user", (req, res) => {
    // client ki doroner data chacche
    // checks req.accepts() 
    res.format({
        "text/plain": () => {
            res.send("plain text");
        },
        "text/html": () => {
            res.render("user.ejs", {
                // local
                name: "Jubaer"
            });
        },
        "application/json": () => {
            res.json({
                name: "Md. Jubaer Hosain"
            });
        },
        default: () => {
            res.status(406).send("Not Acceptable");
        }
    });
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
})