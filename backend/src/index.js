const express = require("express");

const port = process.env.PORT || 8080;
const app = express();

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
