const express = require("express");
const EventEmitter = require("events");
const PORT = 9570;
const app = express();

const event = new EventEmitter();
let count = 0;
event.on("countAPI", () => {
  count++;
  console.log("Event called", count);
});

app.get("/", (req, resp) => {
  resp.send("Get API called!");
  event.emit("countAPI");
});
app.get("/search", (req, resp) => {
  resp.send("Search API called!");
  event.emit("countAPI");
});
app.get("/update", (req, resp) => {
  resp.send(" Update API called!");
  event.emit("countAPI");
});

app.listen(PORT, () => console.log(`Server is listing ${PORT}`));
