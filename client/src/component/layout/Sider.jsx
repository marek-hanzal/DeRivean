import {Layout} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {isContentFullsize} from "redux/content/selector";
import {onMenuCollapse} from "redux/menu/action";
import {isMenuCollapsed} from "redux/menu/selector";

const Sider = ({children}) => {
	const dispatch = useDispatch();
	const isCollapsed = useSelector(isMenuCollapsed);
	const isFullsize = useSelector(isContentFullsize);
	return (
		isFullsize ? null :
			<Layout.Sider
				collapsible
				collapsed={isCollapsed}
				defaultCollapsed={isCollapsed}
				onCollapse={isCollapsed => dispatch(onMenuCollapse(isCollapsed))}
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
