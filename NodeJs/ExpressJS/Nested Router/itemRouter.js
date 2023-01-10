const express = require("express");

// you need to set mergeParams: true on the router,
// if you want to access params from the parent router
var itemRouter = express.Router({ mergeParams: true });

itemRouter.route("/").get(function (req, res) {
    res.status(200).send("hello items from user " + req.params.userId);
});

itemRouter.route("/:itemId").get(function (req, res) {
    res.status(200).send("hello item " + req.params.itemId + " from user " + req.params.userId);
});

module.exports = itemRouter;
