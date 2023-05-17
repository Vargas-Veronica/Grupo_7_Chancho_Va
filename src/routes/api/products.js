const express = require("express");
const router = express.Router();

const controller = require("../../controllers/api/products");

router.get("/:id", controller.detail);

module.exports = router;