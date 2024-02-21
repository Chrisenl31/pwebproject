const express = require("express");
const router = express();
const baseController = require("../controllers/base.controller");

router.get("/", baseController.getHome)

module.exports = router;