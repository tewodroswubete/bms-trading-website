'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { MdLanguage } from 'react-icons/md';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <MdLanguage className="text-gray-600 dark:text-gray-300" size={20} />
      <select
        value={locale}
        onChange={(e) => setLocale(e.target.value)}
        className="bg-transparent border border-gray-300 dark:border-gray-600 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer"
      >
        <option value="en">English</option>
        <option value="am">አማርኛ</option>
      </select>
    </div>
  );
}