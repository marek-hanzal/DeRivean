import {ScrollToTop, useAppContext, useLayoutContext} from "@leight-core/leight";

const PublicView = (
	{
		id,
		menu = id,
		title = id,
		fullscreen = false,
		reset = true,
		children,
	}) => {
	const layoutContext = useLayoutContext();
	const appContext = useAppContext();
	layoutContext.useMenuSelect(menu);
	layoutContext.useEnableFullscreen(fullscreen, reset);
	appContext.useTitle(`${title}.title`);
	return (
		<>
			<ScrollToTop/>
			{children}
		</>
	);
};

export default PublicView;
