import ScrollToTop from "component/ScrollToTop";
import useFullsizeContent from "hook/useFullsizeContent";
import useSelectMenu from "hook/useSelectMenu";
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

export default PublicView;
