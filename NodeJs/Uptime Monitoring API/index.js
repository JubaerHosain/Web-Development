/**
 * Title: Uptime Monitoring API using raw nodejs code
 * Description: "A REST API to monitor up or down time of user defined links"
 * Author: ABC
 * Date: 28/9/22
 */

// Dependencies
const http = require("http");
const server_handler = require("./handlers/request_response_handler.js");
const environment = require("./helpers/environment.js");
const database = require("./lib/data.js");

// Object -> Module Scaffolding
const app = {};

// Configaration Object[not using]
// app.config = {
//     port: 3000,
// };


// Create Server
app.createServer = () => {
    console.log(environment.env_name);

    const server = http.createServer(server_handler.handleRequestResponse);
    
    server.listen(environment.port, () => {
        console.log(`Listening to port number: ${environment.port}`);
    });
};

// start the server
app.createServer();

