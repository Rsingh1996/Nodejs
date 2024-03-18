const express = require("express");
const PORT = 4000;
const app = express();

app.get("", (request, response) => {
  console.log(`data sent by clint/browser  -->`, request.query.name);
  //   response.send(`<h1>Hello ${request.query.name}</h1>`);
  response.send(`<h2>Welcome on home page!</h2>
  <a href="/about">Go to about page</a>`);
});
app.get("/about", (request, response) => {
  response.send(`
  <input type="text" placeholder="username" />
  <buuton>Click me</button> </br>
  <a href="/">Go to home page</a>
  `);
});
app.get("/help", (request, response) => {
  response.send([
    {
      user: `Rahul`,
      email: `rahul@gmail.com`,
    },
    {
      user: `Ankit`,
      email: `ankit@gmail.com`,
    },
    {
      user: `Chandan`,
      email: `chandan@gmail.com`,
    },
    {
      user: `Amit`,
      email: `amit@gmail.com`,
    },
    {
      user: `Peter`,
      email: `peter@gmail.com`,
    },
    {
      user: `Sam`,
      email: `peter@gmail.com`,
    },
    {
      user: `Jack`,
      email: `jack@gmail.com`,
    },
  ]);
});
///////////////// Server creation ////////////////////////////////

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
