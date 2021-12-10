const mongoose = require('mongoose');
const tokenSchema = new mongoose.Schema({
    name: String,
    amount:Number,
    users: [],
    status: String
});
module.exports = mongoose.model('Token', tokenSchema);