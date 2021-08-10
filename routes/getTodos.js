const getTodosController = require("../controllers/getTodos.controller");

const express = require("express");
const router = express.Router();

router.get("/", getTodosController.getTodos);

module.exports = router;