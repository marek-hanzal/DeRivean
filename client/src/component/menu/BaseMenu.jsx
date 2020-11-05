import {Menu} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {MenuRedux} from "redux/menu/redux";

const BaseMenu = ({children}) => {
	const dispatch = useDispatch();
	const selected = useSelector(MenuRedux.selector.getSelected);
	const opened = useSelector(MenuRedux.selector.getOpened);
	return (
		<Menu
			mode="inline"
			selectable={true}
			selectedKeys={selected}
			openKeys={opened}
			style={{height: "100vh"}}
			onOpenChange={([_, open]) => dispatch(MenuRedux.open([open]))}
			children={children}
		/>
	);
};

export default BaseMenu;
