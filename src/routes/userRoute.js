const express = require("express");
const router = express.Router();
const { GetAllUsers } = require("../../controllers/products");

router.get("/", GetAllUsers);

module.exports = router;
