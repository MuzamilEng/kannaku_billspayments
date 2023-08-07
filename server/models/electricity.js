const mongoose = require('mongoose');

const electricity = new mongoose.Schema({
    responseData: Object, // Or use appropriate schema type for objects
serviceID: {
        type: String,
    },
    request_id: {
        type: String,
    },
    billersCode: {
        type: String,
    },
    variation_code: {
        type: String,
       
    },
    phone: {
        type: Number,
    },
    amount: {
        type: Number,
       
    }
})

module.exports = mongoose.model('Electric', electricity);