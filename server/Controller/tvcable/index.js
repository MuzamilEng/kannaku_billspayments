// userController.js
const axios = require('axios');

const Tvs = require('../../models/tvcable');
const postTvCable = async (req, res) => {
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
    const user = new Tvs({
      responseData: response?.data,
    });
    try {
      console.log(response, "tvCable added successfully");
      if (response?.data?.content?.['errors'] == '' || response?.data?.content?.['errors']) {
        console.log(response.data.content.errors, "tv added not");
        console.log('hello ijj');
        res.status(400).json({ error: response.data.content.errors });
        return;
      }
      await user.save();
      res.status(201).json({ message: 'Tv data saved successfully' });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while saving data.' });
      return;
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const getTvCable = async (req, res) => {
  try {
    const response = await Tvs.find();
    res.status(201).json(response);
    // console.log(response, "tvCable added successfully");
  } catch (error) {
    res.status(500).json({ error: 'Error creating user.' });
  }
}

module.exports = {
  postTvCable,
  getTvCable, // Export the controller function
};
