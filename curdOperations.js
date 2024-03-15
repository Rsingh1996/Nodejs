const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "curd");
const filePath = `${dirPath}/newFile.txt`;

// createing file
// fs.writeFileSync(filePath, "This is a new file to perfomr curn operations");

// reading file content
// fs.readFile(filePath, "utf-8", (err, item) => {
//   console.log(item);
// });

// updating file content
fs.appendFile(filePath, ", This operations help in file handling", (err) => {
  if (!err) {
    console.log("File is update!");
  }
});
