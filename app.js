var express = require("express");
var app = express();
const dashaBot = require("./initApp");

app.get("/", function (req, res) {
  res.send("Hello Worldd!");
  dashaBot();
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
