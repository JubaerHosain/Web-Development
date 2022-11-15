const express = require("express");
const multer = require("multer");

const upload = multer({
    dest: "./uploads/",
    limits: {
        fileSize: 1000000000,
    },
    fileFilter: (req, file, callback) => {
        // ei callback tikmoto call na korle limits fileSize or other field not working
        // callback(error, boolean)
        console.log(file);
        if(file.fieldname === "image") {
            if(file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
                callback(null, true);
            } else {
                callback(new multer.MulterError("Invalid File type"), false);
            }
        } else if(file.fieldname === "doc") {
            callback(null, true);
        } else {
            callback(new multer.MulterError("Wrong file.fieldname"), false);
        }
    },
});

const app = express();

// app.post("/", upload.single("avatar"), (req, res) => {
//     res.end("Hello World");
// });

// upload multiple file
app.post("/", upload.fields([
    { name: "image", maxCount: 5 },
    { name: "doc", maxCount: 5 }]),
    (req, res) => {
        res.end("Hello World");
    });

// default error handler
app.use((error, req, res, next) => {
    console.log(error.code);
    if(error instanceof multer.MulterError) {
        next("Multer Error");
    } else {
        next("Normal Error");
    }
});

app.listen(3000, () => {
    console.log("listening on port " + 3000);
});