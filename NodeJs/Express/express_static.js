const express = require("express");

const app = express();

app.use(express.static(__dirname + "/static/"));

// or 
// app.use(express.static(`${__dirname}/static/`));


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
