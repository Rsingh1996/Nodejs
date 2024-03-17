const express = require("express");
const PORT = 4000;
const app = express();

app.get("", (request, response) => {
  console.log(`data sent by clint/browser  -->`, request.query.name);
  //   response.send(`<h1>Hello ${request.query.name}</h1>`);
  response.send(`<h2>Welcome on home page!</h2>`);
});
app.get("/about", (request, response) => {
  response.send(`
  <input type="text" placeholder="username" />
  <buuton>Click me</button>
  `);
});
app.get("/help", (request, response) => {
  response.send("Hello from help page!");
});
///////////////// Server creation ////////////////////////////////

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
