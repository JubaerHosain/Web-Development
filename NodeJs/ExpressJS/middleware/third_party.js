const express = require("express");
const app = express();
const router1 = express.Router();
const cookieParser = require("cookie-parser");

// build-in middleware
app.use(express.json());

// third party middleware
app.use(cookieParser());

// x.use should be applied before declaring x.get, x.put...etc
// app app uses router1
app.use("/admin", router1);

const logger = (req, res, next) => {
    console.log(`${new Date().toLocaleString()} -> ${req.method} -> ${req.originalUrl} -> ${req.ip}`);

    // parameters are considered as error
    // no parameters means there is no error
    next();
}

// x.use should be applied before declaring x.get, x.put...etc

// router level middlware
router1.use(logger);

router1.get("/dashboard", (req, res) => {
    res.send("I am Admin Dashboard");
    res.end();
});



app.get("/about", (req, res) => {
    res.send("I am About");
    res.end();
});

app.listen(3000, () => {
    console.log("listening on port " + 3000);
});