const express = require("express");

const app = express();

app.enable("case sensitive routing");
app.use(express.json())


// for all method (GET, POST etc.)
app.all("/about/:id", (request, response) => {
    console.log(request.user);
    console.log(request.body);
    response.send("Hi am all");
});

// middleware = request jawar age ei kaj ta kore then jabe
app.param("id", (request, response, next, id) => {
    request.user = {
        user_id: id,
        user_name: "Md. Jubaer Hosain"
    };
    next();
});

app.listen(3000, () => {
    console.log(`Listening on port number: ${3000}`);
});
