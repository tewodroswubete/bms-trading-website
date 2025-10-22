'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface LanguageContextType {
  locale: string;
  setLocale: (locale: string) => void;
  t: (key: string) => string;
  translations: Record<string, any>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children, initialLocale = 'en' }: { children: ReactNode; initialLocale?: string }) {
  const [locale, setLocaleState] = useState(initialLocale);
  const [translations, setTranslations] = useState<Record<string, any>>({});
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Load translations when locale changes
    loadTranslations(locale);

    // Save locale preference
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred-locale', locale);
      document.documentElement.lang = locale;
      document.documentElement.dir = locale === 'am' ? 'ltr' : 'ltr'; // Amharic is LTR

      // Add Amharic font if needed
      if (locale === 'am') {
        document.documentElement.style.fontFamily = "'Noto Sans Ethiopic', 'Poppins', sans-serif";
      } else {
        document.documentElement.style.fontFamily = "'Poppins', sans-serif";
      }
    }
  }, [locale]);

  useEffect(() => {
    // Check for saved locale preference
    const savedLocale = localStorage.getItem('preferred-locale');
    if (savedLocale && (savedLocale === 'en' || savedLocale === 'am')) {
      setLocaleState(savedLocale);
    }
  }, []);

  const loadTranslations = async (lang: string) => {
    try {
      const response = await fetch(`/locales/${lang}/common.json`);
      const data = await response.json();
      setTranslations(data);
    } catch (error) {
      console.error('Failed to load translations:', error);
    }
  };

  const setLocale = (newLocale: string) => {
    if (newLocale === locale) return;

    setLocaleState(newLocale);

    // Update URL with new locale if needed
    const currentPath = pathname;
    const segments = currentPath.split('/').filter(Boolean);

    // Check if the first segment is a locale
    if (segments[0] === 'en' || segments[0] === 'am') {
      segments[0] = newLocale;
    } else {
      // If no locale in URL, prepend it
      segments.unshift(newLocale);
    }

    // Navigate to the new URL with locale
    // Commented out to avoid routing issues in initial setup
    // router.push(`/${segments.join('/')}`);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }

    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}