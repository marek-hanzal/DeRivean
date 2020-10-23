import SelectMenu from "component/menu/SelectMenu";
import {Helmet} from "react-helmet";
import {withTranslation} from "react-i18next";

const PublicView = (
	{
		t,
		id,
		menu = id,
		title = id,
		children,
	}) =>
	<>
		<Helmet title={t(`${title}.title`)}/>
		<SelectMenu menu={menu}/>
		{children}
	</>
;

export default withTranslation()(PublicView);
