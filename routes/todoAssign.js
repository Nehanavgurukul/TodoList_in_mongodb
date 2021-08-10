const todoController = require("../controllers/assignTodo.controller");

const express = require("express");
const router = express.Router();

router.post("/",todoController.post);

module.exports = router;