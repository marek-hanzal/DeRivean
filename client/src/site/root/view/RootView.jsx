import ScrollToTop from "component/ScrollToTop";
import {Helmet} from "react-helmet";
import {useTranslation} from "react-i18next";

const RootView = (
	{
		/**
		 * Identifier used for selecting menu item, using translation and others.
		 */
		id,
		/**
		 * Title translation ID, defaults to common ID
		 */
		title = id,
		/**
		 * Hey, React dude! - you already know this :)
		 */
		children,
	}) => {
	const {t} = useTranslation();
	return (
		<>
			<ScrollToTop/>
			<Helmet title={t(`${title}.title`)}/>
			{children}
		</>
	);
};

export default RootView;
