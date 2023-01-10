const express = require('express');
const itemRouter = require("./itemRouter");
const userRouter = express.Router();


// you can nest routers by attaching them as middleware:
userRouter.use("/:userId/items", itemRouter);

userRouter.route("/").get(function (req, res) {
    res.status(200).send("hello users get!");
}).post(function (req, res) {
    res.status(200).send("hello users post!");
});

userRouter.route("/:userId").get(function (req, res) {
    res.status(200).send("hello user " + req.params.userId);
});

module.exports = userRouter;