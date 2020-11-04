import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {initReactI18next} from "react-i18next";

i18n
	.use(initReactI18next)
	.use(LanguageDetector)
	.init({
		fallbackLng: "en",
		initImmediate: true,
		resources: {
			en: {
				translation: {
					"common.error.cannot-fetch-translations": "Cannot fetch translations!",
					"common.refresh": "Refresh!",
					"error.language.title": "Failed to load translations!",
					"error.language.body": "This is quite strange error, but it has occurred - try it later!",
				}
			}
		},
		keySeparator: false,
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
