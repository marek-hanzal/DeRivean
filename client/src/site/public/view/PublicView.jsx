import FullsizeContent from "component/layout/FullsizeContent";
import SelectMenu from "component/menu/SelectMenu";
import ScrollToTop from "component/ScrollToTop";
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
	return (
		<>
			<ScrollToTop/>
			<FullsizeContent fullsize={fullsize} reset={reset}/>
			<Helmet title={t(`${title}.title`)}/>
			<SelectMenu menu={menu}/>
			{children}
		</>
	);
};

export default PublicView;
