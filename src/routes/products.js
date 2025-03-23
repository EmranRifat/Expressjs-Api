const express = require('express');
const router = express.Router();

const { GetAllProducts, GetAllProductsTesting } = require("../../controllers/products");

// Correct route definitions
router.get("/", GetAllProducts);
router.get("/testing", GetAllProductsTesting);

module.exports = router;
