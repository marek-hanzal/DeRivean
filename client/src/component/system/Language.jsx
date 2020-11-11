import i18next from "i18next";
import {useState} from "react";
import {useTranslation} from "site/root/module/translation/hook/hook";
import Events from "utils/Events";
import LanguageErrorView from "view/LanguageErrorView";
import LoaderView from "view/LoaderView";

const Language = ({children}) => {
	const [status, setStatus] = useState();
	useTranslation(
		Events()
			.on("success", ({translations}) => {
				for (const translation of translations) {
					i18next.addResource(translation.language, translation.namespace, translation.label, translation.text);
				}
				setStatus(true);
			})
			.on("error", () => {
				setStatus(false);
			})
	);
	switch (status) {
		case true:
			return children;
		case false:
			return <LanguageErrorView/>;
		default:
			return <LoaderView/>;
	}
};

export default Language;
