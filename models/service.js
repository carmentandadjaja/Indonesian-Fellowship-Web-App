var mongoose = require('mongoose');


var serviceSchema = new mongoose.Schema({
    name: String
});

module.exports = mongoose.model('Service', serviceSchema);