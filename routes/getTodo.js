const getTodoController = require("../controllers/getTodo.controller");

const express = require("express");
const router = express.Router();

router.get("/", getTodoController.getTodo);

module.exports = router;