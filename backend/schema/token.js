const mongoose = require('mongoose');
const tokenSchema = new mongoose.Schema({
    name: String,
    amount:Number,
    users: [{ type: mongoose.Schema.ObjectId, ref: "Token", username:String }]
});


module.exports = mongoose.model('Token', tokenSchema);