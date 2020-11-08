import i18next from "i18next";
import {useState} from "react";
import {useTranslation} from "redux/translation/redux";
import LanguageErrorView from "view/LanguageErrorView";
import LoaderView from "view/LoaderView";

const Language = ({children}) => {
	const [status, setStatus] = useState();
	useTranslation(({translations}) => {
		for (const translation of translations) {
			i18next.addResource(translation.language, translation.namespace, translation.label, translation.text);
		}
		setStatus(true);
	}, () => {
		setStatus(false);
	});
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
