import {LayoutContext} from "component/layout/BaseLayout";
import ScrollToTop from "component/ScrollToTop";
import {useContext} from "react";
import {Helmet} from "react-helmet";
import {useTranslation} from "react-i18next";

const PublicView = (
	{
		id,
		menu = id,
		title = id,
		fullscreen = false,
		reset = true,
		children,
	}) => {
	const {t} = useTranslation();
	const layoutContext = useContext(LayoutContext);
	layoutContext.useMenuSelect(menu);
	layoutContext.useEnableFullscreen(fullscreen, reset);
	return (
		<>
			<ScrollToTop/>
			<Helmet title={t(`${title}.title`)}/>
			{children}
		</>
	);
};

export default PublicView;
