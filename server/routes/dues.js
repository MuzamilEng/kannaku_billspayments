const express = require("express");

const userController = require("../Controller/Dues");

const router = express.Router();
router.post('/', userController.postDues).get("/", userController.getDues);


module.exports = router;