const mongoose = require('mongoose');

const jambFee = new mongoose.Schema({
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