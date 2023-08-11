const mongoose = require('mongoose');

const jambFee = new mongoose.Schema({
    responseData: Object, // Or use appropriate schema type for objects
    feeType: {
        type: String,
    },
    wacepkg: {
        type: String
    },
    phone: {
        type: Number
    },
    amount: {
        type: Number
    }
})

module.exports = mongoose.model('feejamb', jambFee);