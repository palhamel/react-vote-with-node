// Old import way:
const Mongodb = require("mongodb");

const uri = "mongodb://localhost/vote-with-node";

module.exports = () => {
  const client = new Mongodb.MongoClient(uri);

  return client.connect();
};