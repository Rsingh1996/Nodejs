const dbConnection = require("./mongodb");

const deleteData = async () => {
  console.log("Delete Data function called!");
  let data = await dbConnection();
  //   let result = await data.deleteOne({ name: "Nokia 1400" });
  let result = await data.deleteMany({ name: "Nokia 1400" });

  if (result.acknowledged) {
    console.log("Data Deleted Successfully!");
  }
  console.log(result);
};
deleteData();
