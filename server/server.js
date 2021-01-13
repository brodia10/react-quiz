const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "build")));

app.get("/", function (req, res) {
  res.send(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT || 3000);

console.log(
  "Server is started! Listening on 3000 if running locally or a random port that Heroku assigned if running on Heroku"
);
