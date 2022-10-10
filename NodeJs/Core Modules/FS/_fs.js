const fs = require("fs");
const path = "./Core Modules/FS/my_file.txt";

// fs.writeFileSync(path, "Hello Md. Jubaer Hosain.");
// fs.appendFileSync(path, " How are you?");

// const data = fs.readFileSync(path);
// console.log(typeof data);
// console.log(data);
// console.log(data.toString());

fs.readFile(path, (error, data) => {
    console.log(error);
    console.log(data.toString());
}); 

console.log("Hello");

