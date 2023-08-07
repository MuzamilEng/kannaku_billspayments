// userController.js

const User = require('../../models/electricity');
const axios = require('axios');

// Example controller function to handle a specific route
const postElectricity = async (req, res) => {
  const url = 'https://sandbox.vtpass.com/api/pay'; // Update with vtpass API URL
  const apiKey = '14509672042f290d6a49fd1aa664b6f5'; // Replace with your vtpass API key
  const secretKey = 'SK_106be5b1491d929c5bffef06b2aa244fb00305d83b0'; 
  

  try {
    const response = await axios.post(url, req.body, {
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey,
        'secret-key': secretKey,
      },
    });
    // console.log(req.body, "req.body");
    // console.log('Response from VTPass API:', response.data);
  
    // console.log('Electricity data saved to the database.');
    const user = new User({
      // responseData: response?.data?.content?.transactions, // Save the entire response data
      responseData: response?.data, // Save the entire response data
      // Other relevant fields from req.body
    });

    try {
      await user.save();
      // console.log('Electricity data saved to the database.');
      res.status(201).json({ message: 'Electricity data saved successfully' });
    } catch (error) {
      // console.error('Error saving data to the database:', error);
      res.status(500).json({ error: 'An error occurred while saving data.' });
      return;
    }
  }  catch (error) {
    res.status(500).json({ error: error });
  }
};

const getElectricity = async (req, res) => {
  try {
    const response = await User.find();
    res.status(201).json(response);
    // console.log(response, "dues added successfully");
  } catch (error) {
    res.status(500).json({ error: 'Error creating user.' });
  }
}

module.exports = {
    postElectricity,
    getElectricity, // Export the controller function
};
