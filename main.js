const express = require("express");
const app = express();

app.get("", (request, response) => {
  response.send("Hello from home page!");
});
app.get("/about", (request, response) => {
  response.send("Hello from about page!");
});
