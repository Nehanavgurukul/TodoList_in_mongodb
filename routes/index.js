const express = require("express");
const router = express.Router();


const signUser = require("./userSignUp");
const loginUser = require("./userLogin");
const getUsers = require("./allUsers");
const postCity = require("./cityPost");
const getCity = require("./cityGet");
const getUserById = require("./userById");
const getAge = require("./age.route");
const postTodo = require("./todoAssign");
const getTodo = require("./getTodo");
const getTodos = require("./getTodos");



router.use("/signup", signUser);
router.use("/login", loginUser);
router.use("/AllUsers", getUsers);
router.use("/citypost", postCity);
router.use("/cityget", getCity);
router.use("/user", getUserById);
router.use("/age", getAge);
router.use("/todo", postTodo);
router.use("/getTodo", getTodo);
router.use("/getTodos", getTodos);

module.exports = router;


