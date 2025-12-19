const express = require("express");
const router = express.Router();
const {
  getLastTenArticlesByMostRecent,
  getArticleById,
} = require("./../controllers/articles");
const validate = require("./../middlewares/validate");
const { getArticleByIdSchema } = require("./../schemas/articles.schema");

// Routes
router.get("/", getLastTenArticlesByMostRecent);
router.get("/:id", validate(getArticleByIdSchema, "params"), getArticleById);

module.exports = router;
