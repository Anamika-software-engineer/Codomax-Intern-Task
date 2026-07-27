const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());

// Now that Express serves the frontend itself, everything is on one origin -
// CORS headers are no longer required, but are harmless to leave in
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// Serve index.html, add-blog.html, style.css, script.js directly
app.use(express.static(path.join(__dirname, "public")));

let blogs = [
  { id: 1, title: "Welcome to My Blog", content: "This is the very first post on the site.", createdAt: new Date().toISOString() }
];
let nextId = 2;

app.get("/api/blogs", (req, res) => {
  res.status(200).json(blogs);
});

app.post("/api/blogs", (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: "Title and content are required." });
  }

  const newBlog = {
    id: nextId++,
    title,
    content,
    createdAt: new Date().toISOString()
  };

  blogs.push(newBlog);
  res.status(201).json(newBlog);
});

app.put("/api/blogs/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { title, content } = req.body;

  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return res.status(404).json({ message: "Blog not found." });
  }

  if (!title || !content) {
    return res.status(400).json({ message: "Title and content are required." });
  }

  blog.title = title;
  blog.content = content;

  res.status(200).json(blog);
});

app.delete("/api/blogs/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = blogs.findIndex((b) => b.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Blog not found." });
  }

  blogs.splice(index, 1);
  res.status(200).json({ message: "Blog deleted successfully." });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});