/**
 * Title: Not Found Handler
 * Description: Not Found Handler
 * Author: ABC
 * Date: 28/9/22
 */

// Dependencies

// Object -> Module Scaffolding
const not_found_handler = {};

// route object
not_found_handler.notFoundHandler = (requestProperties, callback) => {
    console.log("Not Found");
    callback(404, {
        message: "404 Not Found",
    });
};

module.exports = not_found_handler;
