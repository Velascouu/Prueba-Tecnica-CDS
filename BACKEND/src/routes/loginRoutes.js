const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController");

router
    .get('/user/:user', loginController.getUser)
    .get('/allUsers', loginController.getAllUsers)
    .post('/user', loginController.logUser);

module.exports = router;