const { dir } = require("console");
const fs = require("fs");

/*
const input = process.argv;

if (input[2] == "add") {
  fs.writeFileSync(input[3], input[4]);
} else if (input[2] == "remove") {
  fs.unlinkSync(input[3]);
} else {
  console.log("Invalid Input");
}
*/
const path = require("path");
const dirPath = path.join(__dirname, "files");

/*
// to create multiple files
for (let i = 1; i <= 5; i++) {
  fs.writeFileSync(
    `${dirPath}/file${i}.txt`,
    "A Simple text files created by loop"
  );
}
*/

// Reading list of item/files from a folder/dir

fs.readdir(dirPath, (err, files) => {
  console.log(files);
});
