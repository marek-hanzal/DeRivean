import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-xhr-backend';
import {initReactI18next} from 'react-i18next';

i18n
	.use(initReactI18next)
	.use(Backend)
	.use(LanguageDetector)
	.init({
		fallbackLng: 'en',
		backend: {
			loadPath: '/locale/{{lng}}.json',
		},
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
