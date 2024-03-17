const express = require("express");
const PORT = 4000;
const app = express();

app.get("", (request, response) => {
  console.log(`data sent by clint/browser  -->`, request.query.name);
  response.send("Hello from home page!");
});
app.get("/about", (request, response) => {
  response.send("Hello from about page!");
});
app.get("/help", (request, response) => {
  response.send("Hello from help page!");
});
///////////////// Server creation ////////////////////////////////

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
