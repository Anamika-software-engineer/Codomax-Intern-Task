No application code changes today - this day is about pushing to GitHub and
setting up a live deployment.

## 1. Push everything
```
git add .
git commit -m "Day 12: Prepare project for deployment"
git push origin main

## 2. Deploying
This app is a single Express server (`server.js`) that serves both the API
and the frontend from one process. That means:

- **GitHub Pages** can only host static files - it cannot run `server.js`,
  so it is not suitable for this project's backend.
- Use a Node-friendly host instead, such as **Render** or **Railway**
  (both have free tiers):
  1. Push your repo to GitHub (already done above).
  2. Create a new Web Service on Render/Railway, connect your GitHub repo.
  3. Set the start command to `npm start`.
  4. Once deployed, you'll get a live URL 
    
  5. Confirm the live URL loads the Home page and that adding/editing/
     deleting blogs works there too.

## 3. Commit the deployment notes
