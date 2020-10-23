import {Layout} from "antd";
import {connect} from "react-redux";
import {onMenuCollapse} from "redux/menu/action";
import {isMenuCollapsed} from "redux/menu/selector";

const Sider = (
	{
		isCollapsed,
		onCollapse,
		children,
	}) =>
	<Layout.Sider
		collapsible
		collapsed={isCollapsed}
		defaultCollapsed={isCollapsed}
		onCollapse={onCollapse}
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
;

export default connect(
	state => ({
		isCollapsed: isMenuCollapsed(state),
	}),
	dispatch => ({
		onCollapse: isCollapsed => dispatch(onMenuCollapse(isCollapsed)),
	}),
)(Sider);
