const mongoose = require('mongoose');

const schoolFee = new mongoose.Schema({
    feeType: {
        type: String,
    },
    schoolType: {
        type: String,
        required: true,
    },
    schoolName: {
        type: String,
        required: true
    },
    adSeccion: {
        type: String,
        required: true,
    },
    semester: {
        type: String,
        required: true,
    },
    matric: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('feeschool', schoolFee);