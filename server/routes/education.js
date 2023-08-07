const express = require("express");

const userController = require("../Controller/education");

const router = express.Router();
router.post('/', userController.postEducation).get("/", userController.getEducation);


module.exports = router;