const express = require("express");
const app = express();
const fs = require("fs");
const { uuid } = require('uuidv4');
const users = "db/users.json";
const orders = "db/orders.json";
const port = 3000;

app.use(express.json);

app.get("/", (req, res) => {
  res.send("Hello Leye 74!");
});

app.get("/users/", (req, res) => {
  fs.readFile(users, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

app.post("/users/", (req, res) => {
  console.log(req.body);
});

app.get("/user/:id", (req, res) => {});

app.patch("/user/:id", (req, res) => {});

app.delete("/user/:id", (req, res) => {});

app.get("/orders", (req, res) => {});

app.post("/orders", (req, res) => {});

app.get("/orders?userId=:id", (req, res) => {});

app.get("/order/:id", (req, res) => {});

app.patch("/order/:id", (req, res) => {});

app.delete("/order/:id", (req, res) => {});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
