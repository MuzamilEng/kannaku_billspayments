const mongoose = require('mongoose');

const dues = new mongoose.Schema({
    serviceType: {
        type: String,
        required: true
    },
    subscription: {
        type: String,
        required: true,
        // unique: true
    },
    groupService: {
        type: String,
        required: true,
        // unique: true
    },
    mobileNumber: {
        type: Number,
        required: true,
        unique: true
    },
    amount: {
        type: Number,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('Due', dues);