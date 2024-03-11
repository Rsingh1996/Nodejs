let file = require("./app");
// By default feature in node are known as core module, like-> console, fs, HTTP, buffer
// console is a global module as we have not imported this, it's in-built
console.log(file.foo());

// the module which we have to import are called non global module

// const fs = require("fs");
// fs.writeFileSync("hello.txt", "Hello Rahul Singh");
console.log(__dirname); // to check current working directory
console.log(__filename); // to check current working file
