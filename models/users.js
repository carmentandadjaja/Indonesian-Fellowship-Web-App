var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    password: String,
    service: [{ type: Schema.Types.ObjectId, ref: 'Service' }]
});

module.exports = mongoose.model('User', userSchema);

