import { Layout } from "antd";
import React from "react";
import { connect } from "react-redux";
import { isMenuCollapsed } from "redux/menu/selector";

const CollapsibleContent = (
	{
		isCollapsed,
		children,
	}) =>
	<Layout.Content
		style={{
			minHeight:  "100vh",
			marginLeft: isCollapsed ? 80 : 220,
		}}
		children={children}
	/>
;

export default connect(
	state => ({
		isCollapsed: isMenuCollapsed(state),
	}),
)(CollapsibleContent);
