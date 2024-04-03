const express = require("express");
require("./config");
const Products = require("./product");

const PORT = 5500;
const app = express();
app.use(express.json());
app.post("/create", async (request, response) => {
  let data = new Products(request.body);
  let result = await data.save();
  console.log(result);
  response.send(result);
});

app.get("/list", async (request, response) => {
  console.log("GET API called!");

  let data = await Products.find();
  response.send(data);
});

app.delete("/delete/:_id", async (request, response) => {
  console.log("Delete API called!");
  let data = await Products.deleteOne(request.params);
  response.send(data);
});

app.put("/update/:_id", async (request, response) => {
  console.log("PUT API called!");
  let data = await Products.updateOne(request.params, {
    $set: request.body,
  });
  response.send(data);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
