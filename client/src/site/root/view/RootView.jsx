import ScrollToTop from "component/ScrollToTop";
import useFullsizeContent from "hook/useFullsizeContent";
import useSelectMenu from "hook/useSelectMenu";
import {Helmet} from "react-helmet";
import {useTranslation} from "react-i18next";

const RootView = (
	{
		/**
		 * Identifier used for selecting menu item, using translation and others.
		 */
		id,
		/**
		 * Fullsize view is a fullwidth flag of the view; some views are using whole space of the screen.
		 */
		fullsize = false,
		/**
		 * Reset to non-fullsize width when this view unmounts.
		 */
		reset = true,
		/**
		 * Menu ID, defaults to common ID
		 */
		menu = id,
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
	useSelectMenu(menu);
	useFullsizeContent(fullsize, reset);
	return (
		<>
			<ScrollToTop/>
			<Helmet title={t(`${title}.title`)}/>
			{children}
		</>
	);
};

export default RootView;
