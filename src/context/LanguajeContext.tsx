import React, { createContext, useContext, useState } from 'react';
import enTranslations from '../locales/en/translation.json';
import esTranslations from '../locales/es/translation.json';
import type { LanguageContextType, LanguageProviderProps } from '../types/translation';

const translations = {
  en: enTranslations,
  es: esTranslations,
};

const LanguageContext = createContext <LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
	const [language, setLanguage] = useState<'en' | 'es'>("es");

	const t = (key: string): string => {
		const keys = key.split(".");
		let value: any = translations[language as keyof typeof translations] as any;

		for (const k of keys) {
			if (value === undefined) return key;
			value = value[k];
		}

		return value || key;
	};

	return (
		<LanguageContext.Provider value={{ language, setLanguage, t }}>
			{children}
		</LanguageContext.Provider>
	);
};

export const useTranslation = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};