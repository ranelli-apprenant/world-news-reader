require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const articlesRoutes = require("./routes/articles");

app.use(
  cors({
    origin: "*",
    methods: ["GET"],
  })
);

app.use(express.json());

app.use("/articles", articlesRoutes);

module.exports = app;
