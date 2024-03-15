const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "curd");
const filePath = `${dirPath}/newFile.txt`;

fs.writeFileSync(filePath, "This is a new file to perfomr curn operations");
