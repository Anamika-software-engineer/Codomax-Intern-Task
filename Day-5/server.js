// Day 1 - Environment Setup Task
// Goal: Install Node.js, Express and get a basic server running

const express = require("express");

const app = express();
const PORT = 3000;

// Simple test route to confirm the server is working
app.get("/", (req, res) => {
  res.send("Hello World! My Express server is up and running.");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
