import {ScrollToTop, useAppContext, useModuleContext} from "@leight-core/leight";

const RootView = (
	{
		children,
	}) => {
	const moduleContext = useModuleContext();
	useAppContext().useTitle(moduleContext.id + ".title");
	return (
		<>
			<ScrollToTop/>
			{children}
		</>
	);
};

export default RootView;
