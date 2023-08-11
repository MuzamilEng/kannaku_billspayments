const mongoose = require('mongoose');

const schoolFee = new mongoose.Schema({
    responseData: Object, // Or use appropriate schema type for objects
    feeType: {
        type: String,
    },
    schoolType: {
        type: String,
    },
    schoolName: {
        type: String,
    },
    adSeccion: {
        type: String,
    },
    semester: {
        type: String,
    },
    matric: {
        type: String,
    },
    name: {
        type: String,
    },
    phone: {
        type: Number,
    },
    amount: {
        type: Number,
    }
})

module.exports = mongoose.model('feeschool', schoolFee);