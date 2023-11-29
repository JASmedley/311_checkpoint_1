require("dotenv").config();
let express = require("express");
const port = 4000;

express().use(express.json());
express().use(express.static("./public/index.html"));
express().use(require("./routes/recipeRoutes"));
express().listen(port, () => {
  console.log('App is listening on:', port)
});