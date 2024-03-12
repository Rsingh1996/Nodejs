let file = require("./app");
// By default feature in node are known as core module, like-> console, fs, HTTP, buffer
// console is a global module as we have not imported this, it's in-built
let colors = require("colors");
console.log(file.foo().blue);
console.log("Hello Rahul".underline.gray);
// the module which we have to import are called non global module

// const fs = require("fs");
// fs.writeFileSync("hello.txt", "Hello Rahul Singh");
console.log(__dirname.red); // to check current working directory
console.log(__filename.green); // to check current working file
