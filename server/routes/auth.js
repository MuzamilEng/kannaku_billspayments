// routes/authRoutes.js
const express = require('express');
const router = express.Router();

const authController = require('../Controller/auth');

// Signup route
router.post('/signup', authController.signup);

// Login route
router.post('/login', authController.login);

// Get user route
router.get('/:id', authController.getUser);

module.exports = router;
