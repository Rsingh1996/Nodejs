const express = require("express");
const dbConnection = require("./mongodb");

const PORT = 5200;
const app = express();
app.use(express.json()); // before express v 4.6 we have to use body-parser

app.get("/", async (req, resp) => {
  console.log("GET API method called!");
  let data = await dbConnection();
  let result = await data.find().toArray();
  console.log(result);
  resp.send({ result });
});

app.post("/", async (req, resp) => {
  console.log("POST API method called!");
  let data = await dbConnection();
  let result = await data.insertOne(req.body); // getting body content from request
  resp.send(result);
});

app.put("/:name", async (req, resp) => {
  console.log("PUT API method called!");
  let data = await dbConnection();
  //   let result = await data.updateOne({ name: "iPhone 14" }, { $set: req.body });
  //   let result = await data.updateMany({ name: "iPhone 14" }, { $set: req.body });
  let result = await data.updateOne(
    { name: req.params.name },
    { $set: req.body }
  );

  resp.send(result);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
