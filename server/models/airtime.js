const mongoose = require('mongoose');

const user = new mongoose.Schema({
    responseData: Object, // Or use appropriate schema type for objects

})

module.exports = mongoose.model('User', user);