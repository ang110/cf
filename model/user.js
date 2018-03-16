var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/cryptoFish');
/* get user listing */
var UserSchema = new Schema({
    name: String,
    address: String,
    phone: String,
    email: String
});
 
module.exports = mongoose.model('User', UserSchema);