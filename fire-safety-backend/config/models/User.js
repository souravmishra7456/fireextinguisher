const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: String,
    phone: String,
    referral: String,
    useCase: String
});

module.exports = mongoose.model('User', UserSchema);
