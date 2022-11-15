const express = require("express");

const app = express();
const admin = express();
const subadmin = express();

app.use("/admin", admin);
app.use("/admin/subadmin", subadmin);

app.get("/", (request, response) => {
    console.log(app.mountpath);
    response.send("Hi am app");
});

admin.get("/", (request, response) => {
    console.log(admin.mountpath);
    response.send("Hi am admin");
});

subadmin.get("/", (req, res) => {
    console.log(subadmin.mountpath);
    console.log(subadmin.path());
    res.send("Hi i am subamdin");
});

app.listen(3000, () => {
    console.log(`Listening on port number: ${3000}`);
});
