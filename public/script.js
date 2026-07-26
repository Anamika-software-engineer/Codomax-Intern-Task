const API_URL = "http://localhost:3000/api/blogs";

document.addEventListener("DOMContentLoaded", () => {
  const blogList = document.getElementById("blogList");
  const form = document.getElementById("addBlogForm");

  if (blogList) {
    loadBlogs();
  }

  if (form) {
    setupAddBlogForm(form);
  }
});

/* ---------- Home page: view blogs ---------- */

async function loadBlogs() {
  const blogList = document.getElementById("blogList");

  try {
    const response = await fetch(API_URL);
    const blogs = await response.json();

    if (blogs.length === 0) {
      blogList.innerHTML = "<p>No blogs yet. Be the first to add one!</p>";
      return;
    }

    blogList.innerHTML = blogs
      .map(
        (blog) => `
        <div class="blog-card">
          <h3>${blog.title}</h3>
          <p>${blog.content}</p>
        </div>
      `
      )
      .join("");
  } catch (error) {
    blogList.innerHTML = "<p>Could not load blogs. Is the server running?</p>";
    console.error("Error fetching blogs:", error);
  }
}

/* ---------- Add Blog page: validation (from Day 4) ---------- */

function setupAddBlogForm(form) {
  const titleInput = document.getElementById("title");
  const contentInput = document.getElementById("content");
  const errorMessage = document.getElementById("formError");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = titleInput.value.trim();
    const content = contentInput.value.trim();

    if (title === "" || content === "") {
      errorMessage.textContent = "Please fill in both the title and content fields.";
      return;
    }

    if (title.length < 3) {
      errorMessage.textContent = "Title must be at least 3 characters long.";
      return;
    }

    if (content.length < 10) {
      errorMessage.textContent = "Content must be at least 10 characters long.";
      return;
    }

    // Actual backend submission is wired up on Day 10
    errorMessage.textContent = "";
    alert("Form validated successfully!");
    form.reset();
  });

  [titleInput, contentInput].forEach((field) => {
    field.addEventListener("input", () => {
      errorMessage.textContent = "";
    });
  });
}