// Site Configuration
export const siteConfig = {
  name: "BMS Trading PLC",
  nameAmharic: "ቢ.ኤም.ኤስ ትሬዲንግ ኃላፊነቱ የተወሰነ የግል ማህበር",
  description: "Leading manufacturer of plastic and soap products in Ethiopia",
  descriptionAmharic: "በኢትዮጵያ ውስጥ ቀዳሚ የፕላስቲክ እና የሳሙና ምርቶች አምራች",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://bmstrading.com",

  // Company Information
  company: {
    founded: "2000 E.C.",
    industry: "Manufacturing",
    industryAmharic: "ማምረቻ",
    factoryLocation: {
      en: "Alemgena, Sheger City, Oromia Region",
      am: "አለምገና፣ ሸገር ከተማ፣ ኦሮሚያ ክልል"
    },
    headOffice: {
      en: "Addis Ababa, Bisrate Gabriel (Bayne Building)",
      am: "አዲስ አበባ፣ ብስራተ ገብርኤል (ባይኔ ህንፃ)"
    }
  },

  // Contact Information
  contact: {
    emails: ["bmstrading21@gmail.com", "sisayagiza620@gmail.com"],
    phones: ["+251911217316", "+251961241707", "+251118344253"],
    whatsapp: "+251911217316",
    telegram: "@bmstrading"
  },

  // Core Business Areas
  businessAreas: {
    en: [
      "Plastic product manufacturing (bags, containers, packaging)",
      "Soap manufacturing (liquid and bar)",
      "Distribution across Ethiopia"
    ],
    am: [
      "የፕላስቲክ ምርቶች ማምረት (ቦርሳዎች፣ ኮንቴይነሮች፣ ማሸጊያዎች)",
      "የሳሙና ማምረት (ፈሳሽ እና ባር)",
      "በመላ ኢትዮጵያ ማሰራጨት"
    ]
  },

  // Distribution Areas
  distributionAreas: [
    { en: "Addis Ababa", am: "አዲስ አበባ" },
    { en: "Borena", am: "ቦረና" },
    { en: "Asosa", am: "አሶሳ" },
    { en: "Wollega", am: "ወለጋ" },
    { en: "Adama", am: "አዳማ" },
    { en: "Debre Markos", am: "ደብረ ማርቆስ" }
  ],

  // Key Brands
  brands: ["KOKEB", "SENQIE"],

  // Social Media Links
  socialLinks: {
    facebook: "https://facebook.com/bmstrading",
    linkedin: "https://linkedin.com/company/bms-trading-plc",
    telegram: "https://t.me/bmstrading",
    whatsapp: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`
  },

  // SEO Configuration
  seo: {
    keywords: {
      en: [
        "BMS Trading PLC",
        "plastic manufacturing Ethiopia",
        "soap manufacturing Ethiopia",
        "KOKEB brand",
        "SENQIE brand",
        "Ethiopian manufacturer",
        "plastic bags Ethiopia",
        "liquid soap Ethiopia"
      ],
      am: [
        "ቢኤምኤስ ትሬዲንግ",
        "የፕላስቲክ ማምረቻ ኢትዮጵያ",
        "የሳሙና ማምረቻ ኢትዮጵያ",
        "ኮኬብ ብራንድ",
        "ሰንቂ ብራንድ"
      ]
    }
  },

  // Design Configuration
  theme: {
    colors: {
      primary: "#2E7D32", // Green
      secondary: "#4B4B4B", // Gray
      accent: "#1976D2", // Blue
      warning: "#FFC107", // Yellow
      success: "#4CAF50",
      error: "#F44336",
      info: "#2196F3"
    },
    fonts: {
      heading: "'Montserrat', sans-serif",
      body: "'Poppins', sans-serif",
      amharic: "'Noto Sans Ethiopic', serif"
    }
  },

  // Feature Flags
  features: {
    blog: true,
    gallery: true,
    quoteForms: true,
    multiLanguage: true,
    whatsappIntegration: true,
    telegramIntegration: true,
    searchFunction: true,
    newsletter: true
  }
};

// Navigation Links Configuration
export const navigationLinks = [
  {
    href: "/",
    label: { en: "Home", am: "መነሻ" },
    icon: "home"
  },
  {
    href: "/about",
    label: { en: "About Us", am: "ስለኛ" },
    icon: "info"
  },
  {
    href: "/products",
    label: { en: "Products", am: "ምርቶች" },
    icon: "package",
    subMenu: [
      {
        href: "/products/plastic",
        label: { en: "Plastic Products", am: "የፕላስቲክ ምርቶች" }
      },
      {
        href: "/products/soap",
        label: { en: "Soap Products", am: "የሳሙና ምርቶች" }
      }
    ]
  },
  {
    href: "/gallery",
    label: { en: "Gallery", am: "ምስሎች" },
    icon: "image"
  },
  {
    href: "/quote",
    label: { en: "Request Quote", am: "የዋጋ ጥያቄ" },
    icon: "request"
  },
  {
    href: "/blog",
    label: { en: "Blog", am: "ብሎግ" },
    icon: "article"
  },
  {
    href: "/contact",
    label: { en: "Contact", am: "አድራሻ" },
    icon: "contact"
  }
];

// Product Categories
export const productCategories = {
  plastic: {
    en: "Plastic Products",
    am: "የፕላስቲክ ምርቶች",
    items: [
      { id: "plastic-bags", en: "Plastic Bags", am: "የፕላስቲክ ቦርሳዎች" },
      { id: "containers", en: "Containers", am: "ኮንቴይነሮች" },
      { id: "packaging", en: "Packaging Materials", am: "የማሸጊያ እቃዎች" },
      { id: "bottles", en: "Bottles", am: "ጠርሙሶች" }
    ]
  },
  soap: {
    en: "Soap Products",
    am: "የሳሙና ምርቶች",
    items: [
      { id: "liquid-soap", en: "Liquid Soap", am: "ፈሳሽ ሳሙና" },
      { id: "bar-soap", en: "Bar Soap", am: "ባር ሳሙና" },
      { id: "detergent", en: "Detergent", am: "ዲተርጀንት" },
      { id: "hand-wash", en: "Hand Wash", am: "የእጅ መታጠቢያ" }
    ]
  }
};