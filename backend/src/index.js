const express = require("express");
// const setupRedis = require('./setup/redis')
const setupRouter = require("./setup/router");

// Middle wares to enable cors and json body parsing
const setupMiddleware = require("./setup/middleware");
const setupDatabase = require("./setup/database");
// const { request } = require("express");

const port = process.env.PORT || 8080;
const app = express();

// Middle wares to enable cors and json body parsing
setupMiddleware(app);



async function start() {

  const db = await setupDatabase()

  // const redisDb = await setupRedis()

  setupRouter(app, db);
    // console.log(data);
    // Start the server
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });


}


start().catch(console.error);




// -----------------------------------------------
// Start defining routes here:
// app.get("/", (req, res) => {
//   res.send("Tjena! läget?");
// });
