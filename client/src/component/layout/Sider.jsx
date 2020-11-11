import {Layout} from "antd";
import {LayoutContext} from "component/layout/BaseLayout";
import {useContext} from "react";

const Sider = ({children}) => {
	const layoutContext = useContext(LayoutContext);
	return (
		layoutContext.fullscreen ? null :
			<Layout.Sider
				collapsible
				collapsed={layoutContext.collapsed}
				defaultCollapsed={layoutContext.collapsed}
				onCollapse={layoutContext.setCollapsed}
				width={220}
				style={{
					overflow: "auto",
					height: "100vh",
					position: "fixed",
					backgroundColor: "rgb(240, 242, 245)",
					left: 0,
				}}
				children={children}
			/>
	);
};

export default Sider;
