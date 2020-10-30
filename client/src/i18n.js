import buildUrl from "build-url";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-xhr-backend";
import {initReactI18next} from "react-i18next";

i18n
	.use(initReactI18next)
	.use(Backend)
	.use(LanguageDetector)
	.init({
		fallbackLng: "en",
		backend: {
			loadPath: buildUrl("/locale/{{lng}}.json", {
				queryParams: {
					version: process.env.REACT_APP_VERSION,
				}
			}),
		},
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
