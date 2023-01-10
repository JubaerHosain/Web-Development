const express = require("express");
const app = express();

const userRouter = require("./userRouter");

// why use? other than get/post...
app.use("/user", userRouter);

app.listen(3000, (err) => {
    console.log("listening on http://localhost on port " + 3000);
});
