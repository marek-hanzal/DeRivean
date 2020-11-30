import {ScrollToTop, useAppContext} from "@leight-core/leight";
import ModuleContext from "component/ModuleContext";
import {useContext} from "react";
import {useTranslation} from "react-i18next";

const RootView = (
	{
		children,
	}) => {
	const {t} = useTranslation();
	const moduleContext = useContext(ModuleContext);
	const appContext = useAppContext();
	appContext.useTitle(`${moduleContext.id}.title`);
	return (
		<>
			<ScrollToTop/>
			{children}
		</>
	);
};

export default RootView;
