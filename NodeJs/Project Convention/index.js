/*
 * Title: Basic Node app example
 * Description: Simple node application that print a number
 * Author: Md. Jubaer Hosain
 * Date: 27/09/2022
 */

// Dependencies
const fs = require("fs");
const http = require("http");

// App object - Module scaffolding
const app = {};

// Configuration
app.config = {
    timeBetweenQuotes: 1000,
};

// Function that prints number
app.printNumber = function () {
    console.log(Math.random());
};

// Invoke the function
app.printNumber();
