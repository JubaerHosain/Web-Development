const handler = (req, res) => {
    console.log(req.app.var);
    console.log(req.route);
    res.send("I am handler");
};

module.exports = handler;