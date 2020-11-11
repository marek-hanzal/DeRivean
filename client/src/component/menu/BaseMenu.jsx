import {Menu} from "antd";
import {LayoutContext} from "component/layout/BaseLayout";
import {useContext} from "react";
import {useDispatch, useSelector} from "react-redux";
import {MenuRedux} from "redux/menu/redux";

const BaseMenu = ({children}) => {
	const dispatch = useDispatch();
	const layoutContext = useContext(LayoutContext);
	const selected = layoutContext.selectMenu;
	const opened = useSelector(MenuRedux.selector.getOpened);
	return (
		<Menu
			mode="inline"
			selectable={true}
			selectedKeys={selected}
			openKeys={opened}
			style={{height: "100vh"}}
			onOpenChange={open => dispatch(MenuRedux.open(open))}
			children={children}
		/>
	);
};

export default BaseMenu;
