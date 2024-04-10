const express = require("express");
const EventEmitter = require("events");
const PORT = 9570;
const app = express();

app.get("/", (req, resp) => {
  resp.send("API called!");
});

app.listen(PORT, () => console.log(`Server is listing ${PORT}`));
