const express = require("express");
const router = express.Router();
const { GetAllProductsTesting } = require("../../controllers/products");

router.get("/", GetAllProductsTesting);

module.exports = router;
