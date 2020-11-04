import i18next from "i18next";
import i18n from "i18next";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {LanguageRedux} from "redux/language/redux";
import LanguageErrorView from "view/LanguageErrorView";
import LoaderView from "view/LoaderView";

const Language = ({children}) => {
	const [status, setStatus] = useState();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(LanguageRedux.redux.language.dispatch.language({languages: i18n.languages})).then(({resources}) => {
			for (const resource of resources) {
				i18next.addResourceBundle(resource.language, resource.namespace, resource.translations);
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
