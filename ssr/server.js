const express = require("express");
const app = express();
const port = 7777;

const templateHtml = require("./src/template");

app.get("/", (req, res) => {
  res.send(templateHtml);
});

app.use(express.static("src"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
