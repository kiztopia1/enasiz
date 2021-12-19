const mongoose = require('mongoose');
const tokenSchema = new mongoose.Schema({
    name: String,
    amount:Number,
    users: Array,
    setStatus: Array,
    status: String
});
module.exports = mongoose.model('Token', tokenSchema);