import {ScrollToTop, useAppContext, useModuleContext} from "@leight-core/leight";

const GameView = (
	{
		children,
	}) => {
	const moduleContext = useModuleContext();
	const appContext = useAppContext();
	appContext.useTitle(moduleContext.id + ".title");
	return (
		<>
			<ScrollToTop/>
			{children}
		</>
	);
};

export default GameView;
