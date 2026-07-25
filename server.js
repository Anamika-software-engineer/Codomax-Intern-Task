// Day 5 - Express.js Tasks
// Goal: Create an Express server with GET and POST routes

const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

// Temporary in-memory storage (a database is not required for this project)
let blogs = [
  { id: 1, title: "Welcome to My Blog", content: "This is the very first post on the site." }
];

app.get("/api/blogs", (req, res) => {
  res.status(200).json(blogs);
});

app.post("/api/blogs", (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: "Title and content are required." });
  }

  const newBlog = {
    id: blogs.length + 1,
    title,
    content
  };

  blogs.push(newBlog);
  res.status(201).json(newBlog);
});

app.listen(PORT, () => {
  console.log(`Backend server ready at http://localhost:${PORT}`);
});