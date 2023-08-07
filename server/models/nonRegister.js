const mongoose = require('mongoose');

const nonRegister = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String
    }
})

module.exports = mongoose.model('NonRegister', nonRegister);