const express = require("express");
const app = express();
const router1 = require("./router1.js");
const publicRouter = require("./publicRouter.js");


app.use("/", publicRouter);
app.use("/admin", router1);


app.listen(3000, () => {
    console.log("listening on port " + 3000);
});