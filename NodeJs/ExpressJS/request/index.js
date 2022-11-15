const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
const admin = express();

app.use("/admin", admin);
app.use(express.json());
app.use(cookieParser());

admin.get("/dashboard", (req, res) => {
    // console.log("baseURL: " + req.baseUrl);
    // console.log("originalURL: " + req.originalUrl);
    // console.log("url: " + req.url);
    // console.log("path: " + req.path);
    // console.log(req.hostname);
    // console.log(req.ip);
    // console.log(req.method);
    // console.log(req.protocol);
    // console.log(req.params);
    console.log(req.query);
    res.send("Hello I am Admin");
});

app.get("/user/:id", (req, res) => {
    // console.log("baseURL: " + req.baseUrl);
    // console.log("originalURL: " + req.originalUrl);
    // console.log("url: " + req.url);
    // console.log("path: " + req.path);
    // console.log(req.hostname);
    // console.log(req.ip);
    // console.log(req.method);
    // console.log(req.protocol);
    // console.log(req.params);
    console.log(req.query);
    console.log(req.cookies);
    res.send("Hello I am App");
});

app.post("/user", (req, res) => {
    console.log(req.body);
    console.log(req.cookies);
    console.log(req.secure);
    console.log(req.route);
    res.send("Hello i am post");
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
})