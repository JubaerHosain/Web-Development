/**
 * Title: Routes
 * Description: Routes
 * Author: ABC
 * Date: 28/9/22
 */

// Dependencies
const { sampleHandler } = require("./sample_handler.js");
const { notFoundHandler } = require("./not_found_handler.js");

// Object -> Module Scaffolding
const routes = {};

// route object
routes.routes = {
    sample: sampleHandler,
    not_found: notFoundHandler,
};

module.exports = routes;
