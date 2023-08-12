const mongoose = require('mongoose');

const dues = new mongoose.Schema({
    responseData: Object, // Or use appropriate schema type for objects

    serviceType: {
        type: String,
    },
    subscription: {
        type: String,
        // unique: true
    },
    groupService: {
        type: String,
        // unique: true
    },
    mobileNumber: {
        type: String,
        
    },
    amount: {
        type: String,
      
    }
})

module.exports = mongoose.model('Due', dues);