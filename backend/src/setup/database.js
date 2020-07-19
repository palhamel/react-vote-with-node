// Old import way:
const Mongodb = require("mongodb");

const uri = "mongodb://localhost/vote-with-node";

module.exports = async () => {
  
  const client = new Mongodb.MongoClient(uri, {
    useUnifiedTopology: true,
  });

  await client.connect()

  return client.db();
};
