const mongoose = require('mongoose');

const data = new mongoose.Schema({

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

module.exports = mongoose.model('Data', data);