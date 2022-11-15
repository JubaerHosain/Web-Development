const express = require("express");

const app = express();

app.get("/", (request, response) => {
    response.send("Root with get");
});

app.post('/', (request, response) => {
    response.send("Root with post");
});

app.listen(3000, () => {
    console.log(`Listening on port number: ${3000}`);
});
