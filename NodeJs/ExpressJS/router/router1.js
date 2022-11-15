const router1 = require("express").Router();

router1.get("/", (req, res) => {
    res.end("router1");
});

router1.get("/login", (req, res) => {
    res.end("login");
});

module.exports = router1;