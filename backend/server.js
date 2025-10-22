const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const path = require('path');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../')));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/bms_trading', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

// Email Configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Models
const Contact = require('./models/Contact');
const Quote = require('./models/Quote');
const Newsletter = require('./models/Newsletter');

// Routes
// Contact Form Submission
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, phone, subject, message } = req.body;

        // Save to database
        const newContact = new Contact({
            name,
            email,
            phone,
            subject,
            message,
            status: 'new'
        });

        await newContact.save();

        // Send email notification
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.ADMIN_EMAIL,
            subject: `New Contact Form Submission: ${subject}`,
            html: `
                <h3>New Contact Form Submission</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({
            success: true,
            message: 'Contact form submitted successfully'
        });

    } catch (error) {
        console.error('Contact form error:', error);
        res.status(500).json({
            success: false,
            message: 'Error submitting contact form'
        });
    }
});

// Quote Request Submission
app.post('/api/quote', async (req, res) => {
    try {
        const quoteData = req.body;

        // Save to database
        const newQuote = new Quote({
            ...quoteData,
            status: 'pending',
            quoteNumber: `QT-${Date.now()}`
        });

        await newQuote.save();

        // Send email notification
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.ADMIN_EMAIL,
            subject: `New Quote Request: ${newQuote.quoteNumber}`,
            html: `
                <h3>New Quote Request</h3>
                <p><strong>Quote Number:</strong> ${newQuote.quoteNumber}</p>
                <p><strong>Company:</strong> ${quoteData.companyName}</p>
                <p><strong>Contact:</strong> ${quoteData.contactName}</p>
                <p><strong>Email:</strong> ${quoteData.email}</p>
                <p><strong>Phone:</strong> ${quoteData.phone}</p>
                <h4>Products:</h4>
                <ul>
                    ${quoteData.products.map(p => `
                        <li>${p.name} - Quantity: ${p.quantity}</li>
                    `).join('')}
                </ul>
                <p><strong>Additional Notes:</strong> ${quoteData.notes || 'None'}</p>
            `
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({
            success: true,
            message: 'Quote request submitted successfully',
            quoteNumber: newQuote.quoteNumber
        });

    } catch (error) {
        console.error('Quote request error:', error);
        res.status(500).json({
            success: false,
            message: 'Error submitting quote request'
        });
    }
});

// Newsletter Subscription
app.post('/api/newsletter', async (req, res) => {
    try {
        const { email } = req.body;

        // Check if already subscribed
        const existing = await Newsletter.findOne({ email });
        if (existing) {
            return res.status(400).json({
                success: false,
                message: 'Email already subscribed'
            });
        }

        // Save to database
        const newSubscriber = new Newsletter({
            email,
            status: 'active'
        });

        await newSubscriber.save();

        // Send welcome email
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Welcome to BMS Trading Newsletter',
            html: `
                <h3>Welcome to BMS Trading Newsletter!</h3>
                <p>Thank you for subscribing to our newsletter.</p>
                <p>You'll receive updates about our latest products, industry news, and special offers.</p>
                <p>Best regards,<br>BMS Trading PLC Team</p>
            `
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({
            success: true,
            message: 'Successfully subscribed to newsletter'
        });

    } catch (error) {
        console.error('Newsletter subscription error:', error);
        res.status(500).json({
            success: false,
            message: 'Error subscribing to newsletter'
        });
    }
});

// Get all contacts (admin)
app.get('/api/contacts', async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.status(200).json({ success: true, contacts });
    } catch (error) {
        console.error('Error fetching contacts:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching contacts'
        });
    }
});

// Get all quotes (admin)
app.get('/api/quotes', async (req, res) => {
    try {
        const quotes = await Quote.find().sort({ createdAt: -1 });
        res.status(200).json({ success: true, quotes });
    } catch (error) {
        console.error('Error fetching quotes:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching quotes'
        });
    }
});

// Update contact status
app.patch('/api/contact/:id', async (req, res) => {
    try {
        const { status } = req.body;
        const contact = await Contact.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        );
        res.status(200).json({ success: true, contact });
    } catch (error) {
        console.error('Error updating contact:', error);
        res.status(500).json({
            success: false,
            message: 'Error updating contact'
        });
    }
});

// Update quote status
app.patch('/api/quote/:id', async (req, res) => {
    try {
        const { status } = req.body;
        const quote = await Quote.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        );
        res.status(200).json({ success: true, quote });
    } catch (error) {
        console.error('Error updating quote:', error);
        res.status(500).json({
            success: false,
            message: 'Error updating quote'
        });
    }
});

// Serve static files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});