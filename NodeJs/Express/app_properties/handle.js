const handle = (request, response) => {
    response.send(request.app.locals.title);
    console.log("I am fine");
};

module.exports = handle;