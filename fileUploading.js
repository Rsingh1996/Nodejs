const express = require("express");
const multer = require("multer");
const app = express();
const PORT = 8900;

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, "uploads");
    },
    filename: function (req, file, callback) {
      callback(null, file.fieldname + "_" + Date.now() + ".jpg");
    },
  }),
}).single("user_file");

app.post("/upload", upload, (req, resp) => {
  console.log("File Uploading");

  resp.send();
});

app.listen(PORT, () => console.log(`Server is listing on ${PORT}`));
