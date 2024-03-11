let file = require("./app");

// console is a global module as we have not imported this, it's in-built
console.log(file.foo());

// the module which we have to import are called non global module

const fs = require("fs");
fs.writeFileSync("hello.txt", "Hello Rahul Singh");
