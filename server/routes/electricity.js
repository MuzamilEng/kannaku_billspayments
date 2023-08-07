const express = require("express");

const userController = require("../Controller/electricity");

const router = express.Router();
router.post('/', userController.postElectricity).get("/", userController.getElectricity);


module.exports = router;