const express = require("express");

const app = express();

// use this function 
// app.use(express.json());
// app.use(express.raw());
// app.use(express.text());
// app.use(express.urlencoded());


app.get("/", (request, response) => {
    response.send("Root with get");
});

app.post('/', (request, response) => {
    console.log(request.body);
    response.send("Root with post");
});

app.listen(3000, () => {
    console.log(`Listening on port number: ${3000}`);
});
