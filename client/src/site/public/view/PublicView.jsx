import FullsizeContent from "component/layout/FullsizeContent";
import SelectMenu from "component/menu/SelectMenu";
import ScrollToTop from "component/ScrollToTop";
import {Helmet} from "react-helmet";
import {withTranslation} from "react-i18next";

const PublicView = (
	{
		t,
		id,
		menu = id,
		title = id,
		fullsize,
		reset = true,
		children,
	}) =>
	<>
		<ScrollToTop/>
		<FullsizeContent fullsize={fullsize} reset={reset}/>
		<Helmet title={t(`${title}.title`)}/>
		<SelectMenu menu={menu}/>
		{children}
	</>
;

export default withTranslation()(PublicView);
