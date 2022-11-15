const express = require("express");


var app = express()
var blog = express()
var blogAdmin = express()

app.use('/blog', blog)
blog.use('/admin', blogAdmin)

console.log(blog.path());
console.dir(app.path()) // ''
console.dir(blog.path()) // '/blog'
console.dir(blogAdmin.path()) // '/blog/admin'