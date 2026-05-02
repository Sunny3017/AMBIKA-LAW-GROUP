const Contact = require('../models/Contact');

// @desc    Submit contact form
// @route   POST /api/contact
// @access  Public
const submitContact = async (req, res, next) => {
    try {
        const { name, email, phone, subject, message } = req.body;

        if (!name || !email || !phone || !subject || !message) {
            res.status(400);
            throw new Error('Please provide all fields');
        }

        const contact = await Contact.create({
            name,
            email,
            phone,
            subject,
            message,
        });

        res.status(201).json({
            success: true,
            data: contact,
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Get all contact queries
// @route   GET /api/contact
// @access  Private/Admin
const getContacts = async (req, res, next) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.json(contacts);
    } catch (error) {
        next(error);
    }
};

module.exports = { submitContact, getContacts };
