const ageController = require("../controllers/age.controller");

const express = require("express");
const router = express.Router();

router.get("/",ageController.get);

module.exports = router;
