const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/e-comm")
  .then(() => console.log("DB Connected!"));

const ProductSchema = new mongoose.Schema({
  name: { type: String },
  brand: { type: String },
  price: { type: Number },
  category: { type: String },
});

const addDataInDB = async () => {
  const ProductModel = new mongoose.model("products", ProductSchema);
  const instance = new ProductModel({
    name: "OnePlus 7T",
    price: 100000,
    brand: "OnePlus",
    category: "Mobile",
  });
  let result = await instance.save();
  console.log(result);
};
// addDataInDB();

const updateDataInDB = async () => {
  const ProductModel = new mongoose.model("products", ProductSchema);
  const instance = await ProductModel.updateOne(
    { name: "OnePlus 7T" },
    { $set: { price: 90000, name: "OnePlus 8T" } }
  );
  console.log(instance);
};
updateDataInDB();
