const express = require("express");

const userController = require("../Controller/tvcable");

const router = express.Router();
router.post('/', userController.postTvCable).get("/", userController.getTvCable);


module.exports = router;