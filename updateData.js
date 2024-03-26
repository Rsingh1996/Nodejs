const dbConnection = require("./mongodb");

const updateData = async () => {
  console.log("Data updated Successfully!");
  let data = await dbConnection();
  const result = await data.updateMany(
    { name: "Nokia 1260" },
    {
      $set: {
        name: "Nokia 1400",
      },
    }
  );
  if (result.acknowledged) {
    console.log(result, "Data updated Successfully!");
  }
};

updateData();
