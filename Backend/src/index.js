require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const articlesRoutes = require("./routes/articles");

app.use(
  cors({
    origin: ["http://localhost:5173", "https://world-news-rajar.vercel.app", "https://world-news-rajar.vercel.app/articles"],
    methods: ["GET"],
  })
);

app.use(express.json());

app.use("/articles", articlesRoutes);

module.exports = app;
