'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { siteConfig } from '@/config/site';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaTelegram, FaWhatsapp, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t, locale } = useLanguage();

  const quickLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.products'), path: '/products' },
    { name: t('nav.gallery'), path: '/gallery' },
    { name: t('nav.quote'), path: '/quote' },
    { name: t('nav.contact'), path: '/contact' }
  ];

  const products = [
    t('products.items.plasticBags'),
    t('products.items.containers'),
    t('products.items.liquidSoap'),
    t('products.items.barSoap'),
    t('products.items.packaging'),
    t('products.items.detergent')
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">BMS</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">BMS Trading PLC</h3>
                <p className="text-xs text-gray-400">
                  {locale === 'am' ? 'ቢኤምኤስ ትሬዲንግ ኃ.የተ.የግ.ማ' : 'Manufacturing Excellence'}
                </p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {locale === 'am'
                ? siteConfig.descriptionAmharic
                : siteConfig.description
              }
            </p>
            <div className="mt-4">
              <p className="text-sm text-gray-400">
                {t('about.founded')}: {siteConfig.company.founded}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('products.title')}</h4>
            <ul className="space-y-2">
              {products.map((product, index) => (
                <li key={index}>
                  <span className="text-gray-300 text-sm">{product}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('contact.info.address')}</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="mt-1 text-green-400 flex-shrink-0" size={14} />
                <span>
                  {locale === 'am'
                    ? siteConfig.company.factoryLocation.am
                    : siteConfig.company.factoryLocation.en
                  }
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="mt-1 text-green-400 flex-shrink-0" size={14} />
                <span>
                  {locale === 'am'
                    ? siteConfig.company.headOffice.am
                    : siteConfig.company.headOffice.en
                  }
                </span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-green-400" size={14} />
                <a href={`tel:${siteConfig.contact.phones[0]}`} className="hover:text-green-400">
                  {siteConfig.contact.phones[0]}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-green-400" size={14} />
                <a href={`mailto:${siteConfig.contact.emails[0]}`} className="hover:text-green-400 break-all">
                  {siteConfig.contact.emails[0]}
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-4">
              <div className="flex space-x-3">
                <a
                  href={siteConfig.socialLinks.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
                >
                  <FaTelegram size={16} />
                </a>
                <a
                  href={siteConfig.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
                >
                  <FaWhatsapp size={16} />
                </a>
                <a
                  href={siteConfig.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
                >
                  <FaFacebook size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-2">{t('footer.newsletter.title')}</h3>
            <p className="text-gray-400 text-sm mb-4">{t('footer.newsletter.subtitle')}</p>
            <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t('footer.newsletter.placeholder')}
                className="flex-1 px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg font-medium transition-colors duration-300"
              >
                {t('footer.newsletter.button')}
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>{t('footer.copyright').replace('2025', currentYear.toString())}</p>
          <p className="mt-2">
            {t('footer.developedBy')}{' '}
            <a
              href="#"
              className="text-green-400 hover:text-green-300 transition-colors"
            >
              Tech Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;