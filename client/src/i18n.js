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
					"common.homepage": "Go to Homepage",
					"common.spinner": "Making some hard magick to make things work!",
					"error.language.title": "Failed to load translations!",
					"error.language.body": "This is quite strange error, but it has occurred - try it later!",
					"error.discovery.title": "Discovery Error",
					"error.discovery.body": "Cannot make Discovery request, server is probably unavailable.",
					"error.client.title": "Client Error",
					"error.client.body": "Cannot load Client configuration, server is probably dead.",
					"error.not-found.title": "Not Found!",
					"error.not-found.body": "Yay, this page does not exists, really :(.",
				}
			}
		},
		keySeparator: false,
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
