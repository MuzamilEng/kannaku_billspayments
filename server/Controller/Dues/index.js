// userController.js

const User = require('../../models/dues');

const postDues = async (req, res) => {
  try {
    const { serviceType, subscription, mobileNumber, groupService, amount } = req.body;
    const newUser = new User({
      serviceType,
      subscription,
      mobileNumber,
      groupService,
      amount
    });

  const response = await newUser.save();
    res.status(201).json(response);
    console.log(response, "airtime added successfully");
  } catch (error) {
    res.status(500).json({ error: 'Error creating user.' });
  }
};

const getDues = async (req, res) => {
  try {
    const response = await User.find();
    res.status(201).json(response);
    console.log(response, "airtime added successfully");
  } catch (error) {
    res.status(500).json({ error: 'Error creating user.' });
  }
}

module.exports = {
  postDues,
  getDues, // Export the controller function
};
