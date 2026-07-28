 #Blog Management System

A simple full-stack blog management system built during the Codomax Digital
Solutions Full Stack Development Internship.

# Overview

Lets a user view, add, edit, and delete blog posts through a browser
interface, backed by a REST API built with Node.js and Express. The backend
also serves the frontend directly, so the whole app runs from one server on
one port.

# Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript (Fetch API)
- **Backend:** Node.js, Express.js
- **Data storage:** In-memory JavaScript array
- **Tools:** VS Code, Git, GitHub, Postman

## Features

- View all blog posts on the Home page
- Add a new blog post with form validation
- Edit an existing blog post inline
- Delete a blog post with a confirmation prompt
- Responsive design across desktop, tablet, and mobile
- Smooth animations, hover effects, and transitions

## Folder Structure

```
blog-management-system/
├── server.js          Express server + REST API
├── package.json
├── public/
│   ├── index.html      Home page
│   ├── add-blog.html   Add Blog page
│   ├── style.css        All styling, animations, responsive rules
│   └── script.js        All frontend logic
├── DEPLOYMENT.md
├── BUGFIXES.md
└── README.md
```

## How to Run

```
npm install
npm start
```

Open your browser to `http://localhost:3000` - no separate frontend server needed.

##Live link :- https://codomax-intern-task-production.up.railway.app/


## Development History

Built incrementally with one commit per day. Run `git log --oneline` to see
the full progression from a basic Hello World server through to a fully
integrated, styled, responsive, and deployed application.

## Author

Built by Anamika Gupta as part of the Codomax Digital Solutions Full Stack
Development Internship.