const mongoose = require('mongoose');
const tokenSchema = new mongoose.Schema({
    name: String,
    amount:Number,
    users: [{ type: mongoose.Schema.ObjectId, ref: "Token" }]
});


module.exports = mongoose.model('Token', tokenSchema);