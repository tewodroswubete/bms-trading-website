const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 1
    },
    unitPrice: {
        type: Number,
        default: 0
    },
    totalPrice: {
        type: Number,
        default: 0
    }
});

const QuoteSchema = new mongoose.Schema({
    quoteNumber: {
        type: String,
        unique: true,
        required: true
    },
    // Company Information
    companyName: {
        type: String,
        required: true,
        trim: true
    },
    companyType: {
        type: String,
        enum: ['retailer', 'wholesaler', 'distributor', 'manufacturer', 'other'],
        required: true
    },
    businessRegNumber: {
        type: String,
        trim: true
    },
    website: {
        type: String,
        trim: true
    },
    // Contact Information
    contactName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    alternatePhone: {
        type: String,
        trim: true
    },
    // Address Information
    address: {
        street: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        region: {
            type: String,
            required: true
        },
        postalCode: {
            type: String
        },
        country: {
            type: String,
            default: 'Ethiopia'
        }
    },
    // Shipping Information
    shippingAddress: {
        sameAsBilling: {
            type: Boolean,
            default: true
        },
        street: String,
        city: String,
        region: String,
        postalCode: String,
        country: String
    },
    // Products
    products: [ProductSchema],
    // Order Details
    estimatedOrderValue: {
        type: Number,
        default: 0
    },
    urgency: {
        type: String,
        enum: ['immediate', 'within_week', 'within_month', 'flexible'],
        required: true
    },
    deliveryPreference: {
        type: String,
        enum: ['pickup', 'delivery', 'shipping'],
        required: true
    },
    paymentMethod: {
        type: String,
        enum: ['cash', 'bank_transfer', 'letter_of_credit', 'net_30', 'other'],
        required: true
    },
    // Additional Information
    notes: {
        type: String,
        default: ''
    },
    status: {
        type: String,
        enum: ['pending', 'in_review', 'quoted', 'accepted', 'rejected', 'expired'],
        default: 'pending'
    },
    quotedAmount: {
        type: Number,
        default: 0
    },
    validUntil: {
        type: Date
    },
    assignedTo: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Quote', QuoteSchema);