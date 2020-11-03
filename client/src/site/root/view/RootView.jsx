import ScrollToTop from "component/ScrollToTop";
import {useContext} from "react";
import {Helmet} from "react-helmet";
import {useTranslation} from "react-i18next";

const RootView = (
	{
		context,
		children,
	}) => {
	const {t} = useTranslation();
	context = useContext(context);
	return (
		<>
			<ScrollToTop/>
			<Helmet title={t(`${context.id}.title`)}/>
			{children}
		</>
	);
};

export default RootView;
