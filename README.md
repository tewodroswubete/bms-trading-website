# BMS Trading PLC Website

A modern, responsive corporate website for BMS Trading PLC - Ethiopia's leading manufacturer of plastic products and soap.

## Project Overview

BMS Trading PLC is an Ethiopian manufacturing company specializing in plastic and soap production. This is a fully functional corporate website with multilingual support, backend API integration, and comprehensive SEO optimization.

- **Name**: BMS Trading PLC
- **Founded**: 2000 E.C. (2019 G.C.)
- **Industry**: Manufacturing (Plastic & Soap Production)
- **Factory Location**: Sheger City, Jemo Michael, Addis Ababa
- **Head Office**: Addis Ababa, Bisrate Gabriel (Bayne Building)

## Core Business Areas:
- Plastic product manufacturing (bags, containers, packaging)
- Soap manufacturing (liquid and bar)
- Distribution across Ethiopia (Addis Ababa, Borena, Asosa, Wollega, Adama, Debre Markos)

## Key Brands:
- KOKEB (Shopping bags and plastic products)
- SENQIE (Premium soap products)

## Getting Started

### Frontend Development Server

1. **Using Python HTTP Server** (Recommended for static HTML):
```bash
python3 -m http.server 8000
```
Open [http://localhost:8000](http://localhost:8000) to view the website.

### Backend API Server

1. **Install backend dependencies**:
```bash
cd backend
npm install
```

2. **Configure environment variables**:
Create a `.env` file in the backend folder with your MongoDB and email settings.

3. **Start the backend server**:
```bash
cd backend
npm start
```

The API will be available at [http://localhost:5000](http://localhost:5000)

## Features

- ✅ **Multilingual Support**: English and Amharic language options
- ✅ **Responsive Design**: Mobile-first approach with Tailwind CSS
- ✅ **Interactive Forms**: Contact form, quote request wizard, newsletter subscription
- ✅ **Product Catalog**: Filterable product gallery with search functionality
- ✅ **Blog System**: Content management for articles and news
- ✅ **SEO Optimized**: Complete meta tags, structured data, and sitemap
- ✅ **Backend API**: Express.js server with MongoDB database
- ✅ **Email Notifications**: Automated email system with Nodemailer
- ✅ **WhatsApp Integration**: Direct messaging support
- ✅ **Gallery**: Photo gallery with lightbox viewer
- ✅ **Performance Optimized**: Fast loading with CDN resources

## Project Structure

```
bms/
├── index.html              # Homepage
├── about.html              # About Us page
├── products.html           # Products catalog
├── gallery.html            # Photo gallery
├── quote.html              # Quote request form
├── contact.html            # Contact information
├── blog.html               # Blog/News page
├── sitemap.html            # Site navigation
├── robots.txt              # SEO robots configuration
├── sitemap.xml             # XML sitemap for search engines
├── js/
│   ├── api.js              # Frontend API integration
│   └── seo.js              # SEO configuration and meta tags
├── backend/
│   ├── server.js           # Express.js server
│   ├── package.json        # Backend dependencies
│   ├── .env                # Environment variables
│   └── models/
│       ├── Contact.js      # Contact form model
│       ├── Quote.js        # Quote request model
│       └── Newsletter.js   # Newsletter subscription model
├── public/
│   └── locales/            # Translation files
│       ├── en/
│       │   └── common.json # English translations
│       └── am/
│           └── common.json # Amharic translations
├── src/
│   └── config/
│       └── site.ts         # Site configuration
├── package.json            # Frontend dependencies
├── README.md               # Project documentation
└── .env.local              # Frontend environment variables
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/contact` | Submit contact form |
| POST | `/api/quote` | Submit quote request |
| POST | `/api/newsletter` | Subscribe to newsletter |
| GET | `/api/contacts` | Get all contacts (admin) |
| GET | `/api/quotes` | Get all quotes (admin) |
| PATCH | `/api/contact/:id` | Update contact status |
| PATCH | `/api/quote/:id` | Update quote status |

## Technologies Used

- **Frontend**: HTML5, Tailwind CSS (CDN), Vanilla JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Email Service**: Nodemailer
- **Icons**: Font Awesome
- **Maps**: Google Maps Embed API
- **Development Server**: Python HTTP Server

## Deployment

### Deploy to Production

1. **Frontend Deployment (Vercel/Netlify)**:
   - Push code to GitHub
   - Connect repository to Vercel/Netlify
   - Set environment variables
   - Deploy

2. **Backend Deployment (Heroku/Railway)**:
   - Create MongoDB Atlas database
   - Deploy backend to Heroku/Railway
   - Configure environment variables
   - Update API URLs in frontend

3. **Domain Configuration**:
   - Point domain to hosting provider
   - Configure SSL certificates
   - Set up email forwarding

## License

© 2025 BMS Trading PLC. All rights reserved.

---

**Contact**: For support or inquiries, contact info@bmstrading.com or call +251-913-283804