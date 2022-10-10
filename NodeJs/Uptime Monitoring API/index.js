/**
 * Title: Uptime Monitoring API using raw nodejs code
 * Description: A REST API to monitor up or down time of user defined links
 * Author: ABC
 * Date: 28/9/22
 */

// Dependencies
const http = require("http");
const server_handler = require("./helpers/server_handler.js");

// Object -> Module Scaffolding
const app = {};

// Configaration Object
app.config = {
    port: 3000,
};

// Create Server
app.createServer = () => {
    const server = http.createServer(server_handler.handleRequestResponse);
    server.listen(app.config.port, () => {
        console.log(`Listening to port number: ${app.config.port}`);
    });
};

// start the server
app.createServer();
