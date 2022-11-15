const express = require("express");
const handler = require("./handler.js");

const app = express();
app.var = "var";


app.get("/user", handler);


app.listen(3000, () => {
    console.log("Listening on port 3000");
})