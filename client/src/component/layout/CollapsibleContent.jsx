import {Layout} from "antd";
import {LayoutContext} from "component/layout/BaseLayout";
import {useContext} from "react";

const CollapsibleContent = ({children}) => {
	const layoutContext = useContext(LayoutContext);
	return (
		<Layout.Content
			style={{
				minHeight: "100vh",
				marginLeft: layoutContext.fullscreen ? 0 : (layoutContext.collapsed ? 80 : 220),
			}}
			children={children}
		/>
	);
};

export default CollapsibleContent;
