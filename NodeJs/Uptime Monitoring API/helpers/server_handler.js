/**
 * Title: Server Request Response Handler
 * Description: Server Request Response Handler
 * Author: ABC
 * Date: 28/9/22
 */

// Dependencies
const url = require("url");
const { routes } = require("../handlers/route_handlers/routes");
const { StringDecoder } = require("string_decoder");

// Object -> Module Scaffolding
const server_handler = {};

// Hanle Request Response
server_handler.handleRequestResponse = (request, response) => {
    // request handling
    const parsedURL = url.parse(request.url, true);
    const trimmedPath = parsedURL.pathname.replace(/^\/+|\/+$/g, "");
    const requestMethod = request.method.toLowerCase();
    const queryObject = parsedURL.query;
    const headerObject = request.headers;

    // make a object of all request properties
    const requestProperties = {
        parsedURL,
        trimmedPath,
        requestMethod,
        queryObject,
        headerObject,
    };

    // rout handling
    const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : routes.not_found;
    chosenHandler(requestProperties, (statusCode, payload) => {
        statusCode = typeof statusCode === "number" ? statusCode : 500;
        payload = typeof payload === "object" ? payload : {};

        const payloadString = JSON.stringify(payload);
        response.writeHead(statusCode);
        response.write(payloadString);
    });

    // read real data send by post method body
    const decoder = new StringDecoder("utf-8");
    let realData = "";
    request.on("data", (buffer) => {
        realData += decoder.write(buffer);
    });
    request.on("end", () => {
        realData += decoder.end();
        console.log(realData);
    });

    response.end();
};

module.exports = server_handler;
