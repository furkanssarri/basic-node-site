# Basic Node.js Site

This project demonstrates basic server-side routing using both vanilla Node.js and the Express framework. It shows how to serve different HTML files based on the requested URL.

## Features

- Provides two implementations:
  - Vanilla Node.js using Node's built-in `http`, `fs`, and `path` modules.
  - Express.js framework for cleaner and more efficient routing.
- Serves static HTML files for different routes (`/`, `/about`, `/contact`)
- Returns a custom 404 page for unknown routes
- Minimal, beginner-friendly code

## How to Run

1. Clone the repository or download the source code.
2. Make sure you have [Node.js](https://nodejs.org/) installed.
3. Place your `index.html`, `about.html`, `contact.html`, and `404.html` files in the project root.
4. Choose your desired implementation:

   ### Vanilla Node.js

   Start the vanilla Node.js server:

   ```bash
   node index.js
   ```

   ### Express.js

   Start the Express.js server:

   ```bash
   node app.js
   ```

5. Open your browser and visit [http://localhost:3000](http://localhost:3000).

## Purpose

This project is for learning and practicing basic server-side routing in Node.js and Express.js, without any external libraries or frameworks other than that.

---
