const mongoose = require('mongoose');

const user = new mongoose.Schema({
    responseData: Object, // Or use appropriate schema type for objects
    request_id: {
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
    amount: {
        type: Number,
    }
})

module.exports = mongoose.model('User', user);