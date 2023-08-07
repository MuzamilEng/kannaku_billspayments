const express = require("express");

const userController = require("../Controller/data");

const router = express.Router();
router.post('/', userController.postData).get("/", userController.getData);


module.exports = router;