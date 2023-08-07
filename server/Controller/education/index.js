// userController.js

const User = require('../../models/education');

const postEducation = async (req, res) => {
  try {
    const { feeType, schoolType, schoolName, adSeccion, semester, matric, name, phone, amount } = req.body;
    // console.log(req?.body, "request here");
    const newUser = new User({
      feeType,
      schoolType,
      schoolName,
      adSeccion,
      semester,
      matric,
      name,
      phone,
      amount
    });

  const response = await newUser.save();
    res.status(201).json(response);
    // console.log(response, "education schfee added successfully");
  } catch (error) {
    res.status(500).json({ error: 'Error creating user.' });
  }
};

const getEducation = async (req, res) => {
  try {
    const response = await User.find();
    res.status(201).json(response);
    // console.log(response, "education sch-fee added successfully");
  } catch (error) {
    res.status(500).json({ error: 'Error creating user.' });
  }
}

module.exports = {
  postEducation,
  getEducation, // Export the controller function
};
