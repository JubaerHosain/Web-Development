const express = require("express");
const handle = require("./handle");

const app = express();


// local variable of app
app.locals.title = "Local Title";

app.get("/handle", handle);


app.listen(3000, () => {
    console.log(`Listening on port number: ${3000}`);
});
