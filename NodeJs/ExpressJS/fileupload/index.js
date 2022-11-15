const express = require("express");
const multer = require("multer");

// multer upload object
// naming convention is important
// used as middleware
const upload = multer({
    dest: "./uploads/"
});


const app = express();

// upload single file
// app.post("/", upload.single("avatar"), (req, res) => {
//     res.end("Hello World");
// });

// upload multiple file
app.post("/", upload.fields([
    { name: "avatar", maxCount: 5 },
    { name: "galary", maxCount: 5 }]),
    (req, res) => {
        res.end("Hello World");
    });

app.listen(3000, () => {
    console.log("listening on port " + 3000);
});