const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";

const clint = new MongoClient(url);
const dbName = "e-comm";

async function dbConnection() {
  let result = await clint.connect();
  console.log("Connected successfully to server");
  let db = result.db(dbName);
  return db.collection("products");
}

module.exports = dbConnection;
