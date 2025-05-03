const express = require("express");
const router = express.Router();
const { GetAllProducts, GetAllProductsTesting } = require("../../controllers/products");

router.get("/", GetAllProducts);
// router.get("/test", GetAllProductsTesting);

module.exports = router;
