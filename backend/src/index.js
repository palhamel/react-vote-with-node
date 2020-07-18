const express = require("express");
const setupMiddleware = require("./setup/middleware");

const app = express();

setupMiddleware(app);

const port = process.env.PORT || 8080;

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
