const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: String,
    password:String,
    tokens:  [{ type: mongoose.Schema.ObjectId, ref: "Token" }],
    balance: String
});
module.exports = mongoose.model('User', userSchema);