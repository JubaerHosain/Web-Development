const express = require("express");
const multer = require("multer");

const upload = multer({
    dest: "./uploads/"
});


const app = express();

// upload multiple file
app.post("/", upload.none(), (req, res) => {
    console.log(req.body.name, req.body.age);
    res.end("Hello World");
});

app.listen(3000, () => {
    console.log("listening on port " + 3000);
});