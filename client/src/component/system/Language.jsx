import i18next from "i18next";
import i18n from "i18next";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {TranslationRedux} from "redux/translation/redux";
import LanguageErrorView from "view/LanguageErrorView";
import LoaderView from "view/LoaderView";

const Language = ({children}) => {
	const [status, setStatus] = useState();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(TranslationRedux.redux.translation.dispatch.translation({languages: i18n.languages})).then(({translations}) => {
			for (const translation of translations) {
				i18next.addResource(translation.language, translation.namespace, translation.label, translation.translation);
			}
			setStatus(true);
		}, () => {
			setStatus(false);
		});
		// eslint-disable-next-line
	}, [dispatch]);

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
