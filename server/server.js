const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "build")));

app.get("/", function (req, res) {
  res.send(path.join(__dirname, "build", "index.html"));
});

app.listen(3000);

console.log("Server is started, listening on port 3000");
