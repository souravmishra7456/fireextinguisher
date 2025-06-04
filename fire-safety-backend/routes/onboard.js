const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../config/models/User');

const router = express.Router();

router.post('/onboard', async (req, res) => {
    const { userId, name, phone, referral, useCase } = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ msg: 'User not found' });

        // Update onboarding fields
        user.name = name;
        user.phone = phone;
        user.referral = referral;
        user.useCase = useCase;

        await user.save();

        res.json({ msg: 'Onboarding completed', user: { id: user.id, email: user.email } });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

module.exports = router;