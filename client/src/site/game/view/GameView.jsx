import ModuleContext from "component/ModuleContext";
import ScrollToTop from "component/ScrollToTop";
import {useContext} from "react";
import {Helmet} from "react-helmet";
import {useTranslation} from "react-i18next";

const GameView = (
	{
		children,
	}) => {
	const {t} = useTranslation();
	const moduleContext = useContext(ModuleContext);
	return (
		<>
			<ScrollToTop/>
			<Helmet title={t(`${moduleContext.id}.title`)}/>
			{children}
		</>
	);
};

export default GameView;
