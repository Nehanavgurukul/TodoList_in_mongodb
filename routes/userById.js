const userByIdController = require("../controllers/getUserById.controller");


const express = require("express");
const router = express.Router();

router.get("/",userByIdController.getUserById);

module.exports = router;










