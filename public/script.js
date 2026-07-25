// Day 4 - Add Blog form validation using DOM and events

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("addBlogForm");

  // Only run this on the Add Blog page
  if (!form) return;

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

    // Backend connection comes on Day 10 - for now just confirm validation passed
    errorMessage.textContent = "";
    alert("Form validated successfully!");
    form.reset();
  });

  [titleInput, contentInput].forEach((field) => {
    field.addEventListener("input", () => {
      errorMessage.textContent = "";
    });
  });
});