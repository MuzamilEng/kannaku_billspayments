const mongoose = require('mongoose');

const dues = new mongoose.Schema({
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
        type: Number,
        
    },
    amount: {
        type: Number,
      
    }
})

module.exports = mongoose.model('Due', dues);