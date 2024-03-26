const dbConnection = require("./mongodb");

const insertData = async () => {
  console.log("Insert Data function called!");
  const db = await dbConnection();
  const result = await db.insertMany([
    {
      name: "M1 Pro",
      brand: "ASUS",
      price: 15000,
      category: "Mobile",
    },
    {
      name: "OnePlus 12",
      brand: "OnePlus",
      price: 70000,
      category: "Mobile",
    },
  ]);
  if (result.acknowledged) {
    console.log("Data inserted Successfully!");
  }
};
insertData();
