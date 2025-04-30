const express = require('express');
const router = express.Router();

const { GetAllUsers, GetAllProducts, GetAllProductsTesting } = require("../../controllers/products");


// Correct route definitions
router.get("/", GetAllUsers);
router.get("/products", GetAllProducts);
router.get("/testing", GetAllProductsTesting);


module.exports = router;
