const JambFee = require('../../models/jamb');
const postJamb = async (req, res) => {
  try {
    const { feeType, wacepkg, amount, phone } = req.body;
    const newTv = new JambFee({
      feeType,
      wacepkg,
      amount,
      phone
    });

  const response = await newTv.save();
    res.status(201).json(response);
    // console.log(response, "tvCable added successfully");
  } catch (error) {
    res.status(500).json({ error: 'Error creating user.' });
  }
};

const getJamb = async (req, res) => {
  try {
    const response = await JambFee.find();
    res.status(201).json(response);
    // console.log(response, "tvCable added successfully");
  } catch (error) {
    res.status(500).json({ error: 'Error creating user.' });
  }
}

module.exports = {
    postJamb,
    getJamb, // Export the controller function
};
