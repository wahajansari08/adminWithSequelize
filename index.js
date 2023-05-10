require("./models");
const express = require("express");
const app = express();

//import model connection file
require("./models");

app.get("/", (req, res) => {
  res.send("Test response");
});

app.listen("3000", () => {
  console.log("App is running on: http://localhost:3000");
});
