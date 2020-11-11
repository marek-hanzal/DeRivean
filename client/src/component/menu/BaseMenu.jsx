import {Menu} from "antd";
import {LayoutContext} from "component/layout/BaseLayout";
import {useContext} from "react";

const BaseMenu = ({children}) => {
	const layoutContext = useContext(LayoutContext);
	return (
		<Menu
			mode="inline"
			selectable={true}
			selectedKeys={layoutContext.selectMenu}
			style={{height: "100vh"}}
			children={children}
		/>
	);
};

export default BaseMenu;
