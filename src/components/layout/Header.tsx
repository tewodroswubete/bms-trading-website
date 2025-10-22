'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/common/LanguageSwitcher';
import { navigationLinks } from '@/config/site';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, locale } = useLanguage();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-green-700 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <a href="tel:+251911217316" className="flex items-center gap-1 hover:text-green-200">
                <FaPhoneAlt size={12} />
                <span>+251-911-217316</span>
              </a>
              <a href="mailto:bmstrading21@gmail.com" className="hidden sm:flex items-center gap-1 hover:text-green-200">
                <FaEnvelope size={12} />
                <span>bmstrading21@gmail.com</span>
              </a>
            </div>
            <div className="flex items-center gap-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3">
                <div className="relative w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">BMS</span>
                </div>
                <div>
                  <span className="text-xl font-bold text-gray-800">
                    BMS Trading PLC
                  </span>
                  <span className="block text-xs text-gray-600">
                    {locale === 'am' ? 'ቢኤምኤስ ትሬዲንግ ኃ.የተ.የግ.ማ' : 'Manufacturing Excellence'}
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationLinks.map((item) => (
                <div key={item.href} className="relative group">
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-green-600 transition-colors duration-300"
                  >
                    {item.label[locale as 'en' | 'am']}
                  </Link>
                  {item.subMenu && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      {item.subMenu.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                        >
                          {subItem.label[locale as 'en' | 'am']}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button (Desktop) */}
            <div className="hidden lg:block">
              <Link
                href="/quote"
                className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors duration-300"
              >
                {t('nav.quote')}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden text-gray-700 focus:outline-none"
            >
              {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-1">
                {navigationLinks.map((item) => (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label[locale as 'en' | 'am']}
                    </Link>
                    {item.subMenu && (
                      <div className="ml-4 mt-1">
                        {item.subMenu.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-green-600 hover:bg-gray-50"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.label[locale as 'en' | 'am']}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link
                  href="/quote"
                  className="mx-4 mt-4 bg-green-600 text-white px-6 py-3 rounded-lg font-medium text-center hover:bg-green-700 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('nav.quote')}
                </Link>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;