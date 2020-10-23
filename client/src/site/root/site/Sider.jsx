import { Layout } from "antd";
import React from "react";
import { connect } from "react-redux";
import { onMenuCollapse } from "redux/menu/action";
import { isMenuCollapsed } from "redux/menu/selector";

const Sider = (
	{
		isCollapsed,
		onCollapse,
		isEnabled,
	}) => isEnabled ?
	<Layout.Sider
		collapsible
		collapsed={isCollapsed}
		defaultCollapsed={isCollapsed}
		onCollapse={onCollapse}
		width={220}
		style={{
			overflow:        "auto",
			height:          "100vh",
			position:        "fixed",
			backgroundColor: "rgb(240, 242, 245)",
			left:            0,
		}}
	>
		// menu here
	</Layout.Sider> : null
;

export default connect(
	state => ({
		isEnabled:   true,
		isCollapsed: isMenuCollapsed(state),
	}),
	dispatch => ({
		onCollapse: isCollapsed => dispatch(onMenuCollapse(isCollapsed)),
	}),
)(Sider);
