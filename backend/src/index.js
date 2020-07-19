const express = require("express");

const setupRouter = require("./setup/router");

// Middle wares to enable cors and json body parsing
const setupMiddleware = require("./setup/middleware");
const setupDatabase = require("./setup/database");

const port = process.env.PORT || 8080;
const app = express();

// Middle wares to enable cors and json body parsing
setupMiddleware(app);

setupDatabase()
  .then((client) => {
    setupRouter(app, client);
    console.log(client);
    // Start the server
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  })
  // log error to console
  .catch(console.error);

// -----------------------------------------------
// Start defining routes here:
// app.get("/", (req, res) => {
//   res.send("Tjena! läget?");
// });
