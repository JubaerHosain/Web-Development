const publicRouter = require("express").Router();


const log = (req, res, next) => {
    console.log(req.baseUrl);
    console.log("Public router loggin....");
    next();
}

publicRouter.param("user", (req, res, next, id) => {
    req.user = `Param ${id}`;
    console.log("param: ", id);
    next();
});

const paramFun = (value) => {
    return function (req, res, next, id) {
        if (value === id) {
            req.user1 = `Param ${id}`;
        } else {
            req.user1 = `Param ${id * 1000}`;
        }
        console.log("User1: ", req.user1);
        next();
    };
}

publicRouter.param("user", paramFun(1));

publicRouter.all("*", log);

publicRouter.get("/", (req, res) => {
    res.end("publicRouter");
});

publicRouter.get("/:user", (req, res) => {
    res.end(req.user);
});

publicRouter.get("/login", (req, res) => {
    res.end("login");
});

module.exports = publicRouter;