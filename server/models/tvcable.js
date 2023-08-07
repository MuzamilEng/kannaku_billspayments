const mongoose = require('mongoose');

const tvCable = new mongoose.Schema({
    responseData: Object, // Or use appropriate schema type for objects
    request_id: {
        type: String,
    },
    billersCode: {
        type: String,
    },
    serviceID: {
        type: String,
    },
    variation_code: {
        type: String,
    },
    phone: {
        type: Number,
    },
    subscription_type: {
        type: String,
    },
    amount: {
        type: Number,
    }
})

module.exports = mongoose.model('cabletv', tvCable);