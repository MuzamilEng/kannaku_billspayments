const express = require("express");

const userController = require("../Controller/nonRegister");

const router = express.Router();
router.post('/', userController.postNonRegister).get("/", userController.getNonRegister);


module.exports = router;