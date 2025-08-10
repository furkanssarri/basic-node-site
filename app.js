const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3030;

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "index.html"), (err) => {
    if (err) next(err);
  });
});

app.get("/about", (req, res, next) => {
  res.sendFile(path.join(__dirname, "about.html"), (err) => {
    if (err) next(err);
  });
});

app.get("/contact", (req, res, next) => {
  res.sendFile(path.join(__dirname, "contact.html"), (err) => {
    if (err) next(err);
  });
});

app.use((err, res) => {
  res.status(400).sendFile(path.join(__dirname, "404.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
