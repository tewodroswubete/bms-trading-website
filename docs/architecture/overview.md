# BMS Trading PLC Website - Architecture

## Project Overview
BMS Trading PLC is an Ethiopian manufacturing company specializing in plastic and soap production. This document outlines the architecture of their modern, bilingual corporate website.

## Core Business Areas
- Plastic product manufacturing (bags, containers, packaging)
- Soap manufacturing (liquid and bar)
- Distribution across Ethiopia

## Technical Architecture

### Frontend Stack
- **Framework**: Next.js with React
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Package Manager**: npm or yarn

### Backend Stack
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **Email Service**: Nodemailer

### Deployment
- **Frontend Hosting**: Vercel
- **Database Hosting**: MongoDB Atlas
- **Domain**: To be configured

## Color Scheme
- **Primary Green**: #2E7D32
- **Primary Gray**: #4B4B4B
- **Primary Blue**: #1976D2

## Typography
- **Fonts**: Montserrat / Poppins

## Pages Structure
1. **Home** - Landing page with company overview and featured products
2. **About Us** - Company history, mission, values, and team information
3. **Products/Services** - Detailed product catalog with descriptions and images
4. **Gallery** - Product and factory images
5. **Request a Quote** - Form for customers to request quotes
6. **Contact Us** - Contact information, form, and location map
7. **Blog** - Company news, industry insights, and updates

## Features
- Bilingual support (Amharic & English)
- Responsive design for all devices
- SEO optimization
- Contact forms with validation
- Product search functionality
- Social media integration (Telegram/WhatsApp)
- Performance optimization with lazy loading

## Security Considerations
- SSL encryption
- reCAPTCHA on forms
- Sanitized form inputs
- Secure database connections

## Performance Optimization
- Image optimization
- Lazy loading
- Efficient caching strategies
- Bundle optimization