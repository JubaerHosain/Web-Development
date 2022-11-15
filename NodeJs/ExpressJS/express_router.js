const express = require("express");

const app = express();

// by default app and routers are case insensitive 
const router1 = express.Router();
const router2 = express.Router();

app.use(router1);

router1.get("/", (request, response) => {
    response.send("Root with get");
});

app.use(router2);

router2.post('/', (request, response) => {
    console.log(request.body);
    response.send("Root with post");
});

app.get("/index.js", (request, response) => {
    response.send("Index");
    console.log("index sended");
});

app.listen(3000, () => {
    console.log(`Listening on port number: ${3000}`);
});
