// userController.js

const Tvs = require('../../models/nonRegister');
const postNonRegister = async (req, res) => {
  try {
    const { email, name } = req.body;
    const newTv = new Tvs({
      email,
      name
    });

  const response = await newTv.save();
    res.status(201).json(response);
    console.log(response, "non-reg user added successfully");
  } catch (error) {
    res.status(500).json({ error: 'Error creating user.' });
  }
};

const getNonRegister = async (req, res) => {
  try {
    const response = await Tvs.find();
    res.status(201).json(response);
    console.log(response, "non-reg added successfully");
  } catch (error) {
    res.status(500).json({ error: 'Error creating user.' });
  }
}

module.exports = {
  postNonRegister,
  getNonRegister, // Export the controller function
};
