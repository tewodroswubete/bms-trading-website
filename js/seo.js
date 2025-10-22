// SEO Configuration and Meta Tags Manager

const seoConfig = {
    siteName: 'BMS Trading PLC',
    siteUrl: 'https://bmstrading.com',
    defaultTitle: 'BMS Trading PLC - Leading Plastic & Soap Manufacturing in Ethiopia',
    defaultDescription: 'BMS Trading PLC is Ethiopia\'s premier manufacturer of high-quality plastic products and soap. Located in Sheger City, we provide innovative solutions for households and businesses.',
    defaultImage: '/images/bms-og-image.jpg',
    twitterHandle: '@BMSTrading',
    locale: 'en_US',
    alternateLocale: 'am_ET'
};

// Page-specific SEO configurations
const pageSEO = {
    home: {
        title: 'BMS Trading PLC - Leading Plastic & Soap Manufacturing in Ethiopia',
        description: 'Ethiopia\'s trusted manufacturer of premium plastic products, shopping bags, and soap. Quality products since 2019. Located in Sheger City industrial zone.',
        keywords: 'plastic manufacturing Ethiopia, soap production, KOKEB shopping bags, SENQIE soap, Sheger City, BMS Trading PLC',
        schema: {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'BMS Trading PLC',
            url: 'https://bmstrading.com',
            logo: 'https://bmstrading.com/images/logo.png',
            description: 'Leading manufacturer of plastic products and soap in Ethiopia',
            address: {
                '@type': 'PostalAddress',
                streetAddress: 'Sheger City, Jemo Michael',
                addressLocality: 'Addis Ababa',
                addressRegion: 'Addis Ababa',
                postalCode: '1000',
                addressCountry: 'ET'
            },
            contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+251-913-283804',
                contactType: 'sales',
                email: 'info@bmstrading.com'
            },
            sameAs: [
                'https://facebook.com/bmstrading',
                'https://linkedin.com/company/bmstrading'
            ]
        }
    },
    about: {
        title: 'About Us - BMS Trading PLC | Our Story & Mission',
        description: 'Learn about BMS Trading PLC\'s journey, mission, and commitment to quality manufacturing in Ethiopia. Established in 2019 with state-of-the-art facilities.',
        keywords: 'BMS Trading history, Ethiopian manufacturing, plastic industry Ethiopia, company values, Sheger City industrial',
        schema: {
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'About BMS Trading PLC',
            description: 'Information about BMS Trading PLC manufacturing company'
        }
    },
    products: {
        title: 'Products - Quality Plastic & Soap Products | BMS Trading PLC',
        description: 'Browse our complete catalog of plastic products, shopping bags, food containers, and premium soap products. Wholesale and retail available.',
        keywords: 'plastic products Ethiopia, KOKEB bags, SENQIE soap, food containers, wholesale plastic, shopping bags manufacturer',
        schema: {
            '@context': 'https://schema.org',
            '@type': 'Product',
            brand: {
                '@type': 'Brand',
                name: 'BMS Trading'
            },
            offers: {
                '@type': 'AggregateOffer',
                priceCurrency: 'ETB',
                availability: 'https://schema.org/InStock'
            }
        }
    },
    gallery: {
        title: 'Gallery - Factory & Products Photos | BMS Trading PLC',
        description: 'View our modern manufacturing facility, production lines, and product showcase gallery. Take a virtual tour of BMS Trading PLC.',
        keywords: 'factory photos, manufacturing facility Ethiopia, production gallery, BMS Trading images'
    },
    quote: {
        title: 'Request a Quote - Get Pricing | BMS Trading PLC',
        description: 'Request a custom quote for bulk orders of plastic products and soap. Fast response, competitive pricing for businesses in Ethiopia.',
        keywords: 'request quote, bulk order Ethiopia, wholesale pricing, plastic products quote'
    },
    contact: {
        title: 'Contact Us - Get in Touch | BMS Trading PLC',
        description: 'Contact BMS Trading PLC for inquiries, orders, or support. Located in Sheger City, Addis Ababa. Phone, email, and visit us.',
        keywords: 'contact BMS Trading, Sheger City address, Ethiopia manufacturer contact',
        schema: {
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact BMS Trading PLC'
        }
    },
    blog: {
        title: 'Blog - Industry News & Updates | BMS Trading PLC',
        description: 'Latest news, industry insights, and updates from BMS Trading PLC. Learn about plastic manufacturing, sustainability, and business in Ethiopia.',
        keywords: 'manufacturing blog Ethiopia, plastic industry news, BMS Trading updates, sustainability'
    }
};

// Function to set meta tags
function setMetaTags(page = 'home') {
    const config = pageSEO[page] || pageSEO.home;
    const head = document.head;

    // Remove existing meta tags
    const existingMeta = head.querySelectorAll('meta[name^="description"], meta[name^="keywords"], meta[property^="og:"], meta[name^="twitter:"]');
    existingMeta.forEach(tag => tag.remove());

    // Basic meta tags
    const metaTags = [
        { name: 'description', content: config.description },
        { name: 'keywords', content: config.keywords },
        { name: 'author', content: 'BMS Trading PLC' },
        { name: 'robots', content: 'index, follow' },
        { name: 'googlebot', content: 'index, follow' },
        { name: 'generator', content: 'BMS Trading Website' },
        { name: 'rating', content: 'general' },
        { name: 'distribution', content: 'global' },

        // Open Graph tags
        { property: 'og:title', content: config.title },
        { property: 'og:description', content: config.description },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: `${seoConfig.siteUrl}/${page === 'home' ? '' : page + '.html'}` },
        { property: 'og:site_name', content: seoConfig.siteName },
        { property: 'og:locale', content: seoConfig.locale },
        { property: 'og:locale:alternate', content: seoConfig.alternateLocale },
        { property: 'og:image', content: `${seoConfig.siteUrl}${seoConfig.defaultImage}` },

        // Twitter Card tags
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: config.title },
        { name: 'twitter:description', content: config.description },
        { name: 'twitter:site', content: seoConfig.twitterHandle },
        { name: 'twitter:image', content: `${seoConfig.siteUrl}${seoConfig.defaultImage}` }
    ];

    // Add meta tags to head
    metaTags.forEach(tag => {
        const meta = document.createElement('meta');
        if (tag.name) {
            meta.name = tag.name;
        } else if (tag.property) {
            meta.setAttribute('property', tag.property);
        }
        meta.content = tag.content;
        head.appendChild(meta);
    });

    // Update title
    document.title = config.title;

    // Add structured data if available
    if (config.schema) {
        let script = document.getElementById('structured-data');
        if (!script) {
            script = document.createElement('script');
            script.id = 'structured-data';
            script.type = 'application/ld+json';
            head.appendChild(script);
        }
        script.textContent = JSON.stringify(config.schema);
    }

    // Add canonical URL
    let canonical = head.querySelector('link[rel="canonical"]');
    if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        head.appendChild(canonical);
    }
    canonical.href = `${seoConfig.siteUrl}/${page === 'home' ? '' : page + '.html'}`;

    // Add hreflang tags
    const hreflangTags = [
        { rel: 'alternate', hreflang: 'en', href: `${seoConfig.siteUrl}/${page === 'home' ? '' : page + '.html'}` },
        { rel: 'alternate', hreflang: 'am', href: `${seoConfig.siteUrl}/am/${page === 'home' ? '' : page + '.html'}` },
        { rel: 'alternate', hreflang: 'x-default', href: `${seoConfig.siteUrl}/${page === 'home' ? '' : page + '.html'}` }
    ];

    hreflangTags.forEach(tag => {
        const link = document.createElement('link');
        link.rel = tag.rel;
        link.hreflang = tag.hreflang;
        link.href = tag.href;
        head.appendChild(link);
    });
}

// Initialize SEO based on current page
document.addEventListener('DOMContentLoaded', function() {
    const path = window.location.pathname;
    const page = path.includes('about') ? 'about' :
                 path.includes('products') ? 'products' :
                 path.includes('gallery') ? 'gallery' :
                 path.includes('quote') ? 'quote' :
                 path.includes('contact') ? 'contact' :
                 path.includes('blog') ? 'blog' : 'home';

    setMetaTags(page);
});

// Export for use in other scripts
window.bmsSEO = {
    setMetaTags,
    seoConfig,
    pageSEO
};