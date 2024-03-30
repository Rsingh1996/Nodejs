const mongoose = require("mongoose");

const main = async () => {
  mongoose
    .connect("mongodb://localhost:27017/e-comm")
    .then(() => console.log("DB Connected!"));

  const ProductSchema = new mongoose.Schema({
    name: { type: String },
    // brand: { type: String },
    // price: { type: Number },
    // category: { type: String },
  });

  const ProductModel = new mongoose.model("products", ProductSchema);
  const instance = new ProductModel({ name: "Nokia 26" });
  let result = await instance.save();
  console.log(result);
};
main();
