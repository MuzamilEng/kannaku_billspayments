// controllers/authController.js
const jwt = require('jsonwebtoken');
const User = require('../../models/userSchema');

exports.signup = async (req, res) => {
  try {
    const { username,email, phone, password } = req.body;

    // Check if the username is already taken
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already taken' });
    }

    // Create a new user
    const newUser = new User({ username, password, email, phone });
    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: 'Incorrect password. Please try again or sign up' });
    }

    // If the password matches, create a JWT token with user information
    const token = jwt.sign({ userId: user._id, username: user.username }, 'mysecretkey', { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', username: user.username, token });
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }
}