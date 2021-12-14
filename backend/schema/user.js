const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: String,
    password:String,
    balance: Number,
    tokens: Array
});
module.exports = mongoose.model('User', userSchema);