import {Layout} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {ContentRedux} from "redux/content/redux";
import MenuRedux from "redux/menu/redux";

const Sider = ({children}) => {
	const dispatch = useDispatch();
	const isCollapsed = useSelector(MenuRedux.selector.isCollapsed);
	const isFullsize = useSelector(ContentRedux.selector.isFullsize);
	return (
		isFullsize ? null :
			<Layout.Sider
				collapsible
				collapsed={isCollapsed}
				defaultCollapsed={isCollapsed}
				onCollapse={isCollapsed => dispatch(MenuRedux.collapse(isCollapsed))}
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
