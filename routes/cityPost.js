const cityController = require("../controllers/cityPost.controller");

const express = require("express");
const router = express.Router();

router.post("/",cityController.post);

module.exports = router;