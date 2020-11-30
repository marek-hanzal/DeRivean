import {ScrollToTop, useAppContext} from "@leight-core/leight";
import ModuleContext from "component/ModuleContext";
import {useContext} from "react";

const RootView = (
	{
		children,
	}) => {
	const moduleContext = useContext(ModuleContext);
	const appContext = useAppContext();
	appContext.useTitle(moduleContext.id + ".title");
	return (
		<>
			<ScrollToTop/>
			{children}
		</>
	);
};

export default RootView;
