const mongoose = require('mongoose');

const NewsletterSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address']
    },
    status: {
        type: String,
        enum: ['active', 'unsubscribed', 'bounced'],
        default: 'active'
    },
    interests: [{
        type: String,
        enum: ['plastic_products', 'soap_products', 'household_items', 'industry_news', 'promotions']
    }],
    subscribedFrom: {
        type: String,
        enum: ['website', 'blog', 'contact_form', 'admin'],
        default: 'website'
    },
    unsubscribeToken: {
        type: String,
        default: () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    },
    lastEmailSent: {
        type: Date
    },
    emailsSent: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Newsletter', NewsletterSchema);