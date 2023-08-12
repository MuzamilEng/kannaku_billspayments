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
      amount,
      dateTime: 'african/lagos',
      product_id: '0811117533331111jjgjwhuwdhwdi',
      transaction_id: '786387r877429jhhi848',
      transaction_status: 'success',
      transaction_message: null,
      transaction_reference: null,
      costumer_id: '0oo9998622611',
      customer_name: null,
      content:{
        transactions: null,
        errors: null,
        unique_id: true,
        message: null
      },
      details: {
        email: 'sandbox@gmail.com',
        phone: '0801111111111',
      }

    });
try {
 const response = await newUser.save();
    res.status(201).json(response);
    console.log(response, "mededoe successfully");
  console.log('Electricity data saved to the database.');
  
} catch (error) {
  console.log(error);
}
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
