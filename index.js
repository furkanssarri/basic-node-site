import fs from "node:fs";
import http from "node:http";
import path from "node:path";

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  let filePath = "./";
  switch (req.url) {
    case "/":
      filePath += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      filePath += "about.html";
      res.statusCode = 200;
      break;
    case "/contact":
      filePath += "contact.html";
      res.statusCode = 200;
      break;
    default:
      filePath += "404.html";
      res.statusCode = 404;
      break;
  }

  fs.readFile(path.join(process.cwd(), filePath), (err, data) => {
    if (err) {
      console.error(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Listening server at port ${PORT}...`));
