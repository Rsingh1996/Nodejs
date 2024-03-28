const dbConnection = require("./mongodb");

const deleteData = async () => {
  console.log("Delete Data function called!");
  let data = await dbConnection();
  let result = await data.deleteOne({ name: "S24" });
  //   let result = await data.deleteMany({ name: "Nokia 1400" });

  if (result.deletedCount === 0) {
    console.log("Data Requested for delete is not available in DB");
  } else if (result.acknowledged) {
    console.log("Data Deleted Successfully!");
  }
  console.log(result);
};
deleteData();
