import FullsizeContent from "component/layout/FullsizeContent";
import SelectMenu from "component/menu/SelectMenu";
import ScrollToTop from "component/ScrollToTop";
import {Helmet} from "react-helmet";
import {withTranslation} from "react-i18next";

const RootView = (
	{
		t,
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
	}) =>
	<>
		<ScrollToTop/>
		<Helmet title={t(`${title}.title`)}/>
		<FullsizeContent fullsize={fullsize} reset={reset}/>
		<SelectMenu menu={menu}/>
		{children}
	</>
;

export default withTranslation()(RootView);
