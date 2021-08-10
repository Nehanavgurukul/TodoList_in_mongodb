const cityController = require("../controllers/cityGet.controller");

const express = require("express");
const router = express.Router();


router.get("/",cityController.getCities);

module.exports = router;



