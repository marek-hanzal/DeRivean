import {LayoutContext, useEnableFullscreen} from "component/layout/BaseLayout";
import ScrollToTop from "component/ScrollToTop";
import useMenuSelect from "hook/useMenuSelect";
import {useContext} from "react";
import {Helmet} from "react-helmet";
import {useTranslation} from "react-i18next";

const PublicView = (
	{
		id,
		menu = id,
		title = id,
		fullsize,
		reset = true,
		children,
	}) => {
	const {t} = useTranslation();
	const layoutContext = useContext(LayoutContext);
	useMenuSelect(menu);
	useEnableFullscreen(layoutContext, fullsize, reset);
	return (
		<>
			<ScrollToTop/>
			<Helmet title={t(`${title}.title`)}/>
			{children}
		</>
	);
};

export default PublicView;
