import {Layout} from "antd";
import {LayoutContext} from "component/layout/BaseLayout";
import {useContext} from "react";
import {useSelector} from "react-redux";
import {MenuRedux} from "redux/menu/redux";

const CollapsibleContent = ({children}) => {
	const isCollapsed = useSelector(MenuRedux.selector.isCollapsed);
	const layoutContext = useContext(LayoutContext);
	return (
		<Layout.Content
			style={{
				minHeight: "100vh",
				marginLeft: layoutContext.fullscreen ? 0 : (isCollapsed ? 80 : 220),
			}}
			children={children}
		/>
	);
};

export default CollapsibleContent;
