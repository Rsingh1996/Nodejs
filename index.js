const express = require("express");
require("./config");
const Products = require("./product");

const PORT = 5500;
const app = express();

app.post((request, response) => {
  console.log("Post API called!");
  response.send("Post API");
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
