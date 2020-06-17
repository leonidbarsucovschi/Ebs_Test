const express = require("express");
const { data, categories } = require("./data.js");

const app = express();

app.get("/api/products/", function (req, res) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.send(data);
});

app.get("/api/product/categories/", function (req, res) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.send(categories);
});

app.listen(3001, () =>
  console.log("Server successfully started on port 3001!")
);
