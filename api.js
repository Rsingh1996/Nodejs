const express = require("express");
const dbConnection = require("./mongodb");

const PORT = 5200;
const app = express();
app.use(express.json());

app.get("/", async (req, resp) => {
  let data = await dbConnection();
  let result = await data.find().toArray();
  console.log(result);
  resp.send({ result });
});

app.post("/", async (req, resp) => {
  let data = await dbConnection();
  let result = await data.insertOne(req.body);
  resp.send(req.body);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
