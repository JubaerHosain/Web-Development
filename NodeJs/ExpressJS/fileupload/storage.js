const express = require("express");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./uploads/");
    },
    filename: (req, file, callback) => {
        const fileExt = path.extname(file.originalname);
        const fileName = file.originalname
            .replace(fileExt, "")
            .toLowerCase()
            .split(" ")
            .join("-") + "-" + Date.now() + fileExt;

        // for using concat method
        const fileName1 = file.originalname
            .replace(fileExt, "")
            .toLowerCase()
            .split(" ")
            .join("-")
            .concat("-")
            .concat(Date.now())
            .concat(fileExt);
        callback(null, fileName1);
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 10000000000,
    },
    fileFilter: (req, file, callback) => {
        // ei callback tikmoto call na korle limits fileSize or other field not working
        // callback(error, boolean)
        console.log(file);
        if (file.fieldname === "image") {
            if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
                callback(null, true);
            } else {
                callback(new multer.MulterError("Invalid File type"), false);
            }
        } else if (file.fieldname === "doc") {
            callback(null, true);
        } else {
            callback(new multer.MulterError("Wrong file.fieldname"), false);
        }
    },
});

const app = express();

// upload multiple file
app.post("/",
    upload.fields([
        {
            name: "image", maxCount: 1
        },
        {
            name: "doc", maxCount: 1
        }
    ]),
    (req, res) => {
        console.log(req.files);
        res.end("Hello World");
    });

// default error handler
app.use((error, req, res, next) => {
    console.log(error.code);
    if (error instanceof multer.MulterError) {
        next("Multer Error");
    } else {
        next("Normal Error");
    }
});

app.listen(3000, () => {
    console.log("listening on port " + 3000);
});