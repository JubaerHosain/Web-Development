const express = require("express");
const app = express();
const router = express.Router();

router.get("/", (req, res) => {
    res.end("router");
});

router.route("/user")
    .all((req, res, next) => {
        console.log(req.originalUrl + " logging in.....");
        next();
    })
    .get((req, res) => {
        res.end("get");
    })
    .post((req, res) => {
        res.end("post");
    })
    .put((req, res) => {
        res.end("put");
    })
    .delete((req, res) => {
        res.end("delete");
    }).all((req, res) => {
        res.sendStatus(403);
    });

app.get("/", (req, res) => {
    res.end("root");
});

app.use("/router", router);


app.listen(3000, () => {
    console.log("listening on port " + 3000);
});