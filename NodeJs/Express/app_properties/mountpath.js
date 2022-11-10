const express = require("express");

const app = express();
const admin = express();

// admin.on('mount', function (parent) {
//     console.log('Admin Mounted')
//     console.log(parent) // refers to the parent app
// })

app.use("/admin", admin);

app.get("/", (request, response) => {
    console.log(app.mountpath);
    response.send("Hi am app");
});

admin.get("/", (request, response) => {
    console.log(admin.mountpath);
    response.send("Hi am admin");
});


app.listen(3000, () => {
    console.log(`Listening on port number: ${3000}`);
});
