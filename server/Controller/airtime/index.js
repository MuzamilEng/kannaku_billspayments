// userController.js
const axios = require('axios');
const User = require('../../models/airtime');

// Example controller function to handle a specific route
const postAirtime = async (req, res) => {
  const url = 'https://sandbox.vtpass.com/api/pay'; // Update with vtpass API URL
  const apiKey = '14509672042f290d6a49fd1aa664b6f5'; // Replace with your vtpass API key
  const secretKey = 'SK_106be5b1491d929c5bffef06b2aa244fb00305d83b0'; // Replace with your vtpass secret key
  

  try {
    const response = await axios.post(url, req.body, {
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey,
        'secret-key': secretKey,
      },
    });
    // console.log('Response from VTPass API:', response.data);
  
    const user = new User({
      // responseData: response?.data?.content?.transactions, // Save the entire response data
      responseData: response?.data, // Save the entire response data
      // Other relevant fields from req.body
    });

    await user.save();

    // console.log('Airtime data saved to the database.');

    res.status(201).json({ message: 'Airtime cable data saved successfully' });
  }  catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

const getAirtime = async (req, res) => {
  try {
    const response = await User.find();
    res.status(201).json(response);
    // console.log(response, "airtime added successfully");
  } catch (error) {
    res.status(500).json({ error: 'Error creating user.' });
  }
}



module.exports = {
  postAirtime,
  getAirtime, // Export the controller function
};
