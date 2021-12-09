const mongoose = require('mongoose');
const tokenSchema = new mongoose.Schema({
    name: String,
    amount:Number,
    users: [{ type: mongoose.Schema.ObjectId, ref: "Token"}],
    usernames:Array,
    status: String
});
module.exports = mongoose.model('Token', tokenSchema);