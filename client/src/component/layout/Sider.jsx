import {Layout} from "antd";
import Menu from "component/Menu";
import {connect} from "react-redux";
import {onMenuCollapse} from "redux/menu/action";
import {isMenuCollapsed} from "redux/menu/selector";

const Sider = (
	{
		isCollapsed,
		onCollapse,
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
	>
		<Menu/>
	</Layout.Sider>
;

export default connect(
	state => ({
		isCollapsed: isMenuCollapsed(state),
	}),
	dispatch => ({
		onCollapse: isCollapsed => dispatch(onMenuCollapse(isCollapsed)),
	}),
)(Sider);
