const Users = require("../controllers/getUsers.controller");


const express = require("express");
const router = express.Router();

router.get("/",Users.getUsers);

module.exports = router;
