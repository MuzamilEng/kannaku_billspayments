const express = require("express");

const userController = require("../Controller/jamb");

const router = express.Router();
router.post('/', userController.postJamb).get("/", userController.getJamb);


module.exports = router;